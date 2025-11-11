// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { getVaultInfoByAddress } from "../../internal";
import {
  YeapVaultSettings,
  YeapFungibleAssetMetadata,
  AptosObject,
  YeapAdaptiveIrmConfig,
  YeapFixedRateIrmConfig,
  YeapKinkedIrmConfig,
} from "../interfaces";
import {
  transformVaultSettings,
  transformFungibleAssetMetadata,
  transformCurrentObject,
  transformAdaptiveIrmConfig,
  transformFixedRateIrmConfig,
  transformKinkedIrmConfig,
} from "../transforms";
import { RawVaultData, Vault } from "../interfaces";

/** Factory to create a Vault interface instance from raw data */
export function createVault(config: YeapConfig, rawData: RawVaultData): Vault {
  // Eagerly transform once (simpler, avoids lazy cache complexity)
  const settings = rawData.settings ? (transformVaultSettings(rawData.settings) ?? undefined) : undefined;
  const underlyingAssetMetadata = rawData.underlying_asset_metadata
    ? (transformFungibleAssetMetadata(rawData.underlying_asset_metadata) ?? undefined)
    : undefined;
  const debtAssetMetadata = rawData.debt_asset_metadata
    ? (transformFungibleAssetMetadata(rawData.debt_asset_metadata) ?? undefined)
    : undefined;
  const vaultAssetMetadata = rawData.vault_asset_metadata
    ? (transformFungibleAssetMetadata(rawData.vault_asset_metadata) ?? undefined)
    : undefined;
  const governanceObject = rawData.governance_object
    ? (transformCurrentObject(rawData.governance_object) ?? undefined)
    : undefined;
  const adaptiveIrmConfig = rawData.adaptive_irm_config
    ? (transformAdaptiveIrmConfig(rawData.adaptive_irm_config) ?? undefined)
    : undefined;
  const fixedRateIrmConfig = rawData.fixed_rate_irm_config
    ? (transformFixedRateIrmConfig(rawData.fixed_rate_irm_config) ?? undefined)
    : undefined;
  const kinkedIrmConfig = rawData.kinked_irm_config
    ? (transformKinkedIrmConfig(rawData.kinked_irm_config) ?? undefined)
    : undefined;

  return {
    vaultAddress: rawData.vault_address,
    settings: settings!,
    underlyingAssetMetadata,
    debtAssetMetadata,
    vaultAssetMetadata,
    governanceObjectAddress: rawData.governance_object_address!,
    governanceObject,
    adaptiveIrmConfig,
    fixedRateIrmConfig,
    kinkedIrmConfig,
    creator: rawData.creator!,
    underlyingAsset: rawData.underlying_asset!,
    debtAsset: rawData.debt_asset!,
    // async getLatestState(this: Vault): Promise<VaultState> {
    //   const rawResult = await getLatestVaultState({ yeapConfig: config, vaultAddress: this.vaultAddress });
    //   if (!rawResult) throw new Error(`Could not get latest state for vault ${this.vaultAddress}`);
    //   return createVaultState(rawResult);
    // },
    // async getUnderlyingAssetBalance(this: Vault): Promise<YeapFungibleAssetBalance | null> {
    //   const rawBalance = await getVaultUnderlyingAssetBalance({ yeapConfig: config, vaultAddress: this.vaultAddress });
    //   if (!rawBalance) throw new Error(`Could not find vault info for address ${this.vaultAddress}`);
    //   const metadata = rawBalance.metadata ? transformFungibleAssetMetadata(rawBalance.metadata) : null;
    //   return {
    //     amount: Number(rawBalance.amount),
    //     isFrozen: rawBalance.is_frozen,
    //     metadata: metadata!,
    //   } as YeapFungibleAssetBalance;
    // },
    __raw: rawData,
  };
}

/** Convenience helper replacing previous static fromAddress */
export async function vaultFromAddress(config: YeapConfig, vaultAddress: string): Promise<Vault> {
  const vaultInfo = await getVaultInfoByAddress({ yeapConfig: config, vaultAddress });
  if (!vaultInfo) {
    throw new Error(`Vault with address ${vaultAddress} not found`);
  }
  return createVault(config, vaultInfo);
}
