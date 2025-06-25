// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Utility functions for the custom indexer SDK
 */

/**
 * Validate a GraphQL endpoint URL
 */
export function validateEndpoint(endpoint: string): boolean {
  try {
    const url = new URL(endpoint);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Create pagination parameters with defaults
 */
export function createPaginationParams(offset?: number, limit?: number) {
  return {
    offset: offset ?? 0,
    limit: Math.min(limit ?? 25, 100), // Cap at 100 items per request
  };
}

/**
 * Format GraphQL error messages for better readability
 */
export function formatGraphQLError(error: any): string {
  if (error?.response?.errors) {
    return error.response.errors.map((err: any) => err.message).join(", ");
  }
  return error?.message || "Unknown GraphQL error";
}

/**
 * Build where conditions for common filtering patterns
 */
export function buildWhereCondition(filters: Record<string, any>): any {
  const conditions: any = {};

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === "string") {
        conditions[key] = { _eq: value };
      } else if (Array.isArray(value)) {
        conditions[key] = { _in: value };
      } else {
        conditions[key] = { _eq: value };
      }
    }
  });

  return conditions;
}
