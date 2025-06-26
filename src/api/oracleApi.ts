// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { getOracleRouterConfigByPrimaryKey, getOracleRouterConfigsByOracle } from "../internal";
import { YeapConfig } from "./yeapConfig";
import { OracleConfig } from "./entities";

/**
 * A class to query oracle router configuration data from the Yeap indexer.
 * This provides high-level methods for interacting with oracle router configurations.
 * This follows the same pattern as other API classes in the main Aptos SDK.
 * @group Oracle Router
 */
export class OracleApi {
  readonly config: YeapConfig;

  /**
   * @param config - The Yeap configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
  }

  /**
   * Get oracle router configuration by primary key (base_asset, oracle_router, quote_asset).
   *
   * @param baseAsset - The base asset address
   * @param oracleRouter - The oracle router address
   * @param quoteAsset - The quote asset address
   * @returns Promise containing the oracle router configuration or null if not found
   *
   * @example
   * ```typescript
   * const config = await yeap.oracleRouter.getConfigByPrimaryKey(
   *   "0xbase...",
   *   "0xoracle...",
   *   "0xquote..."
   * );
   * if (config) {
   *   console.log("Oracle:", config.oracle());
   *   console.log("Oracle type:", config.oracleTypeDescription());
   *   console.log("Oracle details:", config.oracleTypeDetails());
   *   console.log("Asset pair:", config.assetPair());
   *   console.log("Is vault oracle:", config.isVaultOracle());
   *
   *   // Fetch current price from on-chain oracle
   *   try {
   *     const price = await config.get_price();
   *     if (price !== null) {
   *       console.log(`Current price: ${price.toString()}`);
   *     } else {
   *       console.log("Price not available");
   *     }
   *   } catch (error) {
   *     console.error("Failed to fetch price:", error);
   *   }
   * }
   * ```
   * @group Oracle Router
   */
  async getConfigByPrimaryKey(
    baseAsset: string,
    oracleRouter: string,
    quoteAsset: string,
  ): Promise<OracleConfig | null> {
    const raw = await getOracleRouterConfigByPrimaryKey({
      yeapConfig: this.config,
      baseAsset,
      oracleRouter,
      quoteAsset,
    });

    if (!raw) return null;
    return new OracleConfig(raw, this.config);
  }

  /**
   * Get all oracle router configurations for a specific oracle router address.
   *
   * @param oracleRouter - The oracle router address to filter by
   * @param limit - Number of results to return (default: 50)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise containing an array of oracle router configurations
   *
   * @example
   * ```typescript
   * const configs = await yeap.oracleRouter.getConfigsByOracle("0xoracle...", 10);
   * console.log(`Found ${configs.length} configurations for this oracle router`);
   * configs.forEach(config => {
   *   console.log("Asset pair:", config.assetPair());
   *   console.log("Oracle type:", config.oracleTypeDescription());
   *   console.log("Is active:", config.isActive());
   *   if (config.isPrimaryBackupOracle()) {
   *     console.log("Uses Pyth with Switchboard backup");
   *   }
   * });
   * ```
   * @group Oracle Router
   */
  async getConfigsByOracle(
    oracleRouter: string,
    limit: number = 50,
    offset: number = 0,
  ): Promise<OracleConfig[]> {
    const rawConfigs = await getOracleRouterConfigsByOracle({
      yeapConfig: this.config,
      oracleRouter,
      limit,
      offset,
    });

    return rawConfigs.map((raw) => new OracleConfig(raw, this.config));
  }
}
