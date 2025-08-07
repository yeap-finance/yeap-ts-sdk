// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import {getOracleRouterConfigsByOracle} from "../internal";
import {YeapConfig} from "./yeapConfig";
import {OracleRouter} from "./entities";

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
   * Get an oracle router entity with all its configurations.
   *
   * @param oracleRouter - The oracle router address
   * @returns Promise containing an OracleRouter entity with all configurations
   *
   * @example
   * ```typescript
   * const router = await yeap.oracleApi.getRouter("0xrouter...");
   * console.log(`Router has ${router.getAllConfigs().length} configurations`);
   *
   * // Check available asset pairs
   * const pairs = router.getAvailableAssetPairs();
   * pairs.forEach((quoteAsset, baseAsset) => {
   *   console.log(`Can price ${baseAsset} in terms of ${quoteAsset}`);
   * });
   *
   * // Check if pricing is available for a specific pair
   * if (router.hasPricing("0x1::btc::BTC", "0x1::usd::USD")) {
   *   const price = await router.getPrice("0x1::btc::BTC", "0x1::usd::USD");
   *   console.log(`BTC/USD price: ${price?.toString()}`);
   * }
   *
   * // Get statistics
   * const stats = router.getStats();
   * console.log(`Total configs: ${stats.totalConfigs}`);
   * console.log(`Unique oracles: ${stats.uniqueOracles}`);
   * ```
   * @group Oracle Router
   */
  async getRouter(oracleRouter: string): Promise<OracleRouter | null> {
    const rawConfigs = await getOracleRouterConfigsByOracle({
      yeapConfig: this.config,
      oracleRouter,
      limit: 1000, // Get all configs for the router
      offset: 0,
    });
    if (rawConfigs.length === 0) {
      if (this.config.aptosClient) {
        let resource = await this.config.aptosClient.getAccountResource({
          accountAddress: oracleRouter,
          resourceType: `${this.config.getYeapOracleAddress()}::oracle_router::OracleRouterConfig`
        });
        if (!resource) {
          // If no resource found, it means the router does not exist
          return null;
        } else {
          // If the resource exists but no configurations, return an empty OracleRouter
          return new OracleRouter(oracleRouter, [], this.config);
        }
      } else {
        return null; // No configurations found for this router
      }
    }


    return new OracleRouter(oracleRouter, rawConfigs, this.config);
  }
}
