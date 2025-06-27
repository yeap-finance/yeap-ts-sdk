// Copyright © Aptos Foundation
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
  YeapVaultBadDebtActivity,
  YeapVaultEmergencyActivity,
  YeapVaultFlashloanActivity,
  YeapVaultProtocolCaps,
  YeapVaultStateActivity,
  YeapPosition,
  YeapOracleRouterConfig,
  CollateralRiskParameters,
  BorrowRiskParameters,
} from "./interfaces";
import {
  FungibleAssetBalanceFieldsFragment,
  GetVaultInfoQuery,
  GetVaultLatestStateQuery,
  VaultInfoFieldsFragment,
  OracleRouterConfigFieldsFragment,
} from "../types/generated/operations";
import { CollateralRiskParametersFieldsFragment, BorrowRiskParametersFieldsFragment } from "../types";
import { AccountAddress } from "@aptos-labs/ts-sdk";

type RawVaultInfo = GetVaultInfoQuery["vault_info"][0];
type RawVaultState = GetVaultLatestStateQuery["vault_states_activities"][0];
type RawFungibleAssetMetadata = RawVaultInfo["underlying_asset_metadata"];
type RawCurrentObject = RawVaultInfo["governance_object"];
type RawVaultSettings = RawVaultInfo["settings"];
type RawAdaptiveIrmConfig = VaultInfoFieldsFragment["adaptive_irm_config"];
type RawFixedRateIrmConfig = VaultInfoFieldsFragment["fixed_rate_irm_config"];
type RawKinkedIrmConfig = VaultInfoFieldsFragment["kinked_irm_config"];
type RawVaultProtocolCaps = VaultInfoFieldsFragment["protocol_configs"][0];
type RawOracleRouterConfig = OracleRouterConfigFieldsFragment;

/**
 * Transform raw GraphQL fungible asset metadata to clean interface
 * @internal
 */
export function transformFungibleAssetMetadata(raw: RawFungibleAssetMetadata): YeapFungibleAssetMetadata | null {
  if (!raw) return null;
  return {
    tokenStandard: raw.token_standard,
    name: raw.name,
    symbol: raw.symbol,
    decimals: raw.decimals,
    iconUri: raw.icon_uri || null,
    projectUri: raw.project_uri || null,
  };
}

/**
 * Transform raw GraphQL current object to clean interface
 * @internal
 */
export function transformCurrentObject(raw: RawCurrentObject): YeapCurrentObject | null {
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
export function transformVaultSettings(raw: RawVaultSettings): YeapVaultSettings | null {
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
    isPaused: raw.is_paused ?? false,
  };
}

/**
 * Transform raw GraphQL vault info to clean interface
 * @internal
 */
export function transformVaultInfo(raw: RawVaultInfo): YeapVaultInfo | null {
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
export function transformVaultState(raw: RawVaultState): YeapVaultState | null {
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
export function transformAdaptiveIrmConfig(raw: RawAdaptiveIrmConfig): YeapAdaptiveIrmConfig | null {
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
export function transformAdaptiveIrmState(raw: any): YeapAdaptiveIrmState | null {
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
export function transformFixedRateIrmConfig(raw: RawFixedRateIrmConfig): YeapFixedRateIrmConfig | null {
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
export function transformKinkedIrmConfig(raw: RawKinkedIrmConfig): YeapKinkedIrmConfig | null {
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
 * Transform raw GraphQL vault protocol caps to clean interface
 * @internal
 */
export function transformVaultProtocolCaps(raw: RawVaultProtocolCaps): YeapVaultProtocolCaps | null {
  if (!raw) return null;
  return {
    vaultAddress: raw.vault_address || "",
    protocolModuleAddress: raw.protocol_module_address || null,
    protocolModuleName: raw.protocol_module_name || null,
    protocolStructName: raw.protocol_struct_name || null,
    borrowCap: raw.borrow_cap || null,
    borrowEnabled: raw.borrow_enabled ?? null,
    supplyEnabled: raw.supply_enabled ?? null,
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
export function transformOracleRouterConfig(raw: RawOracleRouterConfig): YeapOracleRouterConfig | null {
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

/**
 * Transform raw GraphQL collateral risk parameters to clean interface
 * @internal
 */
export function transformCollateralRiskParameters(raw: CollateralRiskParametersFieldsFragment): CollateralRiskParameters | null {
  if (!raw) return null;
  return {
    borrowVaultMaxNum: Number(raw.borrow_vault_max_num || 0),
    collateral: AccountAddress.fromString(raw.collateral),
    configAddress: AccountAddress.fromString(raw.config_address),
    liquidationBonusBps: Number(raw.liquidation_bonus_bps || 0),
    lltv: Number(raw.lltv || 0),
    ltv: Number(raw.ltv || 0),
    oracle: AccountAddress.fromString(raw.oracle || "0x0"),
    riskFactor: Number(raw.risk_factor || 0),
  };
}

/**
 * Transform raw GraphQL borrow risk parameters to clean interface
 * @internal
 */
export function transformBorrowRiskParameters(raw: BorrowRiskParametersFieldsFragment): BorrowRiskParameters | null {
  if (!raw) return null;
  return {
    brw: Number(raw.brw || 0),
    collateral: AccountAddress.fromString(raw.collateral),
    configAddress: AccountAddress.fromString(raw.config_address),
    vault: AccountAddress.fromString(raw.vault),
  };
}
