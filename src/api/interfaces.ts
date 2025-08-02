// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { AccountAddress } from "@aptos-labs/ts-sdk";

/**
 * Clean, user-friendly interfaces for Yeap SDK query types.
 * These interfaces provide a stable API that abstracts away GraphQL implementation details.
 * @group Types
 */

/**
 * Fungible asset metadata information (clean interface)
 */
export interface YeapFungibleAssetMetadata {
  /** Token standard (e.g., "v1", "v2") */
  tokenStandard: string;
  /** Asset name */
  name: string;
  /** Asset symbol */
  symbol: string;
  /** Number of decimal places */
  decimals: number;
  /** Icon URI for the asset */
  iconUri?: string | null;
  /** Project URI for the asset */
  projectUri?: string | null;
}

/**
 * Current object information (clean interface)
 */
export interface YeapCurrentObject {
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
export interface YeapFungibleAssetBalance {
  /** Balance amount */
  amount: string;
  /** Whether the balance is frozen */
  isFrozen: boolean;
  /** Storage ID */
  storageId: string;
  /** Asset metadata */
  metadata?: YeapFungibleAssetMetadata | null;
}

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
 * Complete vault information interface (clean interface)
 */
export interface YeapVaultInfo {
  /** Vault address */
  vaultAddress: string;
  /** Creator address */
  creator?: string | null;
  /** Underlying asset address */
  underlyingAsset: string;
  /** Debt asset address */
  debtAsset?: string | null;
  /** Underlying asset store address */
  underlyingAssetStore?: string | null;
  /** Governance object address */
  governanceObjectAddress?: string | null;
  /** Underlying asset metadata */
  underlyingAssetMetadata?: YeapFungibleAssetMetadata | null;
  /** Debt asset metadata */
  debtAssetMetadata?: YeapFungibleAssetMetadata | null;
  /** Vault asset metadata */
  vaultAssetMetadata?: YeapFungibleAssetMetadata | null;
  /** Underlying asset balance */
  underlyingAssetBalance?: YeapFungibleAssetBalance | null;
  /** Governance object */
  governanceObject?: YeapCurrentObject | null;
  /** Vault settings */
  settings?: YeapVaultSettings | null;
}

/**
 * Vault state (financial state information)
 */
export interface YeapVaultState {
  /** Bad debt amount */
  badDebt?: string | null;
  /** Cash amount */
  cash?: string | null;
  /** Current interest rate */
  currentInterestRate?: string | null;
  /** Event index */
  eventIndex: string;
  /** Last interest update time */
  lastInterestUpdateTime?: string | null;
  /** Timestamp */
  timestamp?: Date | null;
  /** Total borrows */
  totalBorrows?: string | null;
  /** Total debt shares */
  totalDebtShares?: string | null;
  /** Total shares */
  totalShares?: string | null;
  /** Transaction version */
  transactionVersion: string;
  /** Vault address */
  vaultAddress?: string | null;
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
 * Vault bad debt activities (clean interface)
 */
export interface YeapVaultBadDebtActivity {
  /** Event index */
  eventIndex: string;
  /** Transaction version */
  transactionVersion: string;
  /** Vault address */
  vaultAddress: string;
  /** Event type */
  eventType?: string | null;
  /** Timestamp */
  timestamp?: Date | null;
  /** Bad debt amount */
  badDebtAmount?: string | null;
  /** Bad debt shares */
  badDebtShares?: string | null;
  /** Borrow protocol */
  borrowProtocol?: string | null;
  /** Debt store address */
  debtStoreAddress?: string | null;
  /** Total bad debt after */
  totalBadDebtAfter?: string | null;
  /** Total bad debt before */
  totalBadDebtBefore?: string | null;
}

/**
 * Vault emergency activities (clean interface)
 */
export interface YeapVaultEmergencyActivity {
  /** Event index */
  eventIndex: string;
  /** Transaction version */
  transactionVersion: string;
  /** Vault address */
  vaultAddress: string;
  /** Timestamp */
  timestamp?: Date | null;
  /** Amount */
  amount?: string | null;
  /** Withdrawn by address */
  withdrawnBy?: string | null;
}

/**
 * Vault flashloan activities (clean interface)
 */
export interface YeapVaultFlashloanActivity {
  /** Event index */
  eventIndex: string;
  /** Transaction version */
  transactionVersion: string;
  /** Vault address */
  vaultAddress: string;
  /** Timestamp */
  timestamp?: Date | null;
  /** Amount */
  amount?: string | null;
  /** Fee */
  fee?: string | null;
}

/**
 * Vault protocol capabilities (clean interface)
 */
export interface YeapVaultProtocolCaps {
  /** Vault address */
  vaultAddress: string;
  /** Protocol module address */
  protocolModuleAddress?: string | null;
  /** Protocol module name */
  protocolModuleName?: string | null;
  /** Protocol struct name */
  protocolStructName?: string | null;
  /** Borrow cap */
  borrowCap?: string | null;
  /** Whether borrowing is enabled */
  borrowEnabled?: boolean | null;
  /** Whether supply is enabled */
  supplyEnabled?: boolean | null;
}

/**
 * Vault state activities (clean interface)
 */
export interface YeapVaultStateActivity {
  /** Bad debt amount */
  badDebt?: string | null;
  /** Cash amount */
  cash?: string | null;
  /** Current interest rate */
  currentInterestRate?: string | null;
  /** Event index */
  eventIndex: string;
  /** Last interest update time */
  lastInterestUpdateTime?: string | null;
  /** Timestamp */
  timestamp?: Date | null;
  /** Total borrows */
  totalBorrows?: string | null;
  /** Total debt shares */
  totalDebtShares?: string | null;
  /** Total shares */
  totalShares?: string | null;
  /** Transaction version */
  transactionVersion: string;
  /** Vault address */
  vaultAddress: string;
}

/**
 * SCMD Position debt store information (clean interface)
 */
export interface YeapPositionDebtStore {
  /** Position address */
  positionAddress: string;
  /** Debt store address */
  debtStoreAddress?: string | null;
  /** Vault address */
  vaultAddress: string;
  /** Debt asset balance */
  debtAssetBalance?: YeapFungibleAssetBalance | null;
  /** Vault information */
  vaultInfo?: YeapVaultInfo | null;
}

/**
 * SCMD Position information (clean interface)
 */
export interface YeapPosition {
  /** Position address (unique identifier) */
  positionAddress: string;
  /** Owner address */
  ownerAddress?: string | null;
  /** Collateral asset address */
  collateral?: string | null;
  /** Collateral type */
  collateralType?: string | null;
  /** Position status (1 = active, 0 = inactive) */
  status?: number | null;
  /** Collateral asset balance */
  collateralAssetBalance?: YeapFungibleAssetBalance | null;
  /** Debt stores (borrowing positions) */
  debtStores?: YeapPositionDebtStore[];
}

/**
 * Filter options for SCMD position queries
 */
export interface PositionFilterOptions {
  /** Filter by owner address */
  ownerAddress?: string;
  /** Filter by position status (1 = active, 0 = inactive) */
  status?: number;
  /** Filter by collateral type */
  collateralType?: string;
  /** Minimum collateral value */
  minCollateralValue?: string;
}

/**
 * Sort options for SCMD position queries
 */
export interface PositionSortOptions {
  /** Sort by field */
  field: "positionAddress" | "ownerAddress" | "collateralType";
  /** Sort direction */
  direction: "asc" | "desc";
}

/**
 * Comprehensive query options for SCMD position queries
 */
export interface PositionQueryOptions extends QueryOptions {
  /** Filter options */
  filter?: PositionFilterOptions;
  /** Sort options */
  sort?: PositionSortOptions;
}

/**
 * Interface for SCMD Position-related operations.
 * Provides methods to query and interact with SCMD (Spot Collateralized Margin Debt) positions.
 */
export interface ScmdPositionApiInterface {
  /**
   * Retrieves all positions owned by a specific address.
   *
   * @param ownerAddress - The address of the position owner
   * @param options - Optional query parameters (limit, offset, etc.)
   * @returns Promise resolving to an array of positions
   *
   * @example
   * ```typescript
   * const positions = await yeap.scmdApi.getPositionsByOwner(
   *   "0x123...",
   *   { limit: 10, offset: 0 }
   * );
   * ```
   */
  getPositionsByOwner(ownerAddress: string, options?: QueryOptions): Promise<YeapPosition[]>;
}

/**
 * Query variable interfaces for type safety
 */

/**
 * Variables for vault info queries
 */
export interface VaultInfoQueryVariables {
  where?: any; // vault_info_bool_exp
  orderBy?: any[]; // vault_info_order_by[]
  limit?: number;
  offset?: number;
}

/**
 * Variables for vault info by address query
 */
export interface VaultInfoByAddressQueryVariables {
  vaultAddress: string;
}

/**
 * Variables for vault settings queries
 */
export interface VaultSettingsQueryVariables {
  where?: any; // vault_settings_bool_exp
  orderBy?: any[]; // vault_settings_order_by[]
  limit?: number;
  offset?: number;
}

/**
 * Variables for vault settings by address query
 */
export interface VaultSettingsByAddressQueryVariables {
  vaultAddress: string;
}

/**
 * Variables for high yield vaults query
 */
export interface VaultsWithHighYieldQueryVariables {
  minInterestRate: string; // numeric
  limit?: number;
  offset?: number;
}

/**
 * Variables for active vaults query
 */
export interface ActiveVaultsQueryVariables {
  limit?: number;
  offset?: number;
}

/**
 * Response type for vault info queries (returns array)
 */
export interface YeapVaultInfoQueryResponse {
  vaultInfo: YeapVaultInfo[];
}

/**
 * Response type for vault info by address query (returns single item or null)
 */
export interface YeapVaultInfoByAddressQueryResponse {
  vaultInfo: YeapVaultInfo | null;
}

/**
 * Response type for vault settings queries (returns array)
 */
export interface YeapVaultSettingsQueryResponse {
  vaultSettings: YeapVaultSettings[];
}

/**
 * Response type for vault settings by address query (returns single item or null)
 */
export interface YeapVaultSettingsByAddressQueryResponse {
  vaultSettings: YeapVaultSettings | null;
}

/**
 * Response type for high yield vaults query (returns array)
 */
export interface YeapVaultsWithHighYieldQueryResponse {
  vaultInfo: YeapVaultInfo[];
}

/**
 * Response type for active vaults query (returns array)
 */
export interface YeapActiveVaultsQueryResponse {
  vaultInfo: YeapVaultInfo[];
}

/**
 * Response type for vault latest state query (returns single state or null)
 */
export interface YeapVaultLatestStateQueryResponse {
  vaultState: YeapVaultState | null;
}

/**
 * Utility types for working with query responses
 */

/**
 * Extract a single vault info item from array responses
 */
export type YeapVaultInfoItem = YeapVaultInfo;

/**
 * Extract a single vault settings item from array responses
 */
export type YeapVaultSettingsItem = YeapVaultSettings;

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
 * Filter options for vault queries
 */
export interface VaultFilterOptions {
  /** Filter by vault status */
  isActive?: boolean;
  /** Filter by flashloan availability */
  flashloanEnabled?: boolean;
  /** Filter by minimum interest rate */
  minInterestRate?: string;
  /** Filter by vault addresses */
  vaultAddresses?: string[];
}

/**
 * Sort options for vault queries
 */
export interface VaultSortOptions {
  /** Sort by field */
  field: "vaultAddress" | "interestFeeRate" | "underlyingAsset";
  /** Sort direction */
  direction: "asc" | "desc";
}

/**
 * Comprehensive query options for vault queries
 */
export interface VaultQueryOptions extends QueryOptions {
  /** Filter options */
  filter?: VaultFilterOptions;
  /** Sort options */
  sort?: VaultSortOptions;
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
  oracle?: string | null;
  /** Oracle kind/type identifier */
  oracleKind?: number | null;
  /** Whether the configuration is deleted */
  isDeleted?: boolean;
}

/**
 * Collateral risk parameters configuration (clean interface)
 */
export interface CollateralRiskParameters {
  /** Maximum number of borrow vaults allowed */
  borrowVaultMaxNum: number;
  /** Collateral asset address */
  collateral: AccountAddress;
  /** Risk configuration address */
  configAddress: AccountAddress;
  /** Liquidation bonus in basis points */
  liquidationBonusBps: number;
  /** Liquidation Loan-to-Value ratio */
  lltv: number;
  /** Loan-to-Value ratio */
  ltv: number;
  /** Oracle address for price feeds */
  oracle: AccountAddress;
  /** Risk factor for the collateral */
  riskFactor: number;
}

/**
 * Borrow risk parameters configuration (clean interface)
 */
export interface BorrowRiskParameters {
  /** Borrowing weight (brw) */
  brw: number;
  /** Collateral asset address */
  collateral: AccountAddress;
  /** Risk configuration address */
  configAddress: AccountAddress;
  /** Vault address */
  vault: AccountAddress;
}
