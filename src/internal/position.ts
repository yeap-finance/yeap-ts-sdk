// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../api/yeapConfig";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import {
  GetScmdPositionsByOwner,
  GetScmdPositionsByOwnerQuery,
  GetBorrowPositionById,
  GetBorrowPositionByIdQuery,
  GetBorrowPositionsByOwner,
  GetBorrowPositionsByOwnerQuery,
  ScmdPositionFieldsFragment,
  BorrowPositionFieldsFragment,
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
export async function getSCMDPositionsByOwner(
  args: GetPositionsByOwnerArgs,
): Promise<Array<ScmdPositionFieldsFragment>> {
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
export async function getBorrowPositionsByOwner(
  args: GetPositionsByOwnerArgs,
): Promise<Array<BorrowPositionFieldsFragment>> {
  const { yeapConfig, ownerAddress, limit = 10, offset = 0 } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetBorrowPositionsByOwner,
    variables: {
      ownerAddress,
      limit,
      offset,
    },
  };

  const data = await queryYeapIndexer<GetBorrowPositionsByOwnerQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getPositionsByOwner",
  });

  return data.borrow_protocol_position_current;
}

export interface GetBorrowPositionByIdArgs {
  yeapConfig: YeapConfig;
  positionId: string;
}

/**
 * Retrieves a single borrow protocol position by its identifier.
 *
 * @param args - Query parameters
 * @returns Promise resolving to the position or null if not found
 * @group Internal
 */
export async function getBorrowPositionById(
  args: GetBorrowPositionByIdArgs,
): Promise<BorrowPositionFieldsFragment | null> {
  const { yeapConfig, positionId } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetBorrowPositionById,
    variables: { positionId },
  };

  const data = await queryYeapIndexer<GetBorrowPositionByIdQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getBorrowPositionById",
  });

  return data.borrow_protocol_position_current_by_pk ?? null;
}
