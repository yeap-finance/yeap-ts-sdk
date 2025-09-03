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
  /** Borrow cap (as string to handle u64) */
  borrow_cap: string;
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
/** Raw GraphQL fragment backing a Vault (internal escape hatch). */
export type RawVaultData = NonNullable<VaultInfoFieldsFragment>;
/** Raw GraphQL row backing a VaultState (latest state activity). */
export type RawVaultStateData = NonNullable<GetVaultLatestStateQuery["vault_states_activities"][0]>;
/** Raw GraphQL fragment backing an SCMD position. */
export type RawPositionData = PositionFieldsFragment;
/** Raw GraphQL fragment backing a borrow market configuration. */
export type RawBorrowMarket = BorrowMarketFieldsFragment;

// ---------------------------------------------------------------------------------------------------------------------
// Entity interfaces (migrated from entities/interfaces.ts)
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Canonical vault metadata + static configuration.
 * A vault represents an interest‑bearing pool for an underlying asset with a defined interest rate model.
 */
export interface Vault {
  /** On‑chain vault account address (standard 0x... string). */
  vaultAddress: string;
  /** Transformed settings object (feature flags, fees, IRM kind, paused state). */
  settings: YeapVaultSettings;
  /** Metadata for the underlying (deposit) fungible asset (token icon, symbol, decimals). */
  underlyingAssetMetadata?: YeapFungibleAssetMetadata;
  /** Metadata for the debt accounting asset (if distinct from underlying). */
  debtAssetMetadata?: YeapFungibleAssetMetadata;
  /** Metadata for the vault share token (receipt token). */
  vaultAssetMetadata?: YeapFungibleAssetMetadata;
  /** Governance object address controlling admin actions. */
  governanceObjectAddress: string;
  /** Current governance object details (owner, transfer gating). */
  governanceObject?: AptosObject;
  /** Adaptive interest rate model configuration (present if irmKind == adaptive). */
  adaptiveIrmConfig?: YeapAdaptiveIrmConfig;
  /** Fixed rate interest model configuration (present if irmKind == fixed). */
  fixedRateIrmConfig?: YeapFixedRateIrmConfig;
  /** Kinked model configuration (present if irmKind == kinked). */
  kinkedIrmConfig?: YeapKinkedIrmConfig;
  /** Vault creator address. */
  creator: string;
  /** Underlying asset address whose deposits the vault manages. */
  underlyingAsset: string;
  /** Debt asset address (denominator for debt shares). */
  debtAsset: string;
  /** Backing raw GraphQL fragment (escape hatch). */
  __raw?: RawVaultData;
}

/**
 * Point‑in‑time on-chain derived state for a vault (rates, totals, utilization).
 * Numeric big integer fields are raw smallest units (no decimal adjustment applied).
 */
export interface VaultState {
  /** Vault address this state corresponds to. */
  vaultAddress: string;
  /** Aggregate unrecoverable debt (risk / loss) in underlying units. */
  badDebt: BigNumber;
  /** Unlent underlying balance held by the vault (liquidity). */
  cash: BigNumber;
  /** Per‑second interest rate (fixed‑point scaled by 2^96). */
  currentInterestRate: BigNumber;
  /** Unix timestamp (seconds) of last interest accrual. */
  lastInterestUpdateTime: BigNumber;
  /** Total outstanding borrowed principal (underlying units). */
  totalBorrows: BigNumber;
  /** Total issued debt share tokens (denominator for debtShareExchangeRate). */
  totalDebtShares: BigNumber;
  /** Total issued vault share tokens (denominator for shareExchangeRate). */
  totalShares: BigNumber;
  /** Aggregate supply = totalBorrows + cash + badDebt (underlying units). */
  totalSupply: BigNumber;
  /** Utilization ratio = borrows / (borrows + cash + badDebt) (0..1). */
  utilizationRate: BigNumber;
  /** Underlying per share (exchange rate) = totalSupply / totalShares (0 if no shares). */
  shareExchangeRate: BigNumber;
  /** Underlying per debt share = totalBorrows / totalDebtShares (0 if none). */
  debtShareExchangeRate: BigNumber;
  /** Nominal borrow APY (%) approximated from current interest rate. */
  borrowApy?: BigNumber;
  /** Nominal supply APY (%) = borrowApy * utilizationRate. */
  supplyApy?: BigNumber;
  /** Raw backing row (escape hatch). */
  __raw?: RawVaultStateData;
}

/**
 * Component of a position representing debt in a specific borrowable vault.
 * Indexed by vaultAddress inside SCMDPosition.debtStores for O(1) lookups.
 */
