// Copyright © Yeap Finance
// SPDX-License-Identifier: Apache-2.0

import {
  YeapFungibleAssetMetadata,
  YeapFungibleAssetBalance,
  YeapCurrentObject,
  YeapVaultSettings,
  YeapVaultInfo,
  YeapVaultState,
  YeapAdaptiveIrmConfig,
  YeapAdaptiveIrmState,
  YeapFixedRateIrmConfig,
  YeapKinkedIrmConfig,

  YeapOracleRouterConfig,
} from "./interfaces";
import {
  FungibleAssetBalanceFieldsFragment,
  VaultInfoFieldsFragment,
  OracleRouterConfigFieldsFragment,
  FungibleAssetMetadataFieldsFragment,
  CurrentObjectFieldsFragment,
  VaultSettingsFieldsFragment,
  VaultStateActivitiesFieldsFragment,
  AdaptiveIrmConfigFieldsFragment,
  AdaptiveIrmStateFieldsFragment, FixedRateIrmConfigFieldsFragment, KinkedIrmConfigFieldsFragment,
} from "../types/generated/operations";
import {Maybe} from "../types";



/**
 * Transform raw GraphQL fungible asset metadata to clean interface
 * @internal
 */
export function transformFungibleAssetMetadata(raw: Maybe<FungibleAssetMetadataFieldsFragment>| undefined): Maybe<YeapFungibleAssetMetadata> {
  if (!raw) return null;
  return {
    assetType: raw.asset_type,
    tokenStandard: raw.token_standard,
    name: raw.name,
    symbol: raw.symbol,
    decimals: raw.decimals,
    iconUri: raw.icon_uri,
    projectUri: raw.project_uri,
    maximum: raw.maximum_v2,
    totalSupply: raw.supply_v2,
  };
}

/**
 * Transform raw GraphQL current object to clean interface
 * @internal
 */
export function transformCurrentObject(raw: Maybe<CurrentObjectFieldsFragment>|undefined): YeapCurrentObject | null {
  if (!raw) return null;
  return {
    objectAddress: raw.object_address,
    ownerAddress: raw.owner_address,
    stateKeyHash: raw.state_key_hash,
    allowUngatedTransfer: raw.allow_ungated_transfer,
    isDeleted: raw.is_deleted,
  };
}

/**
 * Transform raw GraphQL vault settings to clean interface
 * @internal
 */
export function transformVaultSettings(raw: Maybe<VaultSettingsFieldsFragment>|undefined): YeapVaultSettings | null {
  if (!raw) return null;
  return {
    vaultAddress: raw.vault_address,
    autoSocializeDebtEnabled: raw.auto_socialize_debt_enabled ?? false,
    emergencyWithdrawEnabled: raw.emergency_withdraw_enabled ?? false,
    feeStoreAddress: raw.fee_store_address || null,
    flashloanEnabled: raw.flashloan_enabled ?? false,
    flashloanFeeRate: raw.flashloan_fee_rate || null,
    flashloanFeeStoreAddress: raw.flashloan_fee_store_address || null,
    interestFeeRate: raw.interest_fee_rate || null,
    irmKind: raw.irm_kind ? Number(raw.irm_kind) : null,
  isPaused: raw.paused ?? false,
  };
}

/**
 * Transform raw GraphQL vault info to clean interface
 * @internal
 */
export function transformVaultInfo(raw: Maybe<VaultInfoFieldsFragment>|undefined): YeapVaultInfo | null {
  if (!raw || !raw.underlying_asset) return null;
  return {
    vaultAddress: raw.vault_address,
    creator: raw.creator || null,
    underlyingAsset: raw.underlying_asset,
    debtAsset: raw.debt_asset || null,
    underlyingAssetStore: raw.underlying_asset_store || null,
    governanceObjectAddress: raw.governance_object_address || null,
    underlyingAssetMetadata: transformFungibleAssetMetadata(raw.underlying_asset_metadata),
    debtAssetMetadata: transformFungibleAssetMetadata(raw.debt_asset_metadata),
    vaultAssetMetadata: transformFungibleAssetMetadata(raw.vault_asset_metadata),
    underlyingAssetBalance: raw.underlying_asset_balance
      ? {
          amount: raw.underlying_asset_balance.amount,
          isFrozen: raw.underlying_asset_balance.is_frozen,
          storageId: raw.underlying_asset_balance.storage_id,
          metadata: transformFungibleAssetMetadata(raw.underlying_asset_balance.metadata),
        }
      : null,
    governanceObject: transformCurrentObject(raw.governance_object),
    settings: transformVaultSettings(raw.settings),
  };
}

