// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { InputViewFunctionData } from "@aptos-labs/ts-sdk";
import { OracleRouterConfigFieldsFragment } from "../../types";
import { YeapConfig } from "../yeapConfig";
import { OracleConfig } from "./oracleConfig";
import { PriceFeed } from "@pythnetwork/pyth-aptos-js";

/**
 * Oracle Router entity representing a collection of oracle configurations.
 *
 * The Oracle Router implements a sophisticated routing system for price discovery
 * through a directed acyclic path (DAP) graph that enables complex multi-hop
 * price calculations and oracle source management.
 *
 * Based on the Move contract `yeap_oracle::oracle_router`, this class provides
 * access to oracle configurations and routing capabilities for different oracle types:
 * - PrimaryBackupOracle: Pyth primary with Switchboard backup
 * - VaultOracle: Vault asset pricing based on underlying assets
 * - FixPriceOracle: Fixed price configurations for testing/stablecoins
 * - DelegateOracle: Recursive oracle routing for complex scenarios
 *
 * @group Oracle Router
 */
export class OracleRouter {
  private readonly data: Array<OracleRouterConfigFieldsFragment>;
  private readonly config?: YeapConfig;
  public readonly routerAddress: string;
  /**
   * @param data - Array of oracle router configuration fragments
   * @param config - Optional Yeap configuration for on-chain interactions
   */
  constructor(routerAddress: string, data: Array<OracleRouterConfigFieldsFragment>, config?: YeapConfig) {
    this.routerAddress = routerAddress;
    // Filter out deleted configurations during initialization
    this.data = data.filter((config) => !config.deleted);
    this.config = config;
  }

  /**
   * Get all oracle configurations managed by this router.
   *
   * @returns Array of oracle configurations as OracleConfig entities
   *
   * @example
   * ```typescript
   * const configs = oracleRouter.getAllConfigs();
   * configs.forEach(config => {
   *   console.log(`${config.baseAsset}/${config.quoteAsset} via ${config.oracle}`);
   * });
   * ```
   */
  getAllConfigs(): OracleConfig[] {
    return this.data.map((configFragment) => new OracleConfig(configFragment, this.config));
  }

  /**
   * Get an OracleConfig entity for a specific asset pair.
   * This provides a higher-level interface to work with oracle configurations.
   *
   * @param baseAsset - The base asset address
   * @param quoteAsset - The quote asset address
   * @returns An OracleConfig entity if configuration exists, undefined otherwise
   *
   * @example
   * ```typescript
   * const oracleConfig = oracleRouter.getOracleConfig("0x1::btc::BTC", "0x1::usd::USD");
   * if (oracleConfig) {
   *   const price = await oracleConfig.get_price();
   *   console.log(`BTC/USD price: ${price?.toString()}`);
   * }
   * ```
   */
  getOracleConfig(baseAsset: string, quoteAsset: string): OracleConfig | undefined {
    const configFragment = this.getConfigForPair(baseAsset, quoteAsset);
    if (!configFragment) {
      return undefined;
    }

    return new OracleConfig(configFragment, this.config);
  }

  /**
   * Get oracle configuration for a specific asset pair.
   *
   * Each asset pair can have at most one oracle configuration. This method
   * enforces this invariant and throws an error if multiple configurations
   * are found for the same pair.
   *
   * @param baseAsset - The base asset address
   * @param quoteAsset - The quote asset address
   * @returns The oracle configuration for this pair, or undefined if none exists
   * @throws Error if multiple configurations exist for the same asset pair
   *
   * @example
   * ```typescript
   * const btcUsdConfig = oracleRouter.getConfigForPair(
   *   "0x1::btc::BTC",
   *   "0x1::usd::USD"
   * );
   * if (btcUsdConfig) {
   *   console.log(`BTC/USD oracle: ${btcUsdConfig.oracle}`);
   * }
   * ```
   */
  private getConfigForPair(baseAsset: string, quoteAsset: string): OracleRouterConfigFieldsFragment | undefined {
    const configs = this.data.filter((config) => config.base_asset === baseAsset && config.quote_asset === quoteAsset);

    if (configs.length > 1) {
      throw new Error(
        `Invalid oracle router state: Multiple configurations found for asset pair ${baseAsset}/${quoteAsset}. ` +
        `Expected at most one configuration per pair, but found ${configs.length}.`,
      );
    }

    return configs[0];
  }

