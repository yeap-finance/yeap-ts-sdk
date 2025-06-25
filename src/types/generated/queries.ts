import * as Types from './operations';

import { GraphQLClient, RequestOptions } from 'graphql-request';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const VaultBadDebtActivitiesFieldsFragmentDoc = `
    fragment VaultBadDebtActivitiesFields on vault_bad_debt_activities {
  event_index
  transaction_version
  vault_address
  event_type
  timestamp
  bad_debt_amount
  bad_debt_shares
  borrow_protocol
  debt_store_address
  total_bad_debt_after
  total_bad_debt_before
}
    `;
export const VaultEmergencyActivitiesFieldsFragmentDoc = `
    fragment VaultEmergencyActivitiesFields on vault_emergency_activities {
  event_index
  transaction_version
  vault_address
  timestamp
  amount
  withdrawn_by
}
    `;
export const VaultFlashloanActivitiesFieldsFragmentDoc = `
    fragment VaultFlashloanActivitiesFields on vault_flashloan_activities {
  event_index
  transaction_version
  vault_address
  timestamp
  amount
  fee
}
    `;
export const FungibleAssetMetadataFieldsFragmentDoc = `
    fragment FungibleAssetMetadataFields on fungible_asset_metadata {
  token_standard
  name
  symbol
  decimals
  icon_uri
  project_uri
}
    `;
export const FungibleAssetBalanceFieldsFragmentDoc = `
    fragment FungibleAssetBalanceFields on current_fungible_asset_balances {
  amount
  amount_v1
  amount_v2
  asset_type
  asset_type_v1
  asset_type_v2
  owner_address
  metadata {
    ...FungibleAssetMetadataFields
  }
  is_frozen
  is_primary
  storage_id
}
    ${FungibleAssetMetadataFieldsFragmentDoc}`;
export const CurrentObjectFieldsFragmentDoc = `
    fragment CurrentObjectFields on current_objects {
  object_address
  owner_address
  state_key_hash
  allow_ungated_transfer
  is_deleted
}
    `;
export const VaultSettingsFieldsFragmentDoc = `
    fragment VaultSettingsFields on vault_settings {
  vault_address
  auto_socialize_debt_enabled
  emergency_withdraw_enabled
  fee_store_address
  flashloan_enabled
  flashloan_fee_rate
  flashloan_fee_store_address
  interest_fee_rate
  irm_kind
  is_paused
}
    `;
export const AdaptiveIrmConfigFieldsFragmentDoc = `
    fragment AdaptiveIrmConfigFields on adaptive_irm_current_config {
  config_address
  adjustment_speed
  curve_steepness
  initial_rate_at_target
  max_rate_at_target
  min_rate_at_target
  target_utilization
}
    `;
export const AdaptiveIrmStateFieldsFragmentDoc = `
    fragment AdaptiveIrmStateFields on adaptive_irm_current_state {
  state_address
  current_rate_at_target
  last_update_timestamp_secs
}
    `;
export const FixedRateIrmConfigFieldsFragmentDoc = `
    fragment FixedRateIrmConfigFields on fixed_rate_irm_current_config {
  config_address
  rate_per_second
}
    `;
export const KinkedIrmConfigFieldsFragmentDoc = `
    fragment KinkedIrmConfigFields on kinked_irm_current_config {
  config_address
  max_borrow_rate
  min_borrow_rate
  optimal_borrow_rate
  optimal_utilization
}
    `;
export const VaultProtocolCapsFieldsFragmentDoc = `
    fragment VaultProtocolCapsFields on vault_protocol_caps {
  vault_address
  protocol_module_address
  protocol_module_name
  protocol_struct_name
  borrow_cap
  borrow_enabled
  supply_cap
  supply_enabled
}
    `;
export const VaultInfoFieldsFragmentDoc = `
    fragment VaultInfoFields on vault_info {
  vault_address
  creator
  underlying_asset
  debt_asset
  underlying_asset_store
  governance_object_address
  underlying_asset_metadata {
    ...FungibleAssetMetadataFields
  }
  debt_asset_metadata {
    ...FungibleAssetMetadataFields
  }
  vault_asset_metadata {
    ...FungibleAssetMetadataFields
  }
  underlying_asset_balance {
    ...FungibleAssetBalanceFields
  }
  governance_object {
    ...CurrentObjectFields
  }
  settings {
    ...VaultSettingsFields
  }
  adaptive_irm_config {
    ...AdaptiveIrmConfigFields
  }
  adaptive_irm_state {
    ...AdaptiveIrmStateFields
  }
  fixed_rate_irm_config {
    ...FixedRateIrmConfigFields
  }
  kinked_irm_config {
    ...KinkedIrmConfigFields
  }
  protocol_configs {
    ...VaultProtocolCapsFields
  }
}
    ${FungibleAssetMetadataFieldsFragmentDoc}
${FungibleAssetBalanceFieldsFragmentDoc}
${CurrentObjectFieldsFragmentDoc}
${VaultSettingsFieldsFragmentDoc}
${AdaptiveIrmConfigFieldsFragmentDoc}
${AdaptiveIrmStateFieldsFragmentDoc}
${FixedRateIrmConfigFieldsFragmentDoc}
${KinkedIrmConfigFieldsFragmentDoc}
${VaultProtocolCapsFieldsFragmentDoc}`;
export const VaultStateActivitiesFieldsFragmentDoc = `
    fragment VaultStateActivitiesFields on vault_states_activities {
  bad_debt
  cash
  current_interest_rate
  event_index
  last_interest_update_time
  timestamp
  total_borrows
  total_debt_shares
  total_shares
  transaction_version
  vault_address
}
    `;
