// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

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
 *
 * // Basic configuration
 * const config = new YeapConfig({
 *   endpoint: "https://your-yeap-graphql-api.com/graphql"
 * });
 *
 * // Configuration with API key
 * const configWithAuth = new YeapConfig({
 *   endpoint: "https://your-yeap-graphql-api.com/graphql",
 *   apiKey: "your-api-key",
 *   timeout: 30000
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

  /**
   * Create a new YeapConfig instance
   *
   * @param settings - Configuration settings for the Yeap client
   */
  constructor(settings?: YeapSettings) {
    this.endpoint =
      settings?.endpoint || "https://api.testnet.aptoslabs.com/v1/graphql";
    this.apiKey = settings?.apiKey;
    this.timeout = settings?.timeout || 30000;
    this.headers = settings?.headers || {};

    if (!this.endpoint) {
      throw new Error("Yeap endpoint is required in configuration");
    }
  }
}
