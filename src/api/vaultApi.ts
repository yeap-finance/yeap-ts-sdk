// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { getVaultInfoByAddress, getVaultsByUnderlyingAsset } from "../internal";
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
  async getVaultsByUnderlyingAsset(
    underlyingAsset: string,
    limit: number = 10,
    offset: number = 0,
  ): Promise<Vault[]> {
    const vaultInfos = await getVaultsByUnderlyingAsset({
      yeapConfig: this.config,
      underlyingAsset,
      limit,
      offset,
    });

    return vaultInfos
      .filter((vaultInfo) => vaultInfo !== null)
      .map((vaultInfo) => new Vault(this.config, vaultInfo));
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
}
