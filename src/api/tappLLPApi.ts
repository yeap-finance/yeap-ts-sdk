// Copyright © Yeap Finance
// SPDX-License-Identifier: Apache-2.0

import { AccountAddress } from "@aptos-labs/ts-sdk";
import { getTappLLPositionsByOwner } from "../internal";
import { BorrowMarket, TappLLPosition } from "./interfaces";
import { createBorrowMarket } from "./entities/borrowMarket";
import { YeapConfig } from "./yeapConfig";
import { getWhitelistedBorrowMarketsByProtocol } from "../internal/borrowMarket";
import { createTappLLPosition } from "./entities/tappLLPosition";
import { TappLLPOperationBuilder } from "./tappLLPOperationBuilder";

/**
 * A class to query Tapp LLP position-related data from the Yeap indexer.
 * This provides high-level methods for interacting with position information.
 * This follows the same pattern as other API classes in the main Aptos SDK.
 * @group Position
 */
export class TappLLPApi {
  readonly config: YeapConfig;
  readonly protocolAddress: AccountAddress;

  /**
   * @param config - The Yeap configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
    this.protocolAddress = AccountAddress.fromString(config.tappLlpProtocolAddress);
  }

  // get goveranceObjectAddress(): AccountAddress {
  //   return createObjectAddress(this.protocolAddress, "scmd_protocol_config");
  // }

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
   * const positions = await yeap.tappLLPApi.getPositionsByOwner("0xabc...", 5);
   * console.log(`Found ${positions.length} positions for this owner`);
   * positions.forEach(position => {
   *   console.log("Position address:", position.position_address);
   *   console.log("Collateral type:", position.collateral);
   *   console.log("Status:", position.status);
   * });
   * ```
   * @group Position
   */
  async getPositionsByOwner(
    ownerAddress: string,
    limit: number = 10,
    offset: number = 0,
  ): Promise<Array<TappLLPosition>> {
    const positions = await getTappLLPositionsByOwner({
      yeapConfig: this.config,
      ownerAddress,
      limit,
      offset,
    });

    return positions.map((position) => createTappLLPosition(this.config, position));
  }

  /**
   * Get all whitelisted borrow markets for this SCMD protocol.
   * @param limit - Max number of markets to return (optional)
   * @param offset - Pagination offset (optional)
   * @returns Array of BorrowMarket entities
   * @group Markets
   */
  async getAllMarkets(limit?: number, offset?: number): Promise<BorrowMarket[]> {
    const protocol = this.protocolName;
    const markets = await getWhitelistedBorrowMarketsByProtocol({
      yeapConfig: this.config,
      protocol,
      limit,
      offset,
    });

    return markets.map((m) => createBorrowMarket(this.config, m));
  }

  get protocolName(): string {
    return `${this.config.tappLlpProtocolAddress}::protocol_handle::LLProtocol`;
  }

  operationBuilder(): TappLLPOperationBuilder {
    return new TappLLPOperationBuilder(this.config);
  }
}
