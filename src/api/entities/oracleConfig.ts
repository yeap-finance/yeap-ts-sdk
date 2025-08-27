// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0


import { OracleRouterConfigFieldsFragment } from "../../types";
import { YeapConfig } from "../yeapConfig";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { transformFungibleAssetMetadata, transformOracleRouterConfig, transformFixedPriceOracleSubConfig, transformPythOracleSubConfig, transformSwitchboardOracleSubConfig, transformChainlinkOracleSubConfig } from "../transforms";
import { OracleConfig } from "../interfaces";
/** Factory creating an OracleConfig interface instance. */
export function createOracleConfig(data: OracleRouterConfigFieldsFragment, config?: YeapConfig): OracleConfig {
    const core = transformOracleRouterConfig(data)!;
    const baseAsset = AccountAddress.from(core.baseAsset);
    const quoteAsset = AccountAddress.from(core.quoteAsset);
    const oracleRouter = AccountAddress.from(core.oracleRouter);
    const oracle = AccountAddress.from(core.oracle!);
    const oracleKind = core.oracleKind ?? 0;

    const isPrimaryBackupOracle = oracleKind === 0;
    // const isVaultOracle = oracleKind === 1;
    const isFixedPriceOracle = oracleKind === 2;
    // const isDelegateOracle = oracleKind === 3;
    const isChainlinkOracle = oracleKind === 4;

    const fixedPriceConfig = isFixedPriceOracle ? (transformFixedPriceOracleSubConfig(data.fixed_price_oracle_config) ?? undefined) : undefined;
    const pythOracleConfig = isPrimaryBackupOracle ? (transformPythOracleSubConfig(data.pyth_oracle_config) ?? undefined) : undefined;
    const switchboardOracleConfig = isPrimaryBackupOracle ? (transformSwitchboardOracleSubConfig(data.switchboard_oracle_config) ?? undefined) : undefined;
    const chainlinkOracleConfig = isChainlinkOracle ? (transformChainlinkOracleSubConfig(data.chainlink_oracle_config) ?? undefined) : undefined;

    function oracleTypeDescriptionFor(kind: number): string {
        switch (kind) {
            case 0: return "Primary Backup Oracle";
            case 1: return "Vault Oracle";
            case 2: return "Fixed Price Oracle";
            case 3: return "Delegate Oracle";
            default: return "Unknown Oracle Type";
        }
    }
    function oracleTypeDetailsFor(kind: number): string {
        switch (kind) {
            case 0: return "Primary Backup Oracle: Uses Chainlink as the primary price source, falling back to Pyth, then Switchboard when earlier sources are stale or unavailable.";
            case 1: return "Vault Oracle: Calculates prices for vault shares/LP tokens based on their underlying asset values.";
            case 2: return "Fixed Price Oracle: Provides static prices, useful for testing scenarios or stablecoin pegs.";
            case 3: return "Delegate Oracle: Delegates price queries to another oracle router, enabling complex multi-layer routing scenarios.";
            default: return "Unknown Oracle Type: The oracle kind is not recognized or supported.";
        }
    }

    return {
        baseAsset,
        quoteAsset,
        baseAssetMetadata: data.base_asset_metadata ? transformFungibleAssetMetadata(data.base_asset_metadata) ?? undefined : undefined,
        quoteAssetMetadata: data.quote_asset_metadata ? transformFungibleAssetMetadata(data.quote_asset_metadata) ?? undefined : undefined,
        oracleRouter,
        oracle,
        oracleKind,
        assetPair: `${baseAsset} → ${quoteAsset}`,
        oracleTypeDescription: oracleTypeDescriptionFor(oracleKind),
        oracleTypeDetails: oracleTypeDetailsFor(oracleKind),
        ...(fixedPriceConfig ? { fixedPriceConfig } : {}),
        ...(pythOracleConfig ? { pythOracleConfig } : {}),
        ...(switchboardOracleConfig ? { switchboardOracleConfig } : {}),
        ...(chainlinkOracleConfig ? { chainlinkOracleConfig } : {}),
        __raw: data,
    };
}
