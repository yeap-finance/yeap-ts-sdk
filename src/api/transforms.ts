// Copyright © Yeap Finance
// SPDX-License-Identifier: Apache-2.0

import {
  YeapFungibleAssetMetadata,
  YeapFungibleAssetBalance,
  AptosObject,
  YeapVaultSettings,
  YeapAdaptiveIrmConfig,
  YeapAdaptiveIrmState,
  YeapFixedRateIrmConfig,
  YeapKinkedIrmConfig,
  YeapOracleRouterConfig,
  FixedPriceOracleConfig,
  PythOracleConfig,
  SwitchboardOracleConfig,
  ChainlinkOracleConfig,
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
  AdaptiveIrmStateFieldsFragment,
  FixedRateIrmConfigFieldsFragment,
  KinkedIrmConfigFieldsFragment,
} from "../types/generated/operations";
import { Maybe } from "../types";

/**
 * Transform raw GraphQL fungible asset metadata to clean interface
 * @internal
 */
export function transformFungibleAssetMetadata(
  raw: Maybe<FungibleAssetMetadataFieldsFragment> | undefined,
): Maybe<YeapFungibleAssetMetadata> {
  if (!raw) return null;
  return {
    creatorAddress: raw.creator_address,
    assetType: raw.asset_type,
    tokenStandard: raw.token_standard,
    name: raw.name,
    symbol: raw.symbol,
    decimals: raw.decimals,
    iconUri: raw.icon_uri,
    projectUri: raw.project_uri,
    maximumV2: Number(raw.maximum_v2),
    supplyV2: Number(raw.supply_v2),
  };
}

/**
 * Transform raw GraphQL current object to clean interface
 * @internal
 */
export function transformCurrentObject(raw: Maybe<CurrentObjectFieldsFragment> | undefined): AptosObject | null {
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
export function transformVaultSettings(raw: Maybe<VaultSettingsFieldsFragment> | undefined): YeapVaultSettings | null {
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
 * Transform raw GraphQL adaptive IRM config to clean interface
 * @internal
 */
export function transformAdaptiveIrmConfig(
  raw: Maybe<AdaptiveIrmConfigFieldsFragment> | undefined,
): YeapAdaptiveIrmConfig | null {
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
export function transformAdaptiveIrmState(
  raw: Maybe<AdaptiveIrmStateFieldsFragment> | undefined,
): YeapAdaptiveIrmState | null {
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
export function transformFixedRateIrmConfig(
  raw: Maybe<FixedRateIrmConfigFieldsFragment> | undefined,
): YeapFixedRateIrmConfig | null {
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
export function transformKinkedIrmConfig(
  raw: Maybe<KinkedIrmConfigFieldsFragment> | undefined,
): YeapKinkedIrmConfig | null {
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
    assetType: raw.asset_type,
    assetTypeV1: raw.asset_type_v1,
    assetTypeV2: raw.asset_type_v2,
    isPrimary: raw.is_primary,
    ownerAddress: raw.owner_address,
    tokenStandard: raw.token_standard,
    amount: Number(raw.amount || "0"),
    isFrozen: raw.is_frozen || false,
    metadata: transformFungibleAssetMetadata(raw.metadata)!,
  };
}

/**
 * Transform raw GraphQL oracle router config to clean interface
 * @internal
 */
export function transformOracleRouterConfig(
  raw: Maybe<OracleRouterConfigFieldsFragment> | undefined,
): YeapOracleRouterConfig | null {
  if (!raw) return null;
  return {
    baseAsset: raw.base_asset,
    quoteAsset: raw.quote_asset,
    oracleRouter: raw.oracle_router,
    oracle: raw.oracle!,
    oracleKind: Number(raw.oracle_kind!),
    isDeleted: raw.deleted ?? false,
  };
}

/** Transform nested fixed_price_oracle_config object */
export function transformFixedPriceOracleSubConfig(raw: any | undefined | null): FixedPriceOracleConfig | null {
  if (!raw) return null;
  return {
    oracle_address: raw.oracle_address ? raw.oracle_address : raw.oracle_address,
    base: raw.base_asset ? raw.base_asset : raw.base,
    quote: raw.quote_asset ? raw.quote_asset : raw.quote,
    price: raw.price!,
    deleted: raw.deleted ?? null,
  } as FixedPriceOracleConfig;
}

/** Transform nested pyth_oracle_config object */
export function transformPythOracleSubConfig(raw: any | undefined | null): PythOracleConfig | null {
  if (!raw) return null;
  return {
    oracle_address: raw.oracle_address,
    base: raw.base,
    quote: raw.quote,
    pyth_id: raw.pyth_id,
    max_age_in_seconds: Number(raw.max_age_in_seconds),
    max_confidence: raw.max_confidence,
    deleted: raw.deleted ?? null,
  } as PythOracleConfig;
}

/** Transform nested switchboard_oracle_config object */
export function transformSwitchboardOracleSubConfig(raw: any | undefined | null): SwitchboardOracleConfig | null {
  if (!raw) return null;
  return {
    oracle_address: raw.oracle_address,
    base: raw.base,
    quote: raw.quote,
    aggregator_address: raw.aggregator_address!,
    max_age_in_seconds: Number(raw.max_age_in_seconds),
    max_stdev: raw.max_stdev,
    deleted: raw.deleted ?? null,
  } as SwitchboardOracleConfig;
}

/** Transform nested chainlink_oracle_config object */
export function transformChainlinkOracleSubConfig(raw: any | undefined | null): ChainlinkOracleConfig | null {
  if (!raw) return null;
  return {
    oracle_address: raw.oracle_address,
    base: raw.base,
    quote: raw.quote,
    feed_id: raw.feed_id,
    max_age_in_seconds: parseInt(raw.max_age_in_seconds, 10),
    feed_decimals: Number(raw.feed_decimals),
    deleted: raw.deleted ?? null,
  } as ChainlinkOracleConfig;
}
