// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "./yeapConfig";
import { VaultApi } from "./vaultApi";
import { ScmdPositionApi } from "./scmdPositionApi";

/**
 * The main entry point for interacting with the Yeap APIs,
 * providing access to various functionalities organized into
 * distinct namespaces.
 *
 * To utilize the SDK, instantiate a new Yeap object to gain
 * access to the complete range of SDK features.
 *
 * @example
 * ```typescript
 * import { Yeap, YeapConfig } from "@aptos-labs/custom-indexer";
 *
 * async function runExample() {
 *     // Create a configuration for connecting to the Yeap indexer
 *     const config = new YeapConfig({
 *       endpoint: "https://your-yeap-graphql-api.com/graphql",
 *       apiKey: "your-api-key" // optional
 *     });
 *
 *     // Initialize the Yeap client with the configuration
 *     const yeap = new Yeap(config);
 *
 *     // Access vault-related functionality
 *     const activeVaults = await yeap.vaultApi.getActiveVaults();
 *     const vaultInfo = await yeap.vaultApi.getVaultInfoByAddress("0x123...");
 *
 *     // Access position-related functionality
 *     const positions = await yeap.scmdPositionApi.getPositionsByOwner("0xabc...");
 *
 *     console.log("Yeap client initialized:", yeap);
 * }
 * runExample().catch(console.error);
 * ```
 * @group Client
 */
export class Yeap {
  readonly config: YeapConfig;

  readonly vaultApi: VaultApi;

  readonly scmdPositionApi: ScmdPositionApi;

  /**
   * Initializes a new instance of the Yeap client with the provided configuration settings.
   * This allows you to interact with various Yeap functionalities such as vaults and other DeFi features.
   *
   * @param settings - Configuration settings for the Yeap client.
   *
   * @example
   * ```typescript
   * import { Yeap, YeapConfig } from "@aptos-labs/custom-indexer";
   *
   * async function runExample() {
   *     // Create a new Yeap client with default settings
   *     const config = new YeapConfig({
   *       endpoint: "https://your-yeap-graphql-api.com/graphql"
   *     });
   *     const yeap = new Yeap(config);
   *
   *     console.log("Yeap client initialized:", yeap);
   * }
   * runExample().catch(console.error);
   * ```
   * @group Client
   */
  constructor(settings?: YeapConfig) {
    this.config = new YeapConfig(settings);
    this.vaultApi = new VaultApi(this.config);
    this.scmdPositionApi = new ScmdPositionApi(this.config);
  }
}

// extends Yeap interface so all the methods and properties
// from the other classes will be recognized by typescript.
export interface Yeap extends VaultApi, ScmdPositionApi {}

/**
In TypeScript, we can't inherit or extend from more than one class,
Mixins helps us to get around that by creating a partial classes
that we can combine to form a single class that contains all the methods and properties from the partial classes.
{@link https://www.typescriptlang.org/docs/handbook/mixins.html#alternative-pattern}

Here, we combine any subclass and the Yeap class.
 * @group Client
*/
function applyMixin(targetClass: any, baseClass: any, baseClassProp: string) {
  // Mixin instance methods
  Object.getOwnPropertyNames(baseClass.prototype).forEach((propertyName) => {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, propertyName);
    if (!propertyDescriptor) return;
    // eslint-disable-next-line func-names
    propertyDescriptor.value = function (...args: any) {
      return (this as any)[baseClassProp][propertyName](...args);
    };
    Object.defineProperty(targetClass.prototype, propertyName, propertyDescriptor);
  });
}

applyMixin(Yeap, VaultApi, "vaultApi");
applyMixin(Yeap, ScmdPositionApi, "scmdPositionApi");
