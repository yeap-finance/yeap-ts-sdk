// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * CUSTOM RESPONSE TYPES FOR THE END USER
 *
 * Following the same pattern as the main Aptos SDK, we extract
 * query types to be the response type the end developer/user will
 * work with.
 * @group Types
 */

import {
  GetVaultInfoQuery,
  GetVaultInfoByAddressQuery,
  GetVaultSettingsQuery,
  GetVaultSettingsByAddressQuery,
  GetVaultsWithHighYieldQuery,
  GetActiveVaultsQuery,
  GetVaultStateActivitiesQuery,
  GetVaultLatestStateQuery,
} from "./generated/operations";

/**
 * The response structure for querying vault information.
 */
export type GetVaultInfoQueryResponse = GetVaultInfoQuery["vault_info"];

/**
 * The response structure for querying vault information by address.
 */
export type GetVaultInfoByAddressQueryResponse = GetVaultInfoByAddressQuery["vault_info_by_pk"];

/**
 * The response structure for querying vault settings.
 */
export type GetVaultSettingsQueryResponse = GetVaultSettingsQuery["vault_settings"];

/**
 * The response structure for querying vault settings by address.
 */
export type GetVaultSettingsByAddressQueryResponse = GetVaultSettingsByAddressQuery["vault_settings_by_pk"];

/**
 * The response structure for querying vaults with high yield.
 */
export type GetVaultsWithHighYieldQueryResponse = GetVaultsWithHighYieldQuery["vault_info"];

/**
 * The response structure for querying active vaults.
 */
export type GetActiveVaultsQueryResponse = GetActiveVaultsQuery["vault_info"];

/**
 * The response structure for querying vault state activities.
 */
export type GetVaultStateActivitiesQueryResponse = GetVaultStateActivitiesQuery["vault_states_activities"];

/**
 * The response structure for querying vault latest state.
 */
export type GetVaultLatestStateQueryResponse = GetVaultLatestStateQuery["vault_states_activities"];
