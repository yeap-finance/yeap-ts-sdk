import * as Types from './types';

export type AdaptiveIrmConfigFieldsFragment = Pick<Types.AdaptiveIrmCurrentConfig, 'config_address' | 'adjustment_speed' | 'curve_steepness' | 'initial_rate_at_target' | 'max_rate_at_target' | 'min_rate_at_target' | 'target_utilization'>;

export type AdaptiveIrmStateFieldsFragment = Pick<Types.AdaptiveIrmCurrentState, 'state_address' | 'current_rate_at_target' | 'last_update_timestamp_secs'>;

export type CurrentObjectFieldsFragment = Pick<Types.CurrentObjects, 'object_address' | 'owner_address' | 'state_key_hash' | 'allow_ungated_transfer' | 'is_deleted'>;

export type FixedRateIrmConfigFieldsFragment = Pick<Types.FixedRateIrmCurrentConfig, 'config_address' | 'rate_per_second'>;

export type FungibleAssetBalanceFieldsFragment = (
  Pick<Types.CurrentFungibleAssetBalances, 'amount' | 'amount_v1' | 'amount_v2' | 'asset_type' | 'asset_type_v1' | 'asset_type_v2' | 'owner_address' | 'is_frozen' | 'is_primary' | 'storage_id'>
  & { metadata?: Types.Maybe<FungibleAssetMetadataFieldsFragment> }
);

export type FungibleAssetMetadataFieldsFragment = Pick<Types.FungibleAssetMetadata, 'token_standard' | 'name' | 'symbol' | 'decimals' | 'icon_uri' | 'project_uri'>;

export type KinkedIrmConfigFieldsFragment = Pick<Types.KinkedIrmCurrentConfig, 'config_address' | 'max_borrow_rate' | 'min_borrow_rate' | 'optimal_borrow_rate' | 'optimal_utilization'>;

export type LiquidationActivityFieldsFragment = Pick<Types.ScmdLiquidationActivities, 'event_index' | 'transaction_version' | 'timestamp' | 'position_address' | 'vault_address' | 'collateral_liquidation_amount' | 'collateral_value_before' | 'loan_value_before' | 'repay_amount'>;

export type OracleRouterConfigFieldsFragment = Pick<Types.OracleRouterCurrentConfig, 'base_asset' | 'deleted' | 'oracle' | 'oracle_kind' | 'oracle_router' | 'quote_asset'>;

export type PositionFieldsFragment = (
  Pick<Types.ScmdPositionCurrent, 'position_address' | 'owner_address' | 'collateral' | 'collateral_type' | 'status'>
  & { collateral_asset_balance?: Types.Maybe<FungibleAssetBalanceFieldsFragment>, debt_stores: Array<Pick<Types.ScmdPositionDebtStores, 'debt_store_address' | 'vault_address'>> }
);

export type VaultBadDebtActivitiesFieldsFragment = Pick<Types.VaultBadDebtActivities, 'event_index' | 'transaction_version' | 'vault_address' | 'event_type' | 'timestamp' | 'bad_debt_amount' | 'bad_debt_shares' | 'borrow_protocol' | 'debt_store_address' | 'total_bad_debt_after' | 'total_bad_debt_before'>;

export type VaultEmergencyActivitiesFieldsFragment = Pick<Types.VaultEmergencyActivities, 'event_index' | 'transaction_version' | 'vault_address' | 'timestamp' | 'amount' | 'withdrawn_by'>;

export type VaultFlashloanActivitiesFieldsFragment = Pick<Types.VaultFlashloanActivities, 'event_index' | 'transaction_version' | 'vault_address' | 'timestamp' | 'amount' | 'fee'>;

export type VaultInfoFieldsFragment = (
  Pick<Types.VaultInfo, 'vault_address' | 'creator' | 'underlying_asset' | 'debt_asset' | 'underlying_asset_store' | 'governance_object_address'>
  & { underlying_asset_metadata?: Types.Maybe<FungibleAssetMetadataFieldsFragment>, debt_asset_metadata?: Types.Maybe<FungibleAssetMetadataFieldsFragment>, vault_asset_metadata?: Types.Maybe<FungibleAssetMetadataFieldsFragment>, underlying_asset_balance?: Types.Maybe<FungibleAssetBalanceFieldsFragment>, governance_object?: Types.Maybe<CurrentObjectFieldsFragment>, settings?: Types.Maybe<VaultSettingsFieldsFragment>, adaptive_irm_config?: Types.Maybe<AdaptiveIrmConfigFieldsFragment>, fixed_rate_irm_config?: Types.Maybe<FixedRateIrmConfigFieldsFragment>, kinked_irm_config?: Types.Maybe<KinkedIrmConfigFieldsFragment>, protocol_configs: Array<VaultProtocolCapsFieldsFragment> }
);

