// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { getVaultInfoByAddress, getVaultsByUnderlyingAsset, getActiveVaults, getAllVaults } from "../internal";
import { Vault } from "./entities";
import { YeapConfig } from "./yeapConfig";

/**
 * A class to query vault-related data from the Yeap indexer.
 * This provides high-level methods for interacting with vault information and settings.
 * This follows the same pattern as other API classes in the main Aptos SDK.
 * @group Vault
 */
export class VaultApi {
  readonly config: YeapConfig;

  /**
   * @param config - The Yeap configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
  }

  /**
   * Get vaults by underlying asset.
   *
   * @param underlyingAsset - The underlying asset address to filter by
   * @param limit - Number of results to return (default: 10)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise containing an array of YeapVault instances for the specified underlying asset
   *
   * @example
   * ```typescript
   * const assetVaults = await yeap.vault.getVaultsByUnderlyingAsset("0xdef...", 3);
   * console.log(`Found ${assetVaults.length} vaults with this asset`);
   * assetVaults.forEach(vault => {
   *   console.log("Vault creator:", vault.creator());
   *   console.log("Is active:", vault.isActive());
   * });
   * ```
   * @group Vault
   */
  async getVaultsByUnderlyingAsset(underlyingAsset: string, limit: number = 10, offset: number = 0): Promise<Vault[]> {
    const vaultInfos = await getVaultsByUnderlyingAsset({
      yeapConfig: this.config,
      underlyingAsset,
      limit,
      offset,
    });

    return vaultInfos.filter((vaultInfo) => vaultInfo !== null).map((vaultInfo) => new Vault(this.config, vaultInfo));
  }

  /**
   * Get a vault entity by address. This provides a cleaner API to access vault data.
   * Both vault info and settings are loaded immediately when this method is called.
   *
   * @param vaultAddress - The vault address to look up
   * @returns VaultEntity instance for convenient access to vault data, or null if vault is not found
   *
   * @example
   * ```typescript
   * // Clean entity-based API - all data is loaded immediately
   * const vault = await yeap.vault(vaultAddress);
   * if (vault) {
   *   const settings = vault.settings(); // Synchronous access
   *   const creator = vault.creator(); // Direct access to vault properties
   *
   *   console.log("Vault is active:", settings?.isActive);
   *   console.log("Flashloan enabled:", settings?.flashloanEnabled);
   *   console.log("Creator:", creator);
   *   console.log("Underlying asset:", vault.underlyingAsset());
   * }
   * ```
   * @group Vault
   */
  async vault(vaultAddress: string): Promise<Vault | null> {
    const vaultInfo = await getVaultInfoByAddress({
      yeapConfig: this.config,
      vaultAddress,
    });

    if (!vaultInfo) {
      return null;
    }

    return new Vault(this.config, vaultInfo);
  }

  /**
   * Get all vaults with optional pagination.
   *
   * @param limit - Number of results to return (default: 20)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise containing an array of all Vault instances
   *
   * @example
   * ```typescript
   * const allVaults = await yeap.vault.getAllVaults(50, 0);
   * console.log(`Found ${allVaults.length} total vaults`);
   * allVaults.forEach(vault => {
   *   console.log("Vault address:", vault.vaultAddress());
   *   console.log("Creator:", vault.creator());
   * });
   * ```
   * @group Vault
   */
  async getAllVaults(limit: number = 20, offset: number = 0): Promise<Vault[]> {
    const vaultInfos = await getAllVaults({
      yeapConfig: this.config,
      limit,
      offset,
    });

    return vaultInfos.filter((vaultInfo) => vaultInfo !== null).map((vaultInfo) => new Vault(this.config, vaultInfo));
  }

  /**
   * Get all active vaults (vaults that are not paused).
   *
   * @param limit - Number of results to return (default: 20)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise containing an array of active Vault instances
   *
   * @example
   * ```typescript
   * const activeVaults = await yeap.vault.getActiveVaults(30, 0);
   * console.log(`Found ${activeVaults.length} active vaults`);
   * activeVaults.forEach(vault => {
   *   console.log("Active vault address:", vault.vaultAddress());
   *   console.log("Underlying asset:", vault.underlyingAsset());
   * });
   * ```
   * @group Vault
   */
  async getActiveVaults(limit: number = 20, offset: number = 0): Promise<Vault[]> {
    const vaultInfos = await getActiveVaults({
      yeapConfig: this.config,
      limit,
      offset,
    });

    return vaultInfos.filter((vaultInfo) => vaultInfo !== null).map((vaultInfo) => new Vault(this.config, vaultInfo));
  }
}
