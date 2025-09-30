// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { transformFungibleAssetBalance, transformFungibleAssetMetadata } from "../transforms";
import { ScmdPositionFieldsFragment } from "../../types/generated/operations";
import { createBorrowMarket } from "./borrowMarket";
import { SCMDPosition, PositionDebtStore } from "../interfaces";

/** Factory to create an SCMDPosition */
export function createScmdPosition(config: YeapConfig, rawData: ScmdPositionFieldsFragment): SCMDPosition {
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
    collateralAssetBalance: rawData.collateral_asset_balance ? (transformFungibleAssetBalance(rawData.collateral_asset_balance) ?? undefined) : undefined,
    collateralAssetMetadata: rawData.collateral_asset_balance?.metadata ? (transformFungibleAssetMetadata(rawData.collateral_asset_balance.metadata) ?? undefined) : undefined,
    debtStores,
    get hasAnyDebt(): boolean { return Object.values(debtStores).some((s) => s.debtAssetBalance && BigInt(s.debtAssetBalance.amount) > 0n); },
    get activeDebtVaultCount(): number { return Object.values(debtStores).filter((s) => s.debtAssetBalance && BigInt(s.debtAssetBalance.amount) > 0n).length; },
    __raw: rawData,
  };
}
