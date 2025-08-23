// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0


import { Maybe, OracleRouterConfigFieldsFragment } from "../../types";
import { YeapConfig } from "../yeapConfig";
import { AccountAddress, InputViewFunctionData } from "@aptos-labs/ts-sdk";
import { transformFungibleAssetMetadata } from "../transforms";
import { YeapFungibleAssetMetadata, ChainlinkOracleConfig, PythOracleConfig, FixedPriceOracleConfig, SwitchboardOracleConfig, } from "../interfaces";

export const PRICE_PRECISION = BigInt(10 ** 18); // 18 decimal places for price values, adjust as needed
export const ORACLE_UNIT_ASSET = "0x0"; // Placeholder for the unit asset address

/**
 * Represents an Oracle Configuration in the Yeap protocol.
 * This entity provides a clean interface to access oracle configuration data
 * with computed properties and utility methods.
 * @group Entity
 */
export class OracleConfig {
    private readonly data: OracleRouterConfigFieldsFragment;
    private readonly config?: YeapConfig;

    /**
     * @param data - The raw oracle router config data from GraphQL
     * @param config - Optional YeapConfig for on-chain interactions
     */
    constructor(data: OracleRouterConfigFieldsFragment, config?: YeapConfig) {
        this.data = data;
        this.config = config;
    }

    // ===== Core Properties =====

    /**
     * Get the base asset address for this oracle configuration.
     * @returns The base asset address
     */
    get baseAsset(): AccountAddress {
        return AccountAddress.from(this.data.base_asset);
    }

    get baseAssetMetadata(): Maybe<YeapFungibleAssetMetadata> {
        if (this.data.base_asset_metadata) {
            return transformFungibleAssetMetadata(this.data.base_asset_metadata);
        } else {
            return null;
        }
    }

    get quoteAssetMetadata(): Maybe<YeapFungibleAssetMetadata> {
        if (this.data.quote_asset_metadata) {
            return transformFungibleAssetMetadata(this.data.quote_asset_metadata);
        } else {
            return null;
        }
    }

    /**
     * Get the quote asset address for this oracle configuration.
     * @returns The quote asset address
     */
    get quoteAsset(): AccountAddress {
        return AccountAddress.from(this.data.quote_asset);
    }

    /**
     * Get the oracle router address.
     * @returns The oracle router address
     */
    get oracleRouter(): AccountAddress {
        return AccountAddress.from(this.data.oracle_router);
    }

    /**
     * Get the oracle address (if available).
     * @returns The oracle address or null if not set
     */
    get oracle(): AccountAddress {
        return AccountAddress.from(this.data.oracle!);
    }

    /**
     * Get the oracle kind/type identifier.
     * @returns The oracle kind as a number, or null if not set
     */
    get oracleKind(): number {

        const parsed = parseInt(this.data.oracle_kind!, 10);
        return parsed;
    }

    // /**
    //  * Check if this configuration is marked as deleted.
    //  * @returns True if the configuration is deleted, false otherwise
    //  */
    // get isDeleted(): boolean {
    //     return this.data.deleted === true;
    // }

    // // ===== Utility Methods =====

    // /**
    //  * Check if this oracle configuration is active (not deleted).
    //  * @returns True if the configuration is active, false if deleted
    //  */
    // get isActive(): boolean {
    //     return !this.isDeleted;
    // }

    /**
     * Get a string representation of the asset pair for this oracle.
     * @returns A formatted string showing the base to quote asset pair
     */
    get assetPair(): string {
        return `${this.baseAsset} → ${this.quoteAsset}`;
    }

    /**
     * Get the oracle kind as a descriptive string.
     * @returns A string describing the oracle type, or "Unknown" if not recognized
     */
    get oracleTypeDescription(): string {
        switch (this.oracleKind) {
            case 0:
                return "Primary Backup Oracle"; // Uses Chainlink primary, then Pyth, then Switchboard fallback
            case 1:
                return "Vault Oracle"; // Calculates prices for vault shares/LP tokens
            case 2:
                return "Fixed Price Oracle"; // Provides static prices for testing or stablecoin pegs
            case 3:
                return "Delegate Oracle"; // Delegates to another oracle router for multi-layer routing
            default:
                return "Unknown Oracle Type";
        }
    }

