// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { AccountAddress, createObjectAddress } from "@aptos-labs/ts-sdk";
import { getPositionsByOwner } from "../internal";
import {
  getBorrowRiskParametersByConfigAddress,
  getCollateralRiskParametersByConfigAddress
} from "../internal/riskParameters";
import { ScmdConfig, SCMDPosition } from "./entities";
import { YeapConfig } from "./yeapConfig";

/**
 * A class to query SCMD position-related data from the Yeap indexer.
 * This provides high-level methods for interacting with position information.
 * This follows the same pattern as other API classes in the main Aptos SDK.
 * @group Position
 */
export class ScmdApi {
  readonly config: YeapConfig;
  readonly protocolAddress: AccountAddress;
  /**
   * @param config - The Yeap configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
    this.protocolAddress = AccountAddress.fromString(config.yeapScmdProtocolAddress);
  }


  get configAddress(): AccountAddress {
    return createObjectAddress(this.protocolAddress, "scmd_protocol_config");
  }


  /**
   * Get SCMD configuration including collateral and borrow risk parameters.
   *
   * @returns Promise containing the SCMD configuration with risk parameters
   *
   * @example
   * ```typescript
   * const scmdConfig = await yeap.scmdApi.getConfig();
   *
   * // Get supported collateral configurations
   * const collateralConfigs = scmdConfig.supportedCollateralConfigs();
   * console.log(`${collateralConfigs.size} collateral types supported`);
   *
   * // Get supported vault configurations
   * const vaultConfigs = scmdConfig.supportedVaultConfigs();
   * console.log(`${vaultConfigs.size} vault configurations available`);
   * ```
   * @group Configuration
   */
  async getConfig(): Promise<ScmdConfig> {
    // Fetch both collateral and borrow risk parameters in parallel
    const [collateralParams, borrowParams] = await Promise.all([
      getCollateralRiskParametersByConfigAddress({
        yeapConfig: this.config,
        configAddress: this.configAddress.toString(),
      }),
      getBorrowRiskParametersByConfigAddress({
        yeapConfig: this.config,
        configAddress: this.configAddress.toString(),
      }),
    ]);

    // Create and return the ScmdConfig with the fetched data
    return new ScmdConfig(this.config, collateralParams, borrowParams);
  }

  /**
   * Get positions by owner address.
   *
   * @param ownerAddress - The owner address to filter by
   * @param limit - Number of results to return (default: 10)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise containing an array of position data for the specified owner
   *
   * @example
   * ```typescript
   * const positions = await yeap.scmdPositionApi.getPositionsByOwner("0xabc...", 5);
   * console.log(`Found ${positions.length} positions for this owner`);
   * positions.forEach(position => {
   *   console.log("Position address:", position.position_address);
   *   console.log("Collateral type:", position.collateral_type);
   *   console.log("Status:", position.status);
   * });
   * ```
   * @group Position
   */
  async getPositionsByOwner(
    ownerAddress: string,
    limit: number = 10,
    offset: number = 0,
  ): Promise<Array<SCMDPosition>> {
    const positions = await getPositionsByOwner({
      yeapConfig: this.config,
      ownerAddress,
      limit,
      offset,
    });

    return positions.map((position) => new SCMDPosition(this.config, position));
  }
}
