// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Core client functionality for making requests to the Yeap GraphQL API.
 * This follows the same pattern as the main Aptos SDK client.
 */

import { GraphQLClient } from "graphql-request";
import { YeapConfig } from "../api";

/**
 * Response structure from the Yeap API
 */
export interface YeapResponse<Req, Res> {
  status: number;
  data: Res;
  request?: Req;
  headers?: Record<string, string>;
}

/**
 * GraphQL query structure
 */
export interface GraphqlQuery {
  query: string;
  variables?: Record<string, any>;
}

/**
 * Make a GraphQL request to the Yeap indexer
 * This is the core function that handles all GraphQL communication
 */
export async function yeapRequest<Req extends GraphqlQuery, Res extends {}>(args: {
  yeapConfig: YeapConfig;
  query: Req;
  originMethod?: string;
}): Promise<YeapResponse<Req, Res>> {
  const { yeapConfig, query, originMethod } = args;

  try {
    // Build headers - combine API key (if provided) with custom headers
    const headers: Record<string, string> = {
      ...yeapConfig.headers,
    };

    // Add Authorization header if API key is provided
    if (yeapConfig.apiKey) {
      headers.Authorization = `Bearer ${yeapConfig.apiKey}`;
    }

    // Create GraphQL client
    const client = new GraphQLClient(yeapConfig.endpoint, {
      headers,
      requestMiddleware: (request) => {
        // Add timeout to the request
        return {
          ...request,
          signal: AbortSignal.timeout(yeapConfig.timeout),
        };
      },
    });

    // Execute the query
    const data = await client.request<Res>(query.query, query.variables);

    return {
      status: 200,
      data,
      request: query,
      headers,
    };
  } catch (error: any) {
    throw new Error(`Yeap GraphQL request failed (${originMethod || "unknown"}): ${error.message}`);
  }
}

/**
 * Post a GraphQL query to the Yeap indexer
 * This follows the same pattern as postAptosIndexer from the main SDK
 */
export async function postYeapIndexer<Req extends GraphqlQuery, Res extends {}>(args: {
  yeapConfig: YeapConfig;
  query: Req;
  originMethod?: string;
}): Promise<YeapResponse<Req, Res>> {
  return yeapRequest<Req, Res>(args);
}
