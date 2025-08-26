import * as Types from './operations';

import { GraphQLClient, RequestOptions } from 'graphql-request';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const AdaptiveIrmStateFieldsFragmentDoc = `
    fragment AdaptiveIrmStateFields on adaptive_irm_current_state {
  state_address
  current_rate_at_target
  last_update_timestamp_secs
}
    `;
export const LiquidationActivityFieldsFragmentDoc = `
    fragment LiquidationActivityFields on scmd_liquidation_activities {
  event_index
  transaction_version
  timestamp
  position
  vault
  collateral_liquidation_amount
  collateral_value_before
  loan_value_before
  repay_amount
}
    `;
export const FungibleAssetMetadataFieldsFragmentDoc = `
    fragment FungibleAssetMetadataFields on fungible_asset_metadata {
  asset_type
  creator_address
  token_standard
  name
  symbol
  decimals
  icon_uri
  project_uri
  maximum_v2
  supply_v2
}
    `;
export const FixedPriceOracleConfigFieldsFragmentDoc = `
    fragment FixedPriceOracleConfigFields on fixed_price_oracle_current_config {
  oracle_address
  base_asset
  quote_asset
  price
  deleted
}
    `;
export const PythOracleConfigFieldsFragmentDoc = `
    fragment PythOracleConfigFields on pyth_oracle_current_config {
  oracle_address
  base
  quote
  pyth_id
  max_age_in_seconds
  max_confidence
}
    `;
export const SwitchboardOracleConfigFieldsFragmentDoc = `
    fragment SwitchboardOracleConfigFields on switchboard_oracle_current_config {
  oracle_address
  base
  quote
  aggregator_address
  max_age_in_seconds
  max_stdev
  deleted
}
    `;
export const ChainlinkOracleConfigFieldsFragmentDoc = `
    fragment ChainlinkOracleConfigFields on chainlink_oracle_current_config {
  oracle_address
  base
  quote
  feed_id
  max_age_in_seconds
  feed_decimals
  deleted
}
    `;
export const OracleRouterConfigFieldsFragmentDoc = `
    fragment OracleRouterConfigFields on oracle_router_current_config {
  base_asset
  base_asset_metadata {
    ...FungibleAssetMetadataFields
  }
  deleted
  oracle
  oracle_kind
  oracle_router
  quote_asset
  quote_asset_metadata {
    ...FungibleAssetMetadataFields
  }
  fixed_price_oracle_config {
    ...FixedPriceOracleConfigFields
  }
  pyth_oracle_config {
    ...PythOracleConfigFields
  }
  switchboard_oracle_config {
    ...SwitchboardOracleConfigFields
  }
  chainlink_oracle_config {
    ...ChainlinkOracleConfigFields
  }
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
    `;
export const BorrowRiskParametersFieldsFragmentDoc = `
    fragment BorrowRiskParametersFields on borrow_risk_parameters_current {
  brw
  collateral
  market
  vault
}
    `;
export const BorrowMarketFieldsFragmentDoc = `
    fragment BorrowMarketFields on borrow_market {
  market
  protocol
  collateral
  oracle
  crf
  ltv
  lltv
  liquidation_bonus_bps
  max_borrowable_vaults
  status
  whitelisted
  borrow_risk_parameters {
    ...BorrowRiskParametersFields
  }
}
    `;
export const PositionFieldsFragmentDoc = `
    fragment PositionFields on scmd_position_current {
  position
  owner
  market
  collateral
  status
  collateral_asset_balance {
    ...FungibleAssetBalanceFields
  }
  market_info {
    ...BorrowMarketFields
  }
  debt_stores {
    debt_store
    vault
    debt_asset_balance {
      ...FungibleAssetBalanceFields
    }
  }
}
    `;
export const VaultBadDebtActivitiesFieldsFragmentDoc = `
    fragment VaultBadDebtActivitiesFields on vault_bad_debt_activities {
  event_index
  transaction_version
  vault_address
  event_type
  timestamp
  bad_debt_amount
  bad_debt_shares
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
  paused
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
  fixed_rate_irm_config {
    ...FixedRateIrmConfigFields
  }
  kinked_irm_config {
    ...KinkedIrmConfigFields
  }
}
    `;
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
export const VaultUserSettingFieldsFragmentDoc = `
    fragment VaultUserSettingFields on vault_user_setting {
  vault
  user
  borrow_cap
  borrow_permission
  deposit_permission
  withdraw_permission
}
    `;