export const GetActiveVaults = `
    query GetActiveVaults($limit: Int = 20, $offset: Int = 0) {
  vault_info(
    where: {settings: {is_paused: {_eq: false}}}
    order_by: [{vault_address: asc}]
    limit: $limit
    offset: $offset
  ) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}`;
export const GetVaultInfo = `
    query GetVaultInfo($where: vault_info_bool_exp, $orderBy: [vault_info_order_by!], $limit: Int, $offset: Int) {
  vault_info(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}`;
export const GetVaultInfoByAddress = `
    query GetVaultInfoByAddress($vaultAddress: String!) {
  vault_info_by_pk(vault_address: $vaultAddress) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}`;
export const GetVaultLatestState = `
    query GetVaultLatestState($vault_address: String!) {
  vault_states_activities(
    where: {vault_address: {_eq: $vault_address}}
    order_by: [{transaction_version: desc}, {event_index: desc}]
    limit: 1
  ) {
    ...VaultStateActivitiesFields
  }
}
    ${VaultStateActivitiesFieldsFragmentDoc}`;
export const GetVaultSettings = `
    query GetVaultSettings($where: vault_settings_bool_exp, $orderBy: [vault_settings_order_by!], $limit: Int, $offset: Int) {
  vault_settings(
    where: $where
    order_by: $orderBy
    limit: $limit
    offset: $offset
  ) {
    ...VaultSettingsFields
  }
}
    ${VaultSettingsFieldsFragmentDoc}`;
export const GetVaultSettingsByAddress = `
    query GetVaultSettingsByAddress($vaultAddress: String!) {
  vault_settings_by_pk(vault_address: $vaultAddress) {
    ...VaultSettingsFields
  }
}
    ${VaultSettingsFieldsFragmentDoc}`;
export const GetVaultStateActivities = `
    query GetVaultStateActivities($where: vault_states_activities_bool_exp, $orderBy: [vault_states_activities_order_by!], $limit: Int, $offset: Int) {
  vault_states_activities(
    where: $where
    order_by: $orderBy
    limit: $limit
    offset: $offset
  ) {
    ...VaultStateActivitiesFields
  }
}
    ${VaultStateActivitiesFieldsFragmentDoc}`;
export const GetVaultUnderlyingAssetBalance = `
    query GetVaultUnderlyingAssetBalance($vaultAddress: String!) {
  vault_info_by_pk(vault_address: $vaultAddress) {
    vault_address
    underlying_asset_balance {
      ...FungibleAssetBalanceFields
    }
  }
}
    ${FungibleAssetBalanceFieldsFragmentDoc}`;
export const GetVaultsWithHighYield = `
    query GetVaultsWithHighYield($minInterestRate: numeric!, $limit: Int = 10, $offset: Int = 0) {
  vault_info(
    where: {settings: {interest_fee_rate: {_gte: $minInterestRate}, is_paused: {_eq: false}}}
    order_by: [{settings: {interest_fee_rate: desc}}]
    limit: $limit
    offset: $offset
  ) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetActiveVaults(variables?: Types.GetActiveVaultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetActiveVaultsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetActiveVaultsQuery>({ document: GetActiveVaults, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetActiveVaults', 'query', variables);
    },
    GetVaultInfo(variables?: Types.GetVaultInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultInfoQuery>({ document: GetVaultInfo, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultInfo', 'query', variables);
    },
    GetVaultInfoByAddress(variables: Types.GetVaultInfoByAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultInfoByAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultInfoByAddressQuery>({ document: GetVaultInfoByAddress, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultInfoByAddress', 'query', variables);
    },
    GetVaultLatestState(variables: Types.GetVaultLatestStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultLatestStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultLatestStateQuery>({ document: GetVaultLatestState, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultLatestState', 'query', variables);
    },
    GetVaultSettings(variables?: Types.GetVaultSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultSettingsQuery>({ document: GetVaultSettings, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultSettings', 'query', variables);
    },
    GetVaultSettingsByAddress(variables: Types.GetVaultSettingsByAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultSettingsByAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultSettingsByAddressQuery>({ document: GetVaultSettingsByAddress, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultSettingsByAddress', 'query', variables);
    },
    GetVaultStateActivities(variables?: Types.GetVaultStateActivitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultStateActivitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultStateActivitiesQuery>({ document: GetVaultStateActivities, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultStateActivities', 'query', variables);
    },
    GetVaultUnderlyingAssetBalance(variables: Types.GetVaultUnderlyingAssetBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultUnderlyingAssetBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultUnderlyingAssetBalanceQuery>({ document: GetVaultUnderlyingAssetBalance, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultUnderlyingAssetBalance', 'query', variables);
    },
    GetVaultsWithHighYield(variables: Types.GetVaultsWithHighYieldQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetVaultsWithHighYieldQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetVaultsWithHighYieldQuery>({ document: GetVaultsWithHighYield, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetVaultsWithHighYield', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;