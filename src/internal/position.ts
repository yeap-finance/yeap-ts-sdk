// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../api/yeapConfig";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import { GetPositionsByOwnerQuery, PositionFieldsFragment } from "../types";
import { GetPositionsByOwner } from "../types/generated/queries";
import { P } from "@aptos-labs/ts-sdk/dist/common/accountAddress-AL8HRxQC";

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
export async function getPositionsByOwner(args: GetPositionsByOwnerArgs): Promise<Array<PositionFieldsFragment>> {
  const { yeapConfig, ownerAddress, limit = 10, offset = 0 } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetPositionsByOwner,
    variables: {
      ownerAddress,
      limit,
      offset,
    },
  };

  const data = await queryYeapIndexer<GetPositionsByOwnerQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getPositionsByOwner",
  });

  return data.scmd_position_current;
}
