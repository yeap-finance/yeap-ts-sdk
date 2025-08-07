/*
 * SPDX-License-Identifier: BUSL-1.1
 */

import {YeapConfig} from "./yeapConfig";
import {InputViewFunctionData} from "@aptos-labs/ts-sdk";

/**
 * A class for interacting with the Yeap admin APIs.
 */
export class AdminApi {
  readonly config: YeapConfig;

  /**
   * Creates an instance of AdminApi.
   * @param config - YeapConfig configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
  }

  // ==================== build transactions for Yeap Admin API ====================

  /**
   * Builds transaction data for creating an oracle router.
   * @returns InputViewFunctionData transaction data
   */
  buildCreateOracleRouterTxn(): InputViewFunctionData {
    const yeapAdminApiAddress = this.config.yeapAdminApiAddress;
    return {
      function: `${yeapAdminApiAddress}::oracle_admin_api::create_oracle_router`,
      typeArguments: [],
      functionArguments: [],
    };
  }

  /**
   * Builds transaction data for setting Pyth oracle configuration.
   * @param assetAddress - The asset address
   * @param pythId - The Pyth ID
   * @param maxAgeInSeconds - The max age in seconds (u64)
   * @param maxConfidence - The max confidence (u64)
   * @returns InputViewFunctionData transaction data
   */
  buildSetPythOracleConfigTxn(
    assetAddress: string,
    pythId: number[],
    maxAgeInSeconds: bigint,
    maxConfidence: bigint,
  ): InputViewFunctionData {
    const yeapAdminApiAddress = this.config.yeapAdminApiAddress;
    return {
      function: `${yeapAdminApiAddress}::oracle_admin_api::set_pyth_oracle_config`,
      typeArguments: [],
      functionArguments: [assetAddress, pythId, maxAgeInSeconds.toString(), maxConfidence.toString()],
    };
  }

  /**
   * Builds transaction data for setting Switchboard oracle configuration.
   * @param assetAddress - The asset address
   * @param switchboardId - The Switchboard ID
   * @param maxAgeInSeconds - The max age in seconds (u64)
   * @param maxStdev - The max standard deviation (u128)
   * @returns InputViewFunctionData transaction data
   */
  buildSetSwitchboardOracleConfigTxn(
    assetAddress: string,
    switchboardId: string,
    maxAgeInSeconds: bigint,
    maxStdev: bigint,
  ): InputViewFunctionData {
    const yeapAdminApiAddress = this.config.yeapAdminApiAddress;
    return {
      function: `${yeapAdminApiAddress}::oracle_admin_api::set_switchboard_oracle_config`,
      typeArguments: [],
      functionArguments: [assetAddress, switchboardId, maxAgeInSeconds.toString(), maxStdev.toString()],
    };
  }

  /**
   * Builds transaction data for setting vault oracle configuration.
   * @param vaultAddress - The vault address
   * @returns InputViewFunctionData transaction data
   */
  buildSetVaultOracleConfigTxn(vaultAddress: string): InputViewFunctionData {
    const yeapAdminApiAddress = this.config.yeapAdminApiAddress;
    return {
      function: `${yeapAdminApiAddress}::oracle_admin_api::set_vault_oracle_config`,
      typeArguments: [],
      functionArguments: [vaultAddress],
    };
  }
}