  /**
   * Get oracle configurations by oracle address.
   *
   * @param oracleAddress - The oracle implementation address
   * @returns Array of configurations using this oracle as OracleConfig entities
   *
   * @example
   * ```typescript
   * const pythConfigs = oracleRouter.getConfigsByOracle("0x123...pyth");
   * console.log(`Found ${pythConfigs.length} Pyth configurations`);
   * ```
   */
  getConfigsByOracle(oracleAddress: string): OracleConfig[] {
    const fragments = this.data.filter((config) => config.oracle === oracleAddress);
    return fragments.map((fragment) => new OracleConfig(fragment, this.config));
  }

  /**
   * Get oracle configurations by oracle kind (type).
   *
   * Oracle kinds correspond to the Move contract enum:
   * - 0: PrimaryBackupOracle (Pyth + Switchboard)
   * - 1: VaultOracle (Vault asset pricing)
   * - 2: FixPriceOracle (Fixed price)
   * - 3: DelegateOracle (Recursive routing)
   *
   * @param oracleKind - The oracle type number
   * @returns Array of configurations of this type as OracleConfig entities
   *
   * @example
   * ```typescript
   * const vaultOracles = oracleRouter.getConfigsByKind(1); // Vault oracles
   * const fixedPriceOracles = oracleRouter.getConfigsByKind(2); // Fixed price oracles
   * ```
   */
  getConfigsByKind(oracleKind: number): OracleConfig[] {
    const fragments = this.data.filter((config) => config.oracle_kind === oracleKind.toString());
    return fragments.map((fragment) => new OracleConfig(fragment, this.config));
  }

  /**
   * Get oracle configuration for a specific base asset.
   *
   * Each base asset can have at most one oracle configuration. This method
   * enforces this invariant and throws an error if multiple configurations
   * are found for the same base asset.
   *
   * @param baseAsset - The base asset address
   * @returns The oracle configuration for this base asset as OracleConfig entity, or undefined if none exists
   * @throws Error if multiple configurations exist for the same base asset
   *
   * @example
   * ```typescript
   * const btcConfig = oracleRouter.getConfigForBaseAsset("0x1::btc::BTC");
   * if (btcConfig) {
   *   console.log(`BTC oracle: ${btcConfig.oracle}`);
   * }
   * ```
   */
  getConfigForBaseAsset(baseAsset: string): OracleConfig | undefined {
    const configs = this.data.filter((config) => config.base_asset === baseAsset);

    if (configs.length > 1) {
      throw new Error(
        `Invalid oracle router state: Multiple configurations found for base asset ${baseAsset}. ` +
        `Expected at most one configuration per base asset, but found ${configs.length}.`,
      );
    }

    return configs[0] ? new OracleConfig(configs[0], this.config) : undefined;
  }

  /**
   * Get oracle configurations for a specific quote asset (all base assets).
   *
   * @param quoteAsset - The quote asset address
   * @returns Array of configurations where this asset is the quote as OracleConfig entities
   *
   * @example
   * ```typescript
   * const usdQuotedPairs = oracleRouter.getConfigsForQuoteAsset("0x1::usd::USD");
   * console.log(`${usdQuotedPairs.length} assets have USD pricing`);
   * ```
   */
  getConfigsForQuoteAsset(quoteAsset: string): OracleConfig[] {
    const fragments = this.data.filter((config) => config.quote_asset === quoteAsset);
    return fragments.map((fragment) => new OracleConfig(fragment, this.config));
  }

