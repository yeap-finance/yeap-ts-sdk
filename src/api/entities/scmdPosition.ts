// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { YeapFungibleAssetBalance, YeapFungibleAssetMetadata, YeapVaultInfo } from "../interfaces";
import { transformFungibleAssetBalance, transformFungibleAssetMetadata, transformVaultInfo } from "../transforms";
import { PositionFieldsFragment } from "../../types/generated/operations";

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

/**
 * Represents an SCMD (Spot Collateralized Margin Debt) position entity with convenient methods to access position data.
 *
 * @example
 * ```typescript
 * const position = new SCMDPosition(config, rawPositionData);
 *
 * console.log("Position address:", position.positionAddress);
 * console.log("Owner:", position.ownerAddress);
 * console.log("Status:", position.isActive ? "Active" : "Inactive");
 * console.log("Collateral type:", position.collateralType);
 * console.log("Debt stores:", position.debtStores.length);
 *
 * // Access collateral balance
 * const collateralBalance = position.collateralAssetBalance;
 * if (collateralBalance) {
 *   console.log("Collateral amount:", collateralBalance.amount);
 * }
 * ```
 *
 * @group Entities
 */
export class SCMDPosition {
  private readonly config: YeapConfig;
  private readonly _rawPositionData: RawPositionData;

  public readonly positionAddress: string;

  constructor(config: YeapConfig, rawData: RawPositionData) {
    this.config = config;
    this._rawPositionData = rawData;
    this.positionAddress = rawData.position_address;
  }

  /**
   * Get the position owner address.
   */
  get ownerAddress(): string | null {
    return this._rawPositionData.owner_address || null;
  }

  /**
   * Get the collateral asset address.
   */
  get collateral(): string | null {
    return this._rawPositionData.collateral || null;
  }

  /**
   * Get the collateral type.
   */
  get collateralType(): string | null {
    return this._rawPositionData.collateral_type || null;
  }

  /**
   * Get the position status.
   * @returns The numeric status value (typically 0 for active, 1 for inactive)
   */
  get status(): number | null {
    const statusValue = this._rawPositionData.status;
    return statusValue !== null && statusValue !== undefined ? parseInt(statusValue, 10) : null;
  }

  /**
   * Check if the position is active.
   * @returns True if status is 0 (active), false otherwise
   */
  get isActive(): boolean {
    return this.status === 0;
  }

  /**
   * Get the collateral asset balance with metadata.
   */
  get collateralAssetBalance(): YeapFungibleAssetBalance | null {
    const rawBalance = this._rawPositionData.collateral_asset_balance;
    return rawBalance ? transformFungibleAssetBalance(rawBalance) : null;
  }

  /**
   * Get the collateral asset metadata.
   */
  get collateralAssetMetadata(): YeapFungibleAssetMetadata | null {
    const rawBalance = this._rawPositionData.collateral_asset_balance;
    const rawMetadata = rawBalance?.metadata;
    return rawMetadata ? transformFungibleAssetMetadata(rawMetadata) : null;
  }

  /**
   * Get all debt stores for this position.
   * Each debt store represents a borrowing position in a specific vault.
   */
  get debtStores(): PositionDebtStore[] {
    const rawDebtStores = this._rawPositionData.debt_stores || [];

    return rawDebtStores.map((store) => ({
      debtStoreAddress: store.debt_store_address!,
      vaultAddress: store.vault_address!,
      debtAssetBalance: store.debt_asset_balance ? transformFungibleAssetBalance(store.debt_asset_balance) : null,
      //   vaultInfo: store.vault_info ? transformVaultInfo(store.vault_info) : null,
    }));
  }

  /**
   * Get debt stores for a specific vault.
   * @param vaultAddress - The vault address to filter by
   */
  getDebtStoresByVault(vaultAddress: string): PositionDebtStore[] {
    return this.debtStores.filter((store) => store.vaultAddress === vaultAddress);
  }

  /**
   * Get the total number of vaults this position has borrowed from.
   */
  get vaultCount(): number {
    return this.debtStores.length;
  }

  /**
   * Check if the position has any debt in a specific vault.
   * @param vaultAddress - The vault address to check
   */
  hasDebtInVault(vaultAddress: string): boolean {
    return this.debtStores.some((store) => store.vaultAddress === vaultAddress);
  }

  /**
   * Get all vault addresses this position has borrowed from.
   */
  get vaultAddresses(): string[] {
    return this.debtStores.map((store) => store.vaultAddress);
  }
}
