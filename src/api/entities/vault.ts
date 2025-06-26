// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { getLatestVaultState, getVaultInfoByAddress, getVaultUnderlyingAssetBalance } from "../../internal";
import {
  YeapVaultSettings,
  YeapFungibleAssetMetadata,
  YeapFungibleAssetBalance,
  YeapCurrentObject,
  YeapVaultState,
  YeapAdaptiveIrmConfig,
  YeapAdaptiveIrmState,
  YeapFixedRateIrmConfig,
  YeapKinkedIrmConfig,
  YeapVaultProtocolCaps,
} from "../interfaces";
import {
  transformVaultState,
  transformVaultSettings,
  transformFungibleAssetMetadata,
  transformCurrentObject,
  transformAdaptiveIrmConfig,
  transformAdaptiveIrmState,
  transformFixedRateIrmConfig,
  transformKinkedIrmConfig,
  transformVaultProtocolCaps,
} from "../transforms";
import { GetVaultInfoByAddressQuery, VaultInfoFieldsFragment } from "../../types";
import { VaultState } from "./vaultState";

// Field transformers type
type RawVaultData = NonNullable<VaultInfoFieldsFragment>;

/**
 * Represents a vault entity with convenient methods to access vault data.
 */
export class Vault {
  private readonly config: YeapConfig;
  private readonly _rawVaultData: RawVaultData;

  public readonly vaultAddress: string;

  constructor(config: YeapConfig, rawData: RawVaultData) {
    this.config = config;
    this._rawVaultData = rawData;
    this.vaultAddress = rawData.vault_address;
  }

  /**
   * Get the vault settings.
   */
  get settings(): YeapVaultSettings | null {
    const rawSettings = this._rawVaultData.settings;
    return rawSettings ? transformVaultSettings(rawSettings) : null;
  }

  /**
   * Get the underlying asset metadata.
   */
  get underlyingAssetMetadata(): YeapFungibleAssetMetadata | null {
    const rawMetadata = this._rawVaultData.underlying_asset_metadata;
    return rawMetadata ? transformFungibleAssetMetadata(rawMetadata) : null;
  }

  /**
   * Get the debt asset metadata.
   */
  get debtAssetMetadata(): YeapFungibleAssetMetadata | null {
    const rawMetadata = this._rawVaultData.debt_asset_metadata;
    return rawMetadata ? transformFungibleAssetMetadata(rawMetadata) : null;
  }

  /**
   * Get the vault asset metadata.
   */
  get vaultAssetMetadata(): YeapFungibleAssetMetadata | null {
    const rawMetadata = this._rawVaultData.vault_asset_metadata;
    return rawMetadata ? transformFungibleAssetMetadata(rawMetadata) : null;
  }

  get governanceObjectAddress(): string {
    return this._rawVaultData.governance_object_address!;
  }

  /**
   * Get the governance object.
   */
  get governanceObject(): YeapCurrentObject | null {
    const rawObject = this._rawVaultData.governance_object;
    return rawObject ? transformCurrentObject(rawObject) : null;
  }

  /**
   * Get the adaptive interest rate model configuration.
   */
  get adaptiveIrmConfig(): YeapAdaptiveIrmConfig | null {
    const rawConfig = this._rawVaultData.adaptive_irm_config;
    return rawConfig ? transformAdaptiveIrmConfig(rawConfig) : null;
  }


  /**
   * Get the fixed rate interest rate model configuration.
   */
  get fixedRateIrmConfig(): YeapFixedRateIrmConfig | null {
    const rawConfig = this._rawVaultData.fixed_rate_irm_config;
    return rawConfig ? transformFixedRateIrmConfig(rawConfig) : null;
  }

  /**
   * Get the kinked interest rate model configuration.
   */
  get kinkedIrmConfig(): YeapKinkedIrmConfig | null {
    const rawConfig = this._rawVaultData.kinked_irm_config;
    return rawConfig ? transformKinkedIrmConfig(rawConfig) : null;
  }

  /**
   * Get all protocol configurations for this vault.
   */
  get protocolConfigs(): YeapVaultProtocolCaps[] {
    const rawConfigs = this._rawVaultData.protocol_configs;
    return rawConfigs
      .map((config) => transformVaultProtocolCaps(config))
      .filter((config): config is YeapVaultProtocolCaps => config !== null);
  }

  /**
   * Creates a new YeapVault instance from the given vault address.
   * @param config The YeapConfig instance.
   * @param vaultAddress The address of the vault.
   * @returns A new YeapVault instance.
   */
  static async fromAddress(config: YeapConfig, vaultAddress: string): Promise<Vault> {
    const vaultInfo = await getVaultInfoByAddress({
      yeapConfig: config,
      vaultAddress,
    });
    if (!vaultInfo) {
      throw new Error(`Vault with address ${vaultAddress} not found`);
    }
    return new Vault(config, vaultInfo);
  }


  /**
   * Get the latest vault state with derived financial metrics.
   * @returns A VaultState instance with computed financial metrics
   */
  async getLatestState(): Promise<VaultState> {
    const rawResult = await getLatestVaultState({
      yeapConfig: this.config,
      vaultAddress: this.vaultAddress,
    });

    if (!rawResult) {
      throw new Error(`Could not get latest state for vault ${this.vaultAddress}`);
    }

    return VaultState.fromRawData(rawResult);
  }

  async getUnderlyingAssetBalance(): Promise<YeapFungibleAssetBalance | null> {
    const rawBalance = await getVaultUnderlyingAssetBalance({
      yeapConfig: this.config,
      vaultAddress: this.vaultAddress,
    });

    if (!rawBalance) {
      throw new Error(`Could not find vault info for address ${this.vaultAddress}`);
    }

    return {
      amount: rawBalance.amount,
      isFrozen: rawBalance.is_frozen,
      storageId: rawBalance.storage_id,
      metadata: transformFungibleAssetMetadata(rawBalance.metadata),
    };
  }
}
