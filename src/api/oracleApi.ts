// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { getOracleRouterConfigsByOracle } from "../internal";
import { YeapConfig } from "./yeapConfig";
import { OracleRouter } from "./entities";
import { AccountAddress, InputViewFunctionData, MoveUint128Type } from "@aptos-labs/ts-sdk";

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
          resourceType: `${this.config.yeapOracleAddress}::oracle_router::OracleRouterConfig`,
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

  /**
   * Batch fetch on-chain prices for multiple asset pairs via the oracle lens view.
   * Replaces former BorrowMarket.getPrices method.
   *
   * @param routerAddress Oracle router account address (string or hex)
   * @param pairs Array of { base, quote? }. If quote omitted, defaults to AccountAddress.ZERO sentinel (protocol USD)
   * @returns bigint array of prices aligned with input order
   */
  async getPrices(routerAddress: string, pairs: { base: AccountAddress; quote?: AccountAddress }[]): Promise<bigint[]> {
    if (!this.config?.aptosClient) {
      throw new Error("Aptos client required. Provide aptosClient in YeapConfig.");
    }
    if (!this.config.hasAddress("yeap_oracle_lens")) {
      throw new Error("yeap_lens address missing in YeapConfig addresses map.");
    }
    const oracleLensAddress = this.config.yeapOracleLensAddress;
    const viewFunctionData: InputViewFunctionData = {
      function: `${oracleLensAddress}::oracle_lens::batch_get_price_of_pairs` as `${string}::${string}::${string}`,
      typeArguments: [],
      functionArguments: [
        routerAddress,
        pairs.map((p) => p.base.toString()),
        pairs.map((p) => (p.quote || AccountAddress.ZERO).toString()),
      ],
    };
    const result = await this.config.aptosClient.view({ payload: viewFunctionData });
    const prices = result[0] as MoveUint128Type[];
    return prices.map((v) => BigInt(v));
  }
}