    /**
     * Get detailed information about the oracle type and its functionality.
     * @returns A detailed description of what this oracle type does
     */
    get oracleTypeDetails(): string {
        switch (this.oracleKind) {
            case 0:
                return "Primary Backup Oracle: Uses Chainlink as the primary price source, falling back to Pyth, then Switchboard when earlier sources are stale or unavailable.";
            case 1:
                return "Vault Oracle: Calculates prices for vault shares/LP tokens based on their underlying asset values.";
            case 2:
                return "Fixed Price Oracle: Provides static prices, useful for testing scenarios or stablecoin pegs.";
            case 3:
                return "Delegate Oracle: Delegates price queries to another oracle router, enabling complex multi-layer routing scenarios.";
            default:
                return "Unknown Oracle Type: The oracle kind is not recognized or supported.";
        }
    }

    // /**
    //  * Check if this oracle configuration has a valid oracle address.
    //  * @returns True if oracle address is set and not empty
    //  */
    // get hasOracle(): boolean {
    //     const oracle = this.oracle;
    //     return oracle !== null && oracle.length > 0;
    // }

    /**
     * Check if this is a Primary Backup Oracle configuration.
     * @returns True if this oracle uses Pyth with Switchboard backup
     */
    get isPrimaryBackupOracle(): boolean {
        return this.oracleKind === 0;
    }

    /**
     * Check if this is a Vault Oracle configuration.
     * @returns True if this oracle calculates vault share prices
     */
    get isVaultOracle(): boolean {
        return this.oracleKind === 1;
    }

    /**
     * Check if this is a Fixed Price Oracle configuration.
     * @returns True if this oracle provides static prices
     */
    get isFixedPriceOracle(): boolean {
        return this.oracleKind === 2;
    }

    /**
     * Check if this is a Delegate Oracle configuration.
     * @returns True if this oracle delegates to another router
     */
    get isDelegateOracle(): boolean {
        return this.oracleKind === 3;
    }

    /**
     * Check if this is a Chainlink Oracle configuration.
     * @returns True if this oracle uses Chainlink as the primary source
     */
    get isChainlinkOracle(): boolean {
        return this.oracleKind === 4;
    }

    /**
     * Get the current configuration for the Fixed Price Oracle.
     */

    get fixedPriceConfig(): Maybe<FixedPriceOracleConfig> {
        if (!this.isFixedPriceOracle) {
            return null;
        }
        const cfg = this.data.fixed_price_oracle_config;
        if (!cfg) return null;
        return {
            oracle_address: AccountAddress.from(cfg.oracle_address),
            base: AccountAddress.from(cfg.base_asset),
            quote: AccountAddress.from(cfg.quote_asset),
            price: cfg.price!,
        };
    }

    /**
     * Get the current configuration for the Pyth Oracle.
     */

    get pythOracleConfig(): Maybe<PythOracleConfig> {
        if (!this.isPrimaryBackupOracle) {
            return null;
        }
        const cfg = this.data.pyth_oracle_config;
        if (!cfg) return null;
        return {
            oracle_address: AccountAddress.from(cfg.oracle_address),
            base: AccountAddress.from(cfg.base),
            quote: AccountAddress.from(cfg.quote),
            pyth_id: cfg.pyth_id,
            max_age_in_seconds: Number(cfg.max_age_in_seconds),
            max_confidence: cfg.max_confidence,
        };
    }

    /**
     * Get the current configuration for the Switchboard Oracle.
     */

    get switchboardOracleConfig(): Maybe<SwitchboardOracleConfig> {
        if (!this.isPrimaryBackupOracle) {
            return null;
        }
        const cfg = this.data.switchboard_oracle_config;
        if (!cfg) return null;
        return {
            oracle_address: AccountAddress.from(cfg.oracle_address),
            base: AccountAddress.from(cfg.base),
            quote: AccountAddress.from(cfg.quote),
            aggregator_address: cfg.aggregator_address!,
            max_age_in_seconds: Number(cfg.max_age_in_seconds),
            max_stdev: cfg.max_stdev,
        };
    }

