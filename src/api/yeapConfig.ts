// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { AptosPriceServiceConnection } from "@pythnetwork/pyth-aptos-js";
/**
 * Known contract address names in the Yeap protocol
 */
export type YeapAddressName = "yeap_oracle" | "yeap_vault" | "yeap_scmd_protocol" | "yeap_irm" | "yeap_lens" | "yeap_earn_api" | "yeap_borrow_api";

/**
 * Contract addresses mapping for the Yeap protocol
 */
export type YeapAddresses = Partial<Record<YeapAddressName, string>>;

/**
 * Configuration settings for the Yeap client
 */
export interface YeapSettings {
  /**
   * The GraphQL endpoint URL for the Yeap indexer
   */
  endpoint?: string;
  /**
   * Optional API key for authentication
   */
  apiKey?: string;
  /**
   * Request timeout in milliseconds
   */
  timeout?: number;
  /**
   * Custom headers to include with requests
   */
  headers?: Record<string, string>;
  /**
   * Optional Aptos client for on-chain interactions
   */
  aptosClient?: Aptos;
  /**
   * Optional Aptos configuration for creating an Aptos client
   */
  aptosConfig?: AptosConfig;
  /**
   * Contract addresses mapping for the Yeap protocol
   */
  addresses?: YeapAddresses;
  hermesUrl: string;
}

/**
 * The YeapConfig class holds the configuration settings for the Yeap client.
 * It provides a way to configure various options such as the GraphQL endpoint,
 * API key, and other settings needed to interact with the Yeap indexer.
 *
 * This follows the same pattern as AptosConfig from the main Aptos SDK.
 *
 * @example
 * ```typescript
 * import { YeapConfig } from "@aptos-labs/yeap-sdk";
 * import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
 *
 * // Basic configuration
 * const config = new YeapConfig({
 *   endpoint: "https://your-yeap-graphql-api.com/graphql"
 * });
 *
 * // Configuration with API key and Aptos client
 * const aptosConfig = new AptosConfig({ network: Network.TESTNET });
 * const configWithAptos = new YeapConfig({
 *   endpoint: "https://your-yeap-graphql-api.com/graphql",
 *   apiKey: "your-api-key",
 *   timeout: 30000,
 *   aptosConfig: aptosConfig,
 *   addresses: {
 *     yeap_oracle: "0x1234567890abcdef...",
 *     oracle_router: "0x1234567890abcdef...",
 *     vault_factory: "0xabcdef1234567890...",
 *     price_oracle: "0xfedcba0987654321..."
 *   }
 * });
 * ```
 * @group Configuration
 */
export class YeapConfig {
  /** The GraphQL endpoint URL for the Yeap indexer */
  readonly endpoint: string;

  /** Optional API key for authentication */
  readonly apiKey?: string;

  /** Request timeout in milliseconds */
  readonly timeout: number;

  /** Custom headers to include with requests */
  readonly headers: Record<string, string>;

  /** Aptos client for on-chain interactions */
  readonly aptosClient?: Aptos;

  /** Contract addresses mapping for the Yeap protocol */
  readonly addresses: YeapAddresses;

  readonly hermesPriceService?: AptosPriceServiceConnection;

  /**
   * Create a new YeapConfig instance
   *
   * @param settings - Configuration settings for the Yeap client
   */
  constructor(settings?: YeapSettings) {
    this.endpoint = settings?.endpoint || "https://api.testnet.aptoslabs.com/v1/graphql";
    this.apiKey = settings?.apiKey;
    this.timeout = settings?.timeout || 30000;
    this.headers = settings?.headers || {};
    this.addresses = settings?.addresses || {};

    // Initialize Aptos client if provided
    if (settings?.aptosClient) {
      this.aptosClient = settings.aptosClient;
    } else if (settings?.aptosConfig) {
      this.aptosClient = new Aptos(settings.aptosConfig);
    }


    if (!this.endpoint) {
      throw new Error("Yeap endpoint is required in configuration");
    }
    if (!settings?.hermesUrl) {
      throw new Error("Hermes URL is required in configuration");
    }
    this.hermesPriceService = new AptosPriceServiceConnection(settings.hermesUrl, {
      priceFeedRequestConfig: {
        binary: true
      }
    });

  }

  /**
   * Get a contract address by name
   * @param addressName - The name of the contract address to retrieve
   * @returns The contract address
   * @throws Error if the address is not found
   */
  getAddress(addressName: YeapAddressName): string {
    const address = this.addresses[addressName];
    if (!address) {
      throw new Error(
        `Contract address '${addressName}' not found in configuration. Available addresses: ${Object.keys(this.addresses).join(", ")}`,
      );
    }
    return address;
  }

  /**
   * Check if a contract address exists in the configuration
   * @param addressName - The name of the contract address to check
   * @returns True if the address exists, false otherwise
   */
  hasAddress(addressName: YeapAddressName): boolean {
    return addressName in this.addresses;
  }

  /**
   * Get the Yeap Oracle address
   * @returns The Yeap Oracle contract address
   * @throws Error if the address is not configured
   */
  getYeapOracleAddress(): string {
    return this.getAddress("yeap_oracle");
  }

  get yeapLensAddress(): string {
    return this.getAddress("yeap_lens");
  }

  get yeapScmdProtocolAddress(): string {
    return this.getAddress("yeap_scmd_protocol");
  }

  get yeapEarnApiAddress(): string {
    return this.getAddress("yeap_earn_api");
  }

  get yeapBorrowApiAddress(): string {
    return this.getAddress("yeap_borrow_api");
  }
}