export interface PositionDebtStore {
  /** Address of the debt store resource/account. */
  debtStoreAddress: string;
  /** Debt vault address this store relates to. */
  vaultAddress: string;
  /** Current debt asset balance (principal + accrued interest) for this vault. */
  debtAssetBalance?: YeapFungibleAssetBalance;
  /** Cached vault metadata for convenience. */
  vaultInfo?: Vault;
}

/**
 * Smart Collateral Multi‑Debt position. Holds collateral in one market and borrows from multiple vaults.
 */
export interface SCMDPosition {
  /** Position account address. */
  positionAddress: string;
  /** Owner (user) account address. */
  ownerAddress: string;
  /** Collateral asset (fungible asset address deposited). */
  collateral: string;
  /** Market configuration address linking collateral to borrow vaults. */
  market: string;
  /** Full borrow market metadata (optional if not hydrated). */
  marketInfo?: BorrowMarket;
  /** Numeric status code (0 = active, others = closed / liquidated). */
  status?: number;
  /** Convenience boolean for active status. */
  isActive?: boolean;
  /** Balance of collateral asset in the position (raw units). */
  collateralAssetBalance?: YeapFungibleAssetBalance;
  /** Metadata for the collateral asset. */
  collateralAssetMetadata?: YeapFungibleAssetMetadata;
  /** Map of debt vault address -> debt store detail. */
  debtStores: Record<string, PositionDebtStore>;
  /** True if any debt store has non‑zero debt. */
  hasAnyDebt?: boolean;
  /** Count of debt stores with non‑zero debt. */
  activeDebtVaultCount?: number;
  /** Raw fragment (escape hatch). */
  __raw?: RawPositionData;
}

/**
 * Unified oracle configuration record for a base/quote pair. One of the *OracleConfig variants may be present
 * depending on oracleKind (fixed price, pyth, switchboard, chainlink). Optional sub‑configs are undefined when not applicable.
 */
export interface OracleConfig {
  /** Base asset (price numerator). */
  baseAsset: AccountAddress;
  /** Quote asset (price denominator). Typically USD or a canonical stable). */
  quoteAsset: AccountAddress;
  /** Metadata for base asset. */
  baseAssetMetadata?: YeapFungibleAssetMetadata;
  /** Metadata for quote asset. */
  quoteAssetMetadata?: YeapFungibleAssetMetadata;
  /** Oracle router resource address managing this config. */
  oracleRouter: AccountAddress;
  /** Specific oracle implementation address (if set). */
  oracle: AccountAddress;
  /** Discriminant for oracle type (matches on‑chain enum / constant). */
  oracleKind: number;
  /** Human readable asset pair key (base/quote). */
  assetPair: string;
  /** Short oracle type label. */
  oracleTypeDescription?: string;
  /** Detailed description or JSON of configuration. */
  oracleTypeDetails?: string;
  /** Fixed price oracle sub‑config (when oracleKind == fixed). */
  fixedPriceConfig?: FixedPriceOracleConfig;
  /** Pyth oracle sub‑config. */
  pythOracleConfig?: PythOracleConfig;
  /** Switchboard oracle sub‑config. */
  switchboardOracleConfig?: SwitchboardOracleConfig;
  /** Chainlink oracle sub‑config. */
  chainlinkOracleConfig?: ChainlinkOracleConfig;
  /** Raw fragment (escape hatch). */
  __raw?: OracleRouterConfigFieldsFragment;
}

/**
 * Borrow market linking a single collateral asset (vault) to multiple borrowable vaults with risk parameters.
 * borrowRiskParameters is a map keyed by debt vault address (standard string) for deterministic ordering and fast access.
 */
export interface BorrowMarket {
  /** Borrow market config address. */
  market: AccountAddress;
  /** Collateral vault address (single collateral per market). */
  collateral: AccountAddress;
  /** Collateral vault metadata (if hydrated). */
  collateralVault?: Vault;
  /** Oracle router / price source used for risk and valuation. */
  oracle: AccountAddress;
  /** Collateral requirement factor (scaled, see CRF_PRECISION in client). */
  crf: number;
  /** Maximum standard loan‑to‑value (scaled by LTV precision). */
  ltv: number;
  /** Liquidation loan‑to‑value threshold (scaled by LTV precision). */
  lltv: number;
  /** Liquidation bonus expressed in basis points. */
  liquidationBonusBps: number;
  /** Upper bound on number of borrowable debt vaults allowed. */
  maxBorrowableVaults: number;
  /** Optional status (enable / pause codes). */
  status?: number;
  /** Whether access is restricted / whitelisted. */
  whitelisted?: boolean;
  /** Mapping of debt vault address -> per‑vault risk parameters. */
  borrowRiskParameters: Record<string, BorrowRiskParameters>;
  /** Raw fragment backing this market (escape hatch). */
  __raw?: RawBorrowMarket;
}

