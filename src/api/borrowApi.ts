// Copyright © Yeap Finance
// SPDX-License-Identifier: Apache-2.0

import { AccountAddress } from "@aptos-labs/ts-sdk";
import { getBorrowPositionById, getBorrowPositionsByOwner } from "../internal";
import { BorrowMarket, BorrowPosition } from "./interfaces";
import { createBorrowMarket } from "./entities/borrowMarket";
import { YeapConfig } from "./yeapConfig";
import { getWhitelistedBorrowMarketsByProtocol } from "../internal/borrowMarket";
import { createBorrowPosition } from "./entities/borrowPosition";

/**
 * A class to query borrow protocol position-related data from the Yeap indexer.
 * This provides high-level methods for interacting with position information.
 * @group Position
 */
export class BorrowApi {
  readonly config: YeapConfig;
  readonly protocolAddress: AccountAddress;

  /**
   * @param config - The Yeap configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
    this.protocolAddress = AccountAddress.fromString(config.borrowProtocolAddress);
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
   * const positions = await yeap.borrowApi.getPositionsByOwner("0xabc...", 5);
   * console.log(`Found ${positions.length} positions for this owner`);
   * positions.forEach(position => {
   *   console.log("Position address:", position.positionAddress);
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
  ): Promise<Array<BorrowPosition>> {
    const positions = await getBorrowPositionsByOwner({
      yeapConfig: this.config,
      ownerAddress,
      limit,
      offset,
    });

    return positions.map((position) => createBorrowPosition(this.config, position));
  }

  async getPositionById(positionId: string): Promise<BorrowPosition | null> {
    const position = await getBorrowPositionById({
      yeapConfig: this.config,
      positionId,
    });
    if (!position) {
      return null;
    }

    return createBorrowPosition(this.config, position);
  }

  /**
   * Get all whitelisted borrow markets for this protocol.
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
    return `${this.config.addresses.yeap_borrow_protocol}::protocol_handle::Protocol`;
  }
}