  /**
   * Find asset pairs that can be priced (have oracle configurations).
   *
   * @returns Map from base asset to quote asset
   *
   * @example
   * ```typescript
   * const availablePairs = oracleRouter.getAvailableAssetPairs();
   * availablePairs.forEach((quoteAsset, baseAsset) => {
   *   console.log(`Can price ${baseAsset} in terms of ${quoteAsset}`);
   * });
   *
   * // Check if a specific base asset has pricing
   * const btcQuoteAsset = availablePairs.get("0x1::btc::BTC");
   * if (btcQuoteAsset) {
   *   console.log(`BTC can be priced in terms of ${btcQuoteAsset}`);
   * }
   * ```
   */
  getAvailableAssetPairs(): Map<string, string> {
    const pairs = new Map<string, string>();
    this.getAllConfigs().forEach((config) => {
      if (config.baseAsset && config.quoteAsset) {
        pairs.set(config.baseAsset, config.quoteAsset);
      }
    });
    return pairs;
  }

  /**
   * Get unique oracle addresses used by this router.
   *
   * @returns Array of unique oracle implementation addresses
   *
   * @example
   * ```typescript
   * const oracles = oracleRouter.getUniqueOracles();
   * console.log(`Router uses ${oracles.length} different oracle implementations`);
   * ```
   */
  getUniqueOracles(): string[] {
    const oracles = new Set<string>();
    this.data.forEach((config) => {
      if (config.oracle) {
        oracles.add(config.oracle);
      }
    });
    return Array.from(oracles);
  }

  /**
   * Get statistics about the oracle router configuration.
   *
   * @returns Object containing various statistics
   *
   * @example
   * ```typescript
   * const stats = oracleRouter.getStats();
   * console.log(`Total configs: ${stats.totalConfigs}`);
   * console.log(`Active configs: ${stats.activeConfigs}`);
   * console.log(`Unique oracles: ${stats.uniqueOracles}`);
   * console.log(`Asset pairs: ${stats.assetPairs}`);
   * ```
   */
  getStats(): {
    totalConfigs: number;
    uniqueOracles: number;
    uniqueBaseAssets: number;
    uniqueQuoteAssets: number;
    assetPairs: number;
    oracleKindDistribution: Record<string, number>;
  } {
    const uniqueOracles = new Set<string>();
    const uniqueBaseAssets = new Set<string>();
    const uniqueQuoteAssets = new Set<string>();

    this.data.forEach((config) => {
      if (config.oracle) uniqueOracles.add(config.oracle);
      if (config.base_asset) uniqueBaseAssets.add(config.base_asset);
      if (config.quote_asset) uniqueQuoteAssets.add(config.quote_asset);
    });

    const oracleKindDistribution: Record<string, number> = {};
    this.data.forEach((config) => {
      const kind = config.oracle_kind || "unknown";
      oracleKindDistribution[kind] = (oracleKindDistribution[kind] || 0) + 1;
    });

    return {
      totalConfigs: this.data.length,
      uniqueOracles: uniqueOracles.size,
      uniqueBaseAssets: uniqueBaseAssets.size,
      uniqueQuoteAssets: uniqueQuoteAssets.size,
      assetPairs: this.getAvailableAssetPairs().size,
      oracleKindDistribution,
    };
  }

  /**
   * Check if a specific asset pair has oracle configuration or pricing path.
   *
   * This method implements path finding in the DAP (Directed Acyclic Path) structure
   * to determine if there's a valid pricing path from baseAsset to quoteAsset.
   * It supports both direct pricing and multi-hop pricing through intermediate assets.
   *
   * The algorithm mirrors the Move contract's `get_common_ancestor` function:
   * 1. If both assets are the same, return true
   * 2. Check if one asset can reach the other directly
   * 3. Find common ancestor by comparing paths to root nodes
   *
   * @param baseAsset - The base asset address
   * @param quoteAsset - The quote asset address
   * @returns True if a pricing path exists (direct or indirect)
   *
   * @example
   * ```typescript
   * // Direct pricing: BTC -> USD
   * if (oracleRouter.hasPricing("0x1::btc::BTC", "0x1::usd::USD")) {
   *   console.log("BTC/USD pricing is available");
   * }
   *
   * // Multi-hop pricing: BTC -> ETH -> USD (if BTC->ETH and ETH->USD exist)
   * if (oracleRouter.hasPricing("0x1::btc::BTC", "0x1::usd::USD")) {
   *   console.log("BTC/USD pricing is available via multi-hop");
   * }
   * ```
   */
  hasPricing(baseAsset: string, quoteAsset: string): boolean {
    return this.getCommonAncestor(baseAsset, quoteAsset) !== null;
  }