    /**
     * Get the current configuration for the Chainlink Oracle.
     */
    get chainlinkOracleConfig(): Maybe<ChainlinkOracleConfig> {
        if (!this.isChainlinkOracle) {
            return null;
        }
        const cfg = this.data.chainlink_oracle_config;
        if (!cfg) return null;

        return {
            oracle_address: AccountAddress.from(cfg.oracle_address),
            base: AccountAddress.from(cfg.base),
            quote: AccountAddress.from(cfg.quote),
            feed_id: cfg.feed_id,
            max_age_in_seconds: parseInt(cfg.max_age_in_seconds, 10),
            feed_decimals: Number(cfg.feed_decimals),
        };
    }

    /**
     * Convert this oracle router configuration to a plain object for serialization.
     * @returns A plain object representation of the oracle router configuration
     */
    toJSON(): Record<string, any> {
        return {
            baseAsset: this.baseAsset,
            quoteAsset: this.quoteAsset,
            oracleRouter: this.oracleRouter,
            oracle: this.oracle,
            oracleKind: this.oracleKind,
            oracleTypeDescription: this.oracleTypeDescription,
            oracleTypeDetails: this.oracleTypeDetails,
            assetPair: this.assetPair,
            isPrimaryBackupOracle: this.isPrimaryBackupOracle,
            isVaultOracle: this.isVaultOracle,
            isFixedPriceOracle: this.isFixedPriceOracle,
            isDelegateOracle: this.isDelegateOracle,
            chainlinkOracleConfig: this.chainlinkOracleConfig ?? undefined,
            pythOracleConfig: this.pythOracleConfig ?? undefined,
            switchboardOracleConfig: this.switchboardOracleConfig ?? undefined,
            fixedPriceConfig: this.fixedPriceConfig ?? undefined,
        };
    }

    /**
     * Get a string representation of this oracle router configuration.
     * @returns A formatted string describing the configuration
     */
    toString(): string {
        const oracleInfo = `Oracle: ${this.oracle} (${this.oracleTypeDescription})`;

        return `OracleConfig[${this.assetPair}] - Router: ${this.oracleRouter}, ${oracleInfo}`;
    }

    /**
     * Get the current price from the oracle router on-chain.
     * This method calls the oracle router smart contract to fetch the current price
     * for the configured asset pair.
     *
     * @returns Promise containing the price as a bigint, or null if price cannot be fetched
     * @throws Error if no Aptos client is configured or if the oracle router call fails
     *
     * @example
     * ```typescript
     * const oracleRouter = await yeap.oracleRouterApi.getRouter "0xrouter...";
     * const config = oracleRouter?.getOracleConfig "0xbase...", "0xquote...";
     * if (config) {
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
     */
    async get_price(): Promise<bigint | null> {
        if (!this.config?.aptosClient) {
            throw new Error(
                "Aptos client is required to fetch on-chain price. Please provide an AptosConfig or Aptos client in YeapConfig.",
            );
        }

        try {
            // Get the yeap_oracle address from configuration
            if (!this.config.hasAddress("yeap_oracle")) {
                throw new Error(
                    "yeap_oracle address not found in configuration. Please add 'yeap_oracle' to the addresses mapping in YeapConfig.",
                );
            }

            const yeapLensAddress = this.config.yeapLensAddress;

            // Prepare the view function call to get price from oracle router
            const viewFunctionData: InputViewFunctionData = {
                function: `${yeapLensAddress}::oracle_lens::get_price_of_pair`,
                typeArguments: [],
                functionArguments: [this.oracleRouter, this.baseAsset, this.quoteAsset],
            };

            // Call the view function on-chain
            const result = await this.config.aptosClient.view({payload: viewFunctionData});

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
                `Failed to fetch price from yeap oracle ${this.config?.getAddress("yeap_oracle") || "unknown"}: ${error.message}`,
            );
            return null;
        }
    }
}
