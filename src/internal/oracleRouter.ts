// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * This file contains the underlying implementations for exposed API surface in
 * the {@link api/oracleRouter}. By moving the methods out into a separate file,
 * other namespaces and processes can access these methods without depending on the entire
 * oracle router namespace and without having a dependency cycle error.
 * @group Implementation
 */

import { YeapConfig } from "../api";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import {
  GetOracleRouterConfigByPrimaryKeyQuery,
  GetOracleRouterConfigsByOracleQuery,
  OracleRouterConfigFieldsFragment,
} from "../types";
import { GetOracleRouterConfigByPrimaryKey, GetOracleRouterConfigsByOracle } from "../types/generated/queries";

/**
 * Get oracle router config by primary key (base_asset, oracle_router, quote_asset).
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.baseAsset - The base asset address
 * @param args.oracleRouter - The oracle router address
 * @param args.quoteAsset - The quote asset address
 * @returns Promise containing oracle router config or null if not found
 * @group Implementation
 */
export async function getOracleRouterConfigByPrimaryKey(args: {
  yeapConfig: YeapConfig;
  baseAsset: string;
  oracleRouter: string;
  quoteAsset: string;
}): Promise<OracleRouterConfigFieldsFragment | null> {
  const { yeapConfig, baseAsset, oracleRouter, quoteAsset } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetOracleRouterConfigByPrimaryKey,
    variables: { baseAsset, oracleRouter, quoteAsset },
  };

  const data = await queryYeapIndexer<GetOracleRouterConfigByPrimaryKeyQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getOracleRouterConfigByPrimaryKey",
  });

  return data.oracle_router_current_config[0] || null;
}

/**
 * Get oracle router configs by oracle router address.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.oracleRouter - The oracle router address to filter by
 * @param args.limit - Maximum number of results to return
 * @param args.offset - Number of results to skip for pagination
 * @returns Promise containing array of oracle router configs
 * @group Implementation
 */
export async function getOracleRouterConfigsByOracle(args: {
  yeapConfig: YeapConfig;
  oracleRouter: string;
  limit?: number;
  offset?: number;
}): Promise<OracleRouterConfigFieldsFragment[]> {
  const { yeapConfig, oracleRouter, limit, offset } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetOracleRouterConfigsByOracle,
    variables: { oracleRouter, limit, offset },
  };

  const data = await queryYeapIndexer<GetOracleRouterConfigsByOracleQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getOracleRouterConfigsByOracle",
  });

  return data.oracle_router_current_config;
}