export type VaultProtocolCapsFieldsFragment = Pick<Types.VaultProtocolCaps, 'vault_address' | 'protocol_module_address' | 'protocol_module_name' | 'protocol_struct_name' | 'borrow_cap' | 'borrow_enabled' | 'supply_enabled'>;

export type VaultSettingsFieldsFragment = Pick<Types.VaultSettings, 'vault_address' | 'auto_socialize_debt_enabled' | 'emergency_withdraw_enabled' | 'fee_store_address' | 'flashloan_enabled' | 'flashloan_fee_rate' | 'flashloan_fee_store_address' | 'interest_fee_rate' | 'irm_kind' | 'is_paused'>;

export type VaultStateActivitiesFieldsFragment = Pick<Types.VaultStatesActivities, 'bad_debt' | 'cash' | 'current_interest_rate' | 'event_index' | 'last_interest_update_time' | 'timestamp' | 'total_borrows' | 'total_debt_shares' | 'total_shares' | 'transaction_version' | 'vault_address'>;

export type GetActiveVaultsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetActiveVaultsQuery = { vault_info: Array<VaultInfoFieldsFragment> };

export type GetOracleRouterConfigByPrimaryKeyQueryVariables = Types.Exact<{
  baseAsset: Types.Scalars['String']['input'];
  oracleRouter: Types.Scalars['String']['input'];
  quoteAsset: Types.Scalars['String']['input'];
}>;


export type GetOracleRouterConfigByPrimaryKeyQuery = { oracle_router_current_config: Array<OracleRouterConfigFieldsFragment> };

export type GetOracleRouterConfigsByOracleQueryVariables = Types.Exact<{
  oracleRouter: Types.Scalars['String']['input'];
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetOracleRouterConfigsByOracleQuery = { oracle_router_current_config: Array<OracleRouterConfigFieldsFragment> };

export type GetPositionsByOwnerQueryVariables = Types.Exact<{
  ownerAddress: Types.Scalars['String']['input'];
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetPositionsByOwnerQuery = { scmd_position_current: Array<PositionFieldsFragment> };

export type GetVaultInfoQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.VaultInfoBoolExp>;
  orderBy?: Types.InputMaybe<Array<Types.VaultInfoOrderBy> | Types.VaultInfoOrderBy>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVaultInfoQuery = { vault_info: Array<VaultInfoFieldsFragment> };

export type GetVaultInfoByAddressQueryVariables = Types.Exact<{
  vaultAddress: Types.Scalars['String']['input'];
}>;


export type GetVaultInfoByAddressQuery = { vault_info_by_pk?: Types.Maybe<VaultInfoFieldsFragment> };

export type GetVaultLatestStateQueryVariables = Types.Exact<{
  vault_address: Types.Scalars['String']['input'];
}>;


export type GetVaultLatestStateQuery = { vault_states_activities: Array<VaultStateActivitiesFieldsFragment> };

export type GetVaultSettingsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.VaultSettingsBoolExp>;
  orderBy?: Types.InputMaybe<Array<Types.VaultSettingsOrderBy> | Types.VaultSettingsOrderBy>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVaultSettingsQuery = { vault_settings: Array<VaultSettingsFieldsFragment> };

export type GetVaultSettingsByAddressQueryVariables = Types.Exact<{
  vaultAddress: Types.Scalars['String']['input'];
}>;


export type GetVaultSettingsByAddressQuery = { vault_settings_by_pk?: Types.Maybe<VaultSettingsFieldsFragment> };

export type GetVaultStateActivitiesQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.VaultStatesActivitiesBoolExp>;
  orderBy?: Types.InputMaybe<Array<Types.VaultStatesActivitiesOrderBy> | Types.VaultStatesActivitiesOrderBy>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVaultStateActivitiesQuery = { vault_states_activities: Array<VaultStateActivitiesFieldsFragment> };

export type GetVaultUnderlyingAssetBalanceQueryVariables = Types.Exact<{
  vaultAddress: Types.Scalars['String']['input'];
}>;


export type GetVaultUnderlyingAssetBalanceQuery = { vault_info_by_pk?: Types.Maybe<(
    Pick<Types.VaultInfo, 'vault_address'>
    & { underlying_asset_balance?: Types.Maybe<FungibleAssetBalanceFieldsFragment> }
  )> };

export type GetVaultsWithHighYieldQueryVariables = Types.Exact<{
  minInterestRate: Types.Scalars['numeric']['input'];
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetVaultsWithHighYieldQuery = { vault_info: Array<VaultInfoFieldsFragment> };
