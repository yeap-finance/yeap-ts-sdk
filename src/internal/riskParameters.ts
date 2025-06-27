// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * This file contains the underlying implementations for borrow and collateral risk parameters queries.
 * By moving the methods out into a separate file, other namespaces and processes can access these
 * methods without depending on the entire risk parameters namespace and without having a dependency cycle error.
 * @group Implementation
 */

import { YeapConfig } from "../api";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import {
  GetBorrowRiskParametersByConfigAddressQuery,
  GetCollateralRiskParametersByConfigAddressQuery,
} from "../types/generated/operations";
import {
  GetBorrowRiskParametersByConfigAddress,
  GetCollateralRiskParametersByConfigAddress,
} from "../types/generated/queries";

// Response types based on the generated queries
export type GetBorrowRiskParametersByConfigAddressResponse =
  GetBorrowRiskParametersByConfigAddressQuery["borrow_risk_parameters_current"];
export type GetCollateralRiskParametersByConfigAddressResponse =
  GetCollateralRiskParametersByConfigAddressQuery["collateral_risk_parameters_current"];

/**
 * Get borrow risk parameters by config address.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.configAddress - The config address to filter by
 * @param args.limit - Number of results to return (optional)
 * @param args.offset - Offset for pagination (optional)
 * @returns Promise containing borrow risk parameters for the specified config address
 * @group Implementation
 */
export async function getBorrowRiskParametersByConfigAddress(args: {
  yeapConfig: YeapConfig;
  configAddress: string;
  limit?: number;
  offset?: number;
}): Promise<GetBorrowRiskParametersByConfigAddressResponse> {
  const { yeapConfig, configAddress, limit, offset } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetBorrowRiskParametersByConfigAddress,
    variables: { configAddress, limit, offset },
  };

  const data = await queryYeapIndexer<GetBorrowRiskParametersByConfigAddressQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getBorrowRiskParametersByConfigAddress",
  });

  return data.borrow_risk_parameters_current;
}

/**
 * Get collateral risk parameters by config address.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.configAddress - The config address to filter by
 * @param args.limit - Number of results to return (optional)
 * @param args.offset - Offset for pagination (optional)
 * @returns Promise containing collateral risk parameters for the specified config address
 * @group Implementation
 */
export async function getCollateralRiskParametersByConfigAddress(args: {
  yeapConfig: YeapConfig;
  configAddress: string;
  limit?: number;
  offset?: number;
}): Promise<GetCollateralRiskParametersByConfigAddressResponse> {
  const { yeapConfig, configAddress, limit, offset } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetCollateralRiskParametersByConfigAddress,
    variables: { configAddress, limit, offset },
  };

  const data = await queryYeapIndexer<GetCollateralRiskParametersByConfigAddressQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getCollateralRiskParametersByConfigAddress",
  });

  return data.collateral_risk_parameters_current;
}
