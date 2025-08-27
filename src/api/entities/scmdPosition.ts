// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { YeapFungibleAssetBalance, YeapFungibleAssetMetadata, YeapVaultInfo } from "../interfaces";
import { transformFungibleAssetBalance, transformFungibleAssetMetadata } from "../transforms";
import { PositionFieldsFragment } from "../../types/generated/operations";
import { BorrowMarket, createBorrowMarket } from "./borrowMarket";

// Raw data type from GraphQL
type RawPositionData = PositionFieldsFragment;

/**
 * Represents a debt store within a position
 */
export interface PositionDebtStore {
  /** Debt store address */
  debtStoreAddress: string;
  /** Vault address */
  vaultAddress: string;
  /** Debt asset balance */
  debtAssetBalance?: YeapFungibleAssetBalance;
  /** Vault information */
  vaultInfo?: YeapVaultInfo;
}

/** Interface-form SCMDPosition replacing previous class. */
export interface SCMDPosition {
  positionAddress: string;
  ownerAddress: string;
  collateral: string;
  market: string;
  marketInfo?: BorrowMarket; // optional if not present in raw
  status?: number;
  isActive?: boolean;
  collateralAssetBalance?: YeapFungibleAssetBalance;
  collateralAssetMetadata?: YeapFungibleAssetMetadata;
  /** Map of vault address -> PositionDebtStore */
  debtStores: Record<string, PositionDebtStore>;
  hasAnyDebt?: boolean;
  activeDebtVaultCount?: number;
  readonly __raw?: RawPositionData;
}

/** Factory to create an SCMDPosition */
export function createScmdPosition(config: YeapConfig, rawData: RawPositionData): SCMDPosition {
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