export const GetActiveVaults = `
    query GetActiveVaults($limit: Int = 20, $offset: Int = 0) {
  vault_info(
    where: {settings: {whitelisted: {_eq: true}}}
    order_by: [{vault_address: asc}]
    limit: $limit
    offset: $offset
  ) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${FungibleAssetBalanceFieldsFragmentDoc}
${CurrentObjectFieldsFragmentDoc}
${VaultSettingsFieldsFragmentDoc}
${AdaptiveIrmConfigFieldsFragmentDoc}
${FixedRateIrmConfigFieldsFragmentDoc}
${KinkedIrmConfigFieldsFragmentDoc}`;
export const GetOracleRouterConfigByPrimaryKey = `
    query getOracleRouterConfigByPrimaryKey($baseAsset: String!, $oracleRouter: String!, $quoteAsset: String!) {
  oracle_router_current_config(
    where: {base_asset: {_eq: $baseAsset}, oracle_router: {_eq: $oracleRouter}, quote_asset: {_eq: $quoteAsset}, deleted: {_neq: true}}
  ) {
    ...OracleRouterConfigFields
  }
}
    ${OracleRouterConfigFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${FixedPriceOracleConfigFieldsFragmentDoc}
${PythOracleConfigFieldsFragmentDoc}
${SwitchboardOracleConfigFieldsFragmentDoc}
${ChainlinkOracleConfigFieldsFragmentDoc}`;
export const GetOracleRouterConfigsByOracle = `
    query getOracleRouterConfigsByOracle($oracleRouter: String!, $limit: Int, $offset: Int) {
  oracle_router_current_config(
    where: {oracle_router: {_eq: $oracleRouter}, deleted: {_neq: true}}
    limit: $limit
    offset: $offset
    order_by: [{base_asset: asc}, {quote_asset: asc}]
  ) {
    ...OracleRouterConfigFields
  }
}
    ${OracleRouterConfigFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${FixedPriceOracleConfigFieldsFragmentDoc}
${PythOracleConfigFieldsFragmentDoc}
${SwitchboardOracleConfigFieldsFragmentDoc}
${ChainlinkOracleConfigFieldsFragmentDoc}`;
export const GetPositionsByOwner = `
    query GetPositionsByOwner($ownerAddress: String!, $limit: Int = 10, $offset: Int = 0) {
  scmd_position_current(
    where: {owner: {_eq: $ownerAddress}, status: {_eq: "0"}}
    limit: $limit
    offset: $offset
    order_by: {position: asc}
  ) {
    ...PositionFields
  }
}
    ${PositionFieldsFragmentDoc}
${FungibleAssetBalanceFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${BorrowMarketFieldsFragmentDoc}
${BorrowRiskParametersFieldsFragmentDoc}`;
export const GetVaultInfo = `
    query GetVaultInfo($where: vault_info_bool_exp, $orderBy: [vault_info_order_by!], $limit: Int, $offset: Int) {
  vault_info(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${FungibleAssetBalanceFieldsFragmentDoc}
${CurrentObjectFieldsFragmentDoc}
${VaultSettingsFieldsFragmentDoc}
${AdaptiveIrmConfigFieldsFragmentDoc}
${FixedRateIrmConfigFieldsFragmentDoc}
${KinkedIrmConfigFieldsFragmentDoc}`;
export const GetVaultInfoByAddress = `
    query GetVaultInfoByAddress($vaultAddress: String!) {
  vault_info_by_pk(vault_address: $vaultAddress) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${FungibleAssetBalanceFieldsFragmentDoc}
${CurrentObjectFieldsFragmentDoc}
${VaultSettingsFieldsFragmentDoc}
${AdaptiveIrmConfigFieldsFragmentDoc}
${FixedRateIrmConfigFieldsFragmentDoc}
${KinkedIrmConfigFieldsFragmentDoc}`;
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
    ${FungibleAssetBalanceFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}`;
export const GetVaultsWithHighYield = `
    query GetVaultsWithHighYield($minInterestRate: numeric!, $limit: Int = 10, $offset: Int = 0) {
  vault_info(
    where: {settings: {interest_fee_rate: {_gte: $minInterestRate}, whitelisted: {_eq: true}}}
    order_by: [{settings: {interest_fee_rate: desc}}]
    limit: $limit
    offset: $offset
  ) {
    ...VaultInfoFields
  }
}
    ${VaultInfoFieldsFragmentDoc}
${FungibleAssetMetadataFieldsFragmentDoc}
${FungibleAssetBalanceFieldsFragmentDoc}
${CurrentObjectFieldsFragmentDoc}
${VaultSettingsFieldsFragmentDoc}
${AdaptiveIrmConfigFieldsFragmentDoc}
${FixedRateIrmConfigFieldsFragmentDoc}
${KinkedIrmConfigFieldsFragmentDoc}`;
export const GetWhitelistedBorrowMarketsByProtocol = `
    query GetWhitelistedBorrowMarketsByProtocol($protocol: String!, $limit: Int, $offset: Int) {
  borrow_market(
    where: {protocol: {_eq: $protocol}, whitelisted: {_eq: true}}
    order_by: [{market: asc}]
    limit: $limit
    offset: $offset
  ) {
    ...BorrowMarketFields
  }
}
    ${BorrowMarketFieldsFragmentDoc}
${BorrowRiskParametersFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetActiveVaults(variables?: Types.GetActiveVaultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetActiveVaultsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetActiveVaultsQuery>({ document: GetActiveVaults, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetActiveVaults', 'query', variables);
    },
    getOracleRouterConfigByPrimaryKey(variables: Types.GetOracleRouterConfigByPrimaryKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetOracleRouterConfigByPrimaryKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetOracleRouterConfigByPrimaryKeyQuery>({ document: GetOracleRouterConfigByPrimaryKey, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getOracleRouterConfigByPrimaryKey', 'query', variables);
    },
    getOracleRouterConfigsByOracle(variables: Types.GetOracleRouterConfigsByOracleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetOracleRouterConfigsByOracleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetOracleRouterConfigsByOracleQuery>({ document: GetOracleRouterConfigsByOracle, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getOracleRouterConfigsByOracle', 'query', variables);
    },
    GetPositionsByOwner(variables: Types.GetPositionsByOwnerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetPositionsByOwnerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetPositionsByOwnerQuery>({ document: GetPositionsByOwner, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPositionsByOwner', 'query', variables);
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
    },
    GetWhitelistedBorrowMarketsByProtocol(variables: Types.GetWhitelistedBorrowMarketsByProtocolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Types.GetWhitelistedBorrowMarketsByProtocolQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetWhitelistedBorrowMarketsByProtocolQuery>({ document: GetWhitelistedBorrowMarketsByProtocol, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetWhitelistedBorrowMarketsByProtocol', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;