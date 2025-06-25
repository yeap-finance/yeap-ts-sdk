// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * This file contains the underlying implementations for querying the Yeap indexer.
 * Following the same pattern as the main Aptos SDK's queryIndexer functionality.
 * @group Implementation
 */

import { YeapConfig } from "../api/yeapConfig";
import { yeapRequest, GraphqlQuery } from "../client";

/**
 * Queries the Yeap indexer with a GraphQL query
 * @param args - Configuration and query parameters
 * @returns The response from the indexer
 * @group Implementation
 */
export async function queryYeapIndexer<T>(args: {
  yeapConfig: YeapConfig;
  query: GraphqlQuery;
  originMethod?: string;
}): Promise<T> {
  const { yeapConfig, query, originMethod } = args;

  const response = await yeapRequest({
    yeapConfig,
    query,
    originMethod,
  });

  return response.data as T;
}
