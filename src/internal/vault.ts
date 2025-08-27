// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * This file contains the underlying implementations for exposed API surface in
 * the {@link api/vault}. By moving the methods out into a separate file,
 * other namespaces and processes can access these methods without depending on the entire
 * vault namespace and without having a dependency cycle error.
 * @group Implementation
 */

import { YeapConfig } from "../api";
import { queryYeapIndexer } from "./yeapIndexer";
import { GraphqlQuery } from "../client";
import {
  VaultInfo,
  VaultSettings,
  VaultInfoBoolExp,
  VaultSettingsBoolExp,
  VaultInfoOrderBy,
  VaultSettingsOrderBy,
  OrderBy,
  GetVaultInfoQuery,
  GetVaultInfoByAddressQuery,
  GetVaultSettingsQuery,
  GetVaultSettingsByAddressQuery,
  GetVaultsWithHighYieldQuery,
  GetActiveVaultsQuery,
  GetVaultLatestStateQuery,
  GetVaultLatestStatesQuery,
  GetVaultUnderlyingAssetBalanceQuery,
  GetVaultInfoQueryResponse,
  GetVaultInfoByAddressQueryResponse,
  GetVaultSettingsQueryResponse,
  GetVaultSettingsByAddressQueryResponse,
  GetVaultsWithHighYieldQueryResponse,
  GetActiveVaultsQueryResponse,
  GetVaultLatestStateQueryResponse,
  VaultStateActivitiesFieldsFragment,
  FungibleAssetBalanceFieldsFragment,
} from "../types";
import {
  GetVaultInfo,
  GetVaultInfoByAddress,
  GetVaultSettings,
  GetVaultSettingsByAddress,
  GetVaultsWithHighYield,
  GetActiveVaults,
  GetVaultLatestState,
  GetVaultLatestStates,
  GetVaultUnderlyingAssetBalance,
} from "../types/generated/queries";

export interface VaultQueryArgs {
  where?: VaultInfoBoolExp;
  orderBy?: VaultInfoOrderBy[];
  limit?: number;
  offset?: number;
}

/**
 * Query vault information with optional filtering, pagination, and ordering.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.queryArgs - Query arguments including where conditions, pagination, and ordering
 * @returns Promise containing vault information
 * @group Implementation
 */
export async function getVaultInfo(args: {
  yeapConfig: YeapConfig;
  queryArgs?: VaultQueryArgs;
}): Promise<GetVaultInfoQueryResponse> {
  const { yeapConfig, queryArgs = {} } = args;
  const { where, orderBy, limit, offset } = queryArgs;

  const graphqlQuery: GraphqlQuery = {
    query: GetVaultInfo,
    variables: { where, orderBy, limit, offset },
  };

  const data = await queryYeapIndexer<GetVaultInfoQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getVaultInfo",
  });

  return data.vault_info;
}

/**
 * Get vault information by vault address (primary key lookup).
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.vaultAddress - The vault address to look up
 * @returns Promise containing vault information or null if not found
 * @group Implementation
 */
export async function getVaultInfoByAddress(args: {
  yeapConfig: YeapConfig;
  vaultAddress: string;
}): Promise<GetVaultInfoByAddressQueryResponse> {
  const { yeapConfig, vaultAddress } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetVaultInfoByAddress,
    variables: { vaultAddress },
  };

  const data = await queryYeapIndexer<GetVaultInfoByAddressQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getVaultInfoByAddress",
  });

  return data.vault_info_by_pk;
}

/**
 * Get vaults by underlying asset.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.underlyingAsset - The underlying asset address to filter by
 * @param args.limit - Number of results to return (default: 10)
 * @param args.offset - Offset for pagination (default: 0)
 * @returns Promise containing vault information for the specified underlying asset
 * @group Implementation
 */
export async function getVaultsByUnderlyingAsset(args: {
  yeapConfig: YeapConfig;
  underlyingAsset: string;
  limit?: number;
  offset?: number;
}): Promise<GetVaultInfoQueryResponse> {
  const { yeapConfig, underlyingAsset, limit = 10, offset = 0 } = args;

  return getVaultInfo({
    yeapConfig,
    queryArgs: {
      where: {
        underlying_asset: { _eq: underlyingAsset },
      },
      orderBy: [{ vault_address: OrderBy.Asc }],
      limit,
      offset,
    },
  });
}

/**
 * Get all active vaults.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.limit - Number of results to return (default: 20)
 * @param args.offset - Offset for pagination (default: 0)
 * @returns Promise containing active vault information
 * @group Implementation
 */
