// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../api/yeapConfig";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import {
  GetScmdPositionsByOwner,
  GetScmdPositionsByOwnerQuery, GetTappLlPositionsByOwner, GetTappLlPositionsByOwnerQuery,
  ScmdPositionFieldsFragment,
  TappLlPositionFieldsFragment,
} from "../types";


/**
 * Query arguments for getting positions by owner
 */
export interface GetPositionsByOwnerArgs {
  yeapConfig: YeapConfig;
  ownerAddress: string;
  limit?: number;
  offset?: number;
}

/**
 * Retrieves positions owned by a specific address from the Yeap indexer.
 *
 * @param args - Query parameters
 * @returns Promise resolving to position data
 * @group Internal
 */
export async function getSCMDPositionsByOwner(args: GetPositionsByOwnerArgs): Promise<Array<ScmdPositionFieldsFragment>> {
  const { yeapConfig, ownerAddress, limit = 10, offset = 0 } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetScmdPositionsByOwner,
    variables: {
      ownerAddress,
      limit,
      offset,
    },
  };

  const data = await queryYeapIndexer<GetScmdPositionsByOwnerQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getPositionsByOwner",
  });

  return data.scmd_position_current;
}

/**
 * Retrieves positions owned by a specific address from the Yeap indexer.
 *
 * @param args - Query parameters
 * @returns Promise resolving to position data
 * @group Internal
 */
export async function getTappLLPositionsByOwner(args: GetPositionsByOwnerArgs): Promise<Array<TappLlPositionFieldsFragment>> {
  const { yeapConfig, ownerAddress, limit = 10, offset = 0 } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetTappLlPositionsByOwner,
    variables: {
      ownerAddress,
      limit,
      offset,
    },
  };

  const data = await queryYeapIndexer<GetTappLlPositionsByOwnerQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getPositionsByOwner",
  });

  return data.tapp_llp_position_current;
}
