// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * This file contains implementations for borrow market related queries,
 * including risk parameters and market listings.
 * @group Implementation
 */

import { YeapConfig } from "../api";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import { GetWhitelistedBorrowMarketsByProtocolQuery } from "../types/generated/operations";
import { GetWhitelistedBorrowMarketsByProtocol } from "../types/generated/queries";

// Response types based on the generated queries
export type GetWhitelistedBorrowMarketsByProtocolResponse = GetWhitelistedBorrowMarketsByProtocolQuery["borrow_market"];

/**
 * Get all whitelisted borrow markets filtered by protocol.
 */
export async function getWhitelistedBorrowMarketsByProtocol(args: {
  yeapConfig: YeapConfig;
  protocol: string;
  limit?: number;
  offset?: number;
}): Promise<GetWhitelistedBorrowMarketsByProtocolResponse> {
  const { yeapConfig, protocol, limit, offset } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetWhitelistedBorrowMarketsByProtocol,
    variables: { protocol, limit, offset },
  };

  const data = await queryYeapIndexer<GetWhitelistedBorrowMarketsByProtocolQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getWhitelistedBorrowMarketsByProtocol",
  });

  return data.borrow_market;
}