export async function getActiveVaults(args: {
  yeapConfig: YeapConfig;
  limit?: number;
  offset?: number;
}): Promise<GetActiveVaultsQueryResponse> {
  const { yeapConfig, limit = 20, offset = 0 } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetActiveVaults,
    variables: { limit, offset },
  };

  const data = await queryYeapIndexer<GetActiveVaultsQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getActiveVaults",
  });

  return data.vault_info;
}

/**
 * Get the latest state activity for a specific vault.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.vaultAddress - The vault address to get the latest state for
 * @returns Promise containing the latest vault state activity or null if not found
 * @group Implementation
 */
export async function getLatestVaultState(args: {
  yeapConfig: YeapConfig;
  vaultAddress: string;
}): Promise<VaultStateActivitiesFieldsFragment> {
  const { yeapConfig, vaultAddress } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetVaultLatestState,
    variables: { vault_address: vaultAddress },
  };

  const data = await queryYeapIndexer<GetVaultLatestStateQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getLatestVaultState",
  });
  const rawResult = data.vault_states_activities;
  if (rawResult.length === 0) {
    return makeDefaultVaultStateActivity(vaultAddress);
  }
  return rawResult[0];
}

/**
 * Get the latest state activities for multiple vaults (one latest per vault).
 * Note: The underlying query returns all state activities for the provided addresses sorted
 * with most recent first per vault address, so we post-process to pick a single latest per vault.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.vaultAddresses - Array of vault addresses.
 * @returns Map of vaultAddress -> latest VaultStateActivitiesFieldsFragment
 * @group Implementation
 */
export async function getLatestVaultStates(args: {
  yeapConfig: YeapConfig;
  vaultAddresses: string[];
}): Promise<VaultStateActivitiesFieldsFragment[]> {
  const { yeapConfig, vaultAddresses } = args;
  if (vaultAddresses.length === 0) return [];

  const graphqlQuery: GraphqlQuery = {
    query: GetVaultLatestStates,
    variables: { vault_addresses: vaultAddresses },
  };

  const data = await queryYeapIndexer<GetVaultLatestStatesQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getLatestVaultStates",
  });

  // Build a map first for lookup
  const latestMap = new Map<string, VaultStateActivitiesFieldsFragment>();
  for (const row of data.vault_states_activities) {
    const addr = row.vault_address!;
    if (!latestMap.has(addr)) {
      latestMap.set(addr, row);
    }
  }
  // Return array aligned with input order; supply default when missing
  return vaultAddresses.map((addr) => latestMap.get(addr) ?? makeDefaultVaultStateActivity(addr));
}

/** Create a default zeroed vault state activity fragment for a vault with no historical state */
function makeDefaultVaultStateActivity(vaultAddress: string): VaultStateActivitiesFieldsFragment {
  return {
    vault_address: vaultAddress,
    event_index: "0",
    transaction_version: "0",
    bad_debt: "0",
    cash: "0",
    current_interest_rate: "0",
    last_interest_update_time: "0",
    total_borrows: "0",
    total_debt_shares: "0",
    total_shares: "0",
  } as VaultStateActivitiesFieldsFragment;
}

/**
 * Get the underlying asset balance for a specific vault.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.vaultAddress - The vault address to get the underlying asset balance for
 * @returns Promise containing the vault underlying asset balance or null if not found
 * @group Implementation
 */
export async function getVaultUnderlyingAssetBalance(args: {
  yeapConfig: YeapConfig;
  vaultAddress: string;
}): Promise<FungibleAssetBalanceFieldsFragment | null> {
  const { yeapConfig, vaultAddress } = args;

  const graphqlQuery: GraphqlQuery = {
    query: GetVaultUnderlyingAssetBalance,
    variables: { vaultAddress },
  };

  const data = await queryYeapIndexer<GetVaultUnderlyingAssetBalanceQuery>({
    yeapConfig,
    query: graphqlQuery,
    originMethod: "getVaultUnderlyingAssetBalance",
  });

  return data.vault_info_by_pk?.underlying_asset_balance || null;
}

/**
 * Get all vaults with optional pagination.
 * @param args - The arguments for the function.
 * @param args.yeapConfig - The Yeap configuration object.
 * @param args.limit - Number of results to return (default: 20)
 * @param args.offset - Offset for pagination (default: 0)
 * @returns Promise containing all vault information
 * @group Implementation
 */
export async function getAllVaults(args: {
  yeapConfig: YeapConfig;
  limit?: number;
  offset?: number;
}): Promise<GetVaultInfoQueryResponse> {
  const { yeapConfig, limit = 20, offset = 0 } = args;

  return getVaultInfo({
    yeapConfig,
    queryArgs: {
      orderBy: [{ vault_address: OrderBy.Asc }],
      limit,
      offset,
    },
  });
}
