// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { getPositionsByOwner } from "../internal";
import { SCMDPosition } from "./entities";
import { YeapConfig } from "./yeapConfig";

/**
 * A class to query SCMD position-related data from the Yeap indexer.
 * This provides high-level methods for interacting with position information.
 * This follows the same pattern as other API classes in the main Aptos SDK.
 * @group Position
 */
export class ScmdPositionApi {
  readonly config: YeapConfig;

  /**
   * @param config - The Yeap configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
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
