// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { BorrowPosition, PositionDebtInfo } from "../interfaces";
import { BorrowPositionFieldsFragment } from "../../types/generated/operations";
import { createBorrowMarket } from "./borrowMarket";
import { createVault } from "./vault";

/** Factory to create a BorrowPosition */
export function createBorrowPosition(config: YeapConfig, rawData: BorrowPositionFieldsFragment): BorrowPosition {
  const debtStores: Record<string, PositionDebtInfo> = {};
  for (const store of rawData.debts || []) {
    const vaultInfo = createVault(config, store.vault_info!)
    const entry: PositionDebtInfo = {
      vaultAddress: store.vault!,
      debtAssetBalance: {
        amount: Number(store.debt_share ?? "0"),
        metadata: vaultInfo.debtAssetMetadata!,
        assetType: vaultInfo.debtAssetMetadata!.assetType,
        isFrozen: false,
        isPrimary: false,
        ownerAddress: "",
        tokenStandard: ""
      },
      vaultInfo
    };
    debtStores[entry.vaultAddress] = entry;
  }

  const status = rawData.status !== null && rawData.status !== undefined ? parseInt(rawData.status, 10) : null;
  const marketInfo = rawData.market_info ? createBorrowMarket(config, rawData.market_info) : undefined;

  return {
    positionAddress: rawData.position,
    ownerAddress: rawData.owner!,
    collateral: rawData.collateral!,
    market: rawData.market!,
    marketInfo,
    status: status ?? 0,
    isActive: status === 0,
    debtStores,
    get hasAnyDebt(): boolean {
      return Object.values(debtStores).some((s) => s.debtAssetBalance && BigInt(s.debtAssetBalance.amount) > 0n);
    },
    get activeDebtVaultCount(): number {
      return Object.values(debtStores).filter((s) => s.debtAssetBalance && BigInt(s.debtAssetBalance.amount) > 0n)
        .length;
    },
    __raw: rawData,
  };
}
