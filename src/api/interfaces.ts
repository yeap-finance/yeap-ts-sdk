// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { AccountAddress } from "@aptos-labs/ts-sdk";
import { FungibleAssetBalance, FungibleAssetMetadata } from "@aptos-labs/js-pro";
import { BigNumber } from "mathjs";
import { VaultInfoFieldsFragment, GetVaultLatestStateQuery, OracleRouterConfigFieldsFragment } from "../types";
import { PositionFieldsFragment, BorrowMarketFieldsFragment } from "../types/generated/operations";
/**
 * Clean, user-friendly interfaces for Yeap SDK query types.
 * These interfaces provide a stable API that abstracts away GraphQL implementation details.
 * @group Types
 */

/**
 * Fungible asset metadata information (clean interface)
 */
export type YeapFungibleAssetMetadata = FungibleAssetMetadata;

/**
 * Current object information (clean interface)
 */
export interface AptosObject {
  /** Object address */
  objectAddress: string;
  /** Owner address */
  ownerAddress: string;
  /** State key hash */
  stateKeyHash: string;
  /** Whether ungated transfer is allowed */
  allowUngatedTransfer: boolean;
  /** Whether the object is deleted */
  isDeleted: boolean;
}

/**
 * Fungible asset balance information (clean interface)
 */
export type YeapFungibleAssetBalance  = FungibleAssetBalance;

/**
 * Vault settings interface (clean interface)
 */
export interface YeapVaultSettings {
  /** Vault address */
  vaultAddress: string;
  /** Whether auto socialize debt is enabled */
  autoSocializeDebtEnabled: boolean;
  /** Whether emergency withdraw is enabled */
  emergencyWithdrawEnabled: boolean;
  /** Fee store address */
  feeStoreAddress?: string | null;
  /** Whether flashloan is enabled */
  flashloanEnabled: boolean;
  /** Flashloan fee rate */
  flashloanFeeRate?: string | null;
  /** Flashloan fee store address */
  flashloanFeeStoreAddress?: string | null;
  /** Interest fee rate */
  interestFeeRate?: string | null;
  /** Interest rate model kind */
  irmKind?: number | null;
  /** Whether the vault is paused */
  isPaused: boolean;
}

/**
 * Adaptive Interest Rate Model configuration (clean interface)
 */
export interface YeapAdaptiveIrmConfig {
  /** Config address */
  configAddress: string;
  /** Adjustment speed */
  adjustmentSpeed?: string | null;
  /** Curve steepness */
  curveSteepness?: string | null;
  /** Initial rate at target */
  initialRateAtTarget?: string | null;
  /** Maximum rate at target */
  maxRateAtTarget?: string | null;
  /** Minimum rate at target */
  minRateAtTarget?: string | null;
  /** Target utilization */
  targetUtilization?: string | null;
}

/**
 * Adaptive Interest Rate Model state (clean interface)
 */
export interface YeapAdaptiveIrmState {
  /** State address */
  stateAddress: string;
  /** Current rate at target */
  currentRateAtTarget?: string | null;
  /** Last update timestamp in seconds */
  lastUpdateTimestampSecs?: string | null;
}

/**
 * Fixed Rate Interest Rate Model configuration (clean interface)
 */
export interface YeapFixedRateIrmConfig {
  /** Config address */
  configAddress: string;
  /** Rate per second */
  ratePerSecond?: string | null;
}

/**
 * Kinked Interest Rate Model configuration (clean interface)
 */
export interface YeapKinkedIrmConfig {
  /** Config address */
  configAddress: string;
  /** Maximum borrow rate */
  maxBorrowRate?: string | null;
  /** Minimum borrow rate */
  minBorrowRate?: string | null;
  /** Optimal borrow rate */
  optimalBorrowRate?: string | null;
  /** Optimal utilization */
  optimalUtilization?: string | null;
}


/**
 * Pagination information for queries
 */
export interface PaginationInfo {
  limit?: number;
  offset?: number;
  total?: number;
}

/**
 * Common query options
 */
export interface QueryOptions {
  pagination?: PaginationInfo;
  orderBy?: any[];
  where?: any;
}

/**
 * Oracle router configuration information (clean interface)
 */
export interface YeapOracleRouterConfig {
  /** Base asset address */
  baseAsset: string;
  /** Quote asset address */
  quoteAsset: string;
  /** Oracle router address */
  oracleRouter: string;
  /** Oracle address (if set) */
  oracle: string;
  /** Oracle kind/type identifier */
  oracleKind: number;
  /** Whether the configuration is deleted */
  isDeleted?: boolean;
}


/**
 * Borrow risk parameters (aligned to current fragment fields)
 */
export interface BorrowRiskParameters {
  /** Borrowing weight (brw) */
  brw: number;
  /** Collateral asset address */
  collateral?: AccountAddress;
  /** Borrow market address */
  market?: AccountAddress;
  /** Vault address */
  vault: AccountAddress;
  vaultInfo?: Vault | null;
}

/**
 * Chainlink Oracle configuration (clean interface)
 */
export interface ChainlinkOracleConfig {
  /** Oracle address (admin/owner of the config resource) */
  oracle_address: AccountAddress;
  /** Base asset address */
  base: AccountAddress;
  /** Quote asset address */
  quote: AccountAddress;
  /** Chainlink feed id (32 bytes, hex or base64) */
  feed_id: string;
  /** Max age in seconds for price freshness */
  max_age_in_seconds: number;
  /** Feed decimals (native decimals of the feed) */
  feed_decimals: number;
  /** Whether the config is deleted (soft delete) */
  deleted?: boolean | null;
}
/**
 * Fixed Price Oracle configuration (clean interface, matches fixed_price_oracle_current_config)
 */
