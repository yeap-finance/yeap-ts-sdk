// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { OracleRouterConfigFieldsFragment } from "../../types";
import { YeapConfig } from "../yeapConfig";
import { InputViewFunctionData } from "@aptos-labs/ts-sdk";

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
    baseAsset(): string {
        return this.data.base_asset;
    }

    /**
     * Get the quote asset address for this oracle configuration.
     * @returns The quote asset address
     */
    quoteAsset(): string {
        return this.data.quote_asset;
    }

    /**
     * Get the oracle router address.
     * @returns The oracle router address
     */
    oracleRouter(): string {
        return this.data.oracle_router;
    }

    /**
     * Get the oracle address (if available).
     * @returns The oracle address or null if not set
     */
    oracle(): string | null {
        return this.data.oracle ?? null;
    }

    /**
     * Get the oracle kind/type identifier.
     * @returns The oracle kind as a number, or null if not set
     */
    oracleKind(): number | null {
        return this.data.oracle_kind ?? null;
    }

    /**
     * Check if this configuration is marked as deleted.
     * @returns True if the configuration is deleted, false otherwise
     */
    isDeleted(): boolean {
        return this.data.deleted === true;
    }

    // ===== Utility Methods =====

    /**
     * Check if this oracle configuration is active (not deleted).
     * @returns True if the configuration is active, false if deleted
     */
    isActive(): boolean {
        return !this.isDeleted();
    }

    /**
     * Get a string representation of the asset pair for this oracle.
     * @returns A formatted string showing the base to quote asset pair
     */
    assetPair(): string {
        return `${this.baseAsset()} → ${this.quoteAsset()}`;
    }

    /**
     * Get the oracle kind as a descriptive string.
     * @returns A string describing the oracle type, or "Unknown" if not recognized
     */
    oracleTypeDescription(): string {
        switch (this.oracleKind()) {
            case 0:
                return "Primary Backup Oracle"; // Uses Pyth as primary with Switchboard as backup
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
    oracleTypeDetails(): string {
        switch (this.oracleKind()) {
            case 0:
                return "Primary Backup Oracle: Uses Pyth as the primary price source with Switchboard as a backup fallback when Pyth data is stale or unreliable.";
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

    /**
     * Check if this oracle configuration has a valid oracle address.
     * @returns True if oracle address is set and not empty
     */
    hasOracle(): boolean {
        const oracle = this.oracle();
        return oracle !== null && oracle.length > 0;
    }

    /**
     * Check if this is a Primary Backup Oracle configuration.
     * @returns True if this oracle uses Pyth with Switchboard backup
     */
    isPrimaryBackupOracle(): boolean {
        return this.oracleKind() === 0;
    }

    /**
     * Check if this is a Vault Oracle configuration.
     * @returns True if this oracle calculates vault share prices
     */
    isVaultOracle(): boolean {
        return this.oracleKind() === 1;
    }

    /**
     * Check if this is a Fixed Price Oracle configuration.
     * @returns True if this oracle provides static prices
     */
    isFixedPriceOracle(): boolean {
        return this.oracleKind() === 2;
    }

    /**
     * Check if this is a Delegate Oracle configuration.
     * @returns True if this oracle delegates to another router
     */
    isDelegateOracle(): boolean {
        return this.oracleKind() === 3;
    }

    /**
     * Convert this oracle router configuration to a plain object for serialization.
     * @returns A plain object representation of the oracle router configuration
     */
    toJSON(): Record<string, any> {
        return {
            baseAsset: this.baseAsset(),
            quoteAsset: this.quoteAsset(),
            oracleRouter: this.oracleRouter(),
            oracle: this.oracle(),
            oracleKind: this.oracleKind(),
            oracleTypeDescription: this.oracleTypeDescription(),
            oracleTypeDetails: this.oracleTypeDetails(),
            isDeleted: this.isDeleted(),
            isActive: this.isActive(),
            assetPair: this.assetPair(),
            hasOracle: this.hasOracle(),
            isPrimaryBackupOracle: this.isPrimaryBackupOracle(),
            isVaultOracle: this.isVaultOracle(),
            isFixedPriceOracle: this.isFixedPriceOracle(),
            isDelegateOracle: this.isDelegateOracle(),
        };
    }

    /**
     * Get a string representation of this oracle router configuration.
     * @returns A formatted string describing the configuration
     */
    toString(): string {
        const status = this.isActive() ? "Active" : "Deleted";
        const oracleInfo = this.hasOracle() ? `Oracle: ${this.oracle()} (${this.oracleTypeDescription()})` : "No Oracle";

        return `OracleConfig[${this.assetPair()}] - Router: ${this.oracleRouter()}, ${oracleInfo}, Status: ${status}`;
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
     * const config = await yeap.oracleRouter.getConfigByPrimaryKey("0xbase...", "0xoracle...", "0xquote...");
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
            throw new Error("Aptos client is required to fetch on-chain price. Please provide an AptosConfig or Aptos client in YeapConfig.");
        }

        if (!this.hasOracle()) {
            throw new Error("No oracle address configured for this oracle router configuration.");
        }

        try {
            // Get the yeap_oracle address from configuration
            if (!this.config.hasAddress('yeap_oracle')) {
                throw new Error("yeap_oracle address not found in configuration. Please add 'yeap_oracle' to the addresses mapping in YeapConfig.");
            }

            const yeapOracleAddress = this.config.getAddress('yeap_oracle');

            // Prepare the view function call to get price from oracle router
            const viewFunctionData: InputViewFunctionData = {
                function: `${yeapOracleAddress}::oracle::get_quote`,
                typeArguments: [],
                functionArguments: [
                    this.oracleRouter(),
                    this.baseAsset(),
                    this.quoteAsset(),
                ],
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
            console.warn(`Failed to fetch price from yeap oracle ${this.config?.getAddress('yeap_oracle') || 'unknown'}: ${error.message}`);
            return null;
        }
    }
}