  /**
   * Find the common ancestor of two assets in the DAP structure.
   *
   * This implements the same logic as the Move contract's `get_common_ancestor` function.
   * The common ancestor is the asset that both base and quote assets can be priced against.
   *
   * @param a - First asset address
   * @param b - Second asset address
   * @returns The common ancestor asset address, or null if no common ancestor exists
   *
   * @example
   * ```typescript
   * // Find common pricing base for BTC and ETH
   * const commonBase = oracleRouter.getCommonAncestor("0x1::btc::BTC", "0x1::eth::ETH");
   * if (commonBase) {
   *   console.log(`Both BTC and ETH can be priced against: ${commonBase}`);
   * }
   * ```
   */
  private getCommonAncestor(a: string, b: string): string | null {
    // If both assets are the same, return that asset
    if (a === b) {
      return a;
    }

    // Get paths from both assets to their respective roots
    const pathAB = this.getPathsToRoot(a, b);
    const pathBA = this.getPathsToRoot(b, a);

    // Check if one asset is directly reachable from the other
    if (pathAB.length > 0 && pathAB[pathAB.length - 1] === b) {
      return b;
    }
    if (pathBA.length > 0 && pathBA[pathBA.length - 1] === a) {
      return a;
    }

    // Find common ancestor by comparing paths from the roots (end of vectors)
    let commonAncestor: string | null = null;
    let i = pathAB.length;
    let j = pathBA.length;

    // Iterate backwards from the roots
    while (i > 0 && j > 0) {
      i--;
      j--;
      const nodeA = pathAB[i];
      const nodeB = pathBA[j];

      if (nodeA === nodeB) {
        // This node is common to both paths
        commonAncestor = nodeA;
      } else {
        // Paths have diverged, stop searching
        break;
      }
    }

    return commonAncestor;
  }

  /**
   * Get the path from asset `a` towards `until`, or to the root if `until` is not reachable.
   *
   * This mirrors the Move contract's `get_paths` function. It follows the DAP structure
   * where each asset has at most one outgoing edge (quote asset).
   *
   * @param a - Starting asset address
   * @param until - Target asset to stop at (if reachable)
   * @returns Array of asset addresses in the path from `a` towards `until` or to the root
   */
  private getPathsToRoot(a: string, until: string): string[] {
    const assetPairs = this.getAvailableAssetPairs();
    const path: string[] = [];
    let currentNode = a;

    while (true) {
      path.push(currentNode);

      // Stop if we find the target
      if (currentNode === until) {
        break;
      }

      // Get the quote asset for current node (following the edge)
      const nextAsset = assetPairs.get(currentNode);
      if (!nextAsset) {
        // No outgoing edge, this is a root node
        break;
      }

      currentNode = nextAsset;
    }

    return path;
  }