/**
 * Transform raw GraphQL vault state to clean interface
 * @internal
 */
export function transformVaultState(raw: Maybe<VaultStateActivitiesFieldsFragment>): YeapVaultState | null {
  if (!raw) return null;
  return {
    badDebt: raw.bad_debt,
    cash: raw.cash,
    currentInterestRate: raw.current_interest_rate,
    eventIndex: raw.event_index,
    lastInterestUpdateTime: raw.last_interest_update_time,
    timestamp: raw.timestamp ? new Date(raw.timestamp) : null,
    totalBorrows: raw.total_borrows,
    totalDebtShares: raw.total_debt_shares,
    totalShares: raw.total_shares,
    transactionVersion: raw.transaction_version,
    vaultAddress: raw.vault_address,
  };
}

/**
 * Transform raw GraphQL adaptive IRM config to clean interface
 * @internal
 */
export function transformAdaptiveIrmConfig(raw: Maybe<AdaptiveIrmConfigFieldsFragment>|undefined): YeapAdaptiveIrmConfig | null {
  if (!raw) return null;
  return {
    configAddress: raw.config_address,
    adjustmentSpeed: raw.adjustment_speed || null,
    curveSteepness: raw.curve_steepness || null,
    initialRateAtTarget: raw.initial_rate_at_target || null,
    maxRateAtTarget: raw.max_rate_at_target || null,
    minRateAtTarget: raw.min_rate_at_target || null,
    targetUtilization: raw.target_utilization || null,
  };
}

/**
 * Transform raw GraphQL adaptive IRM state to clean interface
 * @internal
 */
export function transformAdaptiveIrmState(raw: Maybe<AdaptiveIrmStateFieldsFragment>|undefined): YeapAdaptiveIrmState | null {
  if (!raw) return null;
  return {
    stateAddress: raw.state_address,
    currentRateAtTarget: raw.current_rate_at_target || null,
    lastUpdateTimestampSecs: raw.last_update_timestamp_secs || null,
  };
}

/**
 * Transform raw GraphQL fixed rate IRM config to clean interface
 * @internal
 */
export function transformFixedRateIrmConfig(raw: Maybe<FixedRateIrmConfigFieldsFragment>|undefined): YeapFixedRateIrmConfig | null {
  if (!raw) return null;
  return {
    configAddress: raw.config_address,
    ratePerSecond: raw.rate_per_second || null,
  };
}

/**
 * Transform raw GraphQL kinked IRM config to clean interface
 * @internal
 */
export function transformKinkedIrmConfig(raw: Maybe<KinkedIrmConfigFieldsFragment>|undefined): YeapKinkedIrmConfig | null {
  if (!raw) return null;
  return {
    configAddress: raw.config_address,
    maxBorrowRate: raw.max_borrow_rate || null,
    minBorrowRate: raw.min_borrow_rate || null,
    optimalBorrowRate: raw.optimal_borrow_rate || null,
    optimalUtilization: raw.optimal_utilization || null,
  };
}


/**
 * Transform raw GraphQL fungible asset balance to clean interface
 * @internal
 */
export function transformFungibleAssetBalance(
  raw: FungibleAssetBalanceFieldsFragment,
): YeapFungibleAssetBalance | null {
  if (!raw) return null;
  return {
    amount: raw.amount || "0",
    isFrozen: raw.is_frozen || false,
    storageId: raw.storage_id || "",
    metadata: raw.metadata ? transformFungibleAssetMetadata(raw.metadata) : null,
  };
}

/**
 * Transform raw GraphQL oracle router config to clean interface
 * @internal
 */
export function transformOracleRouterConfig(raw: Maybe<OracleRouterConfigFieldsFragment>|undefined): YeapOracleRouterConfig | null {
  if (!raw) return null;
  return {
    baseAsset: raw.base_asset,
    quoteAsset: raw.quote_asset,
    oracleRouter: raw.oracle_router,
    oracle: raw.oracle ?? null,
    oracleKind: raw.oracle_kind ? Number(raw.oracle_kind) : null,
    isDeleted: raw.deleted ?? false,
  };
}