export interface FixedPriceOracleConfig {
  /** Oracle address (admin/owner of the config resource) */
  oracle_address: AccountAddress;
  /** Base asset address */
  base: AccountAddress;
  /** Quote asset address */
  quote: AccountAddress;
  /** Fixed price value (as string) */
  price: string;
  /** Whether the config is deleted (soft delete) */
  deleted?: boolean | null;
}

/**
 * Pyth Oracle configuration (clean interface, matches pyth_oracle_current_config)
 */
export interface PythOracleConfig {
  /** Oracle address (admin/owner of the config resource) */
  oracle_address: AccountAddress;
  /** Base asset address */
  base: AccountAddress;
  /** Quote asset address */
  quote: AccountAddress;
  /** Pyth price feed id (hex or base64) */
  pyth_id: string;
  /** Max age in seconds for price freshness */
  max_age_in_seconds: number;
  /** Max confidence (optional, as string to handle u64) */
  max_confidence: string;
  /** Whether the config is deleted (soft delete) */
  deleted?: boolean | null;
}

/**
 * Switchboard Oracle configuration (clean interface, matches switchboard_oracle_current_config)
 */
export interface SwitchboardOracleConfig {
  /** Oracle address (admin/owner of the config resource) */
  oracle_address: AccountAddress;
  /** Base asset address */
  base: AccountAddress;
  /** Quote asset address */
  quote: AccountAddress;
  /** Switchboard aggregator address */
  aggregator_address: string;
  /** Max age in seconds for price freshness */
  max_age_in_seconds: number;
  /** Max stdev (optional, as string to handle u128) */
  max_stdev: string;
  /** Whether the config is deleted (soft delete) */
  deleted?: boolean | null;
}

// ---------------------------------------------------------------------------------------------------------------------
// Raw GraphQL backing types (exposed for advanced users, kept stable via fragments)
// ---------------------------------------------------------------------------------------------------------------------
export type RawVaultData = NonNullable<VaultInfoFieldsFragment>;
export type RawVaultStateData = NonNullable<GetVaultLatestStateQuery["vault_states_activities"][0]>;
export type RawPositionData = PositionFieldsFragment;
export type RawBorrowMarket = BorrowMarketFieldsFragment;

// ---------------------------------------------------------------------------------------------------------------------
// Entity interfaces (migrated from entities/interfaces.ts)
// ---------------------------------------------------------------------------------------------------------------------

export interface Vault {
  vaultAddress: string;
  settings: YeapVaultSettings;
  underlyingAssetMetadata?: YeapFungibleAssetMetadata;
  debtAssetMetadata?: YeapFungibleAssetMetadata;
  vaultAssetMetadata?: YeapFungibleAssetMetadata;
  governanceObjectAddress: string;
  governanceObject?: AptosObject;
  adaptiveIrmConfig?: YeapAdaptiveIrmConfig;
  fixedRateIrmConfig?: YeapFixedRateIrmConfig;
  kinkedIrmConfig?: YeapKinkedIrmConfig;
  creator: string;
  underlyingAsset: string;
  debtAsset: string;
  __raw?: RawVaultData;
}

export interface VaultState {
  vaultAddress: string;
  badDebt: bigint;
  cash: bigint;
  currentInterestRate: bigint;
  lastInterestUpdateTime: bigint;
  totalBorrows: bigint;
  totalDebtShares: bigint;
  totalShares: bigint;
  totalSupply: bigint;
  utilizationRate: BigNumber;
  shareExchangeRate: BigNumber;
  debtShareExchangeRate: BigNumber;
  borrowApy?: BigNumber;
  supplyApy?: BigNumber;
  __raw?: RawVaultStateData;
}

export interface PositionDebtStore {
  debtStoreAddress: string;
  vaultAddress: string;
  debtAssetBalance?: YeapFungibleAssetBalance;
  vaultInfo?: Vault;
}

export interface SCMDPosition {
  positionAddress: string;
  ownerAddress: string;
  collateral: string;
  market: string;
  marketInfo?: BorrowMarket;
  status?: number;
  isActive?: boolean;
  collateralAssetBalance?: YeapFungibleAssetBalance;
  collateralAssetMetadata?: YeapFungibleAssetMetadata;
  debtStores: Record<string, PositionDebtStore>;
  hasAnyDebt?: boolean;
  activeDebtVaultCount?: number;
  __raw?: RawPositionData;
}

export interface OracleConfig {
  baseAsset: AccountAddress;
  quoteAsset: AccountAddress;
  baseAssetMetadata?: YeapFungibleAssetMetadata;
  quoteAssetMetadata?: YeapFungibleAssetMetadata;
  oracleRouter: AccountAddress;
  oracle: AccountAddress;
  oracleKind: number;
  assetPair: string;
  oracleTypeDescription?: string;
  oracleTypeDetails?: string;
  fixedPriceConfig?: FixedPriceOracleConfig;
  pythOracleConfig?: PythOracleConfig;
  switchboardOracleConfig?: SwitchboardOracleConfig;
  chainlinkOracleConfig?: ChainlinkOracleConfig;
  __raw?: OracleRouterConfigFieldsFragment;
}

export interface BorrowMarket {
  market: AccountAddress;
  collateral: AccountAddress;
  collateralVault?: Vault;
  oracle: AccountAddress;
  crf: number;
  ltv: number;
  lltv: number;
  liquidationBonusBps: number;
  maxBorrowableVaults: number;
  status?: number;
  whitelisted?: boolean;
  borrowRiskParameters: Record<string, BorrowRiskParameters>;
  __raw?: RawBorrowMarket;
}

