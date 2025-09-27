// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Yeap SDK for Aptos
 *
 * This package provides a structured way to interact with the Yeap DeFi protocol's
 * GraphQL APIs following the same patterns as the main Aptos TypeScript SDK.
 *
 * @example
 * ```typescript
 * import { Yeap, YeapConfig } from "@aptos-labs/custom-indexer";
 *
 * const yeap = new Yeap(new YeapConfig({
 *   endpoint: "https://your-yeap-graphql-api.com/graphql",
 *   apiKey: "your-api-key" // optional
 * }));
 *
 * // Query vault data
 * const activeVaults = await yeap.vault.getActiveVaults();
 * const vaultInfo = await yeap.vault.getVaultInfoByAddress("0x123...");
 * ```
 */

export * from "./api";
export * from "./client";
export * from "./internal";
export * from "./utils";
export * as thirdparties from "./thirdparties";

// Export types in a namespaced way to avoid name collisions with API entities
export * from "./types/types";
export * as YeapGeneratedTypes from "./types/generated/types";
export * as YeapGeneratedQueries from "./types/generated/queries";
export * as YeapGeneratedOperations from "./types/generated/operations";
