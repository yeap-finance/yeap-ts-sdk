// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { TappLLPosition, PositionDebtStore } from "../interfaces";
import { transformFungibleAssetBalance } from "../transforms";
import { TappLlPositionFieldsFragment } from "../../types/generated/operations";
import { createBorrowMarket } from "./borrowMarket";

/** Factory to create an TappLLPosition */
export function createTappLLPosition(config: YeapConfig, rawData: TappLlPositionFieldsFragment): TappLLPosition {
  const debtStores: Record<string, PositionDebtStore> = {};
  for (const store of rawData.debt_stores || []) {
    const entry: PositionDebtStore = {
      debtStoreAddress: store.debt_store!,
      vaultAddress: store.vault!,
      debtAssetBalance: store.debt_asset_balance ? transformFungibleAssetBalance(store.debt_asset_balance)! : undefined,
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