  /**
   * Get the current price for a specific asset pair from the oracle router on-chain.
   * This method calls the oracle router smart contract to fetch the current price
   * for the specified base and quote assets.
   *
   * @param baseAsset - The base asset address
   * @param quoteAsset - The quote asset address
   * @returns Promise containing the price as a bigint, or null if price cannot be fetched
   * @throws Error if no Aptos client is configured or if no oracle configuration exists for the pair
   *
   * @example
   * ```typescript
   * const price = await oracleRouter.getPrice("0x1::btc::BTC", "0x1::usd::USD");
   * if (price !== null) {
   *   console.log(`BTC/USD price: ${price.toString()}`);
   * } else {
   *   console.log("Price not available");
   * }
   * ```
   */
  async getPrice(baseAsset: string, quoteAsset: string): Promise<bigint | null> {
    if (!this.config?.aptosClient) {
      throw new Error(
        "Aptos client is required to fetch on-chain price. Please provide an AptosConfig or Aptos client in YeapConfig.",
      );
    }

    try {
      // Get the yeap_lens address from configuration
      if (!this.config.hasAddress("yeap_lens")) {
        throw new Error(
          "yeap_lens address not found in configuration. Please add 'yeap_lens' to the addresses mapping in YeapConfig.",
        );
      }

      const yeapLensAddress = this.config.yeapLensAddress;

      // Prepare the view function call to get price from oracle router
      const viewFunctionData: InputViewFunctionData = {
        function: `${yeapLensAddress}::oracle_lens::get_price_of_pair` as `${string}::${string}::${string}`,
        typeArguments: [],
        functionArguments: [this.routerAddress, baseAsset, quoteAsset],
      };

      // Call the view function on-chain
      const result = await this.config.aptosClient.view({ payload: viewFunctionData });

      // The result should be an array with the price as the first element
      if (result && result.length > 0) {
        const priceValue = result[0];

        // Convert to bigint if it's a string or number
        if (typeof priceValue === "string") {
          return BigInt(priceValue);
        } else if (typeof priceValue === "number") {
          return BigInt(priceValue);
        } else if (typeof priceValue === "bigint") {
          return priceValue;
        }
      }

      return null;
    } catch (error: any) {
      // Log the error for debugging but don't throw - return null to indicate price unavailable
      console.warn(
        `Failed to fetch price for ${baseAsset}/${quoteAsset} from oracle router ${this.routerAddress}: ${error.message}`,
      );
      return null;
    }
  }

  /**
   * Convert oracle kind number to human-readable description.
   *
   * @param oracleKind - The oracle kind number
   * @returns Human-readable oracle type description
   *
   * @example
   * ```typescript
   * const description = oracleRouter.getOracleKindDescription(0);
   * console.log(description); // "Primary/Backup Oracle (Pyth + Switchboard)"
   * ```
   */
  static getOracleKindDescription(oracleKind: number): string {
    switch (oracleKind) {
      case 0:
        return "Primary/Backup Oracle (Pyth + Switchboard)";
      case 1:
        return "Vault Oracle (Asset redemption rate)";
      case 2:
        return "Fixed Price Oracle (Static price)";
      case 3:
        return "Delegate Oracle (Recursive routing)";
      default:
        return `Unknown Oracle Kind (${oracleKind})`;
    }
  }

  /**
   * Get latest Pyth price updates by fetching from Hermes price service.
   *
   * This method collects all unique Pyth feed IDs from the router configurations
   * and retrieves their latest price update data from the configured Hermes price service.
   *
   * @returns Promise resolving to an array of PriceFeed containing the latest price updates for Pyth feeds
   *
   * @example
   * ```typescript
   * const updates = await oracleRouter.getPythPriceUpdate();
   * console.log(`Received ${updates.length} Pyth price updates`);
   * ```
   */
  async getPythPriceUpdate(): Promise<PriceFeed[] | undefined> {
    if (!this.config) {
      throw new Error("YeapConfig is required to fetch Pyth price updates. Please construct OracleRouter with a YeapConfig instance.");
    }

    // Collect unique Pyth feed IDs from the router configurations
    const feedIds = Array.from(
      new Set(
        this.data
          .map((c) => c.pyth_oracle_config?.pyth_id)
          .filter((id): id is string => Boolean(id))
      )
    );

    if (feedIds.length === 0) {
      return [];
    }

    try {
      const updates = await this.config.hermesPriceService.getLatestPriceFeeds(feedIds);
      if (!updates || updates.length === 0) {
        console.warn(`No Pyth price updates found for ${feedIds.length} feeds.`);
        return undefined;
      } else {
        return updates;
      }
    } catch (error: any) {
      console.warn(`Failed to fetch Pyth price updates for ${feedIds.length} feeds: ${error?.message ?? error}`);
      return undefined;
    }
  }
}
