export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: string; output: string; }
  jsonb: { input: any; output: any; }
  numeric: { input: string; output: string; }
  timestamp: { input: Date; output: Date; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "account_transactions" */
export type AccountTransactions = {
  account_address: Scalars['String']['output'];
  /** An array relationship */
  coin_activities: Array<CoinActivities>;
  /** An aggregate relationship */
  coin_activities_aggregate: CoinActivitiesAggregate;
  /** An array relationship */
  delegated_staking_activities: Array<DelegatedStakingActivities>;
  /** An array relationship */
  fungible_asset_activities: Array<FungibleAssetActivities>;
  /** An array relationship */
  token_activities: Array<TokenActivities>;
  /** An aggregate relationship */
  token_activities_aggregate: TokenActivitiesAggregate;
  /** An array relationship */
  token_activities_v2: Array<TokenActivitiesV2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: TokenActivitiesV2Aggregate;
  transaction_version: Scalars['bigint']['output'];
  /** An object relationship */
  user_transaction?: Maybe<UserTransactions>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsCoinActivitiesArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsCoinActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsDelegatedStakingActivitiesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingActivitiesOrderBy>>;
  where?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsFungibleAssetActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FungibleAssetActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FungibleAssetActivitiesOrderBy>>;
  where?: InputMaybe<FungibleAssetActivitiesBoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsTokenActivitiesArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsTokenActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsTokenActivitiesV2Args = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


/** columns and relationships of "account_transactions" */
export type AccountTransactionsTokenActivitiesV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};

/** aggregated selection of "account_transactions" */
export type AccountTransactionsAggregate = {
  aggregate?: Maybe<AccountTransactionsAggregateFields>;
  nodes: Array<AccountTransactions>;
};

/** aggregate fields of "account_transactions" */
export type AccountTransactionsAggregateFields = {
  avg?: Maybe<AccountTransactionsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AccountTransactionsMaxFields>;
  min?: Maybe<AccountTransactionsMinFields>;
  stddev?: Maybe<AccountTransactionsStddevFields>;
  stddev_pop?: Maybe<AccountTransactionsStddevPopFields>;
  stddev_samp?: Maybe<AccountTransactionsStddevSampFields>;
  sum?: Maybe<AccountTransactionsSumFields>;
  var_pop?: Maybe<AccountTransactionsVarPopFields>;
  var_samp?: Maybe<AccountTransactionsVarSampFields>;
  variance?: Maybe<AccountTransactionsVarianceFields>;
};


/** aggregate fields of "account_transactions" */
export type AccountTransactionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountTransactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AccountTransactionsAvgFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "account_transactions". All fields are combined with a logical 'AND'. */
export type AccountTransactionsBoolExp = {
  _and?: InputMaybe<Array<AccountTransactionsBoolExp>>;
  _not?: InputMaybe<AccountTransactionsBoolExp>;
  _or?: InputMaybe<Array<AccountTransactionsBoolExp>>;
  account_address?: InputMaybe<StringComparisonExp>;
  coin_activities?: InputMaybe<CoinActivitiesBoolExp>;
  coin_activities_aggregate?: InputMaybe<CoinActivitiesAggregateBoolExp>;
  delegated_staking_activities?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
  fungible_asset_activities?: InputMaybe<FungibleAssetActivitiesBoolExp>;
  token_activities?: InputMaybe<TokenActivitiesBoolExp>;
  token_activities_aggregate?: InputMaybe<TokenActivitiesAggregateBoolExp>;
  token_activities_v2?: InputMaybe<TokenActivitiesV2BoolExp>;
  token_activities_v2_aggregate?: InputMaybe<TokenActivitiesV2AggregateBoolExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  user_transaction?: InputMaybe<UserTransactionsBoolExp>;
};

/** aggregate max on columns */
export type AccountTransactionsMaxFields = {
  account_address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type AccountTransactionsMinFields = {
  account_address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "account_transactions". */
export type AccountTransactionsOrderBy = {
  account_address?: InputMaybe<OrderBy>;
  coin_activities_aggregate?: InputMaybe<CoinActivitiesAggregateOrderBy>;
  delegated_staking_activities_aggregate?: InputMaybe<DelegatedStakingActivitiesAggregateOrderBy>;
  fungible_asset_activities_aggregate?: InputMaybe<FungibleAssetActivitiesAggregateOrderBy>;
  token_activities_aggregate?: InputMaybe<TokenActivitiesAggregateOrderBy>;
  token_activities_v2_aggregate?: InputMaybe<TokenActivitiesV2AggregateOrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  user_transaction?: InputMaybe<UserTransactionsOrderBy>;
};

/** select columns of table "account_transactions" */
export enum AccountTransactionsSelectColumn {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** aggregate stddev on columns */
export type AccountTransactionsStddevFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AccountTransactionsStddevPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AccountTransactionsStddevSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "account_transactions" */
export type AccountTransactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AccountTransactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccountTransactionsStreamCursorValueInput = {
  account_address?: InputMaybe<Scalars['String']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type AccountTransactionsSumFields = {
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type AccountTransactionsVarPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AccountTransactionsVarSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AccountTransactionsVarianceFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "adaptive_irm_activities" */
export type AdaptiveIrmActivities = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  config_address?: Maybe<Scalars['String']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** aggregated selection of "adaptive_irm_activities" */
export type AdaptiveIrmActivitiesAggregate = {
  aggregate?: Maybe<AdaptiveIrmActivitiesAggregateFields>;
  nodes: Array<AdaptiveIrmActivities>;
};

/** aggregate fields of "adaptive_irm_activities" */
export type AdaptiveIrmActivitiesAggregateFields = {
  avg?: Maybe<AdaptiveIrmActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AdaptiveIrmActivitiesMaxFields>;
  min?: Maybe<AdaptiveIrmActivitiesMinFields>;
  stddev?: Maybe<AdaptiveIrmActivitiesStddevFields>;
  stddev_pop?: Maybe<AdaptiveIrmActivitiesStddevPopFields>;
  stddev_samp?: Maybe<AdaptiveIrmActivitiesStddevSampFields>;
  sum?: Maybe<AdaptiveIrmActivitiesSumFields>;
  var_pop?: Maybe<AdaptiveIrmActivitiesVarPopFields>;
  var_samp?: Maybe<AdaptiveIrmActivitiesVarSampFields>;
  variance?: Maybe<AdaptiveIrmActivitiesVarianceFields>;
};


/** aggregate fields of "adaptive_irm_activities" */
export type AdaptiveIrmActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AdaptiveIrmActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AdaptiveIrmActivitiesAvgFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "adaptive_irm_activities". All fields are combined with a logical 'AND'. */
export type AdaptiveIrmActivitiesBoolExp = {
  _and?: InputMaybe<Array<AdaptiveIrmActivitiesBoolExp>>;
  _not?: InputMaybe<AdaptiveIrmActivitiesBoolExp>;
  _or?: InputMaybe<Array<AdaptiveIrmActivitiesBoolExp>>;
  adjustment_speed?: InputMaybe<NumericComparisonExp>;
  config_address?: InputMaybe<StringComparisonExp>;
  curve_steepness?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  initial_rate_at_target?: InputMaybe<NumericComparisonExp>;
  max_rate_at_target?: InputMaybe<NumericComparisonExp>;
  min_rate_at_target?: InputMaybe<NumericComparisonExp>;
  target_utilization?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type AdaptiveIrmActivitiesMaxFields = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  config_address?: Maybe<Scalars['String']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type AdaptiveIrmActivitiesMinFields = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  config_address?: Maybe<Scalars['String']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "adaptive_irm_activities". */
export type AdaptiveIrmActivitiesOrderBy = {
  adjustment_speed?: InputMaybe<OrderBy>;
  config_address?: InputMaybe<OrderBy>;
  curve_steepness?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  initial_rate_at_target?: InputMaybe<OrderBy>;
  max_rate_at_target?: InputMaybe<OrderBy>;
  min_rate_at_target?: InputMaybe<OrderBy>;
  target_utilization?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "adaptive_irm_activities" */
export enum AdaptiveIrmActivitiesSelectColumn {
  /** column name */
  AdjustmentSpeed = 'adjustment_speed',
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  CurveSteepness = 'curve_steepness',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InitialRateAtTarget = 'initial_rate_at_target',
  /** column name */
  MaxRateAtTarget = 'max_rate_at_target',
  /** column name */
  MinRateAtTarget = 'min_rate_at_target',
  /** column name */
  TargetUtilization = 'target_utilization',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** aggregate stddev on columns */
export type AdaptiveIrmActivitiesStddevFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AdaptiveIrmActivitiesStddevPopFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AdaptiveIrmActivitiesStddevSampFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "adaptive_irm_activities" */
export type AdaptiveIrmActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AdaptiveIrmActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AdaptiveIrmActivitiesStreamCursorValueInput = {
  adjustment_speed?: InputMaybe<Scalars['numeric']['input']>;
  config_address?: InputMaybe<Scalars['String']['input']>;
  curve_steepness?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  initial_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  max_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  min_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  target_utilization?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type AdaptiveIrmActivitiesSumFields = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type AdaptiveIrmActivitiesVarPopFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AdaptiveIrmActivitiesVarSampFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AdaptiveIrmActivitiesVarianceFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "adaptive_irm_current_config" */
export type AdaptiveIrmCurrentConfig = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  config_address: Scalars['String']['output'];
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "adaptive_irm_current_config" */
export type AdaptiveIrmCurrentConfigAggregate = {
  aggregate?: Maybe<AdaptiveIrmCurrentConfigAggregateFields>;
  nodes: Array<AdaptiveIrmCurrentConfig>;
};

/** aggregate fields of "adaptive_irm_current_config" */
export type AdaptiveIrmCurrentConfigAggregateFields = {
  avg?: Maybe<AdaptiveIrmCurrentConfigAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AdaptiveIrmCurrentConfigMaxFields>;
  min?: Maybe<AdaptiveIrmCurrentConfigMinFields>;
  stddev?: Maybe<AdaptiveIrmCurrentConfigStddevFields>;
  stddev_pop?: Maybe<AdaptiveIrmCurrentConfigStddevPopFields>;
  stddev_samp?: Maybe<AdaptiveIrmCurrentConfigStddevSampFields>;
  sum?: Maybe<AdaptiveIrmCurrentConfigSumFields>;
  var_pop?: Maybe<AdaptiveIrmCurrentConfigVarPopFields>;
  var_samp?: Maybe<AdaptiveIrmCurrentConfigVarSampFields>;
  variance?: Maybe<AdaptiveIrmCurrentConfigVarianceFields>;
};


/** aggregate fields of "adaptive_irm_current_config" */
export type AdaptiveIrmCurrentConfigAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AdaptiveIrmCurrentConfigSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AdaptiveIrmCurrentConfigAvgFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "adaptive_irm_current_config". All fields are combined with a logical 'AND'. */
export type AdaptiveIrmCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<AdaptiveIrmCurrentConfigBoolExp>>;
  _not?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<AdaptiveIrmCurrentConfigBoolExp>>;
  adjustment_speed?: InputMaybe<NumericComparisonExp>;
  config_address?: InputMaybe<StringComparisonExp>;
  curve_steepness?: InputMaybe<NumericComparisonExp>;
  initial_rate_at_target?: InputMaybe<NumericComparisonExp>;
  max_rate_at_target?: InputMaybe<NumericComparisonExp>;
  min_rate_at_target?: InputMaybe<NumericComparisonExp>;
  target_utilization?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type AdaptiveIrmCurrentConfigMaxFields = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  config_address?: Maybe<Scalars['String']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type AdaptiveIrmCurrentConfigMinFields = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  config_address?: Maybe<Scalars['String']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "adaptive_irm_current_config". */
export type AdaptiveIrmCurrentConfigOrderBy = {
  adjustment_speed?: InputMaybe<OrderBy>;
  config_address?: InputMaybe<OrderBy>;
  curve_steepness?: InputMaybe<OrderBy>;
  initial_rate_at_target?: InputMaybe<OrderBy>;
  max_rate_at_target?: InputMaybe<OrderBy>;
  min_rate_at_target?: InputMaybe<OrderBy>;
  target_utilization?: InputMaybe<OrderBy>;
};

/** select columns of table "adaptive_irm_current_config" */
export enum AdaptiveIrmCurrentConfigSelectColumn {
  /** column name */
  AdjustmentSpeed = 'adjustment_speed',
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  CurveSteepness = 'curve_steepness',
  /** column name */
  InitialRateAtTarget = 'initial_rate_at_target',
  /** column name */
  MaxRateAtTarget = 'max_rate_at_target',
  /** column name */
  MinRateAtTarget = 'min_rate_at_target',
  /** column name */
  TargetUtilization = 'target_utilization'
}

/** aggregate stddev on columns */
export type AdaptiveIrmCurrentConfigStddevFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AdaptiveIrmCurrentConfigStddevPopFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AdaptiveIrmCurrentConfigStddevSampFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "adaptive_irm_current_config" */
export type AdaptiveIrmCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AdaptiveIrmCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AdaptiveIrmCurrentConfigStreamCursorValueInput = {
  adjustment_speed?: InputMaybe<Scalars['numeric']['input']>;
  config_address?: InputMaybe<Scalars['String']['input']>;
  curve_steepness?: InputMaybe<Scalars['numeric']['input']>;
  initial_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  max_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  min_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  target_utilization?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type AdaptiveIrmCurrentConfigSumFields = {
  adjustment_speed?: Maybe<Scalars['numeric']['output']>;
  curve_steepness?: Maybe<Scalars['numeric']['output']>;
  initial_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  max_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  min_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  target_utilization?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type AdaptiveIrmCurrentConfigVarPopFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AdaptiveIrmCurrentConfigVarSampFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AdaptiveIrmCurrentConfigVarianceFields = {
  adjustment_speed?: Maybe<Scalars['Float']['output']>;
  curve_steepness?: Maybe<Scalars['Float']['output']>;
  initial_rate_at_target?: Maybe<Scalars['Float']['output']>;
  max_rate_at_target?: Maybe<Scalars['Float']['output']>;
  min_rate_at_target?: Maybe<Scalars['Float']['output']>;
  target_utilization?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "adaptive_irm_current_state" */
export type AdaptiveIrmCurrentState = {
  current_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  last_update_timestamp_secs?: Maybe<Scalars['numeric']['output']>;
  state_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "adaptive_irm_current_state". All fields are combined with a logical 'AND'. */
export type AdaptiveIrmCurrentStateBoolExp = {
  _and?: InputMaybe<Array<AdaptiveIrmCurrentStateBoolExp>>;
  _not?: InputMaybe<AdaptiveIrmCurrentStateBoolExp>;
  _or?: InputMaybe<Array<AdaptiveIrmCurrentStateBoolExp>>;
  current_rate_at_target?: InputMaybe<NumericComparisonExp>;
  last_update_timestamp_secs?: InputMaybe<NumericComparisonExp>;
  state_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "adaptive_irm_current_state". */
export type AdaptiveIrmCurrentStateOrderBy = {
  current_rate_at_target?: InputMaybe<OrderBy>;
  last_update_timestamp_secs?: InputMaybe<OrderBy>;
  state_address?: InputMaybe<OrderBy>;
};

/** select columns of table "adaptive_irm_current_state" */
export enum AdaptiveIrmCurrentStateSelectColumn {
  /** column name */
  CurrentRateAtTarget = 'current_rate_at_target',
  /** column name */
  LastUpdateTimestampSecs = 'last_update_timestamp_secs',
  /** column name */
  StateAddress = 'state_address'
}

/** Streaming cursor of the table "adaptive_irm_current_state" */
export type AdaptiveIrmCurrentStateStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AdaptiveIrmCurrentStateStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AdaptiveIrmCurrentStateStreamCursorValueInput = {
  current_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  last_update_timestamp_secs?: InputMaybe<Scalars['numeric']['input']>;
  state_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "adaptive_irm_state_activities" */
export type AdaptiveIrmStateActivities = {
  current_rate_at_target?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  last_update_timestamp_secs?: Maybe<Scalars['numeric']['output']>;
  state_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "adaptive_irm_state_activities". All fields are combined with a logical 'AND'. */
export type AdaptiveIrmStateActivitiesBoolExp = {
  _and?: InputMaybe<Array<AdaptiveIrmStateActivitiesBoolExp>>;
  _not?: InputMaybe<AdaptiveIrmStateActivitiesBoolExp>;
  _or?: InputMaybe<Array<AdaptiveIrmStateActivitiesBoolExp>>;
  current_rate_at_target?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  last_update_timestamp_secs?: InputMaybe<NumericComparisonExp>;
  state_address?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "adaptive_irm_state_activities". */
export type AdaptiveIrmStateActivitiesOrderBy = {
  current_rate_at_target?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  last_update_timestamp_secs?: InputMaybe<OrderBy>;
  state_address?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "adaptive_irm_state_activities" */
export enum AdaptiveIrmStateActivitiesSelectColumn {
  /** column name */
  CurrentRateAtTarget = 'current_rate_at_target',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  LastUpdateTimestampSecs = 'last_update_timestamp_secs',
  /** column name */
  StateAddress = 'state_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "adaptive_irm_state_activities" */
export type AdaptiveIrmStateActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AdaptiveIrmStateActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AdaptiveIrmStateActivitiesStreamCursorValueInput = {
  current_rate_at_target?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  last_update_timestamp_secs?: InputMaybe<Scalars['numeric']['input']>;
  state_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "address_events_summary" */
export type AddressEventsSummary = {
  account_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  block_metadata?: Maybe<BlockMetadataTransactions>;
  min_block_height?: Maybe<Scalars['bigint']['output']>;
  num_distinct_versions?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "address_events_summary". All fields are combined with a logical 'AND'. */
export type AddressEventsSummaryBoolExp = {
  _and?: InputMaybe<Array<AddressEventsSummaryBoolExp>>;
  _not?: InputMaybe<AddressEventsSummaryBoolExp>;
  _or?: InputMaybe<Array<AddressEventsSummaryBoolExp>>;
  account_address?: InputMaybe<StringComparisonExp>;
  block_metadata?: InputMaybe<BlockMetadataTransactionsBoolExp>;
  min_block_height?: InputMaybe<BigintComparisonExp>;
  num_distinct_versions?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "address_events_summary". */
export type AddressEventsSummaryOrderBy = {
  account_address?: InputMaybe<OrderBy>;
  block_metadata?: InputMaybe<BlockMetadataTransactionsOrderBy>;
  min_block_height?: InputMaybe<OrderBy>;
  num_distinct_versions?: InputMaybe<OrderBy>;
};

/** select columns of table "address_events_summary" */
export enum AddressEventsSummarySelectColumn {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  MinBlockHeight = 'min_block_height',
  /** column name */
  NumDistinctVersions = 'num_distinct_versions'
}

/** Streaming cursor of the table "address_events_summary" */
export type AddressEventsSummaryStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AddressEventsSummaryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AddressEventsSummaryStreamCursorValueInput = {
  account_address?: InputMaybe<Scalars['String']['input']>;
  min_block_height?: InputMaybe<Scalars['bigint']['input']>;
  num_distinct_versions?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEvents = {
  account_address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  coin_activities: Array<CoinActivities>;
  /** An aggregate relationship */
  coin_activities_aggregate: CoinActivitiesAggregate;
  /** An array relationship */
  delegated_staking_activities: Array<DelegatedStakingActivities>;
  /** An array relationship */
  token_activities: Array<TokenActivities>;
  /** An aggregate relationship */
  token_activities_aggregate: TokenActivitiesAggregate;
  /** An array relationship */
  token_activities_v2: Array<TokenActivitiesV2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: TokenActivitiesV2Aggregate;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsCoinActivitiesArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsCoinActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsDelegatedStakingActivitiesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingActivitiesOrderBy>>;
  where?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsTokenActivitiesArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsTokenActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsTokenActivitiesV2Args = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


/** columns and relationships of "address_version_from_events" */
export type AddressVersionFromEventsTokenActivitiesV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};

/** aggregated selection of "address_version_from_events" */
export type AddressVersionFromEventsAggregate = {
  aggregate?: Maybe<AddressVersionFromEventsAggregateFields>;
  nodes: Array<AddressVersionFromEvents>;
};

/** aggregate fields of "address_version_from_events" */
export type AddressVersionFromEventsAggregateFields = {
  avg?: Maybe<AddressVersionFromEventsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AddressVersionFromEventsMaxFields>;
  min?: Maybe<AddressVersionFromEventsMinFields>;
  stddev?: Maybe<AddressVersionFromEventsStddevFields>;
  stddev_pop?: Maybe<AddressVersionFromEventsStddevPopFields>;
  stddev_samp?: Maybe<AddressVersionFromEventsStddevSampFields>;
  sum?: Maybe<AddressVersionFromEventsSumFields>;
  var_pop?: Maybe<AddressVersionFromEventsVarPopFields>;
  var_samp?: Maybe<AddressVersionFromEventsVarSampFields>;
  variance?: Maybe<AddressVersionFromEventsVarianceFields>;
};


/** aggregate fields of "address_version_from_events" */
export type AddressVersionFromEventsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AddressVersionFromEventsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AddressVersionFromEventsAvgFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "address_version_from_events". All fields are combined with a logical 'AND'. */
export type AddressVersionFromEventsBoolExp = {
  _and?: InputMaybe<Array<AddressVersionFromEventsBoolExp>>;
  _not?: InputMaybe<AddressVersionFromEventsBoolExp>;
  _or?: InputMaybe<Array<AddressVersionFromEventsBoolExp>>;
  account_address?: InputMaybe<StringComparisonExp>;
  coin_activities?: InputMaybe<CoinActivitiesBoolExp>;
  coin_activities_aggregate?: InputMaybe<CoinActivitiesAggregateBoolExp>;
  delegated_staking_activities?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
  token_activities?: InputMaybe<TokenActivitiesBoolExp>;
  token_activities_aggregate?: InputMaybe<TokenActivitiesAggregateBoolExp>;
  token_activities_v2?: InputMaybe<TokenActivitiesV2BoolExp>;
  token_activities_v2_aggregate?: InputMaybe<TokenActivitiesV2AggregateBoolExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type AddressVersionFromEventsMaxFields = {
  account_address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type AddressVersionFromEventsMinFields = {
  account_address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "address_version_from_events". */
export type AddressVersionFromEventsOrderBy = {
  account_address?: InputMaybe<OrderBy>;
  coin_activities_aggregate?: InputMaybe<CoinActivitiesAggregateOrderBy>;
  delegated_staking_activities_aggregate?: InputMaybe<DelegatedStakingActivitiesAggregateOrderBy>;
  token_activities_aggregate?: InputMaybe<TokenActivitiesAggregateOrderBy>;
  token_activities_v2_aggregate?: InputMaybe<TokenActivitiesV2AggregateOrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "address_version_from_events" */
export enum AddressVersionFromEventsSelectColumn {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** aggregate stddev on columns */
export type AddressVersionFromEventsStddevFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AddressVersionFromEventsStddevPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AddressVersionFromEventsStddevSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "address_version_from_events" */
export type AddressVersionFromEventsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AddressVersionFromEventsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AddressVersionFromEventsStreamCursorValueInput = {
  account_address?: InputMaybe<Scalars['String']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type AddressVersionFromEventsSumFields = {
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type AddressVersionFromEventsVarPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AddressVersionFromEventsVarSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AddressVersionFromEventsVarianceFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResources = {
  address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  coin_activities: Array<CoinActivities>;
  /** An aggregate relationship */
  coin_activities_aggregate: CoinActivitiesAggregate;
  /** An array relationship */
  delegated_staking_activities: Array<DelegatedStakingActivities>;
  /** An array relationship */
  token_activities: Array<TokenActivities>;
  /** An aggregate relationship */
  token_activities_aggregate: TokenActivitiesAggregate;
  /** An array relationship */
  token_activities_v2: Array<TokenActivitiesV2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: TokenActivitiesV2Aggregate;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesCoinActivitiesArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesCoinActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesDelegatedStakingActivitiesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingActivitiesOrderBy>>;
  where?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesTokenActivitiesArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesTokenActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesTokenActivitiesV2Args = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


/** columns and relationships of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesTokenActivitiesV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};

/** aggregated selection of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesAggregate = {
  aggregate?: Maybe<AddressVersionFromMoveResourcesAggregateFields>;
  nodes: Array<AddressVersionFromMoveResources>;
};

/** aggregate fields of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesAggregateFields = {
  avg?: Maybe<AddressVersionFromMoveResourcesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AddressVersionFromMoveResourcesMaxFields>;
  min?: Maybe<AddressVersionFromMoveResourcesMinFields>;
  stddev?: Maybe<AddressVersionFromMoveResourcesStddevFields>;
  stddev_pop?: Maybe<AddressVersionFromMoveResourcesStddevPopFields>;
  stddev_samp?: Maybe<AddressVersionFromMoveResourcesStddevSampFields>;
  sum?: Maybe<AddressVersionFromMoveResourcesSumFields>;
  var_pop?: Maybe<AddressVersionFromMoveResourcesVarPopFields>;
  var_samp?: Maybe<AddressVersionFromMoveResourcesVarSampFields>;
  variance?: Maybe<AddressVersionFromMoveResourcesVarianceFields>;
};


/** aggregate fields of "legacy_migration_v1.address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AddressVersionFromMoveResourcesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AddressVersionFromMoveResourcesAvgFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.address_version_from_move_resources". All fields are combined with a logical 'AND'. */
export type AddressVersionFromMoveResourcesBoolExp = {
  _and?: InputMaybe<Array<AddressVersionFromMoveResourcesBoolExp>>;
  _not?: InputMaybe<AddressVersionFromMoveResourcesBoolExp>;
  _or?: InputMaybe<Array<AddressVersionFromMoveResourcesBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  coin_activities?: InputMaybe<CoinActivitiesBoolExp>;
  coin_activities_aggregate?: InputMaybe<CoinActivitiesAggregateBoolExp>;
  delegated_staking_activities?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
  token_activities?: InputMaybe<TokenActivitiesBoolExp>;
  token_activities_aggregate?: InputMaybe<TokenActivitiesAggregateBoolExp>;
  token_activities_v2?: InputMaybe<TokenActivitiesV2BoolExp>;
  token_activities_v2_aggregate?: InputMaybe<TokenActivitiesV2AggregateBoolExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type AddressVersionFromMoveResourcesMaxFields = {
  address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type AddressVersionFromMoveResourcesMinFields = {
  address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "legacy_migration_v1.address_version_from_move_resources". */
export type AddressVersionFromMoveResourcesOrderBy = {
  address?: InputMaybe<OrderBy>;
  coin_activities_aggregate?: InputMaybe<CoinActivitiesAggregateOrderBy>;
  delegated_staking_activities_aggregate?: InputMaybe<DelegatedStakingActivitiesAggregateOrderBy>;
  token_activities_aggregate?: InputMaybe<TokenActivitiesAggregateOrderBy>;
  token_activities_v2_aggregate?: InputMaybe<TokenActivitiesV2AggregateOrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.address_version_from_move_resources" */
export enum AddressVersionFromMoveResourcesSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** aggregate stddev on columns */
export type AddressVersionFromMoveResourcesStddevFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AddressVersionFromMoveResourcesStddevPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AddressVersionFromMoveResourcesStddevSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "address_version_from_move_resources" */
export type AddressVersionFromMoveResourcesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AddressVersionFromMoveResourcesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AddressVersionFromMoveResourcesStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type AddressVersionFromMoveResourcesSumFields = {
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type AddressVersionFromMoveResourcesVarPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AddressVersionFromMoveResourcesVarSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AddressVersionFromMoveResourcesVarianceFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "auth_key_account_addresses" */
export type AuthKeyAccountAddresses = {
  account_address: Scalars['String']['output'];
  auth_key: Scalars['String']['output'];
  is_auth_key_used: Scalars['Boolean']['output'];
  last_transaction_version: Scalars['bigint']['output'];
};

/** aggregated selection of "auth_key_account_addresses" */
export type AuthKeyAccountAddressesAggregate = {
  aggregate?: Maybe<AuthKeyAccountAddressesAggregateFields>;
  nodes: Array<AuthKeyAccountAddresses>;
};

/** aggregate fields of "auth_key_account_addresses" */
export type AuthKeyAccountAddressesAggregateFields = {
  avg?: Maybe<AuthKeyAccountAddressesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthKeyAccountAddressesMaxFields>;
  min?: Maybe<AuthKeyAccountAddressesMinFields>;
  stddev?: Maybe<AuthKeyAccountAddressesStddevFields>;
  stddev_pop?: Maybe<AuthKeyAccountAddressesStddevPopFields>;
  stddev_samp?: Maybe<AuthKeyAccountAddressesStddevSampFields>;
  sum?: Maybe<AuthKeyAccountAddressesSumFields>;
  var_pop?: Maybe<AuthKeyAccountAddressesVarPopFields>;
  var_samp?: Maybe<AuthKeyAccountAddressesVarSampFields>;
  variance?: Maybe<AuthKeyAccountAddressesVarianceFields>;
};


/** aggregate fields of "auth_key_account_addresses" */
export type AuthKeyAccountAddressesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthKeyAccountAddressesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AuthKeyAccountAddressesAvgFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth_key_account_addresses". All fields are combined with a logical 'AND'. */
export type AuthKeyAccountAddressesBoolExp = {
  _and?: InputMaybe<Array<AuthKeyAccountAddressesBoolExp>>;
  _not?: InputMaybe<AuthKeyAccountAddressesBoolExp>;
  _or?: InputMaybe<Array<AuthKeyAccountAddressesBoolExp>>;
  account_address?: InputMaybe<StringComparisonExp>;
  auth_key?: InputMaybe<StringComparisonExp>;
  is_auth_key_used?: InputMaybe<BooleanComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type AuthKeyAccountAddressesMaxFields = {
  account_address?: Maybe<Scalars['String']['output']>;
  auth_key?: Maybe<Scalars['String']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type AuthKeyAccountAddressesMinFields = {
  account_address?: Maybe<Scalars['String']['output']>;
  auth_key?: Maybe<Scalars['String']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "auth_key_account_addresses". */
export type AuthKeyAccountAddressesOrderBy = {
  account_address?: InputMaybe<OrderBy>;
  auth_key?: InputMaybe<OrderBy>;
  is_auth_key_used?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "auth_key_account_addresses" */
export enum AuthKeyAccountAddressesSelectColumn {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  AuthKey = 'auth_key',
  /** column name */
  IsAuthKeyUsed = 'is_auth_key_used',
  /** column name */
  LastTransactionVersion = 'last_transaction_version'
}

/** aggregate stddev on columns */
export type AuthKeyAccountAddressesStddevFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AuthKeyAccountAddressesStddevPopFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AuthKeyAccountAddressesStddevSampFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "auth_key_account_addresses" */
export type AuthKeyAccountAddressesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AuthKeyAccountAddressesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthKeyAccountAddressesStreamCursorValueInput = {
  account_address?: InputMaybe<Scalars['String']['input']>;
  auth_key?: InputMaybe<Scalars['String']['input']>;
  is_auth_key_used?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type AuthKeyAccountAddressesSumFields = {
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type AuthKeyAccountAddressesVarPopFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AuthKeyAccountAddressesVarSampFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AuthKeyAccountAddressesVarianceFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "block_metadata_transactions" */
export type BlockMetadataTransactions = {
  block_height: Scalars['bigint']['output'];
  epoch: Scalars['bigint']['output'];
  failed_proposer_indices: Scalars['jsonb']['output'];
  id: Scalars['String']['output'];
  previous_block_votes_bitvec: Scalars['jsonb']['output'];
  proposer: Scalars['String']['output'];
  round: Scalars['bigint']['output'];
  timestamp: Scalars['timestamp']['output'];
  version: Scalars['bigint']['output'];
};


/** columns and relationships of "block_metadata_transactions" */
export type BlockMetadataTransactionsFailedProposerIndicesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "block_metadata_transactions" */
export type BlockMetadataTransactionsPreviousBlockVotesBitvecArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "block_metadata_transactions". All fields are combined with a logical 'AND'. */
export type BlockMetadataTransactionsBoolExp = {
  _and?: InputMaybe<Array<BlockMetadataTransactionsBoolExp>>;
  _not?: InputMaybe<BlockMetadataTransactionsBoolExp>;
  _or?: InputMaybe<Array<BlockMetadataTransactionsBoolExp>>;
  block_height?: InputMaybe<BigintComparisonExp>;
  epoch?: InputMaybe<BigintComparisonExp>;
  failed_proposer_indices?: InputMaybe<JsonbComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  previous_block_votes_bitvec?: InputMaybe<JsonbComparisonExp>;
  proposer?: InputMaybe<StringComparisonExp>;
  round?: InputMaybe<BigintComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  version?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "block_metadata_transactions". */
export type BlockMetadataTransactionsOrderBy = {
  block_height?: InputMaybe<OrderBy>;
  epoch?: InputMaybe<OrderBy>;
  failed_proposer_indices?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  previous_block_votes_bitvec?: InputMaybe<OrderBy>;
  proposer?: InputMaybe<OrderBy>;
  round?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

/** select columns of table "block_metadata_transactions" */
export enum BlockMetadataTransactionsSelectColumn {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  Epoch = 'epoch',
  /** column name */
  FailedProposerIndices = 'failed_proposer_indices',
  /** column name */
  Id = 'id',
  /** column name */
  PreviousBlockVotesBitvec = 'previous_block_votes_bitvec',
  /** column name */
  Proposer = 'proposer',
  /** column name */
  Round = 'round',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Version = 'version'
}

/** Streaming cursor of the table "block_metadata_transactions" */
export type BlockMetadataTransactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: BlockMetadataTransactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BlockMetadataTransactionsStreamCursorValueInput = {
  block_height?: InputMaybe<Scalars['bigint']['input']>;
  epoch?: InputMaybe<Scalars['bigint']['input']>;
  failed_proposer_indices?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  previous_block_votes_bitvec?: InputMaybe<Scalars['jsonb']['input']>;
  proposer?: InputMaybe<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "borrow_risk_parameters_current" */
export type BorrowRiskParametersCurrent = {
  brw?: Maybe<Scalars['numeric']['output']>;
  collateral: Scalars['String']['output'];
  config_address: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  vault: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "borrow_risk_parameters_current". All fields are combined with a logical 'AND'. */
export type BorrowRiskParametersCurrentBoolExp = {
  _and?: InputMaybe<Array<BorrowRiskParametersCurrentBoolExp>>;
  _not?: InputMaybe<BorrowRiskParametersCurrentBoolExp>;
  _or?: InputMaybe<Array<BorrowRiskParametersCurrentBoolExp>>;
  brw?: InputMaybe<NumericComparisonExp>;
  collateral?: InputMaybe<StringComparisonExp>;
  config_address?: InputMaybe<StringComparisonExp>;
  enabled?: InputMaybe<BooleanComparisonExp>;
  vault?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "borrow_risk_parameters_current". */
export type BorrowRiskParametersCurrentOrderBy = {
  brw?: InputMaybe<OrderBy>;
  collateral?: InputMaybe<OrderBy>;
  config_address?: InputMaybe<OrderBy>;
  enabled?: InputMaybe<OrderBy>;
  vault?: InputMaybe<OrderBy>;
};

/** select columns of table "borrow_risk_parameters_current" */
export enum BorrowRiskParametersCurrentSelectColumn {
  /** column name */
  Brw = 'brw',
  /** column name */
  Collateral = 'collateral',
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Vault = 'vault'
}

/** Streaming cursor of the table "borrow_risk_parameters_current" */
export type BorrowRiskParametersCurrentStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: BorrowRiskParametersCurrentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BorrowRiskParametersCurrentStreamCursorValueInput = {
  brw?: InputMaybe<Scalars['numeric']['input']>;
  collateral?: InputMaybe<Scalars['String']['input']>;
  config_address?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  vault?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "legacy_migration_v1.coin_activities" */
export type CoinActivities = {
  activity_type?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  /** An array relationship */
  aptos_names: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  aptos_names_aggregate: CurrentAptosNamesAggregate;
  block_height?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  coin_info?: Maybe<CoinInfos>;
  coin_type?: Maybe<Scalars['String']['output']>;
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  is_gas_fee?: Maybe<Scalars['Boolean']['output']>;
  is_transaction_success?: Maybe<Scalars['Boolean']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  storage_refund_amount?: Maybe<Scalars['numeric']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAptosNamesArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAptosNamesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};

/** aggregated selection of "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAggregate = {
  aggregate?: Maybe<CoinActivitiesAggregateFields>;
  nodes: Array<CoinActivities>;
};

export type CoinActivitiesAggregateBoolExp = {
  bool_and?: InputMaybe<CoinActivitiesAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<CoinActivitiesAggregateBoolExpBoolOr>;
  count?: InputMaybe<CoinActivitiesAggregateBoolExpCount>;
};

export type CoinActivitiesAggregateBoolExpBoolAnd = {
  arguments: CoinActivitiesSelectColumnCoinActivitiesAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CoinActivitiesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CoinActivitiesAggregateBoolExpBoolOr = {
  arguments: CoinActivitiesSelectColumnCoinActivitiesAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CoinActivitiesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CoinActivitiesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CoinActivitiesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAggregateFields = {
  avg?: Maybe<CoinActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CoinActivitiesMaxFields>;
  min?: Maybe<CoinActivitiesMinFields>;
  stddev?: Maybe<CoinActivitiesStddevFields>;
  stddev_pop?: Maybe<CoinActivitiesStddevPopFields>;
  stddev_samp?: Maybe<CoinActivitiesStddevSampFields>;
  sum?: Maybe<CoinActivitiesSumFields>;
  var_pop?: Maybe<CoinActivitiesVarPopFields>;
  var_samp?: Maybe<CoinActivitiesVarSampFields>;
  variance?: Maybe<CoinActivitiesVarianceFields>;
};


/** aggregate fields of "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAggregateOrderBy = {
  avg?: InputMaybe<CoinActivitiesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CoinActivitiesMaxOrderBy>;
  min?: InputMaybe<CoinActivitiesMinOrderBy>;
  stddev?: InputMaybe<CoinActivitiesStddevOrderBy>;
  stddev_pop?: InputMaybe<CoinActivitiesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CoinActivitiesStddevSampOrderBy>;
  sum?: InputMaybe<CoinActivitiesSumOrderBy>;
  var_pop?: InputMaybe<CoinActivitiesVarPopOrderBy>;
  var_samp?: InputMaybe<CoinActivitiesVarSampOrderBy>;
  variance?: InputMaybe<CoinActivitiesVarianceOrderBy>;
};

/** aggregate avg on columns */
export type CoinActivitiesAvgFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.coin_activities". All fields are combined with a logical 'AND'. */
export type CoinActivitiesBoolExp = {
  _and?: InputMaybe<Array<CoinActivitiesBoolExp>>;
  _not?: InputMaybe<CoinActivitiesBoolExp>;
  _or?: InputMaybe<Array<CoinActivitiesBoolExp>>;
  activity_type?: InputMaybe<StringComparisonExp>;
  amount?: InputMaybe<NumericComparisonExp>;
  aptos_names?: InputMaybe<CurrentAptosNamesBoolExp>;
  aptos_names_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  block_height?: InputMaybe<BigintComparisonExp>;
  coin_info?: InputMaybe<CoinInfosBoolExp>;
  coin_type?: InputMaybe<StringComparisonExp>;
  entry_function_id_str?: InputMaybe<StringComparisonExp>;
  event_account_address?: InputMaybe<StringComparisonExp>;
  event_creation_number?: InputMaybe<IntComparisonExp>;
  event_index?: InputMaybe<BigintComparisonExp>;
  event_sequence_number?: InputMaybe<IntComparisonExp>;
  is_gas_fee?: InputMaybe<BooleanComparisonExp>;
  is_transaction_success?: InputMaybe<BooleanComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  storage_refund_amount?: InputMaybe<NumericComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type CoinActivitiesMaxFields = {
  activity_type?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  block_height?: Maybe<Scalars['bigint']['output']>;
  coin_type?: Maybe<Scalars['String']['output']>;
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  storage_refund_amount?: Maybe<Scalars['numeric']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesMaxOrderBy = {
  activity_type?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CoinActivitiesMinFields = {
  activity_type?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  block_height?: Maybe<Scalars['bigint']['output']>;
  coin_type?: Maybe<Scalars['String']['output']>;
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  storage_refund_amount?: Maybe<Scalars['numeric']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesMinOrderBy = {
  activity_type?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "legacy_migration_v1.coin_activities". */
export type CoinActivitiesOrderBy = {
  activity_type?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  aptos_names_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  block_height?: InputMaybe<OrderBy>;
  coin_info?: InputMaybe<CoinInfosOrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  is_gas_fee?: InputMaybe<OrderBy>;
  is_transaction_success?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.coin_activities" */
export enum CoinActivitiesSelectColumn {
  /** column name */
  ActivityType = 'activity_type',
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CoinType = 'coin_type',
  /** column name */
  EntryFunctionIdStr = 'entry_function_id_str',
  /** column name */
  EventAccountAddress = 'event_account_address',
  /** column name */
  EventCreationNumber = 'event_creation_number',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  EventSequenceNumber = 'event_sequence_number',
  /** column name */
  IsGasFee = 'is_gas_fee',
  /** column name */
  IsTransactionSuccess = 'is_transaction_success',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  StorageRefundAmount = 'storage_refund_amount',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** select "coin_activities_aggregate_bool_exp_bool_and_arguments_columns" columns of table "legacy_migration_v1.coin_activities" */
export enum CoinActivitiesSelectColumnCoinActivitiesAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  IsGasFee = 'is_gas_fee',
  /** column name */
  IsTransactionSuccess = 'is_transaction_success'
}

/** select "coin_activities_aggregate_bool_exp_bool_or_arguments_columns" columns of table "legacy_migration_v1.coin_activities" */
export enum CoinActivitiesSelectColumnCoinActivitiesAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  IsGasFee = 'is_gas_fee',
  /** column name */
  IsTransactionSuccess = 'is_transaction_success'
}

/** aggregate stddev on columns */
export type CoinActivitiesStddevFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CoinActivitiesStddevPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CoinActivitiesStddevSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "coin_activities" */
export type CoinActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CoinActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CoinActivitiesStreamCursorValueInput = {
  activity_type?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['numeric']['input']>;
  block_height?: InputMaybe<Scalars['bigint']['input']>;
  coin_type?: InputMaybe<Scalars['String']['input']>;
  entry_function_id_str?: InputMaybe<Scalars['String']['input']>;
  event_account_address?: InputMaybe<Scalars['String']['input']>;
  event_creation_number?: InputMaybe<Scalars['Int']['input']>;
  event_index?: InputMaybe<Scalars['bigint']['input']>;
  event_sequence_number?: InputMaybe<Scalars['Int']['input']>;
  is_gas_fee?: InputMaybe<Scalars['Boolean']['input']>;
  is_transaction_success?: InputMaybe<Scalars['Boolean']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  storage_refund_amount?: InputMaybe<Scalars['numeric']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type CoinActivitiesSumFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  block_height?: Maybe<Scalars['bigint']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  storage_refund_amount?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type CoinActivitiesVarPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CoinActivitiesVarSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CoinActivitiesVarianceFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  block_height?: Maybe<Scalars['Float']['output']>;
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  storage_refund_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "legacy_migration_v1.coin_activities" */
export type CoinActivitiesVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "legacy_migration_v1.coin_balances" */
export type CoinBalances = {
  amount?: Maybe<Scalars['numeric']['output']>;
  coin_type?: Maybe<Scalars['String']['output']>;
  coin_type_hash?: Maybe<Scalars['String']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.coin_balances". All fields are combined with a logical 'AND'. */
export type CoinBalancesBoolExp = {
  _and?: InputMaybe<Array<CoinBalancesBoolExp>>;
  _not?: InputMaybe<CoinBalancesBoolExp>;
  _or?: InputMaybe<Array<CoinBalancesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  coin_type?: InputMaybe<StringComparisonExp>;
  coin_type_hash?: InputMaybe<StringComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.coin_balances". */
export type CoinBalancesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  coin_type_hash?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.coin_balances" */
export enum CoinBalancesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CoinType = 'coin_type',
  /** column name */
  CoinTypeHash = 'coin_type_hash',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "coin_balances" */
export type CoinBalancesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CoinBalancesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CoinBalancesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  coin_type?: InputMaybe<Scalars['String']['input']>;
  coin_type_hash?: InputMaybe<Scalars['String']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "legacy_migration_v1.coin_infos" */
export type CoinInfos = {
  coin_type?: Maybe<Scalars['String']['output']>;
  coin_type_hash?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  decimals?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  supply_aggregator_table_handle?: Maybe<Scalars['String']['output']>;
  supply_aggregator_table_key?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  transaction_created_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version_created?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.coin_infos". All fields are combined with a logical 'AND'. */
export type CoinInfosBoolExp = {
  _and?: InputMaybe<Array<CoinInfosBoolExp>>;
  _not?: InputMaybe<CoinInfosBoolExp>;
  _or?: InputMaybe<Array<CoinInfosBoolExp>>;
  coin_type?: InputMaybe<StringComparisonExp>;
  coin_type_hash?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  decimals?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  supply_aggregator_table_handle?: InputMaybe<StringComparisonExp>;
  supply_aggregator_table_key?: InputMaybe<StringComparisonExp>;
  symbol?: InputMaybe<StringComparisonExp>;
  transaction_created_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version_created?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.coin_infos". */
export type CoinInfosOrderBy = {
  coin_type?: InputMaybe<OrderBy>;
  coin_type_hash?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  supply_aggregator_table_handle?: InputMaybe<OrderBy>;
  supply_aggregator_table_key?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  transaction_created_timestamp?: InputMaybe<OrderBy>;
  transaction_version_created?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.coin_infos" */
export enum CoinInfosSelectColumn {
  /** column name */
  CoinType = 'coin_type',
  /** column name */
  CoinTypeHash = 'coin_type_hash',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Name = 'name',
  /** column name */
  SupplyAggregatorTableHandle = 'supply_aggregator_table_handle',
  /** column name */
  SupplyAggregatorTableKey = 'supply_aggregator_table_key',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TransactionCreatedTimestamp = 'transaction_created_timestamp',
  /** column name */
  TransactionVersionCreated = 'transaction_version_created'
}

/** Streaming cursor of the table "coin_infos" */
export type CoinInfosStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CoinInfosStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CoinInfosStreamCursorValueInput = {
  coin_type?: InputMaybe<Scalars['String']['input']>;
  coin_type_hash?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  supply_aggregator_table_handle?: InputMaybe<Scalars['String']['input']>;
  supply_aggregator_table_key?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  transaction_created_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version_created?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "coin_supply" */
export type CoinSupply = {
  coin_type: Scalars['String']['output'];
  coin_type_hash: Scalars['String']['output'];
  supply: Scalars['numeric']['output'];
  transaction_epoch: Scalars['bigint']['output'];
  transaction_timestamp: Scalars['timestamp']['output'];
  transaction_version: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "coin_supply". All fields are combined with a logical 'AND'. */
export type CoinSupplyBoolExp = {
  _and?: InputMaybe<Array<CoinSupplyBoolExp>>;
  _not?: InputMaybe<CoinSupplyBoolExp>;
  _or?: InputMaybe<Array<CoinSupplyBoolExp>>;
  coin_type?: InputMaybe<StringComparisonExp>;
  coin_type_hash?: InputMaybe<StringComparisonExp>;
  supply?: InputMaybe<NumericComparisonExp>;
  transaction_epoch?: InputMaybe<BigintComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "coin_supply". */
export type CoinSupplyOrderBy = {
  coin_type?: InputMaybe<OrderBy>;
  coin_type_hash?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  transaction_epoch?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "coin_supply" */
export enum CoinSupplySelectColumn {
  /** column name */
  CoinType = 'coin_type',
  /** column name */
  CoinTypeHash = 'coin_type_hash',
  /** column name */
  Supply = 'supply',
  /** column name */
  TransactionEpoch = 'transaction_epoch',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "coin_supply" */
export type CoinSupplyStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CoinSupplyStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CoinSupplyStreamCursorValueInput = {
  coin_type?: InputMaybe<Scalars['String']['input']>;
  coin_type_hash?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['numeric']['input']>;
  transaction_epoch?: InputMaybe<Scalars['bigint']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "collateral_risk_parameters_current" */
export type CollateralRiskParametersCurrent = {
  borrow_vault_max_num?: Maybe<Scalars['numeric']['output']>;
  collateral: Scalars['String']['output'];
  config_address: Scalars['String']['output'];
  liquidation_bonus_bps?: Maybe<Scalars['numeric']['output']>;
  lltv?: Maybe<Scalars['numeric']['output']>;
  ltv?: Maybe<Scalars['numeric']['output']>;
  oracle?: Maybe<Scalars['String']['output']>;
  risk_factor?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "collateral_risk_parameters_current". All fields are combined with a logical 'AND'. */
export type CollateralRiskParametersCurrentBoolExp = {
  _and?: InputMaybe<Array<CollateralRiskParametersCurrentBoolExp>>;
  _not?: InputMaybe<CollateralRiskParametersCurrentBoolExp>;
  _or?: InputMaybe<Array<CollateralRiskParametersCurrentBoolExp>>;
  borrow_vault_max_num?: InputMaybe<NumericComparisonExp>;
  collateral?: InputMaybe<StringComparisonExp>;
  config_address?: InputMaybe<StringComparisonExp>;
  liquidation_bonus_bps?: InputMaybe<NumericComparisonExp>;
  lltv?: InputMaybe<NumericComparisonExp>;
  ltv?: InputMaybe<NumericComparisonExp>;
  oracle?: InputMaybe<StringComparisonExp>;
  risk_factor?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "collateral_risk_parameters_current". */
export type CollateralRiskParametersCurrentOrderBy = {
  borrow_vault_max_num?: InputMaybe<OrderBy>;
  collateral?: InputMaybe<OrderBy>;
  config_address?: InputMaybe<OrderBy>;
  liquidation_bonus_bps?: InputMaybe<OrderBy>;
  lltv?: InputMaybe<OrderBy>;
  ltv?: InputMaybe<OrderBy>;
  oracle?: InputMaybe<OrderBy>;
  risk_factor?: InputMaybe<OrderBy>;
};

/** select columns of table "collateral_risk_parameters_current" */
export enum CollateralRiskParametersCurrentSelectColumn {
  /** column name */
  BorrowVaultMaxNum = 'borrow_vault_max_num',
  /** column name */
  Collateral = 'collateral',
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  LiquidationBonusBps = 'liquidation_bonus_bps',
  /** column name */
  Lltv = 'lltv',
  /** column name */
  Ltv = 'ltv',
  /** column name */
  Oracle = 'oracle',
  /** column name */
  RiskFactor = 'risk_factor'
}

/** Streaming cursor of the table "collateral_risk_parameters_current" */
export type CollateralRiskParametersCurrentStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CollateralRiskParametersCurrentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CollateralRiskParametersCurrentStreamCursorValueInput = {
  borrow_vault_max_num?: InputMaybe<Scalars['numeric']['input']>;
  collateral?: InputMaybe<Scalars['String']['input']>;
  config_address?: InputMaybe<Scalars['String']['input']>;
  liquidation_bonus_bps?: InputMaybe<Scalars['numeric']['input']>;
  lltv?: InputMaybe<Scalars['numeric']['input']>;
  ltv?: InputMaybe<Scalars['numeric']['input']>;
  oracle?: InputMaybe<Scalars['String']['input']>;
  risk_factor?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "legacy_migration_v1.collection_datas" */
export type CollectionDatas = {
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  description_mutable?: Maybe<Scalars['Boolean']['output']>;
  maximum?: Maybe<Scalars['numeric']['output']>;
  maximum_mutable?: Maybe<Scalars['Boolean']['output']>;
  metadata_uri?: Maybe<Scalars['String']['output']>;
  supply?: Maybe<Scalars['numeric']['output']>;
  table_handle?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  uri_mutable?: Maybe<Scalars['Boolean']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.collection_datas". All fields are combined with a logical 'AND'. */
export type CollectionDatasBoolExp = {
  _and?: InputMaybe<Array<CollectionDatasBoolExp>>;
  _not?: InputMaybe<CollectionDatasBoolExp>;
  _or?: InputMaybe<Array<CollectionDatasBoolExp>>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  description_mutable?: InputMaybe<BooleanComparisonExp>;
  maximum?: InputMaybe<NumericComparisonExp>;
  maximum_mutable?: InputMaybe<BooleanComparisonExp>;
  metadata_uri?: InputMaybe<StringComparisonExp>;
  supply?: InputMaybe<NumericComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  uri_mutable?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.collection_datas". */
export type CollectionDatasOrderBy = {
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  description_mutable?: InputMaybe<OrderBy>;
  maximum?: InputMaybe<OrderBy>;
  maximum_mutable?: InputMaybe<OrderBy>;
  metadata_uri?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  uri_mutable?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.collection_datas" */
export enum CollectionDatasSelectColumn {
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Description = 'description',
  /** column name */
  DescriptionMutable = 'description_mutable',
  /** column name */
  Maximum = 'maximum',
  /** column name */
  MaximumMutable = 'maximum_mutable',
  /** column name */
  MetadataUri = 'metadata_uri',
  /** column name */
  Supply = 'supply',
  /** column name */
  TableHandle = 'table_handle',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  UriMutable = 'uri_mutable'
}

/** Streaming cursor of the table "collection_datas" */
export type CollectionDatasStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CollectionDatasStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CollectionDatasStreamCursorValueInput = {
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  maximum?: InputMaybe<Scalars['numeric']['input']>;
  maximum_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  metadata_uri?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['numeric']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  uri_mutable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "legacy_migration_v1.current_ans_lookup" */
export type CurrentAnsLookup = {
  /** An array relationship */
  all_token_ownerships: Array<CurrentTokenOwnerships>;
  /** An aggregate relationship */
  all_token_ownerships_aggregate: CurrentTokenOwnershipsAggregate;
  domain?: Maybe<Scalars['String']['output']>;
  expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  registered_address?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  token_name?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "legacy_migration_v1.current_ans_lookup" */
export type CurrentAnsLookupAllTokenOwnershipsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsOrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.current_ans_lookup" */
export type CurrentAnsLookupAllTokenOwnershipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsOrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.current_ans_lookup". All fields are combined with a logical 'AND'. */
export type CurrentAnsLookupBoolExp = {
  _and?: InputMaybe<Array<CurrentAnsLookupBoolExp>>;
  _not?: InputMaybe<CurrentAnsLookupBoolExp>;
  _or?: InputMaybe<Array<CurrentAnsLookupBoolExp>>;
  all_token_ownerships?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
  all_token_ownerships_aggregate?: InputMaybe<CurrentTokenOwnershipsAggregateBoolExp>;
  domain?: InputMaybe<StringComparisonExp>;
  expiration_timestamp?: InputMaybe<TimestampComparisonExp>;
  is_deleted?: InputMaybe<BooleanComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  registered_address?: InputMaybe<StringComparisonExp>;
  subdomain?: InputMaybe<StringComparisonExp>;
  token_name?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.current_ans_lookup". */
export type CurrentAnsLookupOrderBy = {
  all_token_ownerships_aggregate?: InputMaybe<CurrentTokenOwnershipsAggregateOrderBy>;
  domain?: InputMaybe<OrderBy>;
  expiration_timestamp?: InputMaybe<OrderBy>;
  is_deleted?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  registered_address?: InputMaybe<OrderBy>;
  subdomain?: InputMaybe<OrderBy>;
  token_name?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.current_ans_lookup" */
export enum CurrentAnsLookupSelectColumn {
  /** column name */
  Domain = 'domain',
  /** column name */
  ExpirationTimestamp = 'expiration_timestamp',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  RegisteredAddress = 'registered_address',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  TokenName = 'token_name'
}

/** Streaming cursor of the table "current_ans_lookup" */
export type CurrentAnsLookupStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentAnsLookupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentAnsLookupStreamCursorValueInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  expiration_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  registered_address?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  token_name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_ans_lookup_v2" */
export type CurrentAnsLookupV2 = {
  domain: Scalars['String']['output'];
  expiration_timestamp: Scalars['timestamp']['output'];
  is_deleted: Scalars['Boolean']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  registered_address?: Maybe<Scalars['String']['output']>;
  subdomain: Scalars['String']['output'];
  token_name?: Maybe<Scalars['String']['output']>;
  token_standard: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "current_ans_lookup_v2". All fields are combined with a logical 'AND'. */
export type CurrentAnsLookupV2BoolExp = {
  _and?: InputMaybe<Array<CurrentAnsLookupV2BoolExp>>;
  _not?: InputMaybe<CurrentAnsLookupV2BoolExp>;
  _or?: InputMaybe<Array<CurrentAnsLookupV2BoolExp>>;
  domain?: InputMaybe<StringComparisonExp>;
  expiration_timestamp?: InputMaybe<TimestampComparisonExp>;
  is_deleted?: InputMaybe<BooleanComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  registered_address?: InputMaybe<StringComparisonExp>;
  subdomain?: InputMaybe<StringComparisonExp>;
  token_name?: InputMaybe<StringComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_ans_lookup_v2". */
export type CurrentAnsLookupV2OrderBy = {
  domain?: InputMaybe<OrderBy>;
  expiration_timestamp?: InputMaybe<OrderBy>;
  is_deleted?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  registered_address?: InputMaybe<OrderBy>;
  subdomain?: InputMaybe<OrderBy>;
  token_name?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** select columns of table "current_ans_lookup_v2" */
export enum CurrentAnsLookupV2SelectColumn {
  /** column name */
  Domain = 'domain',
  /** column name */
  ExpirationTimestamp = 'expiration_timestamp',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  RegisteredAddress = 'registered_address',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  TokenStandard = 'token_standard'
}

/** Streaming cursor of the table "current_ans_lookup_v2" */
export type CurrentAnsLookupV2StreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentAnsLookupV2StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentAnsLookupV2StreamCursorValueInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  expiration_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  registered_address?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  token_name?: InputMaybe<Scalars['String']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_aptos_names" */
export type CurrentAptosNames = {
  domain?: Maybe<Scalars['String']['output']>;
  domain_expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  domain_with_suffix?: Maybe<Scalars['String']['output']>;
  expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  is_domain_owner?: Maybe<CurrentAptosNames>;
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  registered_address?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['bigint']['output']>;
  token_name?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "current_aptos_names" */
export type CurrentAptosNamesAggregate = {
  aggregate?: Maybe<CurrentAptosNamesAggregateFields>;
  nodes: Array<CurrentAptosNames>;
};

export type CurrentAptosNamesAggregateBoolExp = {
  bool_and?: InputMaybe<CurrentAptosNamesAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<CurrentAptosNamesAggregateBoolExpBoolOr>;
  count?: InputMaybe<CurrentAptosNamesAggregateBoolExpCount>;
};

export type CurrentAptosNamesAggregateBoolExpBoolAnd = {
  arguments: CurrentAptosNamesSelectColumnCurrentAptosNamesAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentAptosNamesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CurrentAptosNamesAggregateBoolExpBoolOr = {
  arguments: CurrentAptosNamesSelectColumnCurrentAptosNamesAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentAptosNamesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CurrentAptosNamesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentAptosNamesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "current_aptos_names" */
export type CurrentAptosNamesAggregateFields = {
  avg?: Maybe<CurrentAptosNamesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CurrentAptosNamesMaxFields>;
  min?: Maybe<CurrentAptosNamesMinFields>;
  stddev?: Maybe<CurrentAptosNamesStddevFields>;
  stddev_pop?: Maybe<CurrentAptosNamesStddevPopFields>;
  stddev_samp?: Maybe<CurrentAptosNamesStddevSampFields>;
  sum?: Maybe<CurrentAptosNamesSumFields>;
  var_pop?: Maybe<CurrentAptosNamesVarPopFields>;
  var_samp?: Maybe<CurrentAptosNamesVarSampFields>;
  variance?: Maybe<CurrentAptosNamesVarianceFields>;
};


/** aggregate fields of "current_aptos_names" */
export type CurrentAptosNamesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "current_aptos_names" */
export type CurrentAptosNamesAggregateOrderBy = {
  avg?: InputMaybe<CurrentAptosNamesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CurrentAptosNamesMaxOrderBy>;
  min?: InputMaybe<CurrentAptosNamesMinOrderBy>;
  stddev?: InputMaybe<CurrentAptosNamesStddevOrderBy>;
  stddev_pop?: InputMaybe<CurrentAptosNamesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CurrentAptosNamesStddevSampOrderBy>;
  sum?: InputMaybe<CurrentAptosNamesSumOrderBy>;
  var_pop?: InputMaybe<CurrentAptosNamesVarPopOrderBy>;
  var_samp?: InputMaybe<CurrentAptosNamesVarSampOrderBy>;
  variance?: InputMaybe<CurrentAptosNamesVarianceOrderBy>;
};

/** aggregate avg on columns */
export type CurrentAptosNamesAvgFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "current_aptos_names" */
export type CurrentAptosNamesAvgOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "current_aptos_names". All fields are combined with a logical 'AND'. */
export type CurrentAptosNamesBoolExp = {
  _and?: InputMaybe<Array<CurrentAptosNamesBoolExp>>;
  _not?: InputMaybe<CurrentAptosNamesBoolExp>;
  _or?: InputMaybe<Array<CurrentAptosNamesBoolExp>>;
  domain?: InputMaybe<StringComparisonExp>;
  domain_expiration_timestamp?: InputMaybe<TimestampComparisonExp>;
  domain_with_suffix?: InputMaybe<StringComparisonExp>;
  expiration_timestamp?: InputMaybe<TimestampComparisonExp>;
  is_active?: InputMaybe<BooleanComparisonExp>;
  is_domain_owner?: InputMaybe<CurrentAptosNamesBoolExp>;
  is_primary?: InputMaybe<BooleanComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  registered_address?: InputMaybe<StringComparisonExp>;
  subdomain?: InputMaybe<StringComparisonExp>;
  subdomain_expiration_policy?: InputMaybe<BigintComparisonExp>;
  token_name?: InputMaybe<StringComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type CurrentAptosNamesMaxFields = {
  domain?: Maybe<Scalars['String']['output']>;
  domain_expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  domain_with_suffix?: Maybe<Scalars['String']['output']>;
  expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  registered_address?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['bigint']['output']>;
  token_name?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "current_aptos_names" */
export type CurrentAptosNamesMaxOrderBy = {
  domain?: InputMaybe<OrderBy>;
  domain_expiration_timestamp?: InputMaybe<OrderBy>;
  domain_with_suffix?: InputMaybe<OrderBy>;
  expiration_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  registered_address?: InputMaybe<OrderBy>;
  subdomain?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
  token_name?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CurrentAptosNamesMinFields = {
  domain?: Maybe<Scalars['String']['output']>;
  domain_expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  domain_with_suffix?: Maybe<Scalars['String']['output']>;
  expiration_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  registered_address?: Maybe<Scalars['String']['output']>;
  subdomain?: Maybe<Scalars['String']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['bigint']['output']>;
  token_name?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "current_aptos_names" */
export type CurrentAptosNamesMinOrderBy = {
  domain?: InputMaybe<OrderBy>;
  domain_expiration_timestamp?: InputMaybe<OrderBy>;
  domain_with_suffix?: InputMaybe<OrderBy>;
  expiration_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  registered_address?: InputMaybe<OrderBy>;
  subdomain?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
  token_name?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "current_aptos_names". */
export type CurrentAptosNamesOrderBy = {
  domain?: InputMaybe<OrderBy>;
  domain_expiration_timestamp?: InputMaybe<OrderBy>;
  domain_with_suffix?: InputMaybe<OrderBy>;
  expiration_timestamp?: InputMaybe<OrderBy>;
  is_active?: InputMaybe<OrderBy>;
  is_domain_owner?: InputMaybe<CurrentAptosNamesOrderBy>;
  is_primary?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  registered_address?: InputMaybe<OrderBy>;
  subdomain?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
  token_name?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** select columns of table "current_aptos_names" */
export enum CurrentAptosNamesSelectColumn {
  /** column name */
  Domain = 'domain',
  /** column name */
  DomainExpirationTimestamp = 'domain_expiration_timestamp',
  /** column name */
  DomainWithSuffix = 'domain_with_suffix',
  /** column name */
  ExpirationTimestamp = 'expiration_timestamp',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  RegisteredAddress = 'registered_address',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  SubdomainExpirationPolicy = 'subdomain_expiration_policy',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  TokenStandard = 'token_standard'
}

/** select "current_aptos_names_aggregate_bool_exp_bool_and_arguments_columns" columns of table "current_aptos_names" */
export enum CurrentAptosNamesSelectColumnCurrentAptosNamesAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsPrimary = 'is_primary'
}

/** select "current_aptos_names_aggregate_bool_exp_bool_or_arguments_columns" columns of table "current_aptos_names" */
export enum CurrentAptosNamesSelectColumnCurrentAptosNamesAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsPrimary = 'is_primary'
}

/** aggregate stddev on columns */
export type CurrentAptosNamesStddevFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "current_aptos_names" */
export type CurrentAptosNamesStddevOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CurrentAptosNamesStddevPopFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "current_aptos_names" */
export type CurrentAptosNamesStddevPopOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CurrentAptosNamesStddevSampFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "current_aptos_names" */
export type CurrentAptosNamesStddevSampOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "current_aptos_names" */
export type CurrentAptosNamesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentAptosNamesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentAptosNamesStreamCursorValueInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  domain_expiration_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  domain_with_suffix?: InputMaybe<Scalars['String']['input']>;
  expiration_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  registered_address?: InputMaybe<Scalars['String']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  subdomain_expiration_policy?: InputMaybe<Scalars['bigint']['input']>;
  token_name?: InputMaybe<Scalars['String']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CurrentAptosNamesSumFields = {
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "current_aptos_names" */
export type CurrentAptosNamesSumOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type CurrentAptosNamesVarPopFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "current_aptos_names" */
export type CurrentAptosNamesVarPopOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CurrentAptosNamesVarSampFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "current_aptos_names" */
export type CurrentAptosNamesVarSampOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CurrentAptosNamesVarianceFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  subdomain_expiration_policy?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "current_aptos_names" */
export type CurrentAptosNamesVarianceOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  subdomain_expiration_policy?: InputMaybe<OrderBy>;
};

/** columns and relationships of "legacy_migration_v1.current_coin_balances" */
export type CurrentCoinBalances = {
  amount?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  coin_info?: Maybe<CoinInfos>;
  coin_type?: Maybe<Scalars['String']['output']>;
  coin_type_hash?: Maybe<Scalars['String']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.current_coin_balances". All fields are combined with a logical 'AND'. */
export type CurrentCoinBalancesBoolExp = {
  _and?: InputMaybe<Array<CurrentCoinBalancesBoolExp>>;
  _not?: InputMaybe<CurrentCoinBalancesBoolExp>;
  _or?: InputMaybe<Array<CurrentCoinBalancesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  coin_info?: InputMaybe<CoinInfosBoolExp>;
  coin_type?: InputMaybe<StringComparisonExp>;
  coin_type_hash?: InputMaybe<StringComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.current_coin_balances". */
export type CurrentCoinBalancesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  coin_info?: InputMaybe<CoinInfosOrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  coin_type_hash?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.current_coin_balances" */
export enum CurrentCoinBalancesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CoinType = 'coin_type',
  /** column name */
  CoinTypeHash = 'coin_type_hash',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  OwnerAddress = 'owner_address'
}

/** Streaming cursor of the table "current_coin_balances" */
export type CurrentCoinBalancesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentCoinBalancesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentCoinBalancesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  coin_type?: InputMaybe<Scalars['String']['input']>;
  coin_type_hash?: InputMaybe<Scalars['String']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "legacy_migration_v1.current_collection_datas" */
export type CurrentCollectionDatas = {
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  description_mutable?: Maybe<Scalars['Boolean']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  maximum?: Maybe<Scalars['numeric']['output']>;
  maximum_mutable?: Maybe<Scalars['Boolean']['output']>;
  metadata_uri?: Maybe<Scalars['String']['output']>;
  supply?: Maybe<Scalars['numeric']['output']>;
  table_handle?: Maybe<Scalars['String']['output']>;
  uri_mutable?: Maybe<Scalars['Boolean']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.current_collection_datas". All fields are combined with a logical 'AND'. */
export type CurrentCollectionDatasBoolExp = {
  _and?: InputMaybe<Array<CurrentCollectionDatasBoolExp>>;
  _not?: InputMaybe<CurrentCollectionDatasBoolExp>;
  _or?: InputMaybe<Array<CurrentCollectionDatasBoolExp>>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  description_mutable?: InputMaybe<BooleanComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  maximum?: InputMaybe<NumericComparisonExp>;
  maximum_mutable?: InputMaybe<BooleanComparisonExp>;
  metadata_uri?: InputMaybe<StringComparisonExp>;
  supply?: InputMaybe<NumericComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
  uri_mutable?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.current_collection_datas". */
export type CurrentCollectionDatasOrderBy = {
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  description_mutable?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  maximum?: InputMaybe<OrderBy>;
  maximum_mutable?: InputMaybe<OrderBy>;
  metadata_uri?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
  uri_mutable?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.current_collection_datas" */
export enum CurrentCollectionDatasSelectColumn {
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Description = 'description',
  /** column name */
  DescriptionMutable = 'description_mutable',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  Maximum = 'maximum',
  /** column name */
  MaximumMutable = 'maximum_mutable',
  /** column name */
  MetadataUri = 'metadata_uri',
  /** column name */
  Supply = 'supply',
  /** column name */
  TableHandle = 'table_handle',
  /** column name */
  UriMutable = 'uri_mutable'
}

/** Streaming cursor of the table "current_collection_datas" */
export type CurrentCollectionDatasStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentCollectionDatasStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentCollectionDatasStreamCursorValueInput = {
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  maximum?: InputMaybe<Scalars['numeric']['input']>;
  maximum_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  metadata_uri?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['numeric']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
  uri_mutable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "current_collection_ownership_v2_view" */
export type CurrentCollectionOwnershipV2View = {
  collection_id?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  collection_uri?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  current_collection?: Maybe<CurrentCollectionsV2>;
  distinct_tokens?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  single_token_uri?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "current_collection_ownership_v2_view" */
export type CurrentCollectionOwnershipV2ViewAggregate = {
  aggregate?: Maybe<CurrentCollectionOwnershipV2ViewAggregateFields>;
  nodes: Array<CurrentCollectionOwnershipV2View>;
};

/** aggregate fields of "current_collection_ownership_v2_view" */
export type CurrentCollectionOwnershipV2ViewAggregateFields = {
  avg?: Maybe<CurrentCollectionOwnershipV2ViewAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CurrentCollectionOwnershipV2ViewMaxFields>;
  min?: Maybe<CurrentCollectionOwnershipV2ViewMinFields>;
  stddev?: Maybe<CurrentCollectionOwnershipV2ViewStddevFields>;
  stddev_pop?: Maybe<CurrentCollectionOwnershipV2ViewStddevPopFields>;
  stddev_samp?: Maybe<CurrentCollectionOwnershipV2ViewStddevSampFields>;
  sum?: Maybe<CurrentCollectionOwnershipV2ViewSumFields>;
  var_pop?: Maybe<CurrentCollectionOwnershipV2ViewVarPopFields>;
  var_samp?: Maybe<CurrentCollectionOwnershipV2ViewVarSampFields>;
  variance?: Maybe<CurrentCollectionOwnershipV2ViewVarianceFields>;
};


/** aggregate fields of "current_collection_ownership_v2_view" */
export type CurrentCollectionOwnershipV2ViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type CurrentCollectionOwnershipV2ViewAvgFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "current_collection_ownership_v2_view". All fields are combined with a logical 'AND'. */
export type CurrentCollectionOwnershipV2ViewBoolExp = {
  _and?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewBoolExp>>;
  _not?: InputMaybe<CurrentCollectionOwnershipV2ViewBoolExp>;
  _or?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewBoolExp>>;
  collection_id?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  collection_uri?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  current_collection?: InputMaybe<CurrentCollectionsV2BoolExp>;
  distinct_tokens?: InputMaybe<BigintComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  single_token_uri?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type CurrentCollectionOwnershipV2ViewMaxFields = {
  collection_id?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  collection_uri?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  distinct_tokens?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  single_token_uri?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CurrentCollectionOwnershipV2ViewMinFields = {
  collection_id?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  collection_uri?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  distinct_tokens?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  single_token_uri?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "current_collection_ownership_v2_view". */
export type CurrentCollectionOwnershipV2ViewOrderBy = {
  collection_id?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  collection_uri?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  current_collection?: InputMaybe<CurrentCollectionsV2OrderBy>;
  distinct_tokens?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  single_token_uri?: InputMaybe<OrderBy>;
};

/** select columns of table "current_collection_ownership_v2_view" */
export enum CurrentCollectionOwnershipV2ViewSelectColumn {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CollectionUri = 'collection_uri',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  DistinctTokens = 'distinct_tokens',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  SingleTokenUri = 'single_token_uri'
}

/** aggregate stddev on columns */
export type CurrentCollectionOwnershipV2ViewStddevFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type CurrentCollectionOwnershipV2ViewStddevPopFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type CurrentCollectionOwnershipV2ViewStddevSampFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "current_collection_ownership_v2_view" */
export type CurrentCollectionOwnershipV2ViewStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentCollectionOwnershipV2ViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentCollectionOwnershipV2ViewStreamCursorValueInput = {
  collection_id?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  collection_uri?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  distinct_tokens?: InputMaybe<Scalars['bigint']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  single_token_uri?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CurrentCollectionOwnershipV2ViewSumFields = {
  distinct_tokens?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type CurrentCollectionOwnershipV2ViewVarPopFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type CurrentCollectionOwnershipV2ViewVarSampFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type CurrentCollectionOwnershipV2ViewVarianceFields = {
  distinct_tokens?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "current_collections_v2" */
export type CurrentCollectionsV2 = {
  /** An object relationship */
  cdn_asset_uris?: Maybe<NftMetadataCrawlerParsedAssetUris>;
  collection_id: Scalars['String']['output'];
  collection_name: Scalars['String']['output'];
  collection_properties?: Maybe<Scalars['jsonb']['output']>;
  creator_address: Scalars['String']['output'];
  current_supply: Scalars['numeric']['output'];
  description: Scalars['String']['output'];
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  max_supply?: Maybe<Scalars['numeric']['output']>;
  mutable_description?: Maybe<Scalars['Boolean']['output']>;
  mutable_uri?: Maybe<Scalars['Boolean']['output']>;
  table_handle_v1?: Maybe<Scalars['String']['output']>;
  token_standard: Scalars['String']['output'];
  total_minted_v2?: Maybe<Scalars['numeric']['output']>;
  uri: Scalars['String']['output'];
};


/** columns and relationships of "current_collections_v2" */
export type CurrentCollectionsV2CollectionPropertiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "current_collections_v2". All fields are combined with a logical 'AND'. */
export type CurrentCollectionsV2BoolExp = {
  _and?: InputMaybe<Array<CurrentCollectionsV2BoolExp>>;
  _not?: InputMaybe<CurrentCollectionsV2BoolExp>;
  _or?: InputMaybe<Array<CurrentCollectionsV2BoolExp>>;
  cdn_asset_uris?: InputMaybe<NftMetadataCrawlerParsedAssetUrisBoolExp>;
  collection_id?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  collection_properties?: InputMaybe<JsonbComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  current_supply?: InputMaybe<NumericComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  max_supply?: InputMaybe<NumericComparisonExp>;
  mutable_description?: InputMaybe<BooleanComparisonExp>;
  mutable_uri?: InputMaybe<BooleanComparisonExp>;
  table_handle_v1?: InputMaybe<StringComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
  total_minted_v2?: InputMaybe<NumericComparisonExp>;
  uri?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_collections_v2". */
export type CurrentCollectionsV2OrderBy = {
  cdn_asset_uris?: InputMaybe<NftMetadataCrawlerParsedAssetUrisOrderBy>;
  collection_id?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  collection_properties?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  current_supply?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  max_supply?: InputMaybe<OrderBy>;
  mutable_description?: InputMaybe<OrderBy>;
  mutable_uri?: InputMaybe<OrderBy>;
  table_handle_v1?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  total_minted_v2?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
};

/** select columns of table "current_collections_v2" */
export enum CurrentCollectionsV2SelectColumn {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CollectionProperties = 'collection_properties',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  CurrentSupply = 'current_supply',
  /** column name */
  Description = 'description',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  MutableDescription = 'mutable_description',
  /** column name */
  MutableUri = 'mutable_uri',
  /** column name */
  TableHandleV1 = 'table_handle_v1',
  /** column name */
  TokenStandard = 'token_standard',
  /** column name */
  TotalMintedV2 = 'total_minted_v2',
  /** column name */
  Uri = 'uri'
}

/** Streaming cursor of the table "current_collections_v2" */
export type CurrentCollectionsV2StreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentCollectionsV2StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentCollectionsV2StreamCursorValueInput = {
  collection_id?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  collection_properties?: InputMaybe<Scalars['jsonb']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  current_supply?: InputMaybe<Scalars['numeric']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  max_supply?: InputMaybe<Scalars['numeric']['input']>;
  mutable_description?: InputMaybe<Scalars['Boolean']['input']>;
  mutable_uri?: InputMaybe<Scalars['Boolean']['input']>;
  table_handle_v1?: InputMaybe<Scalars['String']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
  total_minted_v2?: InputMaybe<Scalars['numeric']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_delegated_staking_pool_balances" */
export type CurrentDelegatedStakingPoolBalances = {
  active_table_handle: Scalars['String']['output'];
  inactive_table_handle: Scalars['String']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  operator_commission_percentage: Scalars['numeric']['output'];
  staking_pool_address: Scalars['String']['output'];
  total_coins: Scalars['numeric']['output'];
  total_shares: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "current_delegated_staking_pool_balances". All fields are combined with a logical 'AND'. */
export type CurrentDelegatedStakingPoolBalancesBoolExp = {
  _and?: InputMaybe<Array<CurrentDelegatedStakingPoolBalancesBoolExp>>;
  _not?: InputMaybe<CurrentDelegatedStakingPoolBalancesBoolExp>;
  _or?: InputMaybe<Array<CurrentDelegatedStakingPoolBalancesBoolExp>>;
  active_table_handle?: InputMaybe<StringComparisonExp>;
  inactive_table_handle?: InputMaybe<StringComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  operator_commission_percentage?: InputMaybe<NumericComparisonExp>;
  staking_pool_address?: InputMaybe<StringComparisonExp>;
  total_coins?: InputMaybe<NumericComparisonExp>;
  total_shares?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "current_delegated_staking_pool_balances". */
export type CurrentDelegatedStakingPoolBalancesOrderBy = {
  active_table_handle?: InputMaybe<OrderBy>;
  inactive_table_handle?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  operator_commission_percentage?: InputMaybe<OrderBy>;
  staking_pool_address?: InputMaybe<OrderBy>;
  total_coins?: InputMaybe<OrderBy>;
  total_shares?: InputMaybe<OrderBy>;
};

/** select columns of table "current_delegated_staking_pool_balances" */
export enum CurrentDelegatedStakingPoolBalancesSelectColumn {
  /** column name */
  ActiveTableHandle = 'active_table_handle',
  /** column name */
  InactiveTableHandle = 'inactive_table_handle',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  OperatorCommissionPercentage = 'operator_commission_percentage',
  /** column name */
  StakingPoolAddress = 'staking_pool_address',
  /** column name */
  TotalCoins = 'total_coins',
  /** column name */
  TotalShares = 'total_shares'
}

/** Streaming cursor of the table "current_delegated_staking_pool_balances" */
export type CurrentDelegatedStakingPoolBalancesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentDelegatedStakingPoolBalancesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentDelegatedStakingPoolBalancesStreamCursorValueInput = {
  active_table_handle?: InputMaybe<Scalars['String']['input']>;
  inactive_table_handle?: InputMaybe<Scalars['String']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  operator_commission_percentage?: InputMaybe<Scalars['numeric']['input']>;
  staking_pool_address?: InputMaybe<Scalars['String']['input']>;
  total_coins?: InputMaybe<Scalars['numeric']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "current_delegated_voter" */
export type CurrentDelegatedVoter = {
  delegation_pool_address: Scalars['String']['output'];
  delegator_address: Scalars['String']['output'];
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  pending_voter?: Maybe<Scalars['String']['output']>;
  table_handle?: Maybe<Scalars['String']['output']>;
  voter?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "current_delegated_voter". All fields are combined with a logical 'AND'. */
export type CurrentDelegatedVoterBoolExp = {
  _and?: InputMaybe<Array<CurrentDelegatedVoterBoolExp>>;
  _not?: InputMaybe<CurrentDelegatedVoterBoolExp>;
  _or?: InputMaybe<Array<CurrentDelegatedVoterBoolExp>>;
  delegation_pool_address?: InputMaybe<StringComparisonExp>;
  delegator_address?: InputMaybe<StringComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  pending_voter?: InputMaybe<StringComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
  voter?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_delegated_voter". */
export type CurrentDelegatedVoterOrderBy = {
  delegation_pool_address?: InputMaybe<OrderBy>;
  delegator_address?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  pending_voter?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
  voter?: InputMaybe<OrderBy>;
};

/** select columns of table "current_delegated_voter" */
export enum CurrentDelegatedVoterSelectColumn {
  /** column name */
  DelegationPoolAddress = 'delegation_pool_address',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  PendingVoter = 'pending_voter',
  /** column name */
  TableHandle = 'table_handle',
  /** column name */
  Voter = 'voter'
}

/** Streaming cursor of the table "current_delegated_voter" */
export type CurrentDelegatedVoterStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentDelegatedVoterStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentDelegatedVoterStreamCursorValueInput = {
  delegation_pool_address?: InputMaybe<Scalars['String']['input']>;
  delegator_address?: InputMaybe<Scalars['String']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  pending_voter?: InputMaybe<Scalars['String']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
  voter?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_delegator_balances" */
export type CurrentDelegatorBalances = {
  /** An object relationship */
  current_pool_balance?: Maybe<CurrentDelegatedStakingPoolBalances>;
  delegator_address: Scalars['String']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  parent_table_handle: Scalars['String']['output'];
  pool_address: Scalars['String']['output'];
  pool_type: Scalars['String']['output'];
  shares: Scalars['numeric']['output'];
  /** An object relationship */
  staking_pool_metadata?: Maybe<CurrentStakingPoolVoter>;
  table_handle: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "current_delegator_balances". All fields are combined with a logical 'AND'. */
export type CurrentDelegatorBalancesBoolExp = {
  _and?: InputMaybe<Array<CurrentDelegatorBalancesBoolExp>>;
  _not?: InputMaybe<CurrentDelegatorBalancesBoolExp>;
  _or?: InputMaybe<Array<CurrentDelegatorBalancesBoolExp>>;
  current_pool_balance?: InputMaybe<CurrentDelegatedStakingPoolBalancesBoolExp>;
  delegator_address?: InputMaybe<StringComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  parent_table_handle?: InputMaybe<StringComparisonExp>;
  pool_address?: InputMaybe<StringComparisonExp>;
  pool_type?: InputMaybe<StringComparisonExp>;
  shares?: InputMaybe<NumericComparisonExp>;
  staking_pool_metadata?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_delegator_balances". */
export type CurrentDelegatorBalancesOrderBy = {
  current_pool_balance?: InputMaybe<CurrentDelegatedStakingPoolBalancesOrderBy>;
  delegator_address?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  parent_table_handle?: InputMaybe<OrderBy>;
  pool_address?: InputMaybe<OrderBy>;
  pool_type?: InputMaybe<OrderBy>;
  shares?: InputMaybe<OrderBy>;
  staking_pool_metadata?: InputMaybe<CurrentStakingPoolVoterOrderBy>;
  table_handle?: InputMaybe<OrderBy>;
};

/** select columns of table "current_delegator_balances" */
export enum CurrentDelegatorBalancesSelectColumn {
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  ParentTableHandle = 'parent_table_handle',
  /** column name */
  PoolAddress = 'pool_address',
  /** column name */
  PoolType = 'pool_type',
  /** column name */
  Shares = 'shares',
  /** column name */
  TableHandle = 'table_handle'
}

/** Streaming cursor of the table "current_delegator_balances" */
export type CurrentDelegatorBalancesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentDelegatorBalancesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentDelegatorBalancesStreamCursorValueInput = {
  delegator_address?: InputMaybe<Scalars['String']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  parent_table_handle?: InputMaybe<Scalars['String']['input']>;
  pool_address?: InputMaybe<Scalars['String']['input']>;
  pool_type?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_fungible_asset_balances" */
export type CurrentFungibleAssetBalances = {
  amount: Scalars['numeric']['output'];
  amount_v1?: Maybe<Scalars['numeric']['output']>;
  amount_v2?: Maybe<Scalars['numeric']['output']>;
  asset_type: Scalars['String']['output'];
  asset_type_v1?: Maybe<Scalars['String']['output']>;
  asset_type_v2?: Maybe<Scalars['String']['output']>;
  is_frozen: Scalars['Boolean']['output'];
  is_primary: Scalars['Boolean']['output'];
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_timestamp_v1?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_timestamp_v2?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  metadata?: Maybe<FungibleAssetMetadata>;
  owner_address: Scalars['String']['output'];
  storage_id: Scalars['String']['output'];
  token_standard: Scalars['String']['output'];
};

/** aggregated selection of "current_fungible_asset_balances" */
export type CurrentFungibleAssetBalancesAggregate = {
  aggregate?: Maybe<CurrentFungibleAssetBalancesAggregateFields>;
  nodes: Array<CurrentFungibleAssetBalances>;
};

/** aggregate fields of "current_fungible_asset_balances" */
export type CurrentFungibleAssetBalancesAggregateFields = {
  avg?: Maybe<CurrentFungibleAssetBalancesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CurrentFungibleAssetBalancesMaxFields>;
  min?: Maybe<CurrentFungibleAssetBalancesMinFields>;
  stddev?: Maybe<CurrentFungibleAssetBalancesStddevFields>;
  stddev_pop?: Maybe<CurrentFungibleAssetBalancesStddevPopFields>;
  stddev_samp?: Maybe<CurrentFungibleAssetBalancesStddevSampFields>;
  sum?: Maybe<CurrentFungibleAssetBalancesSumFields>;
  var_pop?: Maybe<CurrentFungibleAssetBalancesVarPopFields>;
  var_samp?: Maybe<CurrentFungibleAssetBalancesVarSampFields>;
  variance?: Maybe<CurrentFungibleAssetBalancesVarianceFields>;
};


/** aggregate fields of "current_fungible_asset_balances" */
export type CurrentFungibleAssetBalancesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CurrentFungibleAssetBalancesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type CurrentFungibleAssetBalancesAvgFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "current_fungible_asset_balances". All fields are combined with a logical 'AND'. */
export type CurrentFungibleAssetBalancesBoolExp = {
  _and?: InputMaybe<Array<CurrentFungibleAssetBalancesBoolExp>>;
  _not?: InputMaybe<CurrentFungibleAssetBalancesBoolExp>;
  _or?: InputMaybe<Array<CurrentFungibleAssetBalancesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  amount_v1?: InputMaybe<NumericComparisonExp>;
  amount_v2?: InputMaybe<NumericComparisonExp>;
  asset_type?: InputMaybe<StringComparisonExp>;
  asset_type_v1?: InputMaybe<StringComparisonExp>;
  asset_type_v2?: InputMaybe<StringComparisonExp>;
  is_frozen?: InputMaybe<BooleanComparisonExp>;
  is_primary?: InputMaybe<BooleanComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_timestamp_v1?: InputMaybe<TimestampComparisonExp>;
  last_transaction_timestamp_v2?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  last_transaction_version_v1?: InputMaybe<BigintComparisonExp>;
  last_transaction_version_v2?: InputMaybe<BigintComparisonExp>;
  metadata?: InputMaybe<FungibleAssetMetadataBoolExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  storage_id?: InputMaybe<StringComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type CurrentFungibleAssetBalancesMaxFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  amount_v1?: Maybe<Scalars['numeric']['output']>;
  amount_v2?: Maybe<Scalars['numeric']['output']>;
  asset_type?: Maybe<Scalars['String']['output']>;
  asset_type_v1?: Maybe<Scalars['String']['output']>;
  asset_type_v2?: Maybe<Scalars['String']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_timestamp_v1?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_timestamp_v2?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  storage_id?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CurrentFungibleAssetBalancesMinFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  amount_v1?: Maybe<Scalars['numeric']['output']>;
  amount_v2?: Maybe<Scalars['numeric']['output']>;
  asset_type?: Maybe<Scalars['String']['output']>;
  asset_type_v1?: Maybe<Scalars['String']['output']>;
  asset_type_v2?: Maybe<Scalars['String']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_timestamp_v1?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_timestamp_v2?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  storage_id?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "current_fungible_asset_balances". */
export type CurrentFungibleAssetBalancesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amount_v1?: InputMaybe<OrderBy>;
  amount_v2?: InputMaybe<OrderBy>;
  asset_type?: InputMaybe<OrderBy>;
  asset_type_v1?: InputMaybe<OrderBy>;
  asset_type_v2?: InputMaybe<OrderBy>;
  is_frozen?: InputMaybe<OrderBy>;
  is_primary?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_timestamp_v1?: InputMaybe<OrderBy>;
  last_transaction_timestamp_v2?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  last_transaction_version_v1?: InputMaybe<OrderBy>;
  last_transaction_version_v2?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<FungibleAssetMetadataOrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** select columns of table "current_fungible_asset_balances" */
export enum CurrentFungibleAssetBalancesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountV1 = 'amount_v1',
  /** column name */
  AmountV2 = 'amount_v2',
  /** column name */
  AssetType = 'asset_type',
  /** column name */
  AssetTypeV1 = 'asset_type_v1',
  /** column name */
  AssetTypeV2 = 'asset_type_v2',
  /** column name */
  IsFrozen = 'is_frozen',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionTimestampV1 = 'last_transaction_timestamp_v1',
  /** column name */
  LastTransactionTimestampV2 = 'last_transaction_timestamp_v2',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  LastTransactionVersionV1 = 'last_transaction_version_v1',
  /** column name */
  LastTransactionVersionV2 = 'last_transaction_version_v2',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  StorageId = 'storage_id',
  /** column name */
  TokenStandard = 'token_standard'
}

/** aggregate stddev on columns */
export type CurrentFungibleAssetBalancesStddevFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type CurrentFungibleAssetBalancesStddevPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type CurrentFungibleAssetBalancesStddevSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "current_fungible_asset_balances" */
export type CurrentFungibleAssetBalancesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentFungibleAssetBalancesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentFungibleAssetBalancesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  amount_v1?: InputMaybe<Scalars['numeric']['input']>;
  amount_v2?: InputMaybe<Scalars['numeric']['input']>;
  asset_type?: InputMaybe<Scalars['String']['input']>;
  asset_type_v1?: InputMaybe<Scalars['String']['input']>;
  asset_type_v2?: InputMaybe<Scalars['String']['input']>;
  is_frozen?: InputMaybe<Scalars['Boolean']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_timestamp_v1?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_timestamp_v2?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  last_transaction_version_v1?: InputMaybe<Scalars['bigint']['input']>;
  last_transaction_version_v2?: InputMaybe<Scalars['bigint']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  storage_id?: InputMaybe<Scalars['String']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CurrentFungibleAssetBalancesSumFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  amount_v1?: Maybe<Scalars['numeric']['output']>;
  amount_v2?: Maybe<Scalars['numeric']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['bigint']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type CurrentFungibleAssetBalancesVarPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type CurrentFungibleAssetBalancesVarSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type CurrentFungibleAssetBalancesVarianceFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  amount_v1?: Maybe<Scalars['Float']['output']>;
  amount_v2?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v1?: Maybe<Scalars['Float']['output']>;
  last_transaction_version_v2?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "current_objects" */
export type CurrentObjects = {
  allow_ungated_transfer: Scalars['Boolean']['output'];
  is_deleted: Scalars['Boolean']['output'];
  last_guid_creation_num: Scalars['numeric']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  object_address: Scalars['String']['output'];
  owner_address: Scalars['String']['output'];
  state_key_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "current_objects". All fields are combined with a logical 'AND'. */
export type CurrentObjectsBoolExp = {
  _and?: InputMaybe<Array<CurrentObjectsBoolExp>>;
  _not?: InputMaybe<CurrentObjectsBoolExp>;
  _or?: InputMaybe<Array<CurrentObjectsBoolExp>>;
  allow_ungated_transfer?: InputMaybe<BooleanComparisonExp>;
  is_deleted?: InputMaybe<BooleanComparisonExp>;
  last_guid_creation_num?: InputMaybe<NumericComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  object_address?: InputMaybe<StringComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  state_key_hash?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_objects". */
export type CurrentObjectsOrderBy = {
  allow_ungated_transfer?: InputMaybe<OrderBy>;
  is_deleted?: InputMaybe<OrderBy>;
  last_guid_creation_num?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  object_address?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  state_key_hash?: InputMaybe<OrderBy>;
};

/** select columns of table "current_objects" */
export enum CurrentObjectsSelectColumn {
  /** column name */
  AllowUngatedTransfer = 'allow_ungated_transfer',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LastGuidCreationNum = 'last_guid_creation_num',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  ObjectAddress = 'object_address',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  StateKeyHash = 'state_key_hash'
}

/** Streaming cursor of the table "current_objects" */
export type CurrentObjectsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentObjectsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentObjectsStreamCursorValueInput = {
  allow_ungated_transfer?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  last_guid_creation_num?: InputMaybe<Scalars['numeric']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  object_address?: InputMaybe<Scalars['String']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  state_key_hash?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_staking_pool_voter" */
export type CurrentStakingPoolVoter = {
  last_transaction_version: Scalars['bigint']['output'];
  operator_address: Scalars['String']['output'];
  /** An array relationship */
  operator_aptos_name: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  operator_aptos_name_aggregate: CurrentAptosNamesAggregate;
  staking_pool_address: Scalars['String']['output'];
  voter_address: Scalars['String']['output'];
};


/** columns and relationships of "current_staking_pool_voter" */
export type CurrentStakingPoolVoterOperatorAptosNameArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "current_staking_pool_voter" */
export type CurrentStakingPoolVoterOperatorAptosNameAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};

/** Boolean expression to filter rows from the table "current_staking_pool_voter". All fields are combined with a logical 'AND'. */
export type CurrentStakingPoolVoterBoolExp = {
  _and?: InputMaybe<Array<CurrentStakingPoolVoterBoolExp>>;
  _not?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
  _or?: InputMaybe<Array<CurrentStakingPoolVoterBoolExp>>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  operator_address?: InputMaybe<StringComparisonExp>;
  operator_aptos_name?: InputMaybe<CurrentAptosNamesBoolExp>;
  operator_aptos_name_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  staking_pool_address?: InputMaybe<StringComparisonExp>;
  voter_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_staking_pool_voter". */
export type CurrentStakingPoolVoterOrderBy = {
  last_transaction_version?: InputMaybe<OrderBy>;
  operator_address?: InputMaybe<OrderBy>;
  operator_aptos_name_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  staking_pool_address?: InputMaybe<OrderBy>;
  voter_address?: InputMaybe<OrderBy>;
};

/** select columns of table "current_staking_pool_voter" */
export enum CurrentStakingPoolVoterSelectColumn {
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  StakingPoolAddress = 'staking_pool_address',
  /** column name */
  VoterAddress = 'voter_address'
}

/** Streaming cursor of the table "current_staking_pool_voter" */
export type CurrentStakingPoolVoterStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentStakingPoolVoterStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentStakingPoolVoterStreamCursorValueInput = {
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  staking_pool_address?: InputMaybe<Scalars['String']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_table_items" */
export type CurrentTableItems = {
  decoded_key: Scalars['jsonb']['output'];
  decoded_value?: Maybe<Scalars['jsonb']['output']>;
  is_deleted: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  key_hash: Scalars['String']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  table_handle: Scalars['String']['output'];
};


/** columns and relationships of "current_table_items" */
export type CurrentTableItemsDecodedKeyArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "current_table_items" */
export type CurrentTableItemsDecodedValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "current_table_items". All fields are combined with a logical 'AND'. */
export type CurrentTableItemsBoolExp = {
  _and?: InputMaybe<Array<CurrentTableItemsBoolExp>>;
  _not?: InputMaybe<CurrentTableItemsBoolExp>;
  _or?: InputMaybe<Array<CurrentTableItemsBoolExp>>;
  decoded_key?: InputMaybe<JsonbComparisonExp>;
  decoded_value?: InputMaybe<JsonbComparisonExp>;
  is_deleted?: InputMaybe<BooleanComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  key_hash?: InputMaybe<StringComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_table_items". */
export type CurrentTableItemsOrderBy = {
  decoded_key?: InputMaybe<OrderBy>;
  decoded_value?: InputMaybe<OrderBy>;
  is_deleted?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  key_hash?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
};

/** select columns of table "current_table_items" */
export enum CurrentTableItemsSelectColumn {
  /** column name */
  DecodedKey = 'decoded_key',
  /** column name */
  DecodedValue = 'decoded_value',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Key = 'key',
  /** column name */
  KeyHash = 'key_hash',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  TableHandle = 'table_handle'
}

/** Streaming cursor of the table "current_table_items" */
export type CurrentTableItemsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTableItemsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTableItemsStreamCursorValueInput = {
  decoded_key?: InputMaybe<Scalars['jsonb']['input']>;
  decoded_value?: InputMaybe<Scalars['jsonb']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_hash?: InputMaybe<Scalars['String']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "legacy_migration_v1.current_token_datas" */
export type CurrentTokenDatas = {
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  current_collection_data?: Maybe<CurrentCollectionDatas>;
  default_properties?: Maybe<Scalars['jsonb']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  description_mutable?: Maybe<Scalars['Boolean']['output']>;
  largest_property_version?: Maybe<Scalars['numeric']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  maximum?: Maybe<Scalars['numeric']['output']>;
  maximum_mutable?: Maybe<Scalars['Boolean']['output']>;
  metadata_uri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payee_address?: Maybe<Scalars['String']['output']>;
  properties_mutable?: Maybe<Scalars['Boolean']['output']>;
  royalty_mutable?: Maybe<Scalars['Boolean']['output']>;
  royalty_points_denominator?: Maybe<Scalars['numeric']['output']>;
  royalty_points_numerator?: Maybe<Scalars['numeric']['output']>;
  supply?: Maybe<Scalars['numeric']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  uri_mutable?: Maybe<Scalars['Boolean']['output']>;
};


/** columns and relationships of "legacy_migration_v1.current_token_datas" */
export type CurrentTokenDatasDefaultPropertiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.current_token_datas". All fields are combined with a logical 'AND'. */
export type CurrentTokenDatasBoolExp = {
  _and?: InputMaybe<Array<CurrentTokenDatasBoolExp>>;
  _not?: InputMaybe<CurrentTokenDatasBoolExp>;
  _or?: InputMaybe<Array<CurrentTokenDatasBoolExp>>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  current_collection_data?: InputMaybe<CurrentCollectionDatasBoolExp>;
  default_properties?: InputMaybe<JsonbComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  description_mutable?: InputMaybe<BooleanComparisonExp>;
  largest_property_version?: InputMaybe<NumericComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  maximum?: InputMaybe<NumericComparisonExp>;
  maximum_mutable?: InputMaybe<BooleanComparisonExp>;
  metadata_uri?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  payee_address?: InputMaybe<StringComparisonExp>;
  properties_mutable?: InputMaybe<BooleanComparisonExp>;
  royalty_mutable?: InputMaybe<BooleanComparisonExp>;
  royalty_points_denominator?: InputMaybe<NumericComparisonExp>;
  royalty_points_numerator?: InputMaybe<NumericComparisonExp>;
  supply?: InputMaybe<NumericComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
  uri_mutable?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.current_token_datas". */
export type CurrentTokenDatasOrderBy = {
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  current_collection_data?: InputMaybe<CurrentCollectionDatasOrderBy>;
  default_properties?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  description_mutable?: InputMaybe<OrderBy>;
  largest_property_version?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  maximum?: InputMaybe<OrderBy>;
  maximum_mutable?: InputMaybe<OrderBy>;
  metadata_uri?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  payee_address?: InputMaybe<OrderBy>;
  properties_mutable?: InputMaybe<OrderBy>;
  royalty_mutable?: InputMaybe<OrderBy>;
  royalty_points_denominator?: InputMaybe<OrderBy>;
  royalty_points_numerator?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  uri_mutable?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.current_token_datas" */
export enum CurrentTokenDatasSelectColumn {
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  DefaultProperties = 'default_properties',
  /** column name */
  Description = 'description',
  /** column name */
  DescriptionMutable = 'description_mutable',
  /** column name */
  LargestPropertyVersion = 'largest_property_version',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  Maximum = 'maximum',
  /** column name */
  MaximumMutable = 'maximum_mutable',
  /** column name */
  MetadataUri = 'metadata_uri',
  /** column name */
  Name = 'name',
  /** column name */
  PayeeAddress = 'payee_address',
  /** column name */
  PropertiesMutable = 'properties_mutable',
  /** column name */
  RoyaltyMutable = 'royalty_mutable',
  /** column name */
  RoyaltyPointsDenominator = 'royalty_points_denominator',
  /** column name */
  RoyaltyPointsNumerator = 'royalty_points_numerator',
  /** column name */
  Supply = 'supply',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash',
  /** column name */
  UriMutable = 'uri_mutable'
}

/** Streaming cursor of the table "current_token_datas" */
export type CurrentTokenDatasStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTokenDatasStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTokenDatasStreamCursorValueInput = {
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  default_properties?: InputMaybe<Scalars['jsonb']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  largest_property_version?: InputMaybe<Scalars['numeric']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  maximum?: InputMaybe<Scalars['numeric']['input']>;
  maximum_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  metadata_uri?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payee_address?: InputMaybe<Scalars['String']['input']>;
  properties_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  royalty_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  royalty_points_denominator?: InputMaybe<Scalars['numeric']['input']>;
  royalty_points_numerator?: InputMaybe<Scalars['numeric']['input']>;
  supply?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  uri_mutable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "current_token_datas_v2" */
export type CurrentTokenDatasV2 = {
  /** An object relationship */
  aptos_name?: Maybe<CurrentAptosNames>;
  /** An object relationship */
  cdn_asset_uris?: Maybe<NftMetadataCrawlerParsedAssetUris>;
  collection_id: Scalars['String']['output'];
  /** An object relationship */
  current_collection?: Maybe<CurrentCollectionsV2>;
  /** An object relationship */
  current_royalty_v1?: Maybe<CurrentTokenRoyaltyV1>;
  /** An array relationship */
  current_token_ownerships: Array<CurrentTokenOwnershipsV2>;
  /** An aggregate relationship */
  current_token_ownerships_aggregate: CurrentTokenOwnershipsV2Aggregate;
  decimals?: Maybe<Scalars['bigint']['output']>;
  description: Scalars['String']['output'];
  is_deleted_v2?: Maybe<Scalars['Boolean']['output']>;
  is_fungible_v2?: Maybe<Scalars['Boolean']['output']>;
  largest_property_version_v1?: Maybe<Scalars['numeric']['output']>;
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  maximum?: Maybe<Scalars['numeric']['output']>;
  supply?: Maybe<Scalars['numeric']['output']>;
  token_data_id: Scalars['String']['output'];
  token_name: Scalars['String']['output'];
  token_properties: Scalars['jsonb']['output'];
  token_standard: Scalars['String']['output'];
  token_uri: Scalars['String']['output'];
};


/** columns and relationships of "current_token_datas_v2" */
export type CurrentTokenDatasV2CurrentTokenOwnershipsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


/** columns and relationships of "current_token_datas_v2" */
export type CurrentTokenDatasV2CurrentTokenOwnershipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


/** columns and relationships of "current_token_datas_v2" */
export type CurrentTokenDatasV2TokenPropertiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "current_token_datas_v2". All fields are combined with a logical 'AND'. */
export type CurrentTokenDatasV2BoolExp = {
  _and?: InputMaybe<Array<CurrentTokenDatasV2BoolExp>>;
  _not?: InputMaybe<CurrentTokenDatasV2BoolExp>;
  _or?: InputMaybe<Array<CurrentTokenDatasV2BoolExp>>;
  aptos_name?: InputMaybe<CurrentAptosNamesBoolExp>;
  cdn_asset_uris?: InputMaybe<NftMetadataCrawlerParsedAssetUrisBoolExp>;
  collection_id?: InputMaybe<StringComparisonExp>;
  current_collection?: InputMaybe<CurrentCollectionsV2BoolExp>;
  current_royalty_v1?: InputMaybe<CurrentTokenRoyaltyV1BoolExp>;
  current_token_ownerships?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
  current_token_ownerships_aggregate?: InputMaybe<CurrentTokenOwnershipsV2AggregateBoolExp>;
  decimals?: InputMaybe<BigintComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  is_deleted_v2?: InputMaybe<BooleanComparisonExp>;
  is_fungible_v2?: InputMaybe<BooleanComparisonExp>;
  largest_property_version_v1?: InputMaybe<NumericComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  maximum?: InputMaybe<NumericComparisonExp>;
  supply?: InputMaybe<NumericComparisonExp>;
  token_data_id?: InputMaybe<StringComparisonExp>;
  token_name?: InputMaybe<StringComparisonExp>;
  token_properties?: InputMaybe<JsonbComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
  token_uri?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_token_datas_v2". */
export type CurrentTokenDatasV2OrderBy = {
  aptos_name?: InputMaybe<CurrentAptosNamesOrderBy>;
  cdn_asset_uris?: InputMaybe<NftMetadataCrawlerParsedAssetUrisOrderBy>;
  collection_id?: InputMaybe<OrderBy>;
  current_collection?: InputMaybe<CurrentCollectionsV2OrderBy>;
  current_royalty_v1?: InputMaybe<CurrentTokenRoyaltyV1OrderBy>;
  current_token_ownerships_aggregate?: InputMaybe<CurrentTokenOwnershipsV2AggregateOrderBy>;
  decimals?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  is_deleted_v2?: InputMaybe<OrderBy>;
  is_fungible_v2?: InputMaybe<OrderBy>;
  largest_property_version_v1?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  maximum?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_name?: InputMaybe<OrderBy>;
  token_properties?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  token_uri?: InputMaybe<OrderBy>;
};

/** select columns of table "current_token_datas_v2" */
export enum CurrentTokenDatasV2SelectColumn {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Description = 'description',
  /** column name */
  IsDeletedV2 = 'is_deleted_v2',
  /** column name */
  IsFungibleV2 = 'is_fungible_v2',
  /** column name */
  LargestPropertyVersionV1 = 'largest_property_version_v1',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  Maximum = 'maximum',
  /** column name */
  Supply = 'supply',
  /** column name */
  TokenDataId = 'token_data_id',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  TokenProperties = 'token_properties',
  /** column name */
  TokenStandard = 'token_standard',
  /** column name */
  TokenUri = 'token_uri'
}

/** Streaming cursor of the table "current_token_datas_v2" */
export type CurrentTokenDatasV2StreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTokenDatasV2StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTokenDatasV2StreamCursorValueInput = {
  collection_id?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_deleted_v2?: InputMaybe<Scalars['Boolean']['input']>;
  is_fungible_v2?: InputMaybe<Scalars['Boolean']['input']>;
  largest_property_version_v1?: InputMaybe<Scalars['numeric']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  maximum?: InputMaybe<Scalars['numeric']['input']>;
  supply?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id?: InputMaybe<Scalars['String']['input']>;
  token_name?: InputMaybe<Scalars['String']['input']>;
  token_properties?: InputMaybe<Scalars['jsonb']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
  token_uri?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnerships = {
  amount?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  aptos_name?: Maybe<CurrentAptosNames>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  current_collection_data?: Maybe<CurrentCollectionDatas>;
  /** An object relationship */
  current_token_data?: Maybe<CurrentTokenDatas>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  table_type?: Maybe<Scalars['String']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  token_properties?: Maybe<Scalars['jsonb']['output']>;
};


/** columns and relationships of "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsTokenPropertiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsAggregate = {
  aggregate?: Maybe<CurrentTokenOwnershipsAggregateFields>;
  nodes: Array<CurrentTokenOwnerships>;
};

export type CurrentTokenOwnershipsAggregateBoolExp = {
  count?: InputMaybe<CurrentTokenOwnershipsAggregateBoolExpCount>;
};

export type CurrentTokenOwnershipsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsAggregateFields = {
  avg?: Maybe<CurrentTokenOwnershipsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CurrentTokenOwnershipsMaxFields>;
  min?: Maybe<CurrentTokenOwnershipsMinFields>;
  stddev?: Maybe<CurrentTokenOwnershipsStddevFields>;
  stddev_pop?: Maybe<CurrentTokenOwnershipsStddevPopFields>;
  stddev_samp?: Maybe<CurrentTokenOwnershipsStddevSampFields>;
  sum?: Maybe<CurrentTokenOwnershipsSumFields>;
  var_pop?: Maybe<CurrentTokenOwnershipsVarPopFields>;
  var_samp?: Maybe<CurrentTokenOwnershipsVarSampFields>;
  variance?: Maybe<CurrentTokenOwnershipsVarianceFields>;
};


/** aggregate fields of "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsAggregateOrderBy = {
  avg?: InputMaybe<CurrentTokenOwnershipsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CurrentTokenOwnershipsMaxOrderBy>;
  min?: InputMaybe<CurrentTokenOwnershipsMinOrderBy>;
  stddev?: InputMaybe<CurrentTokenOwnershipsStddevOrderBy>;
  stddev_pop?: InputMaybe<CurrentTokenOwnershipsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CurrentTokenOwnershipsStddevSampOrderBy>;
  sum?: InputMaybe<CurrentTokenOwnershipsSumOrderBy>;
  var_pop?: InputMaybe<CurrentTokenOwnershipsVarPopOrderBy>;
  var_samp?: InputMaybe<CurrentTokenOwnershipsVarSampOrderBy>;
  variance?: InputMaybe<CurrentTokenOwnershipsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type CurrentTokenOwnershipsAvgFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.current_token_ownerships". All fields are combined with a logical 'AND'. */
export type CurrentTokenOwnershipsBoolExp = {
  _and?: InputMaybe<Array<CurrentTokenOwnershipsBoolExp>>;
  _not?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
  _or?: InputMaybe<Array<CurrentTokenOwnershipsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  aptos_name?: InputMaybe<CurrentAptosNamesBoolExp>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  current_collection_data?: InputMaybe<CurrentCollectionDatasBoolExp>;
  current_token_data?: InputMaybe<CurrentTokenDatasBoolExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  property_version?: InputMaybe<NumericComparisonExp>;
  table_type?: InputMaybe<StringComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
  token_properties?: InputMaybe<JsonbComparisonExp>;
};

/** aggregate max on columns */
export type CurrentTokenOwnershipsMaxFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  table_type?: Maybe<Scalars['String']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  table_type?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CurrentTokenOwnershipsMinFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  table_type?: Maybe<Scalars['String']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  table_type?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "legacy_migration_v1.current_token_ownerships". */
export type CurrentTokenOwnershipsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  aptos_name?: InputMaybe<CurrentAptosNamesOrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  current_collection_data?: InputMaybe<CurrentCollectionDatasOrderBy>;
  current_token_data?: InputMaybe<CurrentTokenDatasOrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  table_type?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  token_properties?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.current_token_ownerships" */
export enum CurrentTokenOwnershipsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PropertyVersion = 'property_version',
  /** column name */
  TableType = 'table_type',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash',
  /** column name */
  TokenProperties = 'token_properties'
}

/** aggregate stddev on columns */
export type CurrentTokenOwnershipsStddevFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CurrentTokenOwnershipsStddevPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CurrentTokenOwnershipsStddevSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "current_token_ownerships" */
export type CurrentTokenOwnershipsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTokenOwnershipsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTokenOwnershipsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  property_version?: InputMaybe<Scalars['numeric']['input']>;
  table_type?: InputMaybe<Scalars['String']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  token_properties?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type CurrentTokenOwnershipsSumFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2 = {
  amount: Scalars['numeric']['output'];
  /** An array relationship */
  composed_nfts: Array<CurrentTokenOwnershipsV2>;
  /** An aggregate relationship */
  composed_nfts_aggregate: CurrentTokenOwnershipsV2Aggregate;
  /** An object relationship */
  current_token_data?: Maybe<CurrentTokenDatasV2>;
  is_fungible_v2?: Maybe<Scalars['Boolean']['output']>;
  is_soulbound_v2?: Maybe<Scalars['Boolean']['output']>;
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  non_transferrable_by_owner?: Maybe<Scalars['Boolean']['output']>;
  owner_address: Scalars['String']['output'];
  property_version_v1: Scalars['numeric']['output'];
  storage_id: Scalars['String']['output'];
  table_type_v1?: Maybe<Scalars['String']['output']>;
  token_data_id: Scalars['String']['output'];
  token_properties_mutated_v1?: Maybe<Scalars['jsonb']['output']>;
  token_standard: Scalars['String']['output'];
};


/** columns and relationships of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2ComposedNftsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


/** columns and relationships of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2ComposedNftsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


/** columns and relationships of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2TokenPropertiesMutatedV1Args = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2Aggregate = {
  aggregate?: Maybe<CurrentTokenOwnershipsV2AggregateFields>;
  nodes: Array<CurrentTokenOwnershipsV2>;
};

export type CurrentTokenOwnershipsV2AggregateBoolExp = {
  bool_and?: InputMaybe<CurrentTokenOwnershipsV2AggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<CurrentTokenOwnershipsV2AggregateBoolExpBoolOr>;
  count?: InputMaybe<CurrentTokenOwnershipsV2AggregateBoolExpCount>;
};

export type CurrentTokenOwnershipsV2AggregateBoolExpBoolAnd = {
  arguments: CurrentTokenOwnershipsV2SelectColumnCurrentTokenOwnershipsV2AggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
  predicate: BooleanComparisonExp;
};

export type CurrentTokenOwnershipsV2AggregateBoolExpBoolOr = {
  arguments: CurrentTokenOwnershipsV2SelectColumnCurrentTokenOwnershipsV2AggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
  predicate: BooleanComparisonExp;
};

export type CurrentTokenOwnershipsV2AggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2AggregateFields = {
  avg?: Maybe<CurrentTokenOwnershipsV2AvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CurrentTokenOwnershipsV2MaxFields>;
  min?: Maybe<CurrentTokenOwnershipsV2MinFields>;
  stddev?: Maybe<CurrentTokenOwnershipsV2StddevFields>;
  stddev_pop?: Maybe<CurrentTokenOwnershipsV2StddevPopFields>;
  stddev_samp?: Maybe<CurrentTokenOwnershipsV2StddevSampFields>;
  sum?: Maybe<CurrentTokenOwnershipsV2SumFields>;
  var_pop?: Maybe<CurrentTokenOwnershipsV2VarPopFields>;
  var_samp?: Maybe<CurrentTokenOwnershipsV2VarSampFields>;
  variance?: Maybe<CurrentTokenOwnershipsV2VarianceFields>;
};


/** aggregate fields of "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2AggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2AggregateOrderBy = {
  avg?: InputMaybe<CurrentTokenOwnershipsV2AvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CurrentTokenOwnershipsV2MaxOrderBy>;
  min?: InputMaybe<CurrentTokenOwnershipsV2MinOrderBy>;
  stddev?: InputMaybe<CurrentTokenOwnershipsV2StddevOrderBy>;
  stddev_pop?: InputMaybe<CurrentTokenOwnershipsV2StddevPopOrderBy>;
  stddev_samp?: InputMaybe<CurrentTokenOwnershipsV2StddevSampOrderBy>;
  sum?: InputMaybe<CurrentTokenOwnershipsV2SumOrderBy>;
  var_pop?: InputMaybe<CurrentTokenOwnershipsV2VarPopOrderBy>;
  var_samp?: InputMaybe<CurrentTokenOwnershipsV2VarSampOrderBy>;
  variance?: InputMaybe<CurrentTokenOwnershipsV2VarianceOrderBy>;
};

/** aggregate avg on columns */
export type CurrentTokenOwnershipsV2AvgFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2AvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "current_token_ownerships_v2". All fields are combined with a logical 'AND'. */
export type CurrentTokenOwnershipsV2BoolExp = {
  _and?: InputMaybe<Array<CurrentTokenOwnershipsV2BoolExp>>;
  _not?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
  _or?: InputMaybe<Array<CurrentTokenOwnershipsV2BoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  composed_nfts?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
  composed_nfts_aggregate?: InputMaybe<CurrentTokenOwnershipsV2AggregateBoolExp>;
  current_token_data?: InputMaybe<CurrentTokenDatasV2BoolExp>;
  is_fungible_v2?: InputMaybe<BooleanComparisonExp>;
  is_soulbound_v2?: InputMaybe<BooleanComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  non_transferrable_by_owner?: InputMaybe<BooleanComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  property_version_v1?: InputMaybe<NumericComparisonExp>;
  storage_id?: InputMaybe<StringComparisonExp>;
  table_type_v1?: InputMaybe<StringComparisonExp>;
  token_data_id?: InputMaybe<StringComparisonExp>;
  token_properties_mutated_v1?: InputMaybe<JsonbComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type CurrentTokenOwnershipsV2MaxFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  property_version_v1?: Maybe<Scalars['numeric']['output']>;
  storage_id?: Maybe<Scalars['String']['output']>;
  table_type_v1?: Maybe<Scalars['String']['output']>;
  token_data_id?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2MaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  table_type_v1?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CurrentTokenOwnershipsV2MinFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  property_version_v1?: Maybe<Scalars['numeric']['output']>;
  storage_id?: Maybe<Scalars['String']['output']>;
  table_type_v1?: Maybe<Scalars['String']['output']>;
  token_data_id?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2MinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  table_type_v1?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "current_token_ownerships_v2". */
export type CurrentTokenOwnershipsV2OrderBy = {
  amount?: InputMaybe<OrderBy>;
  composed_nfts_aggregate?: InputMaybe<CurrentTokenOwnershipsV2AggregateOrderBy>;
  current_token_data?: InputMaybe<CurrentTokenDatasV2OrderBy>;
  is_fungible_v2?: InputMaybe<OrderBy>;
  is_soulbound_v2?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  non_transferrable_by_owner?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  table_type_v1?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_properties_mutated_v1?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** select columns of table "current_token_ownerships_v2" */
export enum CurrentTokenOwnershipsV2SelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  IsFungibleV2 = 'is_fungible_v2',
  /** column name */
  IsSoulboundV2 = 'is_soulbound_v2',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  NonTransferrableByOwner = 'non_transferrable_by_owner',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PropertyVersionV1 = 'property_version_v1',
  /** column name */
  StorageId = 'storage_id',
  /** column name */
  TableTypeV1 = 'table_type_v1',
  /** column name */
  TokenDataId = 'token_data_id',
  /** column name */
  TokenPropertiesMutatedV1 = 'token_properties_mutated_v1',
  /** column name */
  TokenStandard = 'token_standard'
}

/** select "current_token_ownerships_v2_aggregate_bool_exp_bool_and_arguments_columns" columns of table "current_token_ownerships_v2" */
export enum CurrentTokenOwnershipsV2SelectColumnCurrentTokenOwnershipsV2AggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  IsFungibleV2 = 'is_fungible_v2',
  /** column name */
  IsSoulboundV2 = 'is_soulbound_v2',
  /** column name */
  NonTransferrableByOwner = 'non_transferrable_by_owner'
}

/** select "current_token_ownerships_v2_aggregate_bool_exp_bool_or_arguments_columns" columns of table "current_token_ownerships_v2" */
export enum CurrentTokenOwnershipsV2SelectColumnCurrentTokenOwnershipsV2AggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  IsFungibleV2 = 'is_fungible_v2',
  /** column name */
  IsSoulboundV2 = 'is_soulbound_v2',
  /** column name */
  NonTransferrableByOwner = 'non_transferrable_by_owner'
}

/** aggregate stddev on columns */
export type CurrentTokenOwnershipsV2StddevFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2StddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CurrentTokenOwnershipsV2StddevPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2StddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CurrentTokenOwnershipsV2StddevSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2StddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2StreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTokenOwnershipsV2StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTokenOwnershipsV2StreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  is_fungible_v2?: InputMaybe<Scalars['Boolean']['input']>;
  is_soulbound_v2?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  non_transferrable_by_owner?: InputMaybe<Scalars['Boolean']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  property_version_v1?: InputMaybe<Scalars['numeric']['input']>;
  storage_id?: InputMaybe<Scalars['String']['input']>;
  table_type_v1?: InputMaybe<Scalars['String']['input']>;
  token_data_id?: InputMaybe<Scalars['String']['input']>;
  token_properties_mutated_v1?: InputMaybe<Scalars['jsonb']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CurrentTokenOwnershipsV2SumFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  property_version_v1?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2SumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type CurrentTokenOwnershipsV2VarPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2VarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CurrentTokenOwnershipsV2VarSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2VarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CurrentTokenOwnershipsV2VarianceFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "current_token_ownerships_v2" */
export type CurrentTokenOwnershipsV2VarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type CurrentTokenOwnershipsVarPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CurrentTokenOwnershipsVarSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CurrentTokenOwnershipsVarianceFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "legacy_migration_v1.current_token_ownerships" */
export type CurrentTokenOwnershipsVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "current_token_pending_claims" */
export type CurrentTokenPendingClaims = {
  amount: Scalars['numeric']['output'];
  collection_data_id_hash: Scalars['String']['output'];
  collection_id: Scalars['String']['output'];
  collection_name: Scalars['String']['output'];
  creator_address: Scalars['String']['output'];
  /** An object relationship */
  current_collection_data?: Maybe<CurrentCollectionDatas>;
  /** An object relationship */
  current_collection_v2?: Maybe<CurrentCollectionsV2>;
  /** An object relationship */
  current_token_data?: Maybe<CurrentTokenDatas>;
  /** An object relationship */
  current_token_data_v2?: Maybe<CurrentTokenDatasV2>;
  from_address: Scalars['String']['output'];
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  property_version: Scalars['numeric']['output'];
  table_handle: Scalars['String']['output'];
  to_address: Scalars['String']['output'];
  /** An object relationship */
  token?: Maybe<Tokens>;
  token_data_id: Scalars['String']['output'];
  token_data_id_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "current_token_pending_claims". All fields are combined with a logical 'AND'. */
export type CurrentTokenPendingClaimsBoolExp = {
  _and?: InputMaybe<Array<CurrentTokenPendingClaimsBoolExp>>;
  _not?: InputMaybe<CurrentTokenPendingClaimsBoolExp>;
  _or?: InputMaybe<Array<CurrentTokenPendingClaimsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_id?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  current_collection_data?: InputMaybe<CurrentCollectionDatasBoolExp>;
  current_collection_v2?: InputMaybe<CurrentCollectionsV2BoolExp>;
  current_token_data?: InputMaybe<CurrentTokenDatasBoolExp>;
  current_token_data_v2?: InputMaybe<CurrentTokenDatasV2BoolExp>;
  from_address?: InputMaybe<StringComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  property_version?: InputMaybe<NumericComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
  to_address?: InputMaybe<StringComparisonExp>;
  token?: InputMaybe<TokensBoolExp>;
  token_data_id?: InputMaybe<StringComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_token_pending_claims". */
export type CurrentTokenPendingClaimsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_id?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  current_collection_data?: InputMaybe<CurrentCollectionDatasOrderBy>;
  current_collection_v2?: InputMaybe<CurrentCollectionsV2OrderBy>;
  current_token_data?: InputMaybe<CurrentTokenDatasOrderBy>;
  current_token_data_v2?: InputMaybe<CurrentTokenDatasV2OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token?: InputMaybe<TokensOrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
};

/** select columns of table "current_token_pending_claims" */
export enum CurrentTokenPendingClaimsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  Name = 'name',
  /** column name */
  PropertyVersion = 'property_version',
  /** column name */
  TableHandle = 'table_handle',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  TokenDataId = 'token_data_id',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash'
}

/** Streaming cursor of the table "current_token_pending_claims" */
export type CurrentTokenPendingClaimsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTokenPendingClaimsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTokenPendingClaimsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_id?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  from_address?: InputMaybe<Scalars['String']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  property_version?: InputMaybe<Scalars['numeric']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
  to_address?: InputMaybe<Scalars['String']['input']>;
  token_data_id?: InputMaybe<Scalars['String']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "current_token_royalty_v1" */
export type CurrentTokenRoyaltyV1 = {
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  payee_address: Scalars['String']['output'];
  royalty_points_denominator: Scalars['numeric']['output'];
  royalty_points_numerator: Scalars['numeric']['output'];
  token_data_id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "current_token_royalty_v1". All fields are combined with a logical 'AND'. */
export type CurrentTokenRoyaltyV1BoolExp = {
  _and?: InputMaybe<Array<CurrentTokenRoyaltyV1BoolExp>>;
  _not?: InputMaybe<CurrentTokenRoyaltyV1BoolExp>;
  _or?: InputMaybe<Array<CurrentTokenRoyaltyV1BoolExp>>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  payee_address?: InputMaybe<StringComparisonExp>;
  royalty_points_denominator?: InputMaybe<NumericComparisonExp>;
  royalty_points_numerator?: InputMaybe<NumericComparisonExp>;
  token_data_id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "current_token_royalty_v1". */
export type CurrentTokenRoyaltyV1OrderBy = {
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  payee_address?: InputMaybe<OrderBy>;
  royalty_points_denominator?: InputMaybe<OrderBy>;
  royalty_points_numerator?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
};

/** select columns of table "current_token_royalty_v1" */
export enum CurrentTokenRoyaltyV1SelectColumn {
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  PayeeAddress = 'payee_address',
  /** column name */
  RoyaltyPointsDenominator = 'royalty_points_denominator',
  /** column name */
  RoyaltyPointsNumerator = 'royalty_points_numerator',
  /** column name */
  TokenDataId = 'token_data_id'
}

/** Streaming cursor of the table "current_token_royalty_v1" */
export type CurrentTokenRoyaltyV1StreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CurrentTokenRoyaltyV1StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrentTokenRoyaltyV1StreamCursorValueInput = {
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  payee_address?: InputMaybe<Scalars['String']['input']>;
  royalty_points_denominator?: InputMaybe<Scalars['numeric']['input']>;
  royalty_points_numerator?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "delegated_staking_activities" */
export type DelegatedStakingActivities = {
  amount: Scalars['numeric']['output'];
  delegator_address: Scalars['String']['output'];
  event_index: Scalars['bigint']['output'];
  event_type: Scalars['String']['output'];
  pool_address: Scalars['String']['output'];
  transaction_version: Scalars['bigint']['output'];
};

/** order by aggregate values of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesAggregateOrderBy = {
  avg?: InputMaybe<DelegatedStakingActivitiesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DelegatedStakingActivitiesMaxOrderBy>;
  min?: InputMaybe<DelegatedStakingActivitiesMinOrderBy>;
  stddev?: InputMaybe<DelegatedStakingActivitiesStddevOrderBy>;
  stddev_pop?: InputMaybe<DelegatedStakingActivitiesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DelegatedStakingActivitiesStddevSampOrderBy>;
  sum?: InputMaybe<DelegatedStakingActivitiesSumOrderBy>;
  var_pop?: InputMaybe<DelegatedStakingActivitiesVarPopOrderBy>;
  var_samp?: InputMaybe<DelegatedStakingActivitiesVarSampOrderBy>;
  variance?: InputMaybe<DelegatedStakingActivitiesVarianceOrderBy>;
};

/** order by avg() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "delegated_staking_activities". All fields are combined with a logical 'AND'. */
export type DelegatedStakingActivitiesBoolExp = {
  _and?: InputMaybe<Array<DelegatedStakingActivitiesBoolExp>>;
  _not?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
  _or?: InputMaybe<Array<DelegatedStakingActivitiesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  delegator_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<BigintComparisonExp>;
  event_type?: InputMaybe<StringComparisonExp>;
  pool_address?: InputMaybe<StringComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** order by max() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  delegator_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_type?: InputMaybe<OrderBy>;
  pool_address?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  delegator_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_type?: InputMaybe<OrderBy>;
  pool_address?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "delegated_staking_activities". */
export type DelegatedStakingActivitiesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  delegator_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_type?: InputMaybe<OrderBy>;
  pool_address?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "delegated_staking_activities" */
export enum DelegatedStakingActivitiesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  EventType = 'event_type',
  /** column name */
  PoolAddress = 'pool_address',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** order by stddev() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "delegated_staking_activities" */
export type DelegatedStakingActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DelegatedStakingActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DelegatedStakingActivitiesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  delegator_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['bigint']['input']>;
  event_type?: InputMaybe<Scalars['String']['input']>;
  pool_address?: InputMaybe<Scalars['String']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "delegated_staking_activities" */
export type DelegatedStakingActivitiesVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "delegated_staking_pool_balances" */
export type DelegatedStakingPoolBalances = {
  active_table_handle: Scalars['String']['output'];
  inactive_table_handle: Scalars['String']['output'];
  operator_commission_percentage: Scalars['numeric']['output'];
  staking_pool_address: Scalars['String']['output'];
  total_coins: Scalars['numeric']['output'];
  total_shares: Scalars['numeric']['output'];
  transaction_version: Scalars['bigint']['output'];
};

/** aggregated selection of "delegated_staking_pool_balances" */
export type DelegatedStakingPoolBalancesAggregate = {
  aggregate?: Maybe<DelegatedStakingPoolBalancesAggregateFields>;
  nodes: Array<DelegatedStakingPoolBalances>;
};

/** aggregate fields of "delegated_staking_pool_balances" */
export type DelegatedStakingPoolBalancesAggregateFields = {
  avg?: Maybe<DelegatedStakingPoolBalancesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DelegatedStakingPoolBalancesMaxFields>;
  min?: Maybe<DelegatedStakingPoolBalancesMinFields>;
  stddev?: Maybe<DelegatedStakingPoolBalancesStddevFields>;
  stddev_pop?: Maybe<DelegatedStakingPoolBalancesStddevPopFields>;
  stddev_samp?: Maybe<DelegatedStakingPoolBalancesStddevSampFields>;
  sum?: Maybe<DelegatedStakingPoolBalancesSumFields>;
  var_pop?: Maybe<DelegatedStakingPoolBalancesVarPopFields>;
  var_samp?: Maybe<DelegatedStakingPoolBalancesVarSampFields>;
  variance?: Maybe<DelegatedStakingPoolBalancesVarianceFields>;
};


/** aggregate fields of "delegated_staking_pool_balances" */
export type DelegatedStakingPoolBalancesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DelegatedStakingPoolBalancesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type DelegatedStakingPoolBalancesAvgFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "delegated_staking_pool_balances". All fields are combined with a logical 'AND'. */
export type DelegatedStakingPoolBalancesBoolExp = {
  _and?: InputMaybe<Array<DelegatedStakingPoolBalancesBoolExp>>;
  _not?: InputMaybe<DelegatedStakingPoolBalancesBoolExp>;
  _or?: InputMaybe<Array<DelegatedStakingPoolBalancesBoolExp>>;
  active_table_handle?: InputMaybe<StringComparisonExp>;
  inactive_table_handle?: InputMaybe<StringComparisonExp>;
  operator_commission_percentage?: InputMaybe<NumericComparisonExp>;
  staking_pool_address?: InputMaybe<StringComparisonExp>;
  total_coins?: InputMaybe<NumericComparisonExp>;
  total_shares?: InputMaybe<NumericComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type DelegatedStakingPoolBalancesMaxFields = {
  active_table_handle?: Maybe<Scalars['String']['output']>;
  inactive_table_handle?: Maybe<Scalars['String']['output']>;
  operator_commission_percentage?: Maybe<Scalars['numeric']['output']>;
  staking_pool_address?: Maybe<Scalars['String']['output']>;
  total_coins?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type DelegatedStakingPoolBalancesMinFields = {
  active_table_handle?: Maybe<Scalars['String']['output']>;
  inactive_table_handle?: Maybe<Scalars['String']['output']>;
  operator_commission_percentage?: Maybe<Scalars['numeric']['output']>;
  staking_pool_address?: Maybe<Scalars['String']['output']>;
  total_coins?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "delegated_staking_pool_balances". */
export type DelegatedStakingPoolBalancesOrderBy = {
  active_table_handle?: InputMaybe<OrderBy>;
  inactive_table_handle?: InputMaybe<OrderBy>;
  operator_commission_percentage?: InputMaybe<OrderBy>;
  staking_pool_address?: InputMaybe<OrderBy>;
  total_coins?: InputMaybe<OrderBy>;
  total_shares?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "delegated_staking_pool_balances" */
export enum DelegatedStakingPoolBalancesSelectColumn {
  /** column name */
  ActiveTableHandle = 'active_table_handle',
  /** column name */
  InactiveTableHandle = 'inactive_table_handle',
  /** column name */
  OperatorCommissionPercentage = 'operator_commission_percentage',
  /** column name */
  StakingPoolAddress = 'staking_pool_address',
  /** column name */
  TotalCoins = 'total_coins',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** aggregate stddev on columns */
export type DelegatedStakingPoolBalancesStddevFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type DelegatedStakingPoolBalancesStddevPopFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type DelegatedStakingPoolBalancesStddevSampFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "delegated_staking_pool_balances" */
export type DelegatedStakingPoolBalancesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DelegatedStakingPoolBalancesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DelegatedStakingPoolBalancesStreamCursorValueInput = {
  active_table_handle?: InputMaybe<Scalars['String']['input']>;
  inactive_table_handle?: InputMaybe<Scalars['String']['input']>;
  operator_commission_percentage?: InputMaybe<Scalars['numeric']['input']>;
  staking_pool_address?: InputMaybe<Scalars['String']['input']>;
  total_coins?: InputMaybe<Scalars['numeric']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type DelegatedStakingPoolBalancesSumFields = {
  operator_commission_percentage?: Maybe<Scalars['numeric']['output']>;
  total_coins?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type DelegatedStakingPoolBalancesVarPopFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type DelegatedStakingPoolBalancesVarSampFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type DelegatedStakingPoolBalancesVarianceFields = {
  operator_commission_percentage?: Maybe<Scalars['Float']['output']>;
  total_coins?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "delegated_staking_pools" */
export type DelegatedStakingPools = {
  /** An object relationship */
  current_staking_pool?: Maybe<CurrentStakingPoolVoter>;
  first_transaction_version: Scalars['bigint']['output'];
  staking_pool_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "delegated_staking_pools". All fields are combined with a logical 'AND'. */
export type DelegatedStakingPoolsBoolExp = {
  _and?: InputMaybe<Array<DelegatedStakingPoolsBoolExp>>;
  _not?: InputMaybe<DelegatedStakingPoolsBoolExp>;
  _or?: InputMaybe<Array<DelegatedStakingPoolsBoolExp>>;
  current_staking_pool?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
  first_transaction_version?: InputMaybe<BigintComparisonExp>;
  staking_pool_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "delegated_staking_pools". */
export type DelegatedStakingPoolsOrderBy = {
  current_staking_pool?: InputMaybe<CurrentStakingPoolVoterOrderBy>;
  first_transaction_version?: InputMaybe<OrderBy>;
  staking_pool_address?: InputMaybe<OrderBy>;
};

/** select columns of table "delegated_staking_pools" */
export enum DelegatedStakingPoolsSelectColumn {
  /** column name */
  FirstTransactionVersion = 'first_transaction_version',
  /** column name */
  StakingPoolAddress = 'staking_pool_address'
}

/** Streaming cursor of the table "delegated_staking_pools" */
export type DelegatedStakingPoolsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DelegatedStakingPoolsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DelegatedStakingPoolsStreamCursorValueInput = {
  first_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  staking_pool_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "delegator_distinct_pool" */
export type DelegatorDistinctPool = {
  /** An object relationship */
  current_pool_balance?: Maybe<CurrentDelegatedStakingPoolBalances>;
  delegator_address?: Maybe<Scalars['String']['output']>;
  pool_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  staking_pool_metadata?: Maybe<CurrentStakingPoolVoter>;
};

/** aggregated selection of "delegator_distinct_pool" */
export type DelegatorDistinctPoolAggregate = {
  aggregate?: Maybe<DelegatorDistinctPoolAggregateFields>;
  nodes: Array<DelegatorDistinctPool>;
};

/** aggregate fields of "delegator_distinct_pool" */
export type DelegatorDistinctPoolAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<DelegatorDistinctPoolMaxFields>;
  min?: Maybe<DelegatorDistinctPoolMinFields>;
};


/** aggregate fields of "delegator_distinct_pool" */
export type DelegatorDistinctPoolAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DelegatorDistinctPoolSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "delegator_distinct_pool". All fields are combined with a logical 'AND'. */
export type DelegatorDistinctPoolBoolExp = {
  _and?: InputMaybe<Array<DelegatorDistinctPoolBoolExp>>;
  _not?: InputMaybe<DelegatorDistinctPoolBoolExp>;
  _or?: InputMaybe<Array<DelegatorDistinctPoolBoolExp>>;
  current_pool_balance?: InputMaybe<CurrentDelegatedStakingPoolBalancesBoolExp>;
  delegator_address?: InputMaybe<StringComparisonExp>;
  pool_address?: InputMaybe<StringComparisonExp>;
  staking_pool_metadata?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
};

/** aggregate max on columns */
export type DelegatorDistinctPoolMaxFields = {
  delegator_address?: Maybe<Scalars['String']['output']>;
  pool_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type DelegatorDistinctPoolMinFields = {
  delegator_address?: Maybe<Scalars['String']['output']>;
  pool_address?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "delegator_distinct_pool". */
export type DelegatorDistinctPoolOrderBy = {
  current_pool_balance?: InputMaybe<CurrentDelegatedStakingPoolBalancesOrderBy>;
  delegator_address?: InputMaybe<OrderBy>;
  pool_address?: InputMaybe<OrderBy>;
  staking_pool_metadata?: InputMaybe<CurrentStakingPoolVoterOrderBy>;
};

/** select columns of table "delegator_distinct_pool" */
export enum DelegatorDistinctPoolSelectColumn {
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  PoolAddress = 'pool_address'
}

/** Streaming cursor of the table "delegator_distinct_pool" */
export type DelegatorDistinctPoolStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DelegatorDistinctPoolStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DelegatorDistinctPoolStreamCursorValueInput = {
  delegator_address?: InputMaybe<Scalars['String']['input']>;
  pool_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "events" */
export type Events = {
  account_address: Scalars['String']['output'];
  creation_number: Scalars['bigint']['output'];
  data: Scalars['jsonb']['output'];
  event_index: Scalars['bigint']['output'];
  indexed_type: Scalars['String']['output'];
  sequence_number: Scalars['bigint']['output'];
  transaction_block_height: Scalars['bigint']['output'];
  transaction_version: Scalars['bigint']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "events" */
export type EventsDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type EventsBoolExp = {
  _and?: InputMaybe<Array<EventsBoolExp>>;
  _not?: InputMaybe<EventsBoolExp>;
  _or?: InputMaybe<Array<EventsBoolExp>>;
  account_address?: InputMaybe<StringComparisonExp>;
  creation_number?: InputMaybe<BigintComparisonExp>;
  data?: InputMaybe<JsonbComparisonExp>;
  event_index?: InputMaybe<BigintComparisonExp>;
  indexed_type?: InputMaybe<StringComparisonExp>;
  sequence_number?: InputMaybe<BigintComparisonExp>;
  transaction_block_height?: InputMaybe<BigintComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "events". */
export type EventsOrderBy = {
  account_address?: InputMaybe<OrderBy>;
  creation_number?: InputMaybe<OrderBy>;
  data?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  indexed_type?: InputMaybe<OrderBy>;
  sequence_number?: InputMaybe<OrderBy>;
  transaction_block_height?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "events" */
export enum EventsSelectColumn {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  CreationNumber = 'creation_number',
  /** column name */
  Data = 'data',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  IndexedType = 'indexed_type',
  /** column name */
  SequenceNumber = 'sequence_number',
  /** column name */
  TransactionBlockHeight = 'transaction_block_height',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "events" */
export type EventsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: EventsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventsStreamCursorValueInput = {
  account_address?: InputMaybe<Scalars['String']['input']>;
  creation_number?: InputMaybe<Scalars['bigint']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  event_index?: InputMaybe<Scalars['bigint']['input']>;
  indexed_type?: InputMaybe<Scalars['String']['input']>;
  sequence_number?: InputMaybe<Scalars['bigint']['input']>;
  transaction_block_height?: InputMaybe<Scalars['bigint']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "fixed_price_oracle_activities" */
export type FixedPriceOracleActivities = {
  base_asset?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  event_index: Scalars['numeric']['output'];
  oracle_address?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  quote_asset?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "fixed_price_oracle_activities". All fields are combined with a logical 'AND'. */
export type FixedPriceOracleActivitiesBoolExp = {
  _and?: InputMaybe<Array<FixedPriceOracleActivitiesBoolExp>>;
  _not?: InputMaybe<FixedPriceOracleActivitiesBoolExp>;
  _or?: InputMaybe<Array<FixedPriceOracleActivitiesBoolExp>>;
  base_asset?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  oracle_address?: InputMaybe<StringComparisonExp>;
  price?: InputMaybe<NumericComparisonExp>;
  quote_asset?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "fixed_price_oracle_activities". */
export type FixedPriceOracleActivitiesOrderBy = {
  base_asset?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  oracle_address?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  quote_asset?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "fixed_price_oracle_activities" */
export enum FixedPriceOracleActivitiesSelectColumn {
  /** column name */
  BaseAsset = 'base_asset',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  OracleAddress = 'oracle_address',
  /** column name */
  Price = 'price',
  /** column name */
  QuoteAsset = 'quote_asset',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "fixed_price_oracle_activities" */
export type FixedPriceOracleActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FixedPriceOracleActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FixedPriceOracleActivitiesStreamCursorValueInput = {
  base_asset?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  oracle_address?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  quote_asset?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "fixed_price_oracle_current_config" */
export type FixedPriceOracleCurrentConfig = {
  base_asset: Scalars['String']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  oracle_address: Scalars['String']['output'];
  price?: Maybe<Scalars['numeric']['output']>;
  quote_asset: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "fixed_price_oracle_current_config". All fields are combined with a logical 'AND'. */
export type FixedPriceOracleCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<FixedPriceOracleCurrentConfigBoolExp>>;
  _not?: InputMaybe<FixedPriceOracleCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<FixedPriceOracleCurrentConfigBoolExp>>;
  base_asset?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  oracle_address?: InputMaybe<StringComparisonExp>;
  price?: InputMaybe<NumericComparisonExp>;
  quote_asset?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "fixed_price_oracle_current_config". */
export type FixedPriceOracleCurrentConfigOrderBy = {
  base_asset?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  oracle_address?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  quote_asset?: InputMaybe<OrderBy>;
};

/** select columns of table "fixed_price_oracle_current_config" */
export enum FixedPriceOracleCurrentConfigSelectColumn {
  /** column name */
  BaseAsset = 'base_asset',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  OracleAddress = 'oracle_address',
  /** column name */
  Price = 'price',
  /** column name */
  QuoteAsset = 'quote_asset'
}

/** Streaming cursor of the table "fixed_price_oracle_current_config" */
export type FixedPriceOracleCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FixedPriceOracleCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FixedPriceOracleCurrentConfigStreamCursorValueInput = {
  base_asset?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  oracle_address?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  quote_asset?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "fixed_rate_irm_activities" */
export type FixedRateIrmActivities = {
  config_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  rate_per_second?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "fixed_rate_irm_activities". All fields are combined with a logical 'AND'. */
export type FixedRateIrmActivitiesBoolExp = {
  _and?: InputMaybe<Array<FixedRateIrmActivitiesBoolExp>>;
  _not?: InputMaybe<FixedRateIrmActivitiesBoolExp>;
  _or?: InputMaybe<Array<FixedRateIrmActivitiesBoolExp>>;
  config_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  rate_per_second?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "fixed_rate_irm_activities". */
export type FixedRateIrmActivitiesOrderBy = {
  config_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  rate_per_second?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "fixed_rate_irm_activities" */
export enum FixedRateIrmActivitiesSelectColumn {
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  RatePerSecond = 'rate_per_second',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "fixed_rate_irm_activities" */
export type FixedRateIrmActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FixedRateIrmActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FixedRateIrmActivitiesStreamCursorValueInput = {
  config_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  rate_per_second?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "fixed_rate_irm_current_config" */
export type FixedRateIrmCurrentConfig = {
  config_address: Scalars['String']['output'];
  rate_per_second?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "fixed_rate_irm_current_config". All fields are combined with a logical 'AND'. */
export type FixedRateIrmCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<FixedRateIrmCurrentConfigBoolExp>>;
  _not?: InputMaybe<FixedRateIrmCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<FixedRateIrmCurrentConfigBoolExp>>;
  config_address?: InputMaybe<StringComparisonExp>;
  rate_per_second?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "fixed_rate_irm_current_config". */
export type FixedRateIrmCurrentConfigOrderBy = {
  config_address?: InputMaybe<OrderBy>;
  rate_per_second?: InputMaybe<OrderBy>;
};

/** select columns of table "fixed_rate_irm_current_config" */
export enum FixedRateIrmCurrentConfigSelectColumn {
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  RatePerSecond = 'rate_per_second'
}

/** Streaming cursor of the table "fixed_rate_irm_current_config" */
export type FixedRateIrmCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FixedRateIrmCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FixedRateIrmCurrentConfigStreamCursorValueInput = {
  config_address?: InputMaybe<Scalars['String']['input']>;
  rate_per_second?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "fungible_asset_activities" */
export type FungibleAssetActivities = {
  amount?: Maybe<Scalars['numeric']['output']>;
  asset_type?: Maybe<Scalars['String']['output']>;
  block_height: Scalars['bigint']['output'];
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['bigint']['output'];
  gas_fee_payer_address?: Maybe<Scalars['String']['output']>;
  is_frozen?: Maybe<Scalars['Boolean']['output']>;
  is_gas_fee: Scalars['Boolean']['output'];
  is_transaction_success: Scalars['Boolean']['output'];
  /** An object relationship */
  metadata?: Maybe<FungibleAssetMetadata>;
  owner_address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  owner_aptos_names: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  owner_aptos_names_aggregate: CurrentAptosNamesAggregate;
  storage_id: Scalars['String']['output'];
  storage_refund_amount?: Maybe<Scalars['numeric']['output']>;
  token_standard: Scalars['String']['output'];
  transaction_timestamp: Scalars['timestamp']['output'];
  transaction_version: Scalars['bigint']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "fungible_asset_activities" */
export type FungibleAssetActivitiesOwnerAptosNamesArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "fungible_asset_activities" */
export type FungibleAssetActivitiesOwnerAptosNamesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};

/** order by aggregate values of table "fungible_asset_activities" */
export type FungibleAssetActivitiesAggregateOrderBy = {
  avg?: InputMaybe<FungibleAssetActivitiesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FungibleAssetActivitiesMaxOrderBy>;
  min?: InputMaybe<FungibleAssetActivitiesMinOrderBy>;
  stddev?: InputMaybe<FungibleAssetActivitiesStddevOrderBy>;
  stddev_pop?: InputMaybe<FungibleAssetActivitiesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<FungibleAssetActivitiesStddevSampOrderBy>;
  sum?: InputMaybe<FungibleAssetActivitiesSumOrderBy>;
  var_pop?: InputMaybe<FungibleAssetActivitiesVarPopOrderBy>;
  var_samp?: InputMaybe<FungibleAssetActivitiesVarSampOrderBy>;
  variance?: InputMaybe<FungibleAssetActivitiesVarianceOrderBy>;
};

/** order by avg() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "fungible_asset_activities". All fields are combined with a logical 'AND'. */
export type FungibleAssetActivitiesBoolExp = {
  _and?: InputMaybe<Array<FungibleAssetActivitiesBoolExp>>;
  _not?: InputMaybe<FungibleAssetActivitiesBoolExp>;
  _or?: InputMaybe<Array<FungibleAssetActivitiesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  asset_type?: InputMaybe<StringComparisonExp>;
  block_height?: InputMaybe<BigintComparisonExp>;
  entry_function_id_str?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<BigintComparisonExp>;
  gas_fee_payer_address?: InputMaybe<StringComparisonExp>;
  is_frozen?: InputMaybe<BooleanComparisonExp>;
  is_gas_fee?: InputMaybe<BooleanComparisonExp>;
  is_transaction_success?: InputMaybe<BooleanComparisonExp>;
  metadata?: InputMaybe<FungibleAssetMetadataBoolExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  owner_aptos_names?: InputMaybe<CurrentAptosNamesBoolExp>;
  owner_aptos_names_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  storage_id?: InputMaybe<StringComparisonExp>;
  storage_refund_amount?: InputMaybe<NumericComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  asset_type?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  gas_fee_payer_address?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  asset_type?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  gas_fee_payer_address?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "fungible_asset_activities". */
export type FungibleAssetActivitiesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  asset_type?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  gas_fee_payer_address?: InputMaybe<OrderBy>;
  is_frozen?: InputMaybe<OrderBy>;
  is_gas_fee?: InputMaybe<OrderBy>;
  is_transaction_success?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<FungibleAssetMetadataOrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  owner_aptos_names_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  storage_id?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "fungible_asset_activities" */
export enum FungibleAssetActivitiesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  AssetType = 'asset_type',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  EntryFunctionIdStr = 'entry_function_id_str',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  GasFeePayerAddress = 'gas_fee_payer_address',
  /** column name */
  IsFrozen = 'is_frozen',
  /** column name */
  IsGasFee = 'is_gas_fee',
  /** column name */
  IsTransactionSuccess = 'is_transaction_success',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  StorageId = 'storage_id',
  /** column name */
  StorageRefundAmount = 'storage_refund_amount',
  /** column name */
  TokenStandard = 'token_standard',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  Type = 'type'
}

/** order by stddev() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "fungible_asset_activities" */
export type FungibleAssetActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FungibleAssetActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FungibleAssetActivitiesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  asset_type?: InputMaybe<Scalars['String']['input']>;
  block_height?: InputMaybe<Scalars['bigint']['input']>;
  entry_function_id_str?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['bigint']['input']>;
  gas_fee_payer_address?: InputMaybe<Scalars['String']['input']>;
  is_frozen?: InputMaybe<Scalars['Boolean']['input']>;
  is_gas_fee?: InputMaybe<Scalars['Boolean']['input']>;
  is_transaction_success?: InputMaybe<Scalars['Boolean']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  storage_id?: InputMaybe<Scalars['String']['input']>;
  storage_refund_amount?: InputMaybe<Scalars['numeric']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "fungible_asset_activities" */
export type FungibleAssetActivitiesVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  block_height?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  storage_refund_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "fungible_asset_metadata" */
export type FungibleAssetMetadata = {
  asset_type: Scalars['String']['output'];
  creator_address: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  icon_uri?: Maybe<Scalars['String']['output']>;
  last_transaction_timestamp: Scalars['timestamp']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  maximum_v2?: Maybe<Scalars['numeric']['output']>;
  name: Scalars['String']['output'];
  project_uri?: Maybe<Scalars['String']['output']>;
  supply_aggregator_table_handle_v1?: Maybe<Scalars['String']['output']>;
  supply_aggregator_table_key_v1?: Maybe<Scalars['String']['output']>;
  supply_v2?: Maybe<Scalars['numeric']['output']>;
  symbol: Scalars['String']['output'];
  token_standard: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "fungible_asset_metadata". All fields are combined with a logical 'AND'. */
export type FungibleAssetMetadataBoolExp = {
  _and?: InputMaybe<Array<FungibleAssetMetadataBoolExp>>;
  _not?: InputMaybe<FungibleAssetMetadataBoolExp>;
  _or?: InputMaybe<Array<FungibleAssetMetadataBoolExp>>;
  asset_type?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  decimals?: InputMaybe<IntComparisonExp>;
  icon_uri?: InputMaybe<StringComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  maximum_v2?: InputMaybe<NumericComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  project_uri?: InputMaybe<StringComparisonExp>;
  supply_aggregator_table_handle_v1?: InputMaybe<StringComparisonExp>;
  supply_aggregator_table_key_v1?: InputMaybe<StringComparisonExp>;
  supply_v2?: InputMaybe<NumericComparisonExp>;
  symbol?: InputMaybe<StringComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "fungible_asset_metadata". */
export type FungibleAssetMetadataOrderBy = {
  asset_type?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  icon_uri?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  maximum_v2?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  project_uri?: InputMaybe<OrderBy>;
  supply_aggregator_table_handle_v1?: InputMaybe<OrderBy>;
  supply_aggregator_table_key_v1?: InputMaybe<OrderBy>;
  supply_v2?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
};

/** select columns of table "fungible_asset_metadata" */
export enum FungibleAssetMetadataSelectColumn {
  /** column name */
  AssetType = 'asset_type',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  IconUri = 'icon_uri',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  MaximumV2 = 'maximum_v2',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectUri = 'project_uri',
  /** column name */
  SupplyAggregatorTableHandleV1 = 'supply_aggregator_table_handle_v1',
  /** column name */
  SupplyAggregatorTableKeyV1 = 'supply_aggregator_table_key_v1',
  /** column name */
  SupplyV2 = 'supply_v2',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TokenStandard = 'token_standard'
}

/** Streaming cursor of the table "fungible_asset_metadata" */
export type FungibleAssetMetadataStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: FungibleAssetMetadataStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FungibleAssetMetadataStreamCursorValueInput = {
  asset_type?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  icon_uri?: InputMaybe<Scalars['String']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  maximum_v2?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_uri?: InputMaybe<Scalars['String']['input']>;
  supply_aggregator_table_handle_v1?: InputMaybe<Scalars['String']['input']>;
  supply_aggregator_table_key_v1?: InputMaybe<Scalars['String']['input']>;
  supply_v2?: InputMaybe<Scalars['numeric']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "hyperion_llp_bad_debt_activities" */
export type HyperionLlpBadDebtActivities = {
  bad_debt_amount?: Maybe<Scalars['numeric']['output']>;
  bad_debt_shares?: Maybe<Scalars['numeric']['output']>;
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  position_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "hyperion_llp_bad_debt_activities". All fields are combined with a logical 'AND'. */
export type HyperionLlpBadDebtActivitiesBoolExp = {
  _and?: InputMaybe<Array<HyperionLlpBadDebtActivitiesBoolExp>>;
  _not?: InputMaybe<HyperionLlpBadDebtActivitiesBoolExp>;
  _or?: InputMaybe<Array<HyperionLlpBadDebtActivitiesBoolExp>>;
  bad_debt_amount?: InputMaybe<NumericComparisonExp>;
  bad_debt_shares?: InputMaybe<NumericComparisonExp>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "hyperion_llp_bad_debt_activities". */
export type HyperionLlpBadDebtActivitiesOrderBy = {
  bad_debt_amount?: InputMaybe<OrderBy>;
  bad_debt_shares?: InputMaybe<OrderBy>;
  debt_store_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "hyperion_llp_bad_debt_activities" */
export enum HyperionLlpBadDebtActivitiesSelectColumn {
  /** column name */
  BadDebtAmount = 'bad_debt_amount',
  /** column name */
  BadDebtShares = 'bad_debt_shares',
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "hyperion_llp_bad_debt_activities" */
export type HyperionLlpBadDebtActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HyperionLlpBadDebtActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HyperionLlpBadDebtActivitiesStreamCursorValueInput = {
  bad_debt_amount?: InputMaybe<Scalars['numeric']['input']>;
  bad_debt_shares?: InputMaybe<Scalars['numeric']['input']>;
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "hyperion_llp_debt_status_activities" */
export type HyperionLlpDebtStatusActivities = {
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  position_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "hyperion_llp_debt_status_activities". All fields are combined with a logical 'AND'. */
export type HyperionLlpDebtStatusActivitiesBoolExp = {
  _and?: InputMaybe<Array<HyperionLlpDebtStatusActivitiesBoolExp>>;
  _not?: InputMaybe<HyperionLlpDebtStatusActivitiesBoolExp>;
  _or?: InputMaybe<Array<HyperionLlpDebtStatusActivitiesBoolExp>>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "hyperion_llp_debt_status_activities". */
export type HyperionLlpDebtStatusActivitiesOrderBy = {
  debt_store_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "hyperion_llp_debt_status_activities" */
export enum HyperionLlpDebtStatusActivitiesSelectColumn {
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  Status = 'status',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "hyperion_llp_debt_status_activities" */
export type HyperionLlpDebtStatusActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HyperionLlpDebtStatusActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HyperionLlpDebtStatusActivitiesStreamCursorValueInput = {
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "hyperion_llp_liquidation_activities" */
export type HyperionLlpLiquidationActivities = {
  collateral_liquidation_amount?: Maybe<Scalars['numeric']['output']>;
  collateral_value_before?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  loan_value_before?: Maybe<Scalars['numeric']['output']>;
  position_address?: Maybe<Scalars['String']['output']>;
  repay_amount?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "hyperion_llp_liquidation_activities". All fields are combined with a logical 'AND'. */
export type HyperionLlpLiquidationActivitiesBoolExp = {
  _and?: InputMaybe<Array<HyperionLlpLiquidationActivitiesBoolExp>>;
  _not?: InputMaybe<HyperionLlpLiquidationActivitiesBoolExp>;
  _or?: InputMaybe<Array<HyperionLlpLiquidationActivitiesBoolExp>>;
  collateral_liquidation_amount?: InputMaybe<NumericComparisonExp>;
  collateral_value_before?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  loan_value_before?: InputMaybe<NumericComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  repay_amount?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "hyperion_llp_liquidation_activities". */
export type HyperionLlpLiquidationActivitiesOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "hyperion_llp_liquidation_activities" */
export enum HyperionLlpLiquidationActivitiesSelectColumn {
  /** column name */
  CollateralLiquidationAmount = 'collateral_liquidation_amount',
  /** column name */
  CollateralValueBefore = 'collateral_value_before',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  LoanValueBefore = 'loan_value_before',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  RepayAmount = 'repay_amount',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "hyperion_llp_liquidation_activities" */
export type HyperionLlpLiquidationActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HyperionLlpLiquidationActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HyperionLlpLiquidationActivitiesStreamCursorValueInput = {
  collateral_liquidation_amount?: InputMaybe<Scalars['numeric']['input']>;
  collateral_value_before?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  loan_value_before?: InputMaybe<Scalars['numeric']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  repay_amount?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "hyperion_llp_position_current" */
export type HyperionLlpPositionCurrent = {
  collateral?: Maybe<Scalars['String']['output']>;
  collateral_type?: Maybe<Scalars['String']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  position_address: Scalars['String']['output'];
  status?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "hyperion_llp_position_current". All fields are combined with a logical 'AND'. */
export type HyperionLlpPositionCurrentBoolExp = {
  _and?: InputMaybe<Array<HyperionLlpPositionCurrentBoolExp>>;
  _not?: InputMaybe<HyperionLlpPositionCurrentBoolExp>;
  _or?: InputMaybe<Array<HyperionLlpPositionCurrentBoolExp>>;
  collateral?: InputMaybe<StringComparisonExp>;
  collateral_type?: InputMaybe<StringComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "hyperion_llp_position_current". */
export type HyperionLlpPositionCurrentOrderBy = {
  collateral?: InputMaybe<OrderBy>;
  collateral_type?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
};

/** select columns of table "hyperion_llp_position_current" */
export enum HyperionLlpPositionCurrentSelectColumn {
  /** column name */
  Collateral = 'collateral',
  /** column name */
  CollateralType = 'collateral_type',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  Status = 'status'
}

/** Streaming cursor of the table "hyperion_llp_position_current" */
export type HyperionLlpPositionCurrentStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HyperionLlpPositionCurrentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HyperionLlpPositionCurrentStreamCursorValueInput = {
  collateral?: InputMaybe<Scalars['String']['input']>;
  collateral_type?: InputMaybe<Scalars['String']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "hyperion_llp_position_debt_stores" */
export type HyperionLlpPositionDebtStores = {
  debt_store_address?: Maybe<Scalars['String']['output']>;
  position_address: Scalars['String']['output'];
  vault_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "hyperion_llp_position_debt_stores". All fields are combined with a logical 'AND'. */
export type HyperionLlpPositionDebtStoresBoolExp = {
  _and?: InputMaybe<Array<HyperionLlpPositionDebtStoresBoolExp>>;
  _not?: InputMaybe<HyperionLlpPositionDebtStoresBoolExp>;
  _or?: InputMaybe<Array<HyperionLlpPositionDebtStoresBoolExp>>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "hyperion_llp_position_debt_stores". */
export type HyperionLlpPositionDebtStoresOrderBy = {
  debt_store_address?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "hyperion_llp_position_debt_stores" */
export enum HyperionLlpPositionDebtStoresSelectColumn {
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "hyperion_llp_position_debt_stores" */
export type HyperionLlpPositionDebtStoresStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: HyperionLlpPositionDebtStoresStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HyperionLlpPositionDebtStoresStreamCursorValueInput = {
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "indexer_status" */
export type IndexerStatus = {
  db: Scalars['String']['output'];
  is_indexer_up: Scalars['Boolean']['output'];
};

/** Boolean expression to filter rows from the table "indexer_status". All fields are combined with a logical 'AND'. */
export type IndexerStatusBoolExp = {
  _and?: InputMaybe<Array<IndexerStatusBoolExp>>;
  _not?: InputMaybe<IndexerStatusBoolExp>;
  _or?: InputMaybe<Array<IndexerStatusBoolExp>>;
  db?: InputMaybe<StringComparisonExp>;
  is_indexer_up?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "indexer_status". */
export type IndexerStatusOrderBy = {
  db?: InputMaybe<OrderBy>;
  is_indexer_up?: InputMaybe<OrderBy>;
};

/** select columns of table "indexer_status" */
export enum IndexerStatusSelectColumn {
  /** column name */
  Db = 'db',
  /** column name */
  IsIndexerUp = 'is_indexer_up'
}

/** Streaming cursor of the table "indexer_status" */
export type IndexerStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: IndexerStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type IndexerStatusStreamCursorValueInput = {
  db?: InputMaybe<Scalars['String']['input']>;
  is_indexer_up?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "kinked_irm_activities" */
export type KinkedIrmActivities = {
  config_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  max_borrow_rate?: Maybe<Scalars['numeric']['output']>;
  min_borrow_rate?: Maybe<Scalars['numeric']['output']>;
  optimal_borrow_rate?: Maybe<Scalars['numeric']['output']>;
  optimal_utilization?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "kinked_irm_activities". All fields are combined with a logical 'AND'. */
export type KinkedIrmActivitiesBoolExp = {
  _and?: InputMaybe<Array<KinkedIrmActivitiesBoolExp>>;
  _not?: InputMaybe<KinkedIrmActivitiesBoolExp>;
  _or?: InputMaybe<Array<KinkedIrmActivitiesBoolExp>>;
  config_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  max_borrow_rate?: InputMaybe<NumericComparisonExp>;
  min_borrow_rate?: InputMaybe<NumericComparisonExp>;
  optimal_borrow_rate?: InputMaybe<NumericComparisonExp>;
  optimal_utilization?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "kinked_irm_activities". */
export type KinkedIrmActivitiesOrderBy = {
  config_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  max_borrow_rate?: InputMaybe<OrderBy>;
  min_borrow_rate?: InputMaybe<OrderBy>;
  optimal_borrow_rate?: InputMaybe<OrderBy>;
  optimal_utilization?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "kinked_irm_activities" */
export enum KinkedIrmActivitiesSelectColumn {
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  MaxBorrowRate = 'max_borrow_rate',
  /** column name */
  MinBorrowRate = 'min_borrow_rate',
  /** column name */
  OptimalBorrowRate = 'optimal_borrow_rate',
  /** column name */
  OptimalUtilization = 'optimal_utilization',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "kinked_irm_activities" */
export type KinkedIrmActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: KinkedIrmActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type KinkedIrmActivitiesStreamCursorValueInput = {
  config_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  max_borrow_rate?: InputMaybe<Scalars['numeric']['input']>;
  min_borrow_rate?: InputMaybe<Scalars['numeric']['input']>;
  optimal_borrow_rate?: InputMaybe<Scalars['numeric']['input']>;
  optimal_utilization?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "kinked_irm_current_config" */
export type KinkedIrmCurrentConfig = {
  config_address: Scalars['String']['output'];
  max_borrow_rate?: Maybe<Scalars['numeric']['output']>;
  min_borrow_rate?: Maybe<Scalars['numeric']['output']>;
  optimal_borrow_rate?: Maybe<Scalars['numeric']['output']>;
  optimal_utilization?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "kinked_irm_current_config". All fields are combined with a logical 'AND'. */
export type KinkedIrmCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<KinkedIrmCurrentConfigBoolExp>>;
  _not?: InputMaybe<KinkedIrmCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<KinkedIrmCurrentConfigBoolExp>>;
  config_address?: InputMaybe<StringComparisonExp>;
  max_borrow_rate?: InputMaybe<NumericComparisonExp>;
  min_borrow_rate?: InputMaybe<NumericComparisonExp>;
  optimal_borrow_rate?: InputMaybe<NumericComparisonExp>;
  optimal_utilization?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "kinked_irm_current_config". */
export type KinkedIrmCurrentConfigOrderBy = {
  config_address?: InputMaybe<OrderBy>;
  max_borrow_rate?: InputMaybe<OrderBy>;
  min_borrow_rate?: InputMaybe<OrderBy>;
  optimal_borrow_rate?: InputMaybe<OrderBy>;
  optimal_utilization?: InputMaybe<OrderBy>;
};

/** select columns of table "kinked_irm_current_config" */
export enum KinkedIrmCurrentConfigSelectColumn {
  /** column name */
  ConfigAddress = 'config_address',
  /** column name */
  MaxBorrowRate = 'max_borrow_rate',
  /** column name */
  MinBorrowRate = 'min_borrow_rate',
  /** column name */
  OptimalBorrowRate = 'optimal_borrow_rate',
  /** column name */
  OptimalUtilization = 'optimal_utilization'
}

/** Streaming cursor of the table "kinked_irm_current_config" */
export type KinkedIrmCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: KinkedIrmCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type KinkedIrmCurrentConfigStreamCursorValueInput = {
  config_address?: InputMaybe<Scalars['String']['input']>;
  max_borrow_rate?: InputMaybe<Scalars['numeric']['input']>;
  min_borrow_rate?: InputMaybe<Scalars['numeric']['input']>;
  optimal_borrow_rate?: InputMaybe<Scalars['numeric']['input']>;
  optimal_utilization?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "processor_metadata.ledger_infos" */
export type LedgerInfos = {
  chain_id: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "processor_metadata.ledger_infos". All fields are combined with a logical 'AND'. */
export type LedgerInfosBoolExp = {
  _and?: InputMaybe<Array<LedgerInfosBoolExp>>;
  _not?: InputMaybe<LedgerInfosBoolExp>;
  _or?: InputMaybe<Array<LedgerInfosBoolExp>>;
  chain_id?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "processor_metadata.ledger_infos". */
export type LedgerInfosOrderBy = {
  chain_id?: InputMaybe<OrderBy>;
};

/** select columns of table "processor_metadata.ledger_infos" */
export enum LedgerInfosSelectColumn {
  /** column name */
  ChainId = 'chain_id'
}

/** Streaming cursor of the table "ledger_infos" */
export type LedgerInfosStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: LedgerInfosStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type LedgerInfosStreamCursorValueInput = {
  chain_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "legacy_migration_v1.move_resources" */
export type MoveResources = {
  address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "legacy_migration_v1.move_resources" */
export type MoveResourcesAggregate = {
  aggregate?: Maybe<MoveResourcesAggregateFields>;
  nodes: Array<MoveResources>;
};

/** aggregate fields of "legacy_migration_v1.move_resources" */
export type MoveResourcesAggregateFields = {
  avg?: Maybe<MoveResourcesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<MoveResourcesMaxFields>;
  min?: Maybe<MoveResourcesMinFields>;
  stddev?: Maybe<MoveResourcesStddevFields>;
  stddev_pop?: Maybe<MoveResourcesStddevPopFields>;
  stddev_samp?: Maybe<MoveResourcesStddevSampFields>;
  sum?: Maybe<MoveResourcesSumFields>;
  var_pop?: Maybe<MoveResourcesVarPopFields>;
  var_samp?: Maybe<MoveResourcesVarSampFields>;
  variance?: Maybe<MoveResourcesVarianceFields>;
};


/** aggregate fields of "legacy_migration_v1.move_resources" */
export type MoveResourcesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MoveResourcesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type MoveResourcesAvgFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.move_resources". All fields are combined with a logical 'AND'. */
export type MoveResourcesBoolExp = {
  _and?: InputMaybe<Array<MoveResourcesBoolExp>>;
  _not?: InputMaybe<MoveResourcesBoolExp>;
  _or?: InputMaybe<Array<MoveResourcesBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type MoveResourcesMaxFields = {
  address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type MoveResourcesMinFields = {
  address?: Maybe<Scalars['String']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "legacy_migration_v1.move_resources". */
export type MoveResourcesOrderBy = {
  address?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.move_resources" */
export enum MoveResourcesSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** aggregate stddev on columns */
export type MoveResourcesStddevFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type MoveResourcesStddevPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type MoveResourcesStddevSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "move_resources" */
export type MoveResourcesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: MoveResourcesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MoveResourcesStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type MoveResourcesSumFields = {
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type MoveResourcesVarPopFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type MoveResourcesVarSampFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type MoveResourcesVarianceFields = {
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nft_metadata_crawler.parsed_asset_uris" */
export type NftMetadataCrawlerParsedAssetUris = {
  animation_optimizer_retry_count: Scalars['Int']['output'];
  asset_uri: Scalars['String']['output'];
  cdn_animation_uri?: Maybe<Scalars['String']['output']>;
  cdn_image_uri?: Maybe<Scalars['String']['output']>;
  cdn_json_uri?: Maybe<Scalars['String']['output']>;
  image_optimizer_retry_count: Scalars['Int']['output'];
  json_parser_retry_count: Scalars['Int']['output'];
  raw_animation_uri?: Maybe<Scalars['String']['output']>;
  raw_image_uri?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "nft_metadata_crawler.parsed_asset_uris". All fields are combined with a logical 'AND'. */
export type NftMetadataCrawlerParsedAssetUrisBoolExp = {
  _and?: InputMaybe<Array<NftMetadataCrawlerParsedAssetUrisBoolExp>>;
  _not?: InputMaybe<NftMetadataCrawlerParsedAssetUrisBoolExp>;
  _or?: InputMaybe<Array<NftMetadataCrawlerParsedAssetUrisBoolExp>>;
  animation_optimizer_retry_count?: InputMaybe<IntComparisonExp>;
  asset_uri?: InputMaybe<StringComparisonExp>;
  cdn_animation_uri?: InputMaybe<StringComparisonExp>;
  cdn_image_uri?: InputMaybe<StringComparisonExp>;
  cdn_json_uri?: InputMaybe<StringComparisonExp>;
  image_optimizer_retry_count?: InputMaybe<IntComparisonExp>;
  json_parser_retry_count?: InputMaybe<IntComparisonExp>;
  raw_animation_uri?: InputMaybe<StringComparisonExp>;
  raw_image_uri?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "nft_metadata_crawler.parsed_asset_uris". */
export type NftMetadataCrawlerParsedAssetUrisOrderBy = {
  animation_optimizer_retry_count?: InputMaybe<OrderBy>;
  asset_uri?: InputMaybe<OrderBy>;
  cdn_animation_uri?: InputMaybe<OrderBy>;
  cdn_image_uri?: InputMaybe<OrderBy>;
  cdn_json_uri?: InputMaybe<OrderBy>;
  image_optimizer_retry_count?: InputMaybe<OrderBy>;
  json_parser_retry_count?: InputMaybe<OrderBy>;
  raw_animation_uri?: InputMaybe<OrderBy>;
  raw_image_uri?: InputMaybe<OrderBy>;
};

/** select columns of table "nft_metadata_crawler.parsed_asset_uris" */
export enum NftMetadataCrawlerParsedAssetUrisSelectColumn {
  /** column name */
  AnimationOptimizerRetryCount = 'animation_optimizer_retry_count',
  /** column name */
  AssetUri = 'asset_uri',
  /** column name */
  CdnAnimationUri = 'cdn_animation_uri',
  /** column name */
  CdnImageUri = 'cdn_image_uri',
  /** column name */
  CdnJsonUri = 'cdn_json_uri',
  /** column name */
  ImageOptimizerRetryCount = 'image_optimizer_retry_count',
  /** column name */
  JsonParserRetryCount = 'json_parser_retry_count',
  /** column name */
  RawAnimationUri = 'raw_animation_uri',
  /** column name */
  RawImageUri = 'raw_image_uri'
}

/** Streaming cursor of the table "nft_metadata_crawler_parsed_asset_uris" */
export type NftMetadataCrawlerParsedAssetUrisStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: NftMetadataCrawlerParsedAssetUrisStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type NftMetadataCrawlerParsedAssetUrisStreamCursorValueInput = {
  animation_optimizer_retry_count?: InputMaybe<Scalars['Int']['input']>;
  asset_uri?: InputMaybe<Scalars['String']['input']>;
  cdn_animation_uri?: InputMaybe<Scalars['String']['input']>;
  cdn_image_uri?: InputMaybe<Scalars['String']['input']>;
  cdn_json_uri?: InputMaybe<Scalars['String']['input']>;
  image_optimizer_retry_count?: InputMaybe<Scalars['Int']['input']>;
  json_parser_retry_count?: InputMaybe<Scalars['Int']['input']>;
  raw_animation_uri?: InputMaybe<Scalars['String']['input']>;
  raw_image_uri?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "num_active_delegator_per_pool" */
export type NumActiveDelegatorPerPool = {
  num_active_delegator?: Maybe<Scalars['bigint']['output']>;
  pool_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "num_active_delegator_per_pool". All fields are combined with a logical 'AND'. */
export type NumActiveDelegatorPerPoolBoolExp = {
  _and?: InputMaybe<Array<NumActiveDelegatorPerPoolBoolExp>>;
  _not?: InputMaybe<NumActiveDelegatorPerPoolBoolExp>;
  _or?: InputMaybe<Array<NumActiveDelegatorPerPoolBoolExp>>;
  num_active_delegator?: InputMaybe<BigintComparisonExp>;
  pool_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "num_active_delegator_per_pool". */
export type NumActiveDelegatorPerPoolOrderBy = {
  num_active_delegator?: InputMaybe<OrderBy>;
  pool_address?: InputMaybe<OrderBy>;
};

/** select columns of table "num_active_delegator_per_pool" */
export enum NumActiveDelegatorPerPoolSelectColumn {
  /** column name */
  NumActiveDelegator = 'num_active_delegator',
  /** column name */
  PoolAddress = 'pool_address'
}

/** Streaming cursor of the table "num_active_delegator_per_pool" */
export type NumActiveDelegatorPerPoolStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: NumActiveDelegatorPerPoolStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type NumActiveDelegatorPerPoolStreamCursorValueInput = {
  num_active_delegator?: InputMaybe<Scalars['bigint']['input']>;
  pool_address?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "oracle_router_activities" */
export type OracleRouterActivities = {
  base_asset?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  event_index: Scalars['numeric']['output'];
  oracle?: Maybe<Scalars['String']['output']>;
  oracle_kind?: Maybe<Scalars['numeric']['output']>;
  oracle_router?: Maybe<Scalars['String']['output']>;
  quote_asset?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "oracle_router_activities". All fields are combined with a logical 'AND'. */
export type OracleRouterActivitiesBoolExp = {
  _and?: InputMaybe<Array<OracleRouterActivitiesBoolExp>>;
  _not?: InputMaybe<OracleRouterActivitiesBoolExp>;
  _or?: InputMaybe<Array<OracleRouterActivitiesBoolExp>>;
  base_asset?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  oracle?: InputMaybe<StringComparisonExp>;
  oracle_kind?: InputMaybe<NumericComparisonExp>;
  oracle_router?: InputMaybe<StringComparisonExp>;
  quote_asset?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "oracle_router_activities". */
export type OracleRouterActivitiesOrderBy = {
  base_asset?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  oracle?: InputMaybe<OrderBy>;
  oracle_kind?: InputMaybe<OrderBy>;
  oracle_router?: InputMaybe<OrderBy>;
  quote_asset?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "oracle_router_activities" */
export enum OracleRouterActivitiesSelectColumn {
  /** column name */
  BaseAsset = 'base_asset',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  Oracle = 'oracle',
  /** column name */
  OracleKind = 'oracle_kind',
  /** column name */
  OracleRouter = 'oracle_router',
  /** column name */
  QuoteAsset = 'quote_asset',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "oracle_router_activities" */
export type OracleRouterActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OracleRouterActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OracleRouterActivitiesStreamCursorValueInput = {
  base_asset?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  oracle?: InputMaybe<Scalars['String']['input']>;
  oracle_kind?: InputMaybe<Scalars['numeric']['input']>;
  oracle_router?: InputMaybe<Scalars['String']['input']>;
  quote_asset?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "oracle_router_current_config" */
export type OracleRouterCurrentConfig = {
  base_asset: Scalars['String']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  oracle?: Maybe<Scalars['String']['output']>;
  oracle_kind?: Maybe<Scalars['numeric']['output']>;
  oracle_router: Scalars['String']['output'];
  quote_asset: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "oracle_router_current_config". All fields are combined with a logical 'AND'. */
export type OracleRouterCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<OracleRouterCurrentConfigBoolExp>>;
  _not?: InputMaybe<OracleRouterCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<OracleRouterCurrentConfigBoolExp>>;
  base_asset?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  oracle?: InputMaybe<StringComparisonExp>;
  oracle_kind?: InputMaybe<NumericComparisonExp>;
  oracle_router?: InputMaybe<StringComparisonExp>;
  quote_asset?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "oracle_router_current_config". */
export type OracleRouterCurrentConfigOrderBy = {
  base_asset?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  oracle?: InputMaybe<OrderBy>;
  oracle_kind?: InputMaybe<OrderBy>;
  oracle_router?: InputMaybe<OrderBy>;
  quote_asset?: InputMaybe<OrderBy>;
};

/** select columns of table "oracle_router_current_config" */
export enum OracleRouterCurrentConfigSelectColumn {
  /** column name */
  BaseAsset = 'base_asset',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Oracle = 'oracle',
  /** column name */
  OracleKind = 'oracle_kind',
  /** column name */
  OracleRouter = 'oracle_router',
  /** column name */
  QuoteAsset = 'quote_asset'
}

/** Streaming cursor of the table "oracle_router_current_config" */
export type OracleRouterCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OracleRouterCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OracleRouterCurrentConfigStreamCursorValueInput = {
  base_asset?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  oracle?: InputMaybe<Scalars['String']['input']>;
  oracle_kind?: InputMaybe<Scalars['numeric']['input']>;
  oracle_router?: InputMaybe<Scalars['String']['input']>;
  quote_asset?: InputMaybe<Scalars['String']['input']>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "processor_metadata.processor_status" */
export type ProcessorStatus = {
  last_success_version: Scalars['bigint']['output'];
  last_transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  last_updated: Scalars['timestamp']['output'];
  processor: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "processor_metadata.processor_status". All fields are combined with a logical 'AND'. */
export type ProcessorStatusBoolExp = {
  _and?: InputMaybe<Array<ProcessorStatusBoolExp>>;
  _not?: InputMaybe<ProcessorStatusBoolExp>;
  _or?: InputMaybe<Array<ProcessorStatusBoolExp>>;
  last_success_version?: InputMaybe<BigintComparisonExp>;
  last_transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  last_updated?: InputMaybe<TimestampComparisonExp>;
  processor?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "processor_metadata.processor_status". */
export type ProcessorStatusOrderBy = {
  last_success_version?: InputMaybe<OrderBy>;
  last_transaction_timestamp?: InputMaybe<OrderBy>;
  last_updated?: InputMaybe<OrderBy>;
  processor?: InputMaybe<OrderBy>;
};

/** select columns of table "processor_metadata.processor_status" */
export enum ProcessorStatusSelectColumn {
  /** column name */
  LastSuccessVersion = 'last_success_version',
  /** column name */
  LastTransactionTimestamp = 'last_transaction_timestamp',
  /** column name */
  LastUpdated = 'last_updated',
  /** column name */
  Processor = 'processor'
}

/** Streaming cursor of the table "processor_status" */
export type ProcessorStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ProcessorStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProcessorStatusStreamCursorValueInput = {
  last_success_version?: InputMaybe<Scalars['bigint']['input']>;
  last_transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  last_updated?: InputMaybe<Scalars['timestamp']['input']>;
  processor?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "proposal_votes" */
export type ProposalVotes = {
  num_votes: Scalars['numeric']['output'];
  proposal_id: Scalars['bigint']['output'];
  should_pass: Scalars['Boolean']['output'];
  staking_pool_address: Scalars['String']['output'];
  transaction_timestamp: Scalars['timestamp']['output'];
  transaction_version: Scalars['bigint']['output'];
  voter_address: Scalars['String']['output'];
};

/** aggregated selection of "proposal_votes" */
export type ProposalVotesAggregate = {
  aggregate?: Maybe<ProposalVotesAggregateFields>;
  nodes: Array<ProposalVotes>;
};

/** aggregate fields of "proposal_votes" */
export type ProposalVotesAggregateFields = {
  avg?: Maybe<ProposalVotesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProposalVotesMaxFields>;
  min?: Maybe<ProposalVotesMinFields>;
  stddev?: Maybe<ProposalVotesStddevFields>;
  stddev_pop?: Maybe<ProposalVotesStddevPopFields>;
  stddev_samp?: Maybe<ProposalVotesStddevSampFields>;
  sum?: Maybe<ProposalVotesSumFields>;
  var_pop?: Maybe<ProposalVotesVarPopFields>;
  var_samp?: Maybe<ProposalVotesVarSampFields>;
  variance?: Maybe<ProposalVotesVarianceFields>;
};


/** aggregate fields of "proposal_votes" */
export type ProposalVotesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProposalVotesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ProposalVotesAvgFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "proposal_votes". All fields are combined with a logical 'AND'. */
export type ProposalVotesBoolExp = {
  _and?: InputMaybe<Array<ProposalVotesBoolExp>>;
  _not?: InputMaybe<ProposalVotesBoolExp>;
  _or?: InputMaybe<Array<ProposalVotesBoolExp>>;
  num_votes?: InputMaybe<NumericComparisonExp>;
  proposal_id?: InputMaybe<BigintComparisonExp>;
  should_pass?: InputMaybe<BooleanComparisonExp>;
  staking_pool_address?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  voter_address?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type ProposalVotesMaxFields = {
  num_votes?: Maybe<Scalars['numeric']['output']>;
  proposal_id?: Maybe<Scalars['bigint']['output']>;
  staking_pool_address?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  voter_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ProposalVotesMinFields = {
  num_votes?: Maybe<Scalars['numeric']['output']>;
  proposal_id?: Maybe<Scalars['bigint']['output']>;
  staking_pool_address?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  voter_address?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "proposal_votes". */
export type ProposalVotesOrderBy = {
  num_votes?: InputMaybe<OrderBy>;
  proposal_id?: InputMaybe<OrderBy>;
  should_pass?: InputMaybe<OrderBy>;
  staking_pool_address?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  voter_address?: InputMaybe<OrderBy>;
};

/** select columns of table "proposal_votes" */
export enum ProposalVotesSelectColumn {
  /** column name */
  NumVotes = 'num_votes',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  ShouldPass = 'should_pass',
  /** column name */
  StakingPoolAddress = 'staking_pool_address',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VoterAddress = 'voter_address'
}

/** aggregate stddev on columns */
export type ProposalVotesStddevFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ProposalVotesStddevPopFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ProposalVotesStddevSampFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "proposal_votes" */
export type ProposalVotesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ProposalVotesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProposalVotesStreamCursorValueInput = {
  num_votes?: InputMaybe<Scalars['numeric']['input']>;
  proposal_id?: InputMaybe<Scalars['bigint']['input']>;
  should_pass?: InputMaybe<Scalars['Boolean']['input']>;
  staking_pool_address?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type ProposalVotesSumFields = {
  num_votes?: Maybe<Scalars['numeric']['output']>;
  proposal_id?: Maybe<Scalars['bigint']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type ProposalVotesVarPopFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ProposalVotesVarSampFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ProposalVotesVarianceFields = {
  num_votes?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "public_key_auth_keys" */
export type PublicKeyAuthKeys = {
  account_public_key?: Maybe<Scalars['String']['output']>;
  auth_key: Scalars['String']['output'];
  is_public_key_used: Scalars['Boolean']['output'];
  last_transaction_version: Scalars['bigint']['output'];
  public_key: Scalars['String']['output'];
  public_key_type: Scalars['String']['output'];
  signature_type: Scalars['String']['output'];
};

/** aggregated selection of "public_key_auth_keys" */
export type PublicKeyAuthKeysAggregate = {
  aggregate?: Maybe<PublicKeyAuthKeysAggregateFields>;
  nodes: Array<PublicKeyAuthKeys>;
};

/** aggregate fields of "public_key_auth_keys" */
export type PublicKeyAuthKeysAggregateFields = {
  avg?: Maybe<PublicKeyAuthKeysAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PublicKeyAuthKeysMaxFields>;
  min?: Maybe<PublicKeyAuthKeysMinFields>;
  stddev?: Maybe<PublicKeyAuthKeysStddevFields>;
  stddev_pop?: Maybe<PublicKeyAuthKeysStddevPopFields>;
  stddev_samp?: Maybe<PublicKeyAuthKeysStddevSampFields>;
  sum?: Maybe<PublicKeyAuthKeysSumFields>;
  var_pop?: Maybe<PublicKeyAuthKeysVarPopFields>;
  var_samp?: Maybe<PublicKeyAuthKeysVarSampFields>;
  variance?: Maybe<PublicKeyAuthKeysVarianceFields>;
};


/** aggregate fields of "public_key_auth_keys" */
export type PublicKeyAuthKeysAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PublicKeyAuthKeysSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type PublicKeyAuthKeysAvgFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "public_key_auth_keys". All fields are combined with a logical 'AND'. */
export type PublicKeyAuthKeysBoolExp = {
  _and?: InputMaybe<Array<PublicKeyAuthKeysBoolExp>>;
  _not?: InputMaybe<PublicKeyAuthKeysBoolExp>;
  _or?: InputMaybe<Array<PublicKeyAuthKeysBoolExp>>;
  account_public_key?: InputMaybe<StringComparisonExp>;
  auth_key?: InputMaybe<StringComparisonExp>;
  is_public_key_used?: InputMaybe<BooleanComparisonExp>;
  last_transaction_version?: InputMaybe<BigintComparisonExp>;
  public_key?: InputMaybe<StringComparisonExp>;
  public_key_type?: InputMaybe<StringComparisonExp>;
  signature_type?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type PublicKeyAuthKeysMaxFields = {
  account_public_key?: Maybe<Scalars['String']['output']>;
  auth_key?: Maybe<Scalars['String']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  public_key_type?: Maybe<Scalars['String']['output']>;
  signature_type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PublicKeyAuthKeysMinFields = {
  account_public_key?: Maybe<Scalars['String']['output']>;
  auth_key?: Maybe<Scalars['String']['output']>;
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  public_key_type?: Maybe<Scalars['String']['output']>;
  signature_type?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "public_key_auth_keys". */
export type PublicKeyAuthKeysOrderBy = {
  account_public_key?: InputMaybe<OrderBy>;
  auth_key?: InputMaybe<OrderBy>;
  is_public_key_used?: InputMaybe<OrderBy>;
  last_transaction_version?: InputMaybe<OrderBy>;
  public_key?: InputMaybe<OrderBy>;
  public_key_type?: InputMaybe<OrderBy>;
  signature_type?: InputMaybe<OrderBy>;
};

/** select columns of table "public_key_auth_keys" */
export enum PublicKeyAuthKeysSelectColumn {
  /** column name */
  AccountPublicKey = 'account_public_key',
  /** column name */
  AuthKey = 'auth_key',
  /** column name */
  IsPublicKeyUsed = 'is_public_key_used',
  /** column name */
  LastTransactionVersion = 'last_transaction_version',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  PublicKeyType = 'public_key_type',
  /** column name */
  SignatureType = 'signature_type'
}

/** aggregate stddev on columns */
export type PublicKeyAuthKeysStddevFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type PublicKeyAuthKeysStddevPopFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type PublicKeyAuthKeysStddevSampFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "public_key_auth_keys" */
export type PublicKeyAuthKeysStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PublicKeyAuthKeysStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PublicKeyAuthKeysStreamCursorValueInput = {
  account_public_key?: InputMaybe<Scalars['String']['input']>;
  auth_key?: InputMaybe<Scalars['String']['input']>;
  is_public_key_used?: InputMaybe<Scalars['Boolean']['input']>;
  last_transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  public_key_type?: InputMaybe<Scalars['String']['input']>;
  signature_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type PublicKeyAuthKeysSumFields = {
  last_transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type PublicKeyAuthKeysVarPopFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type PublicKeyAuthKeysVarSampFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PublicKeyAuthKeysVarianceFields = {
  last_transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pyth_oracle_activities" */
export type PythOracleActivities = {
  asset_identifier?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  event_index: Scalars['numeric']['output'];
  max_age_in_seconds?: Maybe<Scalars['numeric']['output']>;
  max_confidence?: Maybe<Scalars['numeric']['output']>;
  oracle_address?: Maybe<Scalars['String']['output']>;
  pyth_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "pyth_oracle_activities". All fields are combined with a logical 'AND'. */
export type PythOracleActivitiesBoolExp = {
  _and?: InputMaybe<Array<PythOracleActivitiesBoolExp>>;
  _not?: InputMaybe<PythOracleActivitiesBoolExp>;
  _or?: InputMaybe<Array<PythOracleActivitiesBoolExp>>;
  asset_identifier?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  max_age_in_seconds?: InputMaybe<NumericComparisonExp>;
  max_confidence?: InputMaybe<NumericComparisonExp>;
  oracle_address?: InputMaybe<StringComparisonExp>;
  pyth_id?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "pyth_oracle_activities". */
export type PythOracleActivitiesOrderBy = {
  asset_identifier?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  max_age_in_seconds?: InputMaybe<OrderBy>;
  max_confidence?: InputMaybe<OrderBy>;
  oracle_address?: InputMaybe<OrderBy>;
  pyth_id?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "pyth_oracle_activities" */
export enum PythOracleActivitiesSelectColumn {
  /** column name */
  AssetIdentifier = 'asset_identifier',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  MaxAgeInSeconds = 'max_age_in_seconds',
  /** column name */
  MaxConfidence = 'max_confidence',
  /** column name */
  OracleAddress = 'oracle_address',
  /** column name */
  PythId = 'pyth_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "pyth_oracle_activities" */
export type PythOracleActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PythOracleActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PythOracleActivitiesStreamCursorValueInput = {
  asset_identifier?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  max_age_in_seconds?: InputMaybe<Scalars['numeric']['input']>;
  max_confidence?: InputMaybe<Scalars['numeric']['input']>;
  oracle_address?: InputMaybe<Scalars['String']['input']>;
  pyth_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "pyth_oracle_current_config" */
export type PythOracleCurrentConfig = {
  asset_identifier: Scalars['String']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  max_age_in_seconds?: Maybe<Scalars['numeric']['output']>;
  max_confidence?: Maybe<Scalars['numeric']['output']>;
  oracle_address: Scalars['String']['output'];
  pyth_id?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "pyth_oracle_current_config". All fields are combined with a logical 'AND'. */
export type PythOracleCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<PythOracleCurrentConfigBoolExp>>;
  _not?: InputMaybe<PythOracleCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<PythOracleCurrentConfigBoolExp>>;
  asset_identifier?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  max_age_in_seconds?: InputMaybe<NumericComparisonExp>;
  max_confidence?: InputMaybe<NumericComparisonExp>;
  oracle_address?: InputMaybe<StringComparisonExp>;
  pyth_id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "pyth_oracle_current_config". */
export type PythOracleCurrentConfigOrderBy = {
  asset_identifier?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  max_age_in_seconds?: InputMaybe<OrderBy>;
  max_confidence?: InputMaybe<OrderBy>;
  oracle_address?: InputMaybe<OrderBy>;
  pyth_id?: InputMaybe<OrderBy>;
};

/** select columns of table "pyth_oracle_current_config" */
export enum PythOracleCurrentConfigSelectColumn {
  /** column name */
  AssetIdentifier = 'asset_identifier',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  MaxAgeInSeconds = 'max_age_in_seconds',
  /** column name */
  MaxConfidence = 'max_confidence',
  /** column name */
  OracleAddress = 'oracle_address',
  /** column name */
  PythId = 'pyth_id'
}

/** Streaming cursor of the table "pyth_oracle_current_config" */
export type PythOracleCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PythOracleCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PythOracleCurrentConfigStreamCursorValueInput = {
  asset_identifier?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  max_age_in_seconds?: InputMaybe<Scalars['numeric']['input']>;
  max_confidence?: InputMaybe<Scalars['numeric']['input']>;
  oracle_address?: InputMaybe<Scalars['String']['input']>;
  pyth_id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryRoot = {
  /** fetch data from the table: "account_transactions" */
  account_transactions: Array<AccountTransactions>;
  /** fetch aggregated fields from the table: "account_transactions" */
  account_transactions_aggregate: AccountTransactionsAggregate;
  /** fetch data from the table: "account_transactions" using primary key columns */
  account_transactions_by_pk?: Maybe<AccountTransactions>;
  /** fetch data from the table: "adaptive_irm_activities" */
  adaptive_irm_activities: Array<AdaptiveIrmActivities>;
  /** fetch aggregated fields from the table: "adaptive_irm_activities" */
  adaptive_irm_activities_aggregate: AdaptiveIrmActivitiesAggregate;
  /** fetch data from the table: "adaptive_irm_activities" using primary key columns */
  adaptive_irm_activities_by_pk?: Maybe<AdaptiveIrmActivities>;
  /** fetch data from the table: "adaptive_irm_current_config" */
  adaptive_irm_current_config: Array<AdaptiveIrmCurrentConfig>;
  /** fetch aggregated fields from the table: "adaptive_irm_current_config" */
  adaptive_irm_current_config_aggregate: AdaptiveIrmCurrentConfigAggregate;
  /** fetch data from the table: "adaptive_irm_current_config" using primary key columns */
  adaptive_irm_current_config_by_pk?: Maybe<AdaptiveIrmCurrentConfig>;
  /** fetch data from the table: "adaptive_irm_current_state" */
  adaptive_irm_current_state: Array<AdaptiveIrmCurrentState>;
  /** fetch data from the table: "adaptive_irm_current_state" using primary key columns */
  adaptive_irm_current_state_by_pk?: Maybe<AdaptiveIrmCurrentState>;
  /** fetch data from the table: "adaptive_irm_state_activities" */
  adaptive_irm_state_activities: Array<AdaptiveIrmStateActivities>;
  /** fetch data from the table: "adaptive_irm_state_activities" using primary key columns */
  adaptive_irm_state_activities_by_pk?: Maybe<AdaptiveIrmStateActivities>;
  /** fetch data from the table: "address_events_summary" */
  address_events_summary: Array<AddressEventsSummary>;
  /** fetch data from the table: "address_version_from_events" */
  address_version_from_events: Array<AddressVersionFromEvents>;
  /** fetch aggregated fields from the table: "address_version_from_events" */
  address_version_from_events_aggregate: AddressVersionFromEventsAggregate;
  /** fetch data from the table: "legacy_migration_v1.address_version_from_move_resources" */
  address_version_from_move_resources: Array<AddressVersionFromMoveResources>;
  /** fetch aggregated fields from the table: "legacy_migration_v1.address_version_from_move_resources" */
  address_version_from_move_resources_aggregate: AddressVersionFromMoveResourcesAggregate;
  /** fetch data from the table: "auth_key_account_addresses" */
  auth_key_account_addresses: Array<AuthKeyAccountAddresses>;
  /** fetch aggregated fields from the table: "auth_key_account_addresses" */
  auth_key_account_addresses_aggregate: AuthKeyAccountAddressesAggregate;
  /** fetch data from the table: "auth_key_account_addresses" using primary key columns */
  auth_key_account_addresses_by_pk?: Maybe<AuthKeyAccountAddresses>;
  /** fetch data from the table: "block_metadata_transactions" */
  block_metadata_transactions: Array<BlockMetadataTransactions>;
  /** fetch data from the table: "block_metadata_transactions" using primary key columns */
  block_metadata_transactions_by_pk?: Maybe<BlockMetadataTransactions>;
  /** fetch data from the table: "borrow_risk_parameters_current" */
  borrow_risk_parameters_current: Array<BorrowRiskParametersCurrent>;
  /** fetch data from the table: "borrow_risk_parameters_current" using primary key columns */
  borrow_risk_parameters_current_by_pk?: Maybe<BorrowRiskParametersCurrent>;
  /** An array relationship */
  coin_activities: Array<CoinActivities>;
  /** An aggregate relationship */
  coin_activities_aggregate: CoinActivitiesAggregate;
  /** fetch data from the table: "legacy_migration_v1.coin_balances" */
  coin_balances: Array<CoinBalances>;
  /** fetch data from the table: "legacy_migration_v1.coin_infos" */
  coin_infos: Array<CoinInfos>;
  /** fetch data from the table: "coin_supply" */
  coin_supply: Array<CoinSupply>;
  /** fetch data from the table: "coin_supply" using primary key columns */
  coin_supply_by_pk?: Maybe<CoinSupply>;
  /** fetch data from the table: "collateral_risk_parameters_current" */
  collateral_risk_parameters_current: Array<CollateralRiskParametersCurrent>;
  /** fetch data from the table: "collateral_risk_parameters_current" using primary key columns */
  collateral_risk_parameters_current_by_pk?: Maybe<CollateralRiskParametersCurrent>;
  /** fetch data from the table: "legacy_migration_v1.collection_datas" */
  collection_datas: Array<CollectionDatas>;
  /** fetch data from the table: "legacy_migration_v1.current_ans_lookup" */
  current_ans_lookup: Array<CurrentAnsLookup>;
  /** fetch data from the table: "current_ans_lookup_v2" */
  current_ans_lookup_v2: Array<CurrentAnsLookupV2>;
  /** fetch data from the table: "current_ans_lookup_v2" using primary key columns */
  current_ans_lookup_v2_by_pk?: Maybe<CurrentAnsLookupV2>;
  /** fetch data from the table: "current_aptos_names" */
  current_aptos_names: Array<CurrentAptosNames>;
  /** fetch aggregated fields from the table: "current_aptos_names" */
  current_aptos_names_aggregate: CurrentAptosNamesAggregate;
  /** fetch data from the table: "legacy_migration_v1.current_coin_balances" */
  current_coin_balances: Array<CurrentCoinBalances>;
  /** fetch data from the table: "legacy_migration_v1.current_collection_datas" */
  current_collection_datas: Array<CurrentCollectionDatas>;
  /** fetch data from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view: Array<CurrentCollectionOwnershipV2View>;
  /** fetch aggregated fields from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view_aggregate: CurrentCollectionOwnershipV2ViewAggregate;
  /** fetch data from the table: "current_collections_v2" */
  current_collections_v2: Array<CurrentCollectionsV2>;
  /** fetch data from the table: "current_collections_v2" using primary key columns */
  current_collections_v2_by_pk?: Maybe<CurrentCollectionsV2>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" */
  current_delegated_staking_pool_balances: Array<CurrentDelegatedStakingPoolBalances>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" using primary key columns */
  current_delegated_staking_pool_balances_by_pk?: Maybe<CurrentDelegatedStakingPoolBalances>;
  /** fetch data from the table: "current_delegated_voter" */
  current_delegated_voter: Array<CurrentDelegatedVoter>;
  /** fetch data from the table: "current_delegated_voter" using primary key columns */
  current_delegated_voter_by_pk?: Maybe<CurrentDelegatedVoter>;
  /** fetch data from the table: "current_delegator_balances" */
  current_delegator_balances: Array<CurrentDelegatorBalances>;
  /** fetch data from the table: "current_delegator_balances" using primary key columns */
  current_delegator_balances_by_pk?: Maybe<CurrentDelegatorBalances>;
  /** fetch data from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances: Array<CurrentFungibleAssetBalances>;
  /** fetch aggregated fields from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances_aggregate: CurrentFungibleAssetBalancesAggregate;
  /** fetch data from the table: "current_fungible_asset_balances" using primary key columns */
  current_fungible_asset_balances_by_pk?: Maybe<CurrentFungibleAssetBalances>;
  /** fetch data from the table: "current_objects" */
  current_objects: Array<CurrentObjects>;
  /** fetch data from the table: "current_objects" using primary key columns */
  current_objects_by_pk?: Maybe<CurrentObjects>;
  /** fetch data from the table: "current_staking_pool_voter" */
  current_staking_pool_voter: Array<CurrentStakingPoolVoter>;
  /** fetch data from the table: "current_staking_pool_voter" using primary key columns */
  current_staking_pool_voter_by_pk?: Maybe<CurrentStakingPoolVoter>;
  /** fetch data from the table: "current_table_items" */
  current_table_items: Array<CurrentTableItems>;
  /** fetch data from the table: "current_table_items" using primary key columns */
  current_table_items_by_pk?: Maybe<CurrentTableItems>;
  /** fetch data from the table: "legacy_migration_v1.current_token_datas" */
  current_token_datas: Array<CurrentTokenDatas>;
  /** fetch data from the table: "current_token_datas_v2" */
  current_token_datas_v2: Array<CurrentTokenDatasV2>;
  /** fetch data from the table: "current_token_datas_v2" using primary key columns */
  current_token_datas_v2_by_pk?: Maybe<CurrentTokenDatasV2>;
  /** fetch data from the table: "legacy_migration_v1.current_token_ownerships" */
  current_token_ownerships: Array<CurrentTokenOwnerships>;
  /** fetch aggregated fields from the table: "legacy_migration_v1.current_token_ownerships" */
  current_token_ownerships_aggregate: CurrentTokenOwnershipsAggregate;
  /** fetch data from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2: Array<CurrentTokenOwnershipsV2>;
  /** fetch aggregated fields from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2_aggregate: CurrentTokenOwnershipsV2Aggregate;
  /** fetch data from the table: "current_token_ownerships_v2" using primary key columns */
  current_token_ownerships_v2_by_pk?: Maybe<CurrentTokenOwnershipsV2>;
  /** fetch data from the table: "current_token_pending_claims" */
  current_token_pending_claims: Array<CurrentTokenPendingClaims>;
  /** fetch data from the table: "current_token_pending_claims" using primary key columns */
  current_token_pending_claims_by_pk?: Maybe<CurrentTokenPendingClaims>;
  /** fetch data from the table: "current_token_royalty_v1" */
  current_token_royalty_v1: Array<CurrentTokenRoyaltyV1>;
  /** fetch data from the table: "current_token_royalty_v1" using primary key columns */
  current_token_royalty_v1_by_pk?: Maybe<CurrentTokenRoyaltyV1>;
  /** An array relationship */
  delegated_staking_activities: Array<DelegatedStakingActivities>;
  /** fetch data from the table: "delegated_staking_activities" using primary key columns */
  delegated_staking_activities_by_pk?: Maybe<DelegatedStakingActivities>;
  /** fetch data from the table: "delegated_staking_pool_balances" */
  delegated_staking_pool_balances: Array<DelegatedStakingPoolBalances>;
  /** fetch aggregated fields from the table: "delegated_staking_pool_balances" */
  delegated_staking_pool_balances_aggregate: DelegatedStakingPoolBalancesAggregate;
  /** fetch data from the table: "delegated_staking_pool_balances" using primary key columns */
  delegated_staking_pool_balances_by_pk?: Maybe<DelegatedStakingPoolBalances>;
  /** fetch data from the table: "delegated_staking_pools" */
  delegated_staking_pools: Array<DelegatedStakingPools>;
  /** fetch data from the table: "delegated_staking_pools" using primary key columns */
  delegated_staking_pools_by_pk?: Maybe<DelegatedStakingPools>;
  /** fetch data from the table: "delegator_distinct_pool" */
  delegator_distinct_pool: Array<DelegatorDistinctPool>;
  /** fetch aggregated fields from the table: "delegator_distinct_pool" */
  delegator_distinct_pool_aggregate: DelegatorDistinctPoolAggregate;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "fixed_price_oracle_activities" */
  fixed_price_oracle_activities: Array<FixedPriceOracleActivities>;
  /** fetch data from the table: "fixed_price_oracle_activities" using primary key columns */
  fixed_price_oracle_activities_by_pk?: Maybe<FixedPriceOracleActivities>;
  /** fetch data from the table: "fixed_price_oracle_current_config" */
  fixed_price_oracle_current_config: Array<FixedPriceOracleCurrentConfig>;
  /** fetch data from the table: "fixed_price_oracle_current_config" using primary key columns */
  fixed_price_oracle_current_config_by_pk?: Maybe<FixedPriceOracleCurrentConfig>;
  /** fetch data from the table: "fixed_rate_irm_activities" */
  fixed_rate_irm_activities: Array<FixedRateIrmActivities>;
  /** fetch data from the table: "fixed_rate_irm_activities" using primary key columns */
  fixed_rate_irm_activities_by_pk?: Maybe<FixedRateIrmActivities>;
  /** fetch data from the table: "fixed_rate_irm_current_config" */
  fixed_rate_irm_current_config: Array<FixedRateIrmCurrentConfig>;
  /** fetch data from the table: "fixed_rate_irm_current_config" using primary key columns */
  fixed_rate_irm_current_config_by_pk?: Maybe<FixedRateIrmCurrentConfig>;
  /** An array relationship */
  fungible_asset_activities: Array<FungibleAssetActivities>;
  /** fetch data from the table: "fungible_asset_activities" using primary key columns */
  fungible_asset_activities_by_pk?: Maybe<FungibleAssetActivities>;
  /** fetch data from the table: "fungible_asset_metadata" */
  fungible_asset_metadata: Array<FungibleAssetMetadata>;
  /** fetch data from the table: "fungible_asset_metadata" using primary key columns */
  fungible_asset_metadata_by_pk?: Maybe<FungibleAssetMetadata>;
  /** fetch data from the table: "hyperion_llp_bad_debt_activities" */
  hyperion_llp_bad_debt_activities: Array<HyperionLlpBadDebtActivities>;
  /** fetch data from the table: "hyperion_llp_bad_debt_activities" using primary key columns */
  hyperion_llp_bad_debt_activities_by_pk?: Maybe<HyperionLlpBadDebtActivities>;
  /** fetch data from the table: "hyperion_llp_debt_status_activities" */
  hyperion_llp_debt_status_activities: Array<HyperionLlpDebtStatusActivities>;
  /** fetch data from the table: "hyperion_llp_debt_status_activities" using primary key columns */
  hyperion_llp_debt_status_activities_by_pk?: Maybe<HyperionLlpDebtStatusActivities>;
  /** fetch data from the table: "hyperion_llp_liquidation_activities" */
  hyperion_llp_liquidation_activities: Array<HyperionLlpLiquidationActivities>;
  /** fetch data from the table: "hyperion_llp_liquidation_activities" using primary key columns */
  hyperion_llp_liquidation_activities_by_pk?: Maybe<HyperionLlpLiquidationActivities>;
  /** fetch data from the table: "hyperion_llp_position_current" */
  hyperion_llp_position_current: Array<HyperionLlpPositionCurrent>;
  /** fetch data from the table: "hyperion_llp_position_current" using primary key columns */
  hyperion_llp_position_current_by_pk?: Maybe<HyperionLlpPositionCurrent>;
  /** fetch data from the table: "hyperion_llp_position_debt_stores" */
  hyperion_llp_position_debt_stores: Array<HyperionLlpPositionDebtStores>;
  /** fetch data from the table: "hyperion_llp_position_debt_stores" using primary key columns */
  hyperion_llp_position_debt_stores_by_pk?: Maybe<HyperionLlpPositionDebtStores>;
  /** fetch data from the table: "indexer_status" */
  indexer_status: Array<IndexerStatus>;
  /** fetch data from the table: "indexer_status" using primary key columns */
  indexer_status_by_pk?: Maybe<IndexerStatus>;
  /** fetch data from the table: "kinked_irm_activities" */
  kinked_irm_activities: Array<KinkedIrmActivities>;
  /** fetch data from the table: "kinked_irm_activities" using primary key columns */
  kinked_irm_activities_by_pk?: Maybe<KinkedIrmActivities>;
  /** fetch data from the table: "kinked_irm_current_config" */
  kinked_irm_current_config: Array<KinkedIrmCurrentConfig>;
  /** fetch data from the table: "kinked_irm_current_config" using primary key columns */
  kinked_irm_current_config_by_pk?: Maybe<KinkedIrmCurrentConfig>;
  /** fetch data from the table: "processor_metadata.ledger_infos" */
  ledger_infos: Array<LedgerInfos>;
  /** fetch data from the table: "processor_metadata.ledger_infos" using primary key columns */
  ledger_infos_by_pk?: Maybe<LedgerInfos>;
  /** fetch data from the table: "legacy_migration_v1.move_resources" */
  move_resources: Array<MoveResources>;
  /** fetch aggregated fields from the table: "legacy_migration_v1.move_resources" */
  move_resources_aggregate: MoveResourcesAggregate;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" */
  nft_metadata_crawler_parsed_asset_uris: Array<NftMetadataCrawlerParsedAssetUris>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" using primary key columns */
  nft_metadata_crawler_parsed_asset_uris_by_pk?: Maybe<NftMetadataCrawlerParsedAssetUris>;
  /** fetch data from the table: "num_active_delegator_per_pool" */
  num_active_delegator_per_pool: Array<NumActiveDelegatorPerPool>;
  /** fetch data from the table: "oracle_router_activities" */
  oracle_router_activities: Array<OracleRouterActivities>;
  /** fetch data from the table: "oracle_router_activities" using primary key columns */
  oracle_router_activities_by_pk?: Maybe<OracleRouterActivities>;
  /** fetch data from the table: "oracle_router_current_config" */
  oracle_router_current_config: Array<OracleRouterCurrentConfig>;
  /** fetch data from the table: "oracle_router_current_config" using primary key columns */
  oracle_router_current_config_by_pk?: Maybe<OracleRouterCurrentConfig>;
  /** fetch data from the table: "processor_metadata.processor_status" */
  processor_status: Array<ProcessorStatus>;
  /** fetch data from the table: "processor_metadata.processor_status" using primary key columns */
  processor_status_by_pk?: Maybe<ProcessorStatus>;
  /** fetch data from the table: "proposal_votes" */
  proposal_votes: Array<ProposalVotes>;
  /** fetch aggregated fields from the table: "proposal_votes" */
  proposal_votes_aggregate: ProposalVotesAggregate;
  /** fetch data from the table: "proposal_votes" using primary key columns */
  proposal_votes_by_pk?: Maybe<ProposalVotes>;
  /** fetch data from the table: "public_key_auth_keys" */
  public_key_auth_keys: Array<PublicKeyAuthKeys>;
  /** fetch aggregated fields from the table: "public_key_auth_keys" */
  public_key_auth_keys_aggregate: PublicKeyAuthKeysAggregate;
  /** fetch data from the table: "public_key_auth_keys" using primary key columns */
  public_key_auth_keys_by_pk?: Maybe<PublicKeyAuthKeys>;
  /** fetch data from the table: "pyth_oracle_activities" */
  pyth_oracle_activities: Array<PythOracleActivities>;
  /** fetch data from the table: "pyth_oracle_activities" using primary key columns */
  pyth_oracle_activities_by_pk?: Maybe<PythOracleActivities>;
  /** fetch data from the table: "pyth_oracle_current_config" */
  pyth_oracle_current_config: Array<PythOracleCurrentConfig>;
  /** fetch data from the table: "pyth_oracle_current_config" using primary key columns */
  pyth_oracle_current_config_by_pk?: Maybe<PythOracleCurrentConfig>;
  /** fetch data from the table: "scmd_bad_debt_activities" */
  scmd_bad_debt_activities: Array<ScmdBadDebtActivities>;
  /** fetch data from the table: "scmd_bad_debt_activities" using primary key columns */
  scmd_bad_debt_activities_by_pk?: Maybe<ScmdBadDebtActivities>;
  /** fetch data from the table: "scmd_debt_status_activities" */
  scmd_debt_status_activities: Array<ScmdDebtStatusActivities>;
  /** fetch data from the table: "scmd_debt_status_activities" using primary key columns */
  scmd_debt_status_activities_by_pk?: Maybe<ScmdDebtStatusActivities>;
  /** fetch data from the table: "scmd_liquidation_activities" */
  scmd_liquidation_activities: Array<ScmdLiquidationActivities>;
  /** fetch data from the table: "scmd_liquidation_activities" using primary key columns */
  scmd_liquidation_activities_by_pk?: Maybe<ScmdLiquidationActivities>;
  /** fetch data from the table: "scmd_position_current" */
  scmd_position_current: Array<ScmdPositionCurrent>;
  /** fetch data from the table: "scmd_position_current" using primary key columns */
  scmd_position_current_by_pk?: Maybe<ScmdPositionCurrent>;
  /** fetch data from the table: "scmd_position_debt_stores" */
  scmd_position_debt_stores: Array<ScmdPositionDebtStores>;
  /** fetch data from the table: "scmd_position_debt_stores" using primary key columns */
  scmd_position_debt_stores_by_pk?: Maybe<ScmdPositionDebtStores>;
  /** fetch data from the table: "signatures" */
  signatures: Array<Signatures>;
  /** fetch data from the table: "signatures" using primary key columns */
  signatures_by_pk?: Maybe<Signatures>;
  /** fetch data from the table: "switchboard_oracle_activities" */
  switchboard_oracle_activities: Array<SwitchboardOracleActivities>;
  /** fetch data from the table: "switchboard_oracle_activities" using primary key columns */
  switchboard_oracle_activities_by_pk?: Maybe<SwitchboardOracleActivities>;
  /** fetch data from the table: "switchboard_oracle_current_config" */
  switchboard_oracle_current_config: Array<SwitchboardOracleCurrentConfig>;
  /** fetch data from the table: "switchboard_oracle_current_config" using primary key columns */
  switchboard_oracle_current_config_by_pk?: Maybe<SwitchboardOracleCurrentConfig>;
  /** fetch data from the table: "table_items" */
  table_items: Array<TableItems>;
  /** fetch data from the table: "table_items" using primary key columns */
  table_items_by_pk?: Maybe<TableItems>;
  /** fetch data from the table: "table_metadatas" */
  table_metadatas: Array<TableMetadatas>;
  /** fetch data from the table: "table_metadatas" using primary key columns */
  table_metadatas_by_pk?: Maybe<TableMetadatas>;
  /** An array relationship */
  token_activities: Array<TokenActivities>;
  /** An aggregate relationship */
  token_activities_aggregate: TokenActivitiesAggregate;
  /** An array relationship */
  token_activities_v2: Array<TokenActivitiesV2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: TokenActivitiesV2Aggregate;
  /** fetch data from the table: "token_activities_v2" using primary key columns */
  token_activities_v2_by_pk?: Maybe<TokenActivitiesV2>;
  /** fetch data from the table: "legacy_migration_v1.token_datas" */
  token_datas: Array<TokenDatas>;
  /** fetch data from the table: "legacy_migration_v1.token_ownerships" */
  token_ownerships: Array<TokenOwnerships>;
  /** fetch data from the table: "legacy_migration_v1.tokens" */
  tokens: Array<Tokens>;
  /** fetch data from the table: "user_transactions" */
  user_transactions: Array<UserTransactions>;
  /** fetch data from the table: "user_transactions" using primary key columns */
  user_transactions_by_pk?: Maybe<UserTransactions>;
  /** fetch data from the table: "vault_bad_debt_activities" */
  vault_bad_debt_activities: Array<VaultBadDebtActivities>;
  /** fetch aggregated fields from the table: "vault_bad_debt_activities" */
  vault_bad_debt_activities_aggregate: VaultBadDebtActivitiesAggregate;
  /** fetch data from the table: "vault_bad_debt_activities" using primary key columns */
  vault_bad_debt_activities_by_pk?: Maybe<VaultBadDebtActivities>;
  /** fetch data from the table: "vault_emergency_activities" */
  vault_emergency_activities: Array<VaultEmergencyActivities>;
  /** fetch aggregated fields from the table: "vault_emergency_activities" */
  vault_emergency_activities_aggregate: VaultEmergencyActivitiesAggregate;
  /** fetch data from the table: "vault_emergency_activities" using primary key columns */
  vault_emergency_activities_by_pk?: Maybe<VaultEmergencyActivities>;
  /** fetch data from the table: "vault_flashloan_activities" */
  vault_flashloan_activities: Array<VaultFlashloanActivities>;
  /** fetch aggregated fields from the table: "vault_flashloan_activities" */
  vault_flashloan_activities_aggregate: VaultFlashloanActivitiesAggregate;
  /** fetch data from the table: "vault_flashloan_activities" using primary key columns */
  vault_flashloan_activities_by_pk?: Maybe<VaultFlashloanActivities>;
  /** fetch data from the table: "vault_info" */
  vault_info: Array<VaultInfo>;
  /** fetch aggregated fields from the table: "vault_info" */
  vault_info_aggregate: VaultInfoAggregate;
  /** fetch data from the table: "vault_info" using primary key columns */
  vault_info_by_pk?: Maybe<VaultInfo>;
  /** fetch data from the table: "vault_protocol_caps" */
  vault_protocol_caps: Array<VaultProtocolCaps>;
  /** fetch aggregated fields from the table: "vault_protocol_caps" */
  vault_protocol_caps_aggregate: VaultProtocolCapsAggregate;
  /** fetch data from the table: "vault_settings" */
  vault_settings: Array<VaultSettings>;
  /** fetch data from the table: "vault_settings" using primary key columns */
  vault_settings_by_pk?: Maybe<VaultSettings>;
  /** fetch data from the table: "vault_states_activities" */
  vault_states_activities: Array<VaultStatesActivities>;
  /** fetch aggregated fields from the table: "vault_states_activities" */
  vault_states_activities_aggregate: VaultStatesActivitiesAggregate;
  /** fetch data from the table: "vault_states_activities" using primary key columns */
  vault_states_activities_by_pk?: Maybe<VaultStatesActivities>;
};


export type QueryRootAccountTransactionsArgs = {
  distinct_on?: InputMaybe<Array<AccountTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccountTransactionsOrderBy>>;
  where?: InputMaybe<AccountTransactionsBoolExp>;
};


export type QueryRootAccountTransactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AccountTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccountTransactionsOrderBy>>;
  where?: InputMaybe<AccountTransactionsBoolExp>;
};


export type QueryRootAccountTransactionsByPkArgs = {
  account_address: Scalars['String']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootAdaptiveIrmActivitiesArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmActivitiesOrderBy>>;
  where?: InputMaybe<AdaptiveIrmActivitiesBoolExp>;
};


export type QueryRootAdaptiveIrmActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmActivitiesOrderBy>>;
  where?: InputMaybe<AdaptiveIrmActivitiesBoolExp>;
};


export type QueryRootAdaptiveIrmActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootAdaptiveIrmCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
};


export type QueryRootAdaptiveIrmCurrentConfigAggregateArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
};


export type QueryRootAdaptiveIrmCurrentConfigByPkArgs = {
  config_address: Scalars['String']['input'];
};


export type QueryRootAdaptiveIrmCurrentStateArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmCurrentStateSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmCurrentStateOrderBy>>;
  where?: InputMaybe<AdaptiveIrmCurrentStateBoolExp>;
};


export type QueryRootAdaptiveIrmCurrentStateByPkArgs = {
  state_address: Scalars['String']['input'];
};


export type QueryRootAdaptiveIrmStateActivitiesArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmStateActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmStateActivitiesOrderBy>>;
  where?: InputMaybe<AdaptiveIrmStateActivitiesBoolExp>;
};


export type QueryRootAdaptiveIrmStateActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootAddressEventsSummaryArgs = {
  distinct_on?: InputMaybe<Array<AddressEventsSummarySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressEventsSummaryOrderBy>>;
  where?: InputMaybe<AddressEventsSummaryBoolExp>;
};


export type QueryRootAddressVersionFromEventsArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromEventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromEventsOrderBy>>;
  where?: InputMaybe<AddressVersionFromEventsBoolExp>;
};


export type QueryRootAddressVersionFromEventsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromEventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromEventsOrderBy>>;
  where?: InputMaybe<AddressVersionFromEventsBoolExp>;
};


export type QueryRootAddressVersionFromMoveResourcesArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromMoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromMoveResourcesOrderBy>>;
  where?: InputMaybe<AddressVersionFromMoveResourcesBoolExp>;
};


export type QueryRootAddressVersionFromMoveResourcesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromMoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromMoveResourcesOrderBy>>;
  where?: InputMaybe<AddressVersionFromMoveResourcesBoolExp>;
};


export type QueryRootAuthKeyAccountAddressesArgs = {
  distinct_on?: InputMaybe<Array<AuthKeyAccountAddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthKeyAccountAddressesOrderBy>>;
  where?: InputMaybe<AuthKeyAccountAddressesBoolExp>;
};


export type QueryRootAuthKeyAccountAddressesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthKeyAccountAddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthKeyAccountAddressesOrderBy>>;
  where?: InputMaybe<AuthKeyAccountAddressesBoolExp>;
};


export type QueryRootAuthKeyAccountAddressesByPkArgs = {
  account_address: Scalars['String']['input'];
};


export type QueryRootBlockMetadataTransactionsArgs = {
  distinct_on?: InputMaybe<Array<BlockMetadataTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BlockMetadataTransactionsOrderBy>>;
  where?: InputMaybe<BlockMetadataTransactionsBoolExp>;
};


export type QueryRootBlockMetadataTransactionsByPkArgs = {
  version: Scalars['bigint']['input'];
};


export type QueryRootBorrowRiskParametersCurrentArgs = {
  distinct_on?: InputMaybe<Array<BorrowRiskParametersCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowRiskParametersCurrentOrderBy>>;
  where?: InputMaybe<BorrowRiskParametersCurrentBoolExp>;
};


export type QueryRootBorrowRiskParametersCurrentByPkArgs = {
  collateral: Scalars['String']['input'];
  config_address: Scalars['String']['input'];
  vault: Scalars['String']['input'];
};


export type QueryRootCoinActivitiesArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


export type QueryRootCoinActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


export type QueryRootCoinBalancesArgs = {
  distinct_on?: InputMaybe<Array<CoinBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinBalancesOrderBy>>;
  where?: InputMaybe<CoinBalancesBoolExp>;
};


export type QueryRootCoinInfosArgs = {
  distinct_on?: InputMaybe<Array<CoinInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinInfosOrderBy>>;
  where?: InputMaybe<CoinInfosBoolExp>;
};


export type QueryRootCoinSupplyArgs = {
  distinct_on?: InputMaybe<Array<CoinSupplySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinSupplyOrderBy>>;
  where?: InputMaybe<CoinSupplyBoolExp>;
};


export type QueryRootCoinSupplyByPkArgs = {
  coin_type_hash: Scalars['String']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootCollateralRiskParametersCurrentArgs = {
  distinct_on?: InputMaybe<Array<CollateralRiskParametersCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CollateralRiskParametersCurrentOrderBy>>;
  where?: InputMaybe<CollateralRiskParametersCurrentBoolExp>;
};


export type QueryRootCollateralRiskParametersCurrentByPkArgs = {
  collateral: Scalars['String']['input'];
  config_address: Scalars['String']['input'];
};


export type QueryRootCollectionDatasArgs = {
  distinct_on?: InputMaybe<Array<CollectionDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CollectionDatasOrderBy>>;
  where?: InputMaybe<CollectionDatasBoolExp>;
};


export type QueryRootCurrentAnsLookupArgs = {
  distinct_on?: InputMaybe<Array<CurrentAnsLookupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAnsLookupOrderBy>>;
  where?: InputMaybe<CurrentAnsLookupBoolExp>;
};


export type QueryRootCurrentAnsLookupV2Args = {
  distinct_on?: InputMaybe<Array<CurrentAnsLookupV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAnsLookupV2OrderBy>>;
  where?: InputMaybe<CurrentAnsLookupV2BoolExp>;
};


export type QueryRootCurrentAnsLookupV2ByPkArgs = {
  domain: Scalars['String']['input'];
  subdomain: Scalars['String']['input'];
  token_standard: Scalars['String']['input'];
};


export type QueryRootCurrentAptosNamesArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


export type QueryRootCurrentAptosNamesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


export type QueryRootCurrentCoinBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentCoinBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCoinBalancesOrderBy>>;
  where?: InputMaybe<CurrentCoinBalancesBoolExp>;
};


export type QueryRootCurrentCollectionDatasArgs = {
  distinct_on?: InputMaybe<Array<CurrentCollectionDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionDatasOrderBy>>;
  where?: InputMaybe<CurrentCollectionDatasBoolExp>;
};


export type QueryRootCurrentCollectionOwnershipV2ViewArgs = {
  distinct_on?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewOrderBy>>;
  where?: InputMaybe<CurrentCollectionOwnershipV2ViewBoolExp>;
};


export type QueryRootCurrentCollectionOwnershipV2ViewAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewOrderBy>>;
  where?: InputMaybe<CurrentCollectionOwnershipV2ViewBoolExp>;
};


export type QueryRootCurrentCollectionsV2Args = {
  distinct_on?: InputMaybe<Array<CurrentCollectionsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionsV2OrderBy>>;
  where?: InputMaybe<CurrentCollectionsV2BoolExp>;
};


export type QueryRootCurrentCollectionsV2ByPkArgs = {
  collection_id: Scalars['String']['input'];
};


export type QueryRootCurrentDelegatedStakingPoolBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentDelegatedStakingPoolBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentDelegatedStakingPoolBalancesOrderBy>>;
  where?: InputMaybe<CurrentDelegatedStakingPoolBalancesBoolExp>;
};


export type QueryRootCurrentDelegatedStakingPoolBalancesByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
};


export type QueryRootCurrentDelegatedVoterArgs = {
  distinct_on?: InputMaybe<Array<CurrentDelegatedVoterSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentDelegatedVoterOrderBy>>;
  where?: InputMaybe<CurrentDelegatedVoterBoolExp>;
};


export type QueryRootCurrentDelegatedVoterByPkArgs = {
  delegation_pool_address: Scalars['String']['input'];
  delegator_address: Scalars['String']['input'];
};


export type QueryRootCurrentDelegatorBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentDelegatorBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentDelegatorBalancesOrderBy>>;
  where?: InputMaybe<CurrentDelegatorBalancesBoolExp>;
};


export type QueryRootCurrentDelegatorBalancesByPkArgs = {
  delegator_address: Scalars['String']['input'];
  pool_address: Scalars['String']['input'];
  pool_type: Scalars['String']['input'];
  table_handle: Scalars['String']['input'];
};


export type QueryRootCurrentFungibleAssetBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentFungibleAssetBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentFungibleAssetBalancesOrderBy>>;
  where?: InputMaybe<CurrentFungibleAssetBalancesBoolExp>;
};


export type QueryRootCurrentFungibleAssetBalancesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentFungibleAssetBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentFungibleAssetBalancesOrderBy>>;
  where?: InputMaybe<CurrentFungibleAssetBalancesBoolExp>;
};


export type QueryRootCurrentFungibleAssetBalancesByPkArgs = {
  storage_id: Scalars['String']['input'];
};


export type QueryRootCurrentObjectsArgs = {
  distinct_on?: InputMaybe<Array<CurrentObjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentObjectsOrderBy>>;
  where?: InputMaybe<CurrentObjectsBoolExp>;
};


export type QueryRootCurrentObjectsByPkArgs = {
  object_address: Scalars['String']['input'];
};


export type QueryRootCurrentStakingPoolVoterArgs = {
  distinct_on?: InputMaybe<Array<CurrentStakingPoolVoterSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentStakingPoolVoterOrderBy>>;
  where?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
};


export type QueryRootCurrentStakingPoolVoterByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
};


export type QueryRootCurrentTableItemsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTableItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTableItemsOrderBy>>;
  where?: InputMaybe<CurrentTableItemsBoolExp>;
};


export type QueryRootCurrentTableItemsByPkArgs = {
  key_hash: Scalars['String']['input'];
  table_handle: Scalars['String']['input'];
};


export type QueryRootCurrentTokenDatasArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenDatasOrderBy>>;
  where?: InputMaybe<CurrentTokenDatasBoolExp>;
};


export type QueryRootCurrentTokenDatasV2Args = {
  distinct_on?: InputMaybe<Array<CurrentTokenDatasV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenDatasV2OrderBy>>;
  where?: InputMaybe<CurrentTokenDatasV2BoolExp>;
};


export type QueryRootCurrentTokenDatasV2ByPkArgs = {
  token_data_id: Scalars['String']['input'];
};


export type QueryRootCurrentTokenOwnershipsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsOrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};


export type QueryRootCurrentTokenOwnershipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsOrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};


export type QueryRootCurrentTokenOwnershipsV2Args = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


export type QueryRootCurrentTokenOwnershipsV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


export type QueryRootCurrentTokenOwnershipsV2ByPkArgs = {
  owner_address: Scalars['String']['input'];
  property_version_v1: Scalars['numeric']['input'];
  storage_id: Scalars['String']['input'];
  token_data_id: Scalars['String']['input'];
};


export type QueryRootCurrentTokenPendingClaimsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenPendingClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenPendingClaimsOrderBy>>;
  where?: InputMaybe<CurrentTokenPendingClaimsBoolExp>;
};


export type QueryRootCurrentTokenPendingClaimsByPkArgs = {
  from_address: Scalars['String']['input'];
  property_version: Scalars['numeric']['input'];
  to_address: Scalars['String']['input'];
  token_data_id_hash: Scalars['String']['input'];
};


export type QueryRootCurrentTokenRoyaltyV1Args = {
  distinct_on?: InputMaybe<Array<CurrentTokenRoyaltyV1SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenRoyaltyV1OrderBy>>;
  where?: InputMaybe<CurrentTokenRoyaltyV1BoolExp>;
};


export type QueryRootCurrentTokenRoyaltyV1ByPkArgs = {
  token_data_id: Scalars['String']['input'];
};


export type QueryRootDelegatedStakingActivitiesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingActivitiesOrderBy>>;
  where?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
};


export type QueryRootDelegatedStakingActivitiesByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootDelegatedStakingPoolBalancesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingPoolBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingPoolBalancesOrderBy>>;
  where?: InputMaybe<DelegatedStakingPoolBalancesBoolExp>;
};


export type QueryRootDelegatedStakingPoolBalancesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingPoolBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingPoolBalancesOrderBy>>;
  where?: InputMaybe<DelegatedStakingPoolBalancesBoolExp>;
};


export type QueryRootDelegatedStakingPoolBalancesByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootDelegatedStakingPoolsArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingPoolsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingPoolsOrderBy>>;
  where?: InputMaybe<DelegatedStakingPoolsBoolExp>;
};


export type QueryRootDelegatedStakingPoolsByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
};


export type QueryRootDelegatorDistinctPoolArgs = {
  distinct_on?: InputMaybe<Array<DelegatorDistinctPoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatorDistinctPoolOrderBy>>;
  where?: InputMaybe<DelegatorDistinctPoolBoolExp>;
};


export type QueryRootDelegatorDistinctPoolAggregateArgs = {
  distinct_on?: InputMaybe<Array<DelegatorDistinctPoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatorDistinctPoolOrderBy>>;
  where?: InputMaybe<DelegatorDistinctPoolBoolExp>;
};


export type QueryRootEventsArgs = {
  distinct_on?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type QueryRootEventsByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootFixedPriceOracleActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FixedPriceOracleActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedPriceOracleActivitiesOrderBy>>;
  where?: InputMaybe<FixedPriceOracleActivitiesBoolExp>;
};


export type QueryRootFixedPriceOracleActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootFixedPriceOracleCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<FixedPriceOracleCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedPriceOracleCurrentConfigOrderBy>>;
  where?: InputMaybe<FixedPriceOracleCurrentConfigBoolExp>;
};


export type QueryRootFixedPriceOracleCurrentConfigByPkArgs = {
  base_asset: Scalars['String']['input'];
  oracle_address: Scalars['String']['input'];
  quote_asset: Scalars['String']['input'];
};


export type QueryRootFixedRateIrmActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FixedRateIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedRateIrmActivitiesOrderBy>>;
  where?: InputMaybe<FixedRateIrmActivitiesBoolExp>;
};


export type QueryRootFixedRateIrmActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootFixedRateIrmCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<FixedRateIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedRateIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<FixedRateIrmCurrentConfigBoolExp>;
};


export type QueryRootFixedRateIrmCurrentConfigByPkArgs = {
  config_address: Scalars['String']['input'];
};


export type QueryRootFungibleAssetActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FungibleAssetActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FungibleAssetActivitiesOrderBy>>;
  where?: InputMaybe<FungibleAssetActivitiesBoolExp>;
};


export type QueryRootFungibleAssetActivitiesByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootFungibleAssetMetadataArgs = {
  distinct_on?: InputMaybe<Array<FungibleAssetMetadataSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FungibleAssetMetadataOrderBy>>;
  where?: InputMaybe<FungibleAssetMetadataBoolExp>;
};


export type QueryRootFungibleAssetMetadataByPkArgs = {
  asset_type: Scalars['String']['input'];
};


export type QueryRootHyperionLlpBadDebtActivitiesArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<HyperionLlpBadDebtActivitiesBoolExp>;
};


export type QueryRootHyperionLlpBadDebtActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootHyperionLlpDebtStatusActivitiesArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpDebtStatusActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpDebtStatusActivitiesOrderBy>>;
  where?: InputMaybe<HyperionLlpDebtStatusActivitiesBoolExp>;
};


export type QueryRootHyperionLlpDebtStatusActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootHyperionLlpLiquidationActivitiesArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpLiquidationActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpLiquidationActivitiesOrderBy>>;
  where?: InputMaybe<HyperionLlpLiquidationActivitiesBoolExp>;
};


export type QueryRootHyperionLlpLiquidationActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootHyperionLlpPositionCurrentArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpPositionCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpPositionCurrentOrderBy>>;
  where?: InputMaybe<HyperionLlpPositionCurrentBoolExp>;
};


export type QueryRootHyperionLlpPositionCurrentByPkArgs = {
  position_address: Scalars['String']['input'];
};


export type QueryRootHyperionLlpPositionDebtStoresArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpPositionDebtStoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpPositionDebtStoresOrderBy>>;
  where?: InputMaybe<HyperionLlpPositionDebtStoresBoolExp>;
};


export type QueryRootHyperionLlpPositionDebtStoresByPkArgs = {
  position_address: Scalars['String']['input'];
  vault_address: Scalars['String']['input'];
};


export type QueryRootIndexerStatusArgs = {
  distinct_on?: InputMaybe<Array<IndexerStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IndexerStatusOrderBy>>;
  where?: InputMaybe<IndexerStatusBoolExp>;
};


export type QueryRootIndexerStatusByPkArgs = {
  db: Scalars['String']['input'];
};


export type QueryRootKinkedIrmActivitiesArgs = {
  distinct_on?: InputMaybe<Array<KinkedIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<KinkedIrmActivitiesOrderBy>>;
  where?: InputMaybe<KinkedIrmActivitiesBoolExp>;
};


export type QueryRootKinkedIrmActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootKinkedIrmCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<KinkedIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<KinkedIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<KinkedIrmCurrentConfigBoolExp>;
};


export type QueryRootKinkedIrmCurrentConfigByPkArgs = {
  config_address: Scalars['String']['input'];
};


export type QueryRootLedgerInfosArgs = {
  distinct_on?: InputMaybe<Array<LedgerInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LedgerInfosOrderBy>>;
  where?: InputMaybe<LedgerInfosBoolExp>;
};


export type QueryRootLedgerInfosByPkArgs = {
  chain_id: Scalars['bigint']['input'];
};


export type QueryRootMoveResourcesArgs = {
  distinct_on?: InputMaybe<Array<MoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MoveResourcesOrderBy>>;
  where?: InputMaybe<MoveResourcesBoolExp>;
};


export type QueryRootMoveResourcesAggregateArgs = {
  distinct_on?: InputMaybe<Array<MoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MoveResourcesOrderBy>>;
  where?: InputMaybe<MoveResourcesBoolExp>;
};


export type QueryRootNftMetadataCrawlerParsedAssetUrisArgs = {
  distinct_on?: InputMaybe<Array<NftMetadataCrawlerParsedAssetUrisSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NftMetadataCrawlerParsedAssetUrisOrderBy>>;
  where?: InputMaybe<NftMetadataCrawlerParsedAssetUrisBoolExp>;
};


export type QueryRootNftMetadataCrawlerParsedAssetUrisByPkArgs = {
  asset_uri: Scalars['String']['input'];
};


export type QueryRootNumActiveDelegatorPerPoolArgs = {
  distinct_on?: InputMaybe<Array<NumActiveDelegatorPerPoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NumActiveDelegatorPerPoolOrderBy>>;
  where?: InputMaybe<NumActiveDelegatorPerPoolBoolExp>;
};


export type QueryRootOracleRouterActivitiesArgs = {
  distinct_on?: InputMaybe<Array<OracleRouterActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OracleRouterActivitiesOrderBy>>;
  where?: InputMaybe<OracleRouterActivitiesBoolExp>;
};


export type QueryRootOracleRouterActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootOracleRouterCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<OracleRouterCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OracleRouterCurrentConfigOrderBy>>;
  where?: InputMaybe<OracleRouterCurrentConfigBoolExp>;
};


export type QueryRootOracleRouterCurrentConfigByPkArgs = {
  base_asset: Scalars['String']['input'];
  oracle_router: Scalars['String']['input'];
  quote_asset: Scalars['String']['input'];
};


export type QueryRootProcessorStatusArgs = {
  distinct_on?: InputMaybe<Array<ProcessorStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProcessorStatusOrderBy>>;
  where?: InputMaybe<ProcessorStatusBoolExp>;
};


export type QueryRootProcessorStatusByPkArgs = {
  processor: Scalars['String']['input'];
};


export type QueryRootProposalVotesArgs = {
  distinct_on?: InputMaybe<Array<ProposalVotesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProposalVotesOrderBy>>;
  where?: InputMaybe<ProposalVotesBoolExp>;
};


export type QueryRootProposalVotesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProposalVotesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProposalVotesOrderBy>>;
  where?: InputMaybe<ProposalVotesBoolExp>;
};


export type QueryRootProposalVotesByPkArgs = {
  proposal_id: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
  voter_address: Scalars['String']['input'];
};


export type QueryRootPublicKeyAuthKeysArgs = {
  distinct_on?: InputMaybe<Array<PublicKeyAuthKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PublicKeyAuthKeysOrderBy>>;
  where?: InputMaybe<PublicKeyAuthKeysBoolExp>;
};


export type QueryRootPublicKeyAuthKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<PublicKeyAuthKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PublicKeyAuthKeysOrderBy>>;
  where?: InputMaybe<PublicKeyAuthKeysBoolExp>;
};


export type QueryRootPublicKeyAuthKeysByPkArgs = {
  auth_key: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
  public_key_type: Scalars['String']['input'];
};


export type QueryRootPythOracleActivitiesArgs = {
  distinct_on?: InputMaybe<Array<PythOracleActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PythOracleActivitiesOrderBy>>;
  where?: InputMaybe<PythOracleActivitiesBoolExp>;
};


export type QueryRootPythOracleActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootPythOracleCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<PythOracleCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PythOracleCurrentConfigOrderBy>>;
  where?: InputMaybe<PythOracleCurrentConfigBoolExp>;
};


export type QueryRootPythOracleCurrentConfigByPkArgs = {
  asset_identifier: Scalars['String']['input'];
  oracle_address: Scalars['String']['input'];
};


export type QueryRootScmdBadDebtActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<ScmdBadDebtActivitiesBoolExp>;
};


export type QueryRootScmdBadDebtActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootScmdDebtStatusActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdDebtStatusActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdDebtStatusActivitiesOrderBy>>;
  where?: InputMaybe<ScmdDebtStatusActivitiesBoolExp>;
};


export type QueryRootScmdDebtStatusActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootScmdLiquidationActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdLiquidationActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdLiquidationActivitiesOrderBy>>;
  where?: InputMaybe<ScmdLiquidationActivitiesBoolExp>;
};


export type QueryRootScmdLiquidationActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootScmdPositionCurrentArgs = {
  distinct_on?: InputMaybe<Array<ScmdPositionCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdPositionCurrentOrderBy>>;
  where?: InputMaybe<ScmdPositionCurrentBoolExp>;
};


export type QueryRootScmdPositionCurrentByPkArgs = {
  position_address: Scalars['String']['input'];
};


export type QueryRootScmdPositionDebtStoresArgs = {
  distinct_on?: InputMaybe<Array<ScmdPositionDebtStoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdPositionDebtStoresOrderBy>>;
  where?: InputMaybe<ScmdPositionDebtStoresBoolExp>;
};


export type QueryRootScmdPositionDebtStoresByPkArgs = {
  position_address: Scalars['String']['input'];
  vault_address: Scalars['String']['input'];
};


export type QueryRootSignaturesArgs = {
  distinct_on?: InputMaybe<Array<SignaturesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SignaturesOrderBy>>;
  where?: InputMaybe<SignaturesBoolExp>;
};


export type QueryRootSignaturesByPkArgs = {
  is_sender_primary: Scalars['Boolean']['input'];
  multi_agent_index: Scalars['bigint']['input'];
  multi_sig_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootSwitchboardOracleActivitiesArgs = {
  distinct_on?: InputMaybe<Array<SwitchboardOracleActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SwitchboardOracleActivitiesOrderBy>>;
  where?: InputMaybe<SwitchboardOracleActivitiesBoolExp>;
};


export type QueryRootSwitchboardOracleActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootSwitchboardOracleCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<SwitchboardOracleCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SwitchboardOracleCurrentConfigOrderBy>>;
  where?: InputMaybe<SwitchboardOracleCurrentConfigBoolExp>;
};


export type QueryRootSwitchboardOracleCurrentConfigByPkArgs = {
  asset_identifier: Scalars['String']['input'];
  oracle_address: Scalars['String']['input'];
};


export type QueryRootTableItemsArgs = {
  distinct_on?: InputMaybe<Array<TableItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TableItemsOrderBy>>;
  where?: InputMaybe<TableItemsBoolExp>;
};


export type QueryRootTableItemsByPkArgs = {
  transaction_version: Scalars['bigint']['input'];
  write_set_change_index: Scalars['bigint']['input'];
};


export type QueryRootTableMetadatasArgs = {
  distinct_on?: InputMaybe<Array<TableMetadatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TableMetadatasOrderBy>>;
  where?: InputMaybe<TableMetadatasBoolExp>;
};


export type QueryRootTableMetadatasByPkArgs = {
  handle: Scalars['String']['input'];
};


export type QueryRootTokenActivitiesArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


export type QueryRootTokenActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


export type QueryRootTokenActivitiesV2Args = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


export type QueryRootTokenActivitiesV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


export type QueryRootTokenActivitiesV2ByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type QueryRootTokenDatasArgs = {
  distinct_on?: InputMaybe<Array<TokenDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenDatasOrderBy>>;
  where?: InputMaybe<TokenDatasBoolExp>;
};


export type QueryRootTokenOwnershipsArgs = {
  distinct_on?: InputMaybe<Array<TokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenOwnershipsOrderBy>>;
  where?: InputMaybe<TokenOwnershipsBoolExp>;
};


export type QueryRootTokensArgs = {
  distinct_on?: InputMaybe<Array<TokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokensOrderBy>>;
  where?: InputMaybe<TokensBoolExp>;
};


export type QueryRootUserTransactionsArgs = {
  distinct_on?: InputMaybe<Array<UserTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserTransactionsOrderBy>>;
  where?: InputMaybe<UserTransactionsBoolExp>;
};


export type QueryRootUserTransactionsByPkArgs = {
  version: Scalars['bigint']['input'];
};


export type QueryRootVaultBadDebtActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<VaultBadDebtActivitiesBoolExp>;
};


export type QueryRootVaultBadDebtActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<VaultBadDebtActivitiesBoolExp>;
};


export type QueryRootVaultBadDebtActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootVaultEmergencyActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultEmergencyActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultEmergencyActivitiesOrderBy>>;
  where?: InputMaybe<VaultEmergencyActivitiesBoolExp>;
};


export type QueryRootVaultEmergencyActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultEmergencyActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultEmergencyActivitiesOrderBy>>;
  where?: InputMaybe<VaultEmergencyActivitiesBoolExp>;
};


export type QueryRootVaultEmergencyActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootVaultFlashloanActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultFlashloanActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultFlashloanActivitiesOrderBy>>;
  where?: InputMaybe<VaultFlashloanActivitiesBoolExp>;
};


export type QueryRootVaultFlashloanActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultFlashloanActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultFlashloanActivitiesOrderBy>>;
  where?: InputMaybe<VaultFlashloanActivitiesBoolExp>;
};


export type QueryRootVaultFlashloanActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type QueryRootVaultInfoArgs = {
  distinct_on?: InputMaybe<Array<VaultInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultInfoOrderBy>>;
  where?: InputMaybe<VaultInfoBoolExp>;
};


export type QueryRootVaultInfoAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultInfoOrderBy>>;
  where?: InputMaybe<VaultInfoBoolExp>;
};


export type QueryRootVaultInfoByPkArgs = {
  vault_address: Scalars['String']['input'];
};


export type QueryRootVaultProtocolCapsArgs = {
  distinct_on?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultProtocolCapsOrderBy>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};


export type QueryRootVaultProtocolCapsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultProtocolCapsOrderBy>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};


export type QueryRootVaultSettingsArgs = {
  distinct_on?: InputMaybe<Array<VaultSettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultSettingsOrderBy>>;
  where?: InputMaybe<VaultSettingsBoolExp>;
};


export type QueryRootVaultSettingsByPkArgs = {
  vault_address: Scalars['String']['input'];
};


export type QueryRootVaultStatesActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultStatesActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultStatesActivitiesOrderBy>>;
  where?: InputMaybe<VaultStatesActivitiesBoolExp>;
};


export type QueryRootVaultStatesActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultStatesActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultStatesActivitiesOrderBy>>;
  where?: InputMaybe<VaultStatesActivitiesBoolExp>;
};


export type QueryRootVaultStatesActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};

/** columns and relationships of "scmd_bad_debt_activities" */
export type ScmdBadDebtActivities = {
  bad_debt_amount?: Maybe<Scalars['numeric']['output']>;
  bad_debt_shares?: Maybe<Scalars['numeric']['output']>;
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  position_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "scmd_bad_debt_activities". All fields are combined with a logical 'AND'. */
export type ScmdBadDebtActivitiesBoolExp = {
  _and?: InputMaybe<Array<ScmdBadDebtActivitiesBoolExp>>;
  _not?: InputMaybe<ScmdBadDebtActivitiesBoolExp>;
  _or?: InputMaybe<Array<ScmdBadDebtActivitiesBoolExp>>;
  bad_debt_amount?: InputMaybe<NumericComparisonExp>;
  bad_debt_shares?: InputMaybe<NumericComparisonExp>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "scmd_bad_debt_activities". */
export type ScmdBadDebtActivitiesOrderBy = {
  bad_debt_amount?: InputMaybe<OrderBy>;
  bad_debt_shares?: InputMaybe<OrderBy>;
  debt_store_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "scmd_bad_debt_activities" */
export enum ScmdBadDebtActivitiesSelectColumn {
  /** column name */
  BadDebtAmount = 'bad_debt_amount',
  /** column name */
  BadDebtShares = 'bad_debt_shares',
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "scmd_bad_debt_activities" */
export type ScmdBadDebtActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ScmdBadDebtActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ScmdBadDebtActivitiesStreamCursorValueInput = {
  bad_debt_amount?: InputMaybe<Scalars['numeric']['input']>;
  bad_debt_shares?: InputMaybe<Scalars['numeric']['input']>;
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "scmd_debt_status_activities" */
export type ScmdDebtStatusActivities = {
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  position_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "scmd_debt_status_activities". All fields are combined with a logical 'AND'. */
export type ScmdDebtStatusActivitiesBoolExp = {
  _and?: InputMaybe<Array<ScmdDebtStatusActivitiesBoolExp>>;
  _not?: InputMaybe<ScmdDebtStatusActivitiesBoolExp>;
  _or?: InputMaybe<Array<ScmdDebtStatusActivitiesBoolExp>>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "scmd_debt_status_activities". */
export type ScmdDebtStatusActivitiesOrderBy = {
  debt_store_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "scmd_debt_status_activities" */
export enum ScmdDebtStatusActivitiesSelectColumn {
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  Status = 'status',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "scmd_debt_status_activities" */
export type ScmdDebtStatusActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ScmdDebtStatusActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ScmdDebtStatusActivitiesStreamCursorValueInput = {
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "scmd_liquidation_activities" */
export type ScmdLiquidationActivities = {
  collateral_liquidation_amount?: Maybe<Scalars['numeric']['output']>;
  collateral_value_before?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  loan_value_before?: Maybe<Scalars['numeric']['output']>;
  position_address?: Maybe<Scalars['String']['output']>;
  repay_amount?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesAggregateOrderBy = {
  avg?: InputMaybe<ScmdLiquidationActivitiesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ScmdLiquidationActivitiesMaxOrderBy>;
  min?: InputMaybe<ScmdLiquidationActivitiesMinOrderBy>;
  stddev?: InputMaybe<ScmdLiquidationActivitiesStddevOrderBy>;
  stddev_pop?: InputMaybe<ScmdLiquidationActivitiesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ScmdLiquidationActivitiesStddevSampOrderBy>;
  sum?: InputMaybe<ScmdLiquidationActivitiesSumOrderBy>;
  var_pop?: InputMaybe<ScmdLiquidationActivitiesVarPopOrderBy>;
  var_samp?: InputMaybe<ScmdLiquidationActivitiesVarSampOrderBy>;
  variance?: InputMaybe<ScmdLiquidationActivitiesVarianceOrderBy>;
};

/** order by avg() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesAvgOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "scmd_liquidation_activities". All fields are combined with a logical 'AND'. */
export type ScmdLiquidationActivitiesBoolExp = {
  _and?: InputMaybe<Array<ScmdLiquidationActivitiesBoolExp>>;
  _not?: InputMaybe<ScmdLiquidationActivitiesBoolExp>;
  _or?: InputMaybe<Array<ScmdLiquidationActivitiesBoolExp>>;
  collateral_liquidation_amount?: InputMaybe<NumericComparisonExp>;
  collateral_value_before?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  loan_value_before?: InputMaybe<NumericComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  repay_amount?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesMaxOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesMinOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "scmd_liquidation_activities". */
export type ScmdLiquidationActivitiesOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "scmd_liquidation_activities" */
export enum ScmdLiquidationActivitiesSelectColumn {
  /** column name */
  CollateralLiquidationAmount = 'collateral_liquidation_amount',
  /** column name */
  CollateralValueBefore = 'collateral_value_before',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  LoanValueBefore = 'loan_value_before',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  RepayAmount = 'repay_amount',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** order by stddev() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesStddevOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesStddevPopOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesStddevSampOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ScmdLiquidationActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ScmdLiquidationActivitiesStreamCursorValueInput = {
  collateral_liquidation_amount?: InputMaybe<Scalars['numeric']['input']>;
  collateral_value_before?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  loan_value_before?: InputMaybe<Scalars['numeric']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  repay_amount?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesSumOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesVarPopOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesVarSampOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "scmd_liquidation_activities" */
export type ScmdLiquidationActivitiesVarianceOrderBy = {
  collateral_liquidation_amount?: InputMaybe<OrderBy>;
  collateral_value_before?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  loan_value_before?: InputMaybe<OrderBy>;
  repay_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "scmd_position_current" */
export type ScmdPositionCurrent = {
  collateral?: Maybe<Scalars['String']['output']>;
  collateral_asset_balance?: Maybe<CurrentFungibleAssetBalances>;
  collateral_type?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  debt_stores: Array<ScmdPositionDebtStores>;
  /** An array relationship */
  liquidation_activities: Array<ScmdLiquidationActivities>;
  owner_address?: Maybe<Scalars['String']['output']>;
  position_address: Scalars['String']['output'];
  status?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "scmd_position_current" */
export type ScmdPositionCurrentDebtStoresArgs = {
  distinct_on?: InputMaybe<Array<ScmdPositionDebtStoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdPositionDebtStoresOrderBy>>;
  where?: InputMaybe<ScmdPositionDebtStoresBoolExp>;
};


/** columns and relationships of "scmd_position_current" */
export type ScmdPositionCurrentLiquidationActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdLiquidationActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdLiquidationActivitiesOrderBy>>;
  where?: InputMaybe<ScmdLiquidationActivitiesBoolExp>;
};

/** Boolean expression to filter rows from the table "scmd_position_current". All fields are combined with a logical 'AND'. */
export type ScmdPositionCurrentBoolExp = {
  _and?: InputMaybe<Array<ScmdPositionCurrentBoolExp>>;
  _not?: InputMaybe<ScmdPositionCurrentBoolExp>;
  _or?: InputMaybe<Array<ScmdPositionCurrentBoolExp>>;
  collateral?: InputMaybe<StringComparisonExp>;
  collateral_type?: InputMaybe<StringComparisonExp>;
  debt_stores?: InputMaybe<ScmdPositionDebtStoresBoolExp>;
  liquidation_activities?: InputMaybe<ScmdLiquidationActivitiesBoolExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "scmd_position_current". */
export type ScmdPositionCurrentOrderBy = {
  collateral?: InputMaybe<OrderBy>;
  collateral_type?: InputMaybe<OrderBy>;
  debt_stores_aggregate?: InputMaybe<ScmdPositionDebtStoresAggregateOrderBy>;
  liquidation_activities_aggregate?: InputMaybe<ScmdLiquidationActivitiesAggregateOrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
};

/** select columns of table "scmd_position_current" */
export enum ScmdPositionCurrentSelectColumn {
  /** column name */
  Collateral = 'collateral',
  /** column name */
  CollateralType = 'collateral_type',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  Status = 'status'
}

/** Streaming cursor of the table "scmd_position_current" */
export type ScmdPositionCurrentStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ScmdPositionCurrentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ScmdPositionCurrentStreamCursorValueInput = {
  collateral?: InputMaybe<Scalars['String']['input']>;
  collateral_type?: InputMaybe<Scalars['String']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "scmd_position_debt_stores" */
export type ScmdPositionDebtStores = {
  debt_asset_balance?: Maybe<CurrentFungibleAssetBalances>;
  debt_store_address?: Maybe<Scalars['String']['output']>;
  position_address: Scalars['String']['output'];
  vault_address: Scalars['String']['output'];
  /** An object relationship */
  vault_info?: Maybe<VaultInfo>;
};

/** order by aggregate values of table "scmd_position_debt_stores" */
export type ScmdPositionDebtStoresAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ScmdPositionDebtStoresMaxOrderBy>;
  min?: InputMaybe<ScmdPositionDebtStoresMinOrderBy>;
};

/** Boolean expression to filter rows from the table "scmd_position_debt_stores". All fields are combined with a logical 'AND'. */
export type ScmdPositionDebtStoresBoolExp = {
  _and?: InputMaybe<Array<ScmdPositionDebtStoresBoolExp>>;
  _not?: InputMaybe<ScmdPositionDebtStoresBoolExp>;
  _or?: InputMaybe<Array<ScmdPositionDebtStoresBoolExp>>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  position_address?: InputMaybe<StringComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
  vault_info?: InputMaybe<VaultInfoBoolExp>;
};

/** order by max() on columns of table "scmd_position_debt_stores" */
export type ScmdPositionDebtStoresMaxOrderBy = {
  debt_store_address?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "scmd_position_debt_stores" */
export type ScmdPositionDebtStoresMinOrderBy = {
  debt_store_address?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "scmd_position_debt_stores". */
export type ScmdPositionDebtStoresOrderBy = {
  debt_store_address?: InputMaybe<OrderBy>;
  position_address?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
  vault_info?: InputMaybe<VaultInfoOrderBy>;
};

/** select columns of table "scmd_position_debt_stores" */
export enum ScmdPositionDebtStoresSelectColumn {
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  PositionAddress = 'position_address',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "scmd_position_debt_stores" */
export type ScmdPositionDebtStoresStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ScmdPositionDebtStoresStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ScmdPositionDebtStoresStreamCursorValueInput = {
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  position_address?: InputMaybe<Scalars['String']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "signatures" */
export type Signatures = {
  is_sender_primary: Scalars['Boolean']['output'];
  multi_agent_index: Scalars['bigint']['output'];
  multi_sig_index: Scalars['bigint']['output'];
  public_key: Scalars['String']['output'];
  public_key_indices: Scalars['jsonb']['output'];
  signature: Scalars['String']['output'];
  signer: Scalars['String']['output'];
  threshold: Scalars['bigint']['output'];
  transaction_block_height: Scalars['bigint']['output'];
  transaction_version: Scalars['bigint']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "signatures" */
export type SignaturesPublicKeyIndicesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "signatures". All fields are combined with a logical 'AND'. */
export type SignaturesBoolExp = {
  _and?: InputMaybe<Array<SignaturesBoolExp>>;
  _not?: InputMaybe<SignaturesBoolExp>;
  _or?: InputMaybe<Array<SignaturesBoolExp>>;
  is_sender_primary?: InputMaybe<BooleanComparisonExp>;
  multi_agent_index?: InputMaybe<BigintComparisonExp>;
  multi_sig_index?: InputMaybe<BigintComparisonExp>;
  public_key?: InputMaybe<StringComparisonExp>;
  public_key_indices?: InputMaybe<JsonbComparisonExp>;
  signature?: InputMaybe<StringComparisonExp>;
  signer?: InputMaybe<StringComparisonExp>;
  threshold?: InputMaybe<BigintComparisonExp>;
  transaction_block_height?: InputMaybe<BigintComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "signatures". */
export type SignaturesOrderBy = {
  is_sender_primary?: InputMaybe<OrderBy>;
  multi_agent_index?: InputMaybe<OrderBy>;
  multi_sig_index?: InputMaybe<OrderBy>;
  public_key?: InputMaybe<OrderBy>;
  public_key_indices?: InputMaybe<OrderBy>;
  signature?: InputMaybe<OrderBy>;
  signer?: InputMaybe<OrderBy>;
  threshold?: InputMaybe<OrderBy>;
  transaction_block_height?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "signatures" */
export enum SignaturesSelectColumn {
  /** column name */
  IsSenderPrimary = 'is_sender_primary',
  /** column name */
  MultiAgentIndex = 'multi_agent_index',
  /** column name */
  MultiSigIndex = 'multi_sig_index',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  PublicKeyIndices = 'public_key_indices',
  /** column name */
  Signature = 'signature',
  /** column name */
  Signer = 'signer',
  /** column name */
  Threshold = 'threshold',
  /** column name */
  TransactionBlockHeight = 'transaction_block_height',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "signatures" */
export type SignaturesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SignaturesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SignaturesStreamCursorValueInput = {
  is_sender_primary?: InputMaybe<Scalars['Boolean']['input']>;
  multi_agent_index?: InputMaybe<Scalars['bigint']['input']>;
  multi_sig_index?: InputMaybe<Scalars['bigint']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  public_key_indices?: InputMaybe<Scalars['jsonb']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  signer?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['bigint']['input']>;
  transaction_block_height?: InputMaybe<Scalars['bigint']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionRoot = {
  /** fetch data from the table: "account_transactions" */
  account_transactions: Array<AccountTransactions>;
  /** fetch aggregated fields from the table: "account_transactions" */
  account_transactions_aggregate: AccountTransactionsAggregate;
  /** fetch data from the table: "account_transactions" using primary key columns */
  account_transactions_by_pk?: Maybe<AccountTransactions>;
  /** fetch data from the table in a streaming manner: "account_transactions" */
  account_transactions_stream: Array<AccountTransactions>;
  /** fetch data from the table: "adaptive_irm_activities" */
  adaptive_irm_activities: Array<AdaptiveIrmActivities>;
  /** fetch aggregated fields from the table: "adaptive_irm_activities" */
  adaptive_irm_activities_aggregate: AdaptiveIrmActivitiesAggregate;
  /** fetch data from the table: "adaptive_irm_activities" using primary key columns */
  adaptive_irm_activities_by_pk?: Maybe<AdaptiveIrmActivities>;
  /** fetch data from the table in a streaming manner: "adaptive_irm_activities" */
  adaptive_irm_activities_stream: Array<AdaptiveIrmActivities>;
  /** fetch data from the table: "adaptive_irm_current_config" */
  adaptive_irm_current_config: Array<AdaptiveIrmCurrentConfig>;
  /** fetch aggregated fields from the table: "adaptive_irm_current_config" */
  adaptive_irm_current_config_aggregate: AdaptiveIrmCurrentConfigAggregate;
  /** fetch data from the table: "adaptive_irm_current_config" using primary key columns */
  adaptive_irm_current_config_by_pk?: Maybe<AdaptiveIrmCurrentConfig>;
  /** fetch data from the table in a streaming manner: "adaptive_irm_current_config" */
  adaptive_irm_current_config_stream: Array<AdaptiveIrmCurrentConfig>;
  /** fetch data from the table: "adaptive_irm_current_state" */
  adaptive_irm_current_state: Array<AdaptiveIrmCurrentState>;
  /** fetch data from the table: "adaptive_irm_current_state" using primary key columns */
  adaptive_irm_current_state_by_pk?: Maybe<AdaptiveIrmCurrentState>;
  /** fetch data from the table in a streaming manner: "adaptive_irm_current_state" */
  adaptive_irm_current_state_stream: Array<AdaptiveIrmCurrentState>;
  /** fetch data from the table: "adaptive_irm_state_activities" */
  adaptive_irm_state_activities: Array<AdaptiveIrmStateActivities>;
  /** fetch data from the table: "adaptive_irm_state_activities" using primary key columns */
  adaptive_irm_state_activities_by_pk?: Maybe<AdaptiveIrmStateActivities>;
  /** fetch data from the table in a streaming manner: "adaptive_irm_state_activities" */
  adaptive_irm_state_activities_stream: Array<AdaptiveIrmStateActivities>;
  /** fetch data from the table: "address_events_summary" */
  address_events_summary: Array<AddressEventsSummary>;
  /** fetch data from the table in a streaming manner: "address_events_summary" */
  address_events_summary_stream: Array<AddressEventsSummary>;
  /** fetch data from the table: "address_version_from_events" */
  address_version_from_events: Array<AddressVersionFromEvents>;
  /** fetch aggregated fields from the table: "address_version_from_events" */
  address_version_from_events_aggregate: AddressVersionFromEventsAggregate;
  /** fetch data from the table in a streaming manner: "address_version_from_events" */
  address_version_from_events_stream: Array<AddressVersionFromEvents>;
  /** fetch data from the table: "legacy_migration_v1.address_version_from_move_resources" */
  address_version_from_move_resources: Array<AddressVersionFromMoveResources>;
  /** fetch aggregated fields from the table: "legacy_migration_v1.address_version_from_move_resources" */
  address_version_from_move_resources_aggregate: AddressVersionFromMoveResourcesAggregate;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.address_version_from_move_resources" */
  address_version_from_move_resources_stream: Array<AddressVersionFromMoveResources>;
  /** fetch data from the table: "auth_key_account_addresses" */
  auth_key_account_addresses: Array<AuthKeyAccountAddresses>;
  /** fetch aggregated fields from the table: "auth_key_account_addresses" */
  auth_key_account_addresses_aggregate: AuthKeyAccountAddressesAggregate;
  /** fetch data from the table: "auth_key_account_addresses" using primary key columns */
  auth_key_account_addresses_by_pk?: Maybe<AuthKeyAccountAddresses>;
  /** fetch data from the table in a streaming manner: "auth_key_account_addresses" */
  auth_key_account_addresses_stream: Array<AuthKeyAccountAddresses>;
  /** fetch data from the table: "block_metadata_transactions" */
  block_metadata_transactions: Array<BlockMetadataTransactions>;
  /** fetch data from the table: "block_metadata_transactions" using primary key columns */
  block_metadata_transactions_by_pk?: Maybe<BlockMetadataTransactions>;
  /** fetch data from the table in a streaming manner: "block_metadata_transactions" */
  block_metadata_transactions_stream: Array<BlockMetadataTransactions>;
  /** fetch data from the table: "borrow_risk_parameters_current" */
  borrow_risk_parameters_current: Array<BorrowRiskParametersCurrent>;
  /** fetch data from the table: "borrow_risk_parameters_current" using primary key columns */
  borrow_risk_parameters_current_by_pk?: Maybe<BorrowRiskParametersCurrent>;
  /** fetch data from the table in a streaming manner: "borrow_risk_parameters_current" */
  borrow_risk_parameters_current_stream: Array<BorrowRiskParametersCurrent>;
  /** An array relationship */
  coin_activities: Array<CoinActivities>;
  /** An aggregate relationship */
  coin_activities_aggregate: CoinActivitiesAggregate;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.coin_activities" */
  coin_activities_stream: Array<CoinActivities>;
  /** fetch data from the table: "legacy_migration_v1.coin_balances" */
  coin_balances: Array<CoinBalances>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.coin_balances" */
  coin_balances_stream: Array<CoinBalances>;
  /** fetch data from the table: "legacy_migration_v1.coin_infos" */
  coin_infos: Array<CoinInfos>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.coin_infos" */
  coin_infos_stream: Array<CoinInfos>;
  /** fetch data from the table: "coin_supply" */
  coin_supply: Array<CoinSupply>;
  /** fetch data from the table: "coin_supply" using primary key columns */
  coin_supply_by_pk?: Maybe<CoinSupply>;
  /** fetch data from the table in a streaming manner: "coin_supply" */
  coin_supply_stream: Array<CoinSupply>;
  /** fetch data from the table: "collateral_risk_parameters_current" */
  collateral_risk_parameters_current: Array<CollateralRiskParametersCurrent>;
  /** fetch data from the table: "collateral_risk_parameters_current" using primary key columns */
  collateral_risk_parameters_current_by_pk?: Maybe<CollateralRiskParametersCurrent>;
  /** fetch data from the table in a streaming manner: "collateral_risk_parameters_current" */
  collateral_risk_parameters_current_stream: Array<CollateralRiskParametersCurrent>;
  /** fetch data from the table: "legacy_migration_v1.collection_datas" */
  collection_datas: Array<CollectionDatas>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.collection_datas" */
  collection_datas_stream: Array<CollectionDatas>;
  /** fetch data from the table: "legacy_migration_v1.current_ans_lookup" */
  current_ans_lookup: Array<CurrentAnsLookup>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.current_ans_lookup" */
  current_ans_lookup_stream: Array<CurrentAnsLookup>;
  /** fetch data from the table: "current_ans_lookup_v2" */
  current_ans_lookup_v2: Array<CurrentAnsLookupV2>;
  /** fetch data from the table: "current_ans_lookup_v2" using primary key columns */
  current_ans_lookup_v2_by_pk?: Maybe<CurrentAnsLookupV2>;
  /** fetch data from the table in a streaming manner: "current_ans_lookup_v2" */
  current_ans_lookup_v2_stream: Array<CurrentAnsLookupV2>;
  /** fetch data from the table: "current_aptos_names" */
  current_aptos_names: Array<CurrentAptosNames>;
  /** fetch aggregated fields from the table: "current_aptos_names" */
  current_aptos_names_aggregate: CurrentAptosNamesAggregate;
  /** fetch data from the table in a streaming manner: "current_aptos_names" */
  current_aptos_names_stream: Array<CurrentAptosNames>;
  /** fetch data from the table: "legacy_migration_v1.current_coin_balances" */
  current_coin_balances: Array<CurrentCoinBalances>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.current_coin_balances" */
  current_coin_balances_stream: Array<CurrentCoinBalances>;
  /** fetch data from the table: "legacy_migration_v1.current_collection_datas" */
  current_collection_datas: Array<CurrentCollectionDatas>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.current_collection_datas" */
  current_collection_datas_stream: Array<CurrentCollectionDatas>;
  /** fetch data from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view: Array<CurrentCollectionOwnershipV2View>;
  /** fetch aggregated fields from the table: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view_aggregate: CurrentCollectionOwnershipV2ViewAggregate;
  /** fetch data from the table in a streaming manner: "current_collection_ownership_v2_view" */
  current_collection_ownership_v2_view_stream: Array<CurrentCollectionOwnershipV2View>;
  /** fetch data from the table: "current_collections_v2" */
  current_collections_v2: Array<CurrentCollectionsV2>;
  /** fetch data from the table: "current_collections_v2" using primary key columns */
  current_collections_v2_by_pk?: Maybe<CurrentCollectionsV2>;
  /** fetch data from the table in a streaming manner: "current_collections_v2" */
  current_collections_v2_stream: Array<CurrentCollectionsV2>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" */
  current_delegated_staking_pool_balances: Array<CurrentDelegatedStakingPoolBalances>;
  /** fetch data from the table: "current_delegated_staking_pool_balances" using primary key columns */
  current_delegated_staking_pool_balances_by_pk?: Maybe<CurrentDelegatedStakingPoolBalances>;
  /** fetch data from the table in a streaming manner: "current_delegated_staking_pool_balances" */
  current_delegated_staking_pool_balances_stream: Array<CurrentDelegatedStakingPoolBalances>;
  /** fetch data from the table: "current_delegated_voter" */
  current_delegated_voter: Array<CurrentDelegatedVoter>;
  /** fetch data from the table: "current_delegated_voter" using primary key columns */
  current_delegated_voter_by_pk?: Maybe<CurrentDelegatedVoter>;
  /** fetch data from the table in a streaming manner: "current_delegated_voter" */
  current_delegated_voter_stream: Array<CurrentDelegatedVoter>;
  /** fetch data from the table: "current_delegator_balances" */
  current_delegator_balances: Array<CurrentDelegatorBalances>;
  /** fetch data from the table: "current_delegator_balances" using primary key columns */
  current_delegator_balances_by_pk?: Maybe<CurrentDelegatorBalances>;
  /** fetch data from the table in a streaming manner: "current_delegator_balances" */
  current_delegator_balances_stream: Array<CurrentDelegatorBalances>;
  /** fetch data from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances: Array<CurrentFungibleAssetBalances>;
  /** fetch aggregated fields from the table: "current_fungible_asset_balances" */
  current_fungible_asset_balances_aggregate: CurrentFungibleAssetBalancesAggregate;
  /** fetch data from the table: "current_fungible_asset_balances" using primary key columns */
  current_fungible_asset_balances_by_pk?: Maybe<CurrentFungibleAssetBalances>;
  /** fetch data from the table in a streaming manner: "current_fungible_asset_balances" */
  current_fungible_asset_balances_stream: Array<CurrentFungibleAssetBalances>;
  /** fetch data from the table: "current_objects" */
  current_objects: Array<CurrentObjects>;
  /** fetch data from the table: "current_objects" using primary key columns */
  current_objects_by_pk?: Maybe<CurrentObjects>;
  /** fetch data from the table in a streaming manner: "current_objects" */
  current_objects_stream: Array<CurrentObjects>;
  /** fetch data from the table: "current_staking_pool_voter" */
  current_staking_pool_voter: Array<CurrentStakingPoolVoter>;
  /** fetch data from the table: "current_staking_pool_voter" using primary key columns */
  current_staking_pool_voter_by_pk?: Maybe<CurrentStakingPoolVoter>;
  /** fetch data from the table in a streaming manner: "current_staking_pool_voter" */
  current_staking_pool_voter_stream: Array<CurrentStakingPoolVoter>;
  /** fetch data from the table: "current_table_items" */
  current_table_items: Array<CurrentTableItems>;
  /** fetch data from the table: "current_table_items" using primary key columns */
  current_table_items_by_pk?: Maybe<CurrentTableItems>;
  /** fetch data from the table in a streaming manner: "current_table_items" */
  current_table_items_stream: Array<CurrentTableItems>;
  /** fetch data from the table: "legacy_migration_v1.current_token_datas" */
  current_token_datas: Array<CurrentTokenDatas>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.current_token_datas" */
  current_token_datas_stream: Array<CurrentTokenDatas>;
  /** fetch data from the table: "current_token_datas_v2" */
  current_token_datas_v2: Array<CurrentTokenDatasV2>;
  /** fetch data from the table: "current_token_datas_v2" using primary key columns */
  current_token_datas_v2_by_pk?: Maybe<CurrentTokenDatasV2>;
  /** fetch data from the table in a streaming manner: "current_token_datas_v2" */
  current_token_datas_v2_stream: Array<CurrentTokenDatasV2>;
  /** fetch data from the table: "legacy_migration_v1.current_token_ownerships" */
  current_token_ownerships: Array<CurrentTokenOwnerships>;
  /** fetch aggregated fields from the table: "legacy_migration_v1.current_token_ownerships" */
  current_token_ownerships_aggregate: CurrentTokenOwnershipsAggregate;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.current_token_ownerships" */
  current_token_ownerships_stream: Array<CurrentTokenOwnerships>;
  /** fetch data from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2: Array<CurrentTokenOwnershipsV2>;
  /** fetch aggregated fields from the table: "current_token_ownerships_v2" */
  current_token_ownerships_v2_aggregate: CurrentTokenOwnershipsV2Aggregate;
  /** fetch data from the table: "current_token_ownerships_v2" using primary key columns */
  current_token_ownerships_v2_by_pk?: Maybe<CurrentTokenOwnershipsV2>;
  /** fetch data from the table in a streaming manner: "current_token_ownerships_v2" */
  current_token_ownerships_v2_stream: Array<CurrentTokenOwnershipsV2>;
  /** fetch data from the table: "current_token_pending_claims" */
  current_token_pending_claims: Array<CurrentTokenPendingClaims>;
  /** fetch data from the table: "current_token_pending_claims" using primary key columns */
  current_token_pending_claims_by_pk?: Maybe<CurrentTokenPendingClaims>;
  /** fetch data from the table in a streaming manner: "current_token_pending_claims" */
  current_token_pending_claims_stream: Array<CurrentTokenPendingClaims>;
  /** fetch data from the table: "current_token_royalty_v1" */
  current_token_royalty_v1: Array<CurrentTokenRoyaltyV1>;
  /** fetch data from the table: "current_token_royalty_v1" using primary key columns */
  current_token_royalty_v1_by_pk?: Maybe<CurrentTokenRoyaltyV1>;
  /** fetch data from the table in a streaming manner: "current_token_royalty_v1" */
  current_token_royalty_v1_stream: Array<CurrentTokenRoyaltyV1>;
  /** An array relationship */
  delegated_staking_activities: Array<DelegatedStakingActivities>;
  /** fetch data from the table: "delegated_staking_activities" using primary key columns */
  delegated_staking_activities_by_pk?: Maybe<DelegatedStakingActivities>;
  /** fetch data from the table in a streaming manner: "delegated_staking_activities" */
  delegated_staking_activities_stream: Array<DelegatedStakingActivities>;
  /** fetch data from the table: "delegated_staking_pool_balances" */
  delegated_staking_pool_balances: Array<DelegatedStakingPoolBalances>;
  /** fetch aggregated fields from the table: "delegated_staking_pool_balances" */
  delegated_staking_pool_balances_aggregate: DelegatedStakingPoolBalancesAggregate;
  /** fetch data from the table: "delegated_staking_pool_balances" using primary key columns */
  delegated_staking_pool_balances_by_pk?: Maybe<DelegatedStakingPoolBalances>;
  /** fetch data from the table in a streaming manner: "delegated_staking_pool_balances" */
  delegated_staking_pool_balances_stream: Array<DelegatedStakingPoolBalances>;
  /** fetch data from the table: "delegated_staking_pools" */
  delegated_staking_pools: Array<DelegatedStakingPools>;
  /** fetch data from the table: "delegated_staking_pools" using primary key columns */
  delegated_staking_pools_by_pk?: Maybe<DelegatedStakingPools>;
  /** fetch data from the table in a streaming manner: "delegated_staking_pools" */
  delegated_staking_pools_stream: Array<DelegatedStakingPools>;
  /** fetch data from the table: "delegator_distinct_pool" */
  delegator_distinct_pool: Array<DelegatorDistinctPool>;
  /** fetch aggregated fields from the table: "delegator_distinct_pool" */
  delegator_distinct_pool_aggregate: DelegatorDistinctPoolAggregate;
  /** fetch data from the table in a streaming manner: "delegator_distinct_pool" */
  delegator_distinct_pool_stream: Array<DelegatorDistinctPool>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** fetch data from the table: "fixed_price_oracle_activities" */
  fixed_price_oracle_activities: Array<FixedPriceOracleActivities>;
  /** fetch data from the table: "fixed_price_oracle_activities" using primary key columns */
  fixed_price_oracle_activities_by_pk?: Maybe<FixedPriceOracleActivities>;
  /** fetch data from the table in a streaming manner: "fixed_price_oracle_activities" */
  fixed_price_oracle_activities_stream: Array<FixedPriceOracleActivities>;
  /** fetch data from the table: "fixed_price_oracle_current_config" */
  fixed_price_oracle_current_config: Array<FixedPriceOracleCurrentConfig>;
  /** fetch data from the table: "fixed_price_oracle_current_config" using primary key columns */
  fixed_price_oracle_current_config_by_pk?: Maybe<FixedPriceOracleCurrentConfig>;
  /** fetch data from the table in a streaming manner: "fixed_price_oracle_current_config" */
  fixed_price_oracle_current_config_stream: Array<FixedPriceOracleCurrentConfig>;
  /** fetch data from the table: "fixed_rate_irm_activities" */
  fixed_rate_irm_activities: Array<FixedRateIrmActivities>;
  /** fetch data from the table: "fixed_rate_irm_activities" using primary key columns */
  fixed_rate_irm_activities_by_pk?: Maybe<FixedRateIrmActivities>;
  /** fetch data from the table in a streaming manner: "fixed_rate_irm_activities" */
  fixed_rate_irm_activities_stream: Array<FixedRateIrmActivities>;
  /** fetch data from the table: "fixed_rate_irm_current_config" */
  fixed_rate_irm_current_config: Array<FixedRateIrmCurrentConfig>;
  /** fetch data from the table: "fixed_rate_irm_current_config" using primary key columns */
  fixed_rate_irm_current_config_by_pk?: Maybe<FixedRateIrmCurrentConfig>;
  /** fetch data from the table in a streaming manner: "fixed_rate_irm_current_config" */
  fixed_rate_irm_current_config_stream: Array<FixedRateIrmCurrentConfig>;
  /** An array relationship */
  fungible_asset_activities: Array<FungibleAssetActivities>;
  /** fetch data from the table: "fungible_asset_activities" using primary key columns */
  fungible_asset_activities_by_pk?: Maybe<FungibleAssetActivities>;
  /** fetch data from the table in a streaming manner: "fungible_asset_activities" */
  fungible_asset_activities_stream: Array<FungibleAssetActivities>;
  /** fetch data from the table: "fungible_asset_metadata" */
  fungible_asset_metadata: Array<FungibleAssetMetadata>;
  /** fetch data from the table: "fungible_asset_metadata" using primary key columns */
  fungible_asset_metadata_by_pk?: Maybe<FungibleAssetMetadata>;
  /** fetch data from the table in a streaming manner: "fungible_asset_metadata" */
  fungible_asset_metadata_stream: Array<FungibleAssetMetadata>;
  /** fetch data from the table: "hyperion_llp_bad_debt_activities" */
  hyperion_llp_bad_debt_activities: Array<HyperionLlpBadDebtActivities>;
  /** fetch data from the table: "hyperion_llp_bad_debt_activities" using primary key columns */
  hyperion_llp_bad_debt_activities_by_pk?: Maybe<HyperionLlpBadDebtActivities>;
  /** fetch data from the table in a streaming manner: "hyperion_llp_bad_debt_activities" */
  hyperion_llp_bad_debt_activities_stream: Array<HyperionLlpBadDebtActivities>;
  /** fetch data from the table: "hyperion_llp_debt_status_activities" */
  hyperion_llp_debt_status_activities: Array<HyperionLlpDebtStatusActivities>;
  /** fetch data from the table: "hyperion_llp_debt_status_activities" using primary key columns */
  hyperion_llp_debt_status_activities_by_pk?: Maybe<HyperionLlpDebtStatusActivities>;
  /** fetch data from the table in a streaming manner: "hyperion_llp_debt_status_activities" */
  hyperion_llp_debt_status_activities_stream: Array<HyperionLlpDebtStatusActivities>;
  /** fetch data from the table: "hyperion_llp_liquidation_activities" */
  hyperion_llp_liquidation_activities: Array<HyperionLlpLiquidationActivities>;
  /** fetch data from the table: "hyperion_llp_liquidation_activities" using primary key columns */
  hyperion_llp_liquidation_activities_by_pk?: Maybe<HyperionLlpLiquidationActivities>;
  /** fetch data from the table in a streaming manner: "hyperion_llp_liquidation_activities" */
  hyperion_llp_liquidation_activities_stream: Array<HyperionLlpLiquidationActivities>;
  /** fetch data from the table: "hyperion_llp_position_current" */
  hyperion_llp_position_current: Array<HyperionLlpPositionCurrent>;
  /** fetch data from the table: "hyperion_llp_position_current" using primary key columns */
  hyperion_llp_position_current_by_pk?: Maybe<HyperionLlpPositionCurrent>;
  /** fetch data from the table in a streaming manner: "hyperion_llp_position_current" */
  hyperion_llp_position_current_stream: Array<HyperionLlpPositionCurrent>;
  /** fetch data from the table: "hyperion_llp_position_debt_stores" */
  hyperion_llp_position_debt_stores: Array<HyperionLlpPositionDebtStores>;
  /** fetch data from the table: "hyperion_llp_position_debt_stores" using primary key columns */
  hyperion_llp_position_debt_stores_by_pk?: Maybe<HyperionLlpPositionDebtStores>;
  /** fetch data from the table in a streaming manner: "hyperion_llp_position_debt_stores" */
  hyperion_llp_position_debt_stores_stream: Array<HyperionLlpPositionDebtStores>;
  /** fetch data from the table: "indexer_status" */
  indexer_status: Array<IndexerStatus>;
  /** fetch data from the table: "indexer_status" using primary key columns */
  indexer_status_by_pk?: Maybe<IndexerStatus>;
  /** fetch data from the table in a streaming manner: "indexer_status" */
  indexer_status_stream: Array<IndexerStatus>;
  /** fetch data from the table: "kinked_irm_activities" */
  kinked_irm_activities: Array<KinkedIrmActivities>;
  /** fetch data from the table: "kinked_irm_activities" using primary key columns */
  kinked_irm_activities_by_pk?: Maybe<KinkedIrmActivities>;
  /** fetch data from the table in a streaming manner: "kinked_irm_activities" */
  kinked_irm_activities_stream: Array<KinkedIrmActivities>;
  /** fetch data from the table: "kinked_irm_current_config" */
  kinked_irm_current_config: Array<KinkedIrmCurrentConfig>;
  /** fetch data from the table: "kinked_irm_current_config" using primary key columns */
  kinked_irm_current_config_by_pk?: Maybe<KinkedIrmCurrentConfig>;
  /** fetch data from the table in a streaming manner: "kinked_irm_current_config" */
  kinked_irm_current_config_stream: Array<KinkedIrmCurrentConfig>;
  /** fetch data from the table: "processor_metadata.ledger_infos" */
  ledger_infos: Array<LedgerInfos>;
  /** fetch data from the table: "processor_metadata.ledger_infos" using primary key columns */
  ledger_infos_by_pk?: Maybe<LedgerInfos>;
  /** fetch data from the table in a streaming manner: "processor_metadata.ledger_infos" */
  ledger_infos_stream: Array<LedgerInfos>;
  /** fetch data from the table: "legacy_migration_v1.move_resources" */
  move_resources: Array<MoveResources>;
  /** fetch aggregated fields from the table: "legacy_migration_v1.move_resources" */
  move_resources_aggregate: MoveResourcesAggregate;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.move_resources" */
  move_resources_stream: Array<MoveResources>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" */
  nft_metadata_crawler_parsed_asset_uris: Array<NftMetadataCrawlerParsedAssetUris>;
  /** fetch data from the table: "nft_metadata_crawler.parsed_asset_uris" using primary key columns */
  nft_metadata_crawler_parsed_asset_uris_by_pk?: Maybe<NftMetadataCrawlerParsedAssetUris>;
  /** fetch data from the table in a streaming manner: "nft_metadata_crawler.parsed_asset_uris" */
  nft_metadata_crawler_parsed_asset_uris_stream: Array<NftMetadataCrawlerParsedAssetUris>;
  /** fetch data from the table: "num_active_delegator_per_pool" */
  num_active_delegator_per_pool: Array<NumActiveDelegatorPerPool>;
  /** fetch data from the table in a streaming manner: "num_active_delegator_per_pool" */
  num_active_delegator_per_pool_stream: Array<NumActiveDelegatorPerPool>;
  /** fetch data from the table: "oracle_router_activities" */
  oracle_router_activities: Array<OracleRouterActivities>;
  /** fetch data from the table: "oracle_router_activities" using primary key columns */
  oracle_router_activities_by_pk?: Maybe<OracleRouterActivities>;
  /** fetch data from the table in a streaming manner: "oracle_router_activities" */
  oracle_router_activities_stream: Array<OracleRouterActivities>;
  /** fetch data from the table: "oracle_router_current_config" */
  oracle_router_current_config: Array<OracleRouterCurrentConfig>;
  /** fetch data from the table: "oracle_router_current_config" using primary key columns */
  oracle_router_current_config_by_pk?: Maybe<OracleRouterCurrentConfig>;
  /** fetch data from the table in a streaming manner: "oracle_router_current_config" */
  oracle_router_current_config_stream: Array<OracleRouterCurrentConfig>;
  /** fetch data from the table: "processor_metadata.processor_status" */
  processor_status: Array<ProcessorStatus>;
  /** fetch data from the table: "processor_metadata.processor_status" using primary key columns */
  processor_status_by_pk?: Maybe<ProcessorStatus>;
  /** fetch data from the table in a streaming manner: "processor_metadata.processor_status" */
  processor_status_stream: Array<ProcessorStatus>;
  /** fetch data from the table: "proposal_votes" */
  proposal_votes: Array<ProposalVotes>;
  /** fetch aggregated fields from the table: "proposal_votes" */
  proposal_votes_aggregate: ProposalVotesAggregate;
  /** fetch data from the table: "proposal_votes" using primary key columns */
  proposal_votes_by_pk?: Maybe<ProposalVotes>;
  /** fetch data from the table in a streaming manner: "proposal_votes" */
  proposal_votes_stream: Array<ProposalVotes>;
  /** fetch data from the table: "public_key_auth_keys" */
  public_key_auth_keys: Array<PublicKeyAuthKeys>;
  /** fetch aggregated fields from the table: "public_key_auth_keys" */
  public_key_auth_keys_aggregate: PublicKeyAuthKeysAggregate;
  /** fetch data from the table: "public_key_auth_keys" using primary key columns */
  public_key_auth_keys_by_pk?: Maybe<PublicKeyAuthKeys>;
  /** fetch data from the table in a streaming manner: "public_key_auth_keys" */
  public_key_auth_keys_stream: Array<PublicKeyAuthKeys>;
  /** fetch data from the table: "pyth_oracle_activities" */
  pyth_oracle_activities: Array<PythOracleActivities>;
  /** fetch data from the table: "pyth_oracle_activities" using primary key columns */
  pyth_oracle_activities_by_pk?: Maybe<PythOracleActivities>;
  /** fetch data from the table in a streaming manner: "pyth_oracle_activities" */
  pyth_oracle_activities_stream: Array<PythOracleActivities>;
  /** fetch data from the table: "pyth_oracle_current_config" */
  pyth_oracle_current_config: Array<PythOracleCurrentConfig>;
  /** fetch data from the table: "pyth_oracle_current_config" using primary key columns */
  pyth_oracle_current_config_by_pk?: Maybe<PythOracleCurrentConfig>;
  /** fetch data from the table in a streaming manner: "pyth_oracle_current_config" */
  pyth_oracle_current_config_stream: Array<PythOracleCurrentConfig>;
  /** fetch data from the table: "scmd_bad_debt_activities" */
  scmd_bad_debt_activities: Array<ScmdBadDebtActivities>;
  /** fetch data from the table: "scmd_bad_debt_activities" using primary key columns */
  scmd_bad_debt_activities_by_pk?: Maybe<ScmdBadDebtActivities>;
  /** fetch data from the table in a streaming manner: "scmd_bad_debt_activities" */
  scmd_bad_debt_activities_stream: Array<ScmdBadDebtActivities>;
  /** fetch data from the table: "scmd_debt_status_activities" */
  scmd_debt_status_activities: Array<ScmdDebtStatusActivities>;
  /** fetch data from the table: "scmd_debt_status_activities" using primary key columns */
  scmd_debt_status_activities_by_pk?: Maybe<ScmdDebtStatusActivities>;
  /** fetch data from the table in a streaming manner: "scmd_debt_status_activities" */
  scmd_debt_status_activities_stream: Array<ScmdDebtStatusActivities>;
  /** fetch data from the table: "scmd_liquidation_activities" */
  scmd_liquidation_activities: Array<ScmdLiquidationActivities>;
  /** fetch data from the table: "scmd_liquidation_activities" using primary key columns */
  scmd_liquidation_activities_by_pk?: Maybe<ScmdLiquidationActivities>;
  /** fetch data from the table in a streaming manner: "scmd_liquidation_activities" */
  scmd_liquidation_activities_stream: Array<ScmdLiquidationActivities>;
  /** fetch data from the table: "scmd_position_current" */
  scmd_position_current: Array<ScmdPositionCurrent>;
  /** fetch data from the table: "scmd_position_current" using primary key columns */
  scmd_position_current_by_pk?: Maybe<ScmdPositionCurrent>;
  /** fetch data from the table in a streaming manner: "scmd_position_current" */
  scmd_position_current_stream: Array<ScmdPositionCurrent>;
  /** fetch data from the table: "scmd_position_debt_stores" */
  scmd_position_debt_stores: Array<ScmdPositionDebtStores>;
  /** fetch data from the table: "scmd_position_debt_stores" using primary key columns */
  scmd_position_debt_stores_by_pk?: Maybe<ScmdPositionDebtStores>;
  /** fetch data from the table in a streaming manner: "scmd_position_debt_stores" */
  scmd_position_debt_stores_stream: Array<ScmdPositionDebtStores>;
  /** fetch data from the table: "signatures" */
  signatures: Array<Signatures>;
  /** fetch data from the table: "signatures" using primary key columns */
  signatures_by_pk?: Maybe<Signatures>;
  /** fetch data from the table in a streaming manner: "signatures" */
  signatures_stream: Array<Signatures>;
  /** fetch data from the table: "switchboard_oracle_activities" */
  switchboard_oracle_activities: Array<SwitchboardOracleActivities>;
  /** fetch data from the table: "switchboard_oracle_activities" using primary key columns */
  switchboard_oracle_activities_by_pk?: Maybe<SwitchboardOracleActivities>;
  /** fetch data from the table in a streaming manner: "switchboard_oracle_activities" */
  switchboard_oracle_activities_stream: Array<SwitchboardOracleActivities>;
  /** fetch data from the table: "switchboard_oracle_current_config" */
  switchboard_oracle_current_config: Array<SwitchboardOracleCurrentConfig>;
  /** fetch data from the table: "switchboard_oracle_current_config" using primary key columns */
  switchboard_oracle_current_config_by_pk?: Maybe<SwitchboardOracleCurrentConfig>;
  /** fetch data from the table in a streaming manner: "switchboard_oracle_current_config" */
  switchboard_oracle_current_config_stream: Array<SwitchboardOracleCurrentConfig>;
  /** fetch data from the table: "table_items" */
  table_items: Array<TableItems>;
  /** fetch data from the table: "table_items" using primary key columns */
  table_items_by_pk?: Maybe<TableItems>;
  /** fetch data from the table in a streaming manner: "table_items" */
  table_items_stream: Array<TableItems>;
  /** fetch data from the table: "table_metadatas" */
  table_metadatas: Array<TableMetadatas>;
  /** fetch data from the table: "table_metadatas" using primary key columns */
  table_metadatas_by_pk?: Maybe<TableMetadatas>;
  /** fetch data from the table in a streaming manner: "table_metadatas" */
  table_metadatas_stream: Array<TableMetadatas>;
  /** An array relationship */
  token_activities: Array<TokenActivities>;
  /** An aggregate relationship */
  token_activities_aggregate: TokenActivitiesAggregate;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.token_activities" */
  token_activities_stream: Array<TokenActivities>;
  /** An array relationship */
  token_activities_v2: Array<TokenActivitiesV2>;
  /** An aggregate relationship */
  token_activities_v2_aggregate: TokenActivitiesV2Aggregate;
  /** fetch data from the table: "token_activities_v2" using primary key columns */
  token_activities_v2_by_pk?: Maybe<TokenActivitiesV2>;
  /** fetch data from the table in a streaming manner: "token_activities_v2" */
  token_activities_v2_stream: Array<TokenActivitiesV2>;
  /** fetch data from the table: "legacy_migration_v1.token_datas" */
  token_datas: Array<TokenDatas>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.token_datas" */
  token_datas_stream: Array<TokenDatas>;
  /** fetch data from the table: "legacy_migration_v1.token_ownerships" */
  token_ownerships: Array<TokenOwnerships>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.token_ownerships" */
  token_ownerships_stream: Array<TokenOwnerships>;
  /** fetch data from the table: "legacy_migration_v1.tokens" */
  tokens: Array<Tokens>;
  /** fetch data from the table in a streaming manner: "legacy_migration_v1.tokens" */
  tokens_stream: Array<Tokens>;
  /** fetch data from the table: "user_transactions" */
  user_transactions: Array<UserTransactions>;
  /** fetch data from the table: "user_transactions" using primary key columns */
  user_transactions_by_pk?: Maybe<UserTransactions>;
  /** fetch data from the table in a streaming manner: "user_transactions" */
  user_transactions_stream: Array<UserTransactions>;
  /** fetch data from the table: "vault_bad_debt_activities" */
  vault_bad_debt_activities: Array<VaultBadDebtActivities>;
  /** fetch aggregated fields from the table: "vault_bad_debt_activities" */
  vault_bad_debt_activities_aggregate: VaultBadDebtActivitiesAggregate;
  /** fetch data from the table: "vault_bad_debt_activities" using primary key columns */
  vault_bad_debt_activities_by_pk?: Maybe<VaultBadDebtActivities>;
  /** fetch data from the table in a streaming manner: "vault_bad_debt_activities" */
  vault_bad_debt_activities_stream: Array<VaultBadDebtActivities>;
  /** fetch data from the table: "vault_emergency_activities" */
  vault_emergency_activities: Array<VaultEmergencyActivities>;
  /** fetch aggregated fields from the table: "vault_emergency_activities" */
  vault_emergency_activities_aggregate: VaultEmergencyActivitiesAggregate;
  /** fetch data from the table: "vault_emergency_activities" using primary key columns */
  vault_emergency_activities_by_pk?: Maybe<VaultEmergencyActivities>;
  /** fetch data from the table in a streaming manner: "vault_emergency_activities" */
  vault_emergency_activities_stream: Array<VaultEmergencyActivities>;
  /** fetch data from the table: "vault_flashloan_activities" */
  vault_flashloan_activities: Array<VaultFlashloanActivities>;
  /** fetch aggregated fields from the table: "vault_flashloan_activities" */
  vault_flashloan_activities_aggregate: VaultFlashloanActivitiesAggregate;
  /** fetch data from the table: "vault_flashloan_activities" using primary key columns */
  vault_flashloan_activities_by_pk?: Maybe<VaultFlashloanActivities>;
  /** fetch data from the table in a streaming manner: "vault_flashloan_activities" */
  vault_flashloan_activities_stream: Array<VaultFlashloanActivities>;
  /** fetch data from the table: "vault_info" */
  vault_info: Array<VaultInfo>;
  /** fetch aggregated fields from the table: "vault_info" */
  vault_info_aggregate: VaultInfoAggregate;
  /** fetch data from the table: "vault_info" using primary key columns */
  vault_info_by_pk?: Maybe<VaultInfo>;
  /** fetch data from the table in a streaming manner: "vault_info" */
  vault_info_stream: Array<VaultInfo>;
  /** fetch data from the table: "vault_protocol_caps" */
  vault_protocol_caps: Array<VaultProtocolCaps>;
  /** fetch aggregated fields from the table: "vault_protocol_caps" */
  vault_protocol_caps_aggregate: VaultProtocolCapsAggregate;
  /** fetch data from the table in a streaming manner: "vault_protocol_caps" */
  vault_protocol_caps_stream: Array<VaultProtocolCaps>;
  /** fetch data from the table: "vault_settings" */
  vault_settings: Array<VaultSettings>;
  /** fetch data from the table: "vault_settings" using primary key columns */
  vault_settings_by_pk?: Maybe<VaultSettings>;
  /** fetch data from the table in a streaming manner: "vault_settings" */
  vault_settings_stream: Array<VaultSettings>;
  /** fetch data from the table: "vault_states_activities" */
  vault_states_activities: Array<VaultStatesActivities>;
  /** fetch aggregated fields from the table: "vault_states_activities" */
  vault_states_activities_aggregate: VaultStatesActivitiesAggregate;
  /** fetch data from the table: "vault_states_activities" using primary key columns */
  vault_states_activities_by_pk?: Maybe<VaultStatesActivities>;
  /** fetch data from the table in a streaming manner: "vault_states_activities" */
  vault_states_activities_stream: Array<VaultStatesActivities>;
};


export type SubscriptionRootAccountTransactionsArgs = {
  distinct_on?: InputMaybe<Array<AccountTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccountTransactionsOrderBy>>;
  where?: InputMaybe<AccountTransactionsBoolExp>;
};


export type SubscriptionRootAccountTransactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AccountTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccountTransactionsOrderBy>>;
  where?: InputMaybe<AccountTransactionsBoolExp>;
};


export type SubscriptionRootAccountTransactionsByPkArgs = {
  account_address: Scalars['String']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootAccountTransactionsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AccountTransactionsStreamCursorInput>>;
  where?: InputMaybe<AccountTransactionsBoolExp>;
};


export type SubscriptionRootAdaptiveIrmActivitiesArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmActivitiesOrderBy>>;
  where?: InputMaybe<AdaptiveIrmActivitiesBoolExp>;
};


export type SubscriptionRootAdaptiveIrmActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmActivitiesOrderBy>>;
  where?: InputMaybe<AdaptiveIrmActivitiesBoolExp>;
};


export type SubscriptionRootAdaptiveIrmActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootAdaptiveIrmActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdaptiveIrmActivitiesStreamCursorInput>>;
  where?: InputMaybe<AdaptiveIrmActivitiesBoolExp>;
};


export type SubscriptionRootAdaptiveIrmCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootAdaptiveIrmCurrentConfigAggregateArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootAdaptiveIrmCurrentConfigByPkArgs = {
  config_address: Scalars['String']['input'];
};


export type SubscriptionRootAdaptiveIrmCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdaptiveIrmCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootAdaptiveIrmCurrentStateArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmCurrentStateSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmCurrentStateOrderBy>>;
  where?: InputMaybe<AdaptiveIrmCurrentStateBoolExp>;
};


export type SubscriptionRootAdaptiveIrmCurrentStateByPkArgs = {
  state_address: Scalars['String']['input'];
};


export type SubscriptionRootAdaptiveIrmCurrentStateStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdaptiveIrmCurrentStateStreamCursorInput>>;
  where?: InputMaybe<AdaptiveIrmCurrentStateBoolExp>;
};


export type SubscriptionRootAdaptiveIrmStateActivitiesArgs = {
  distinct_on?: InputMaybe<Array<AdaptiveIrmStateActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AdaptiveIrmStateActivitiesOrderBy>>;
  where?: InputMaybe<AdaptiveIrmStateActivitiesBoolExp>;
};


export type SubscriptionRootAdaptiveIrmStateActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootAdaptiveIrmStateActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AdaptiveIrmStateActivitiesStreamCursorInput>>;
  where?: InputMaybe<AdaptiveIrmStateActivitiesBoolExp>;
};


export type SubscriptionRootAddressEventsSummaryArgs = {
  distinct_on?: InputMaybe<Array<AddressEventsSummarySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressEventsSummaryOrderBy>>;
  where?: InputMaybe<AddressEventsSummaryBoolExp>;
};


export type SubscriptionRootAddressEventsSummaryStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AddressEventsSummaryStreamCursorInput>>;
  where?: InputMaybe<AddressEventsSummaryBoolExp>;
};


export type SubscriptionRootAddressVersionFromEventsArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromEventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromEventsOrderBy>>;
  where?: InputMaybe<AddressVersionFromEventsBoolExp>;
};


export type SubscriptionRootAddressVersionFromEventsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromEventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromEventsOrderBy>>;
  where?: InputMaybe<AddressVersionFromEventsBoolExp>;
};


export type SubscriptionRootAddressVersionFromEventsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AddressVersionFromEventsStreamCursorInput>>;
  where?: InputMaybe<AddressVersionFromEventsBoolExp>;
};


export type SubscriptionRootAddressVersionFromMoveResourcesArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromMoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromMoveResourcesOrderBy>>;
  where?: InputMaybe<AddressVersionFromMoveResourcesBoolExp>;
};


export type SubscriptionRootAddressVersionFromMoveResourcesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressVersionFromMoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AddressVersionFromMoveResourcesOrderBy>>;
  where?: InputMaybe<AddressVersionFromMoveResourcesBoolExp>;
};


export type SubscriptionRootAddressVersionFromMoveResourcesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AddressVersionFromMoveResourcesStreamCursorInput>>;
  where?: InputMaybe<AddressVersionFromMoveResourcesBoolExp>;
};


export type SubscriptionRootAuthKeyAccountAddressesArgs = {
  distinct_on?: InputMaybe<Array<AuthKeyAccountAddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthKeyAccountAddressesOrderBy>>;
  where?: InputMaybe<AuthKeyAccountAddressesBoolExp>;
};


export type SubscriptionRootAuthKeyAccountAddressesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthKeyAccountAddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthKeyAccountAddressesOrderBy>>;
  where?: InputMaybe<AuthKeyAccountAddressesBoolExp>;
};


export type SubscriptionRootAuthKeyAccountAddressesByPkArgs = {
  account_address: Scalars['String']['input'];
};


export type SubscriptionRootAuthKeyAccountAddressesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthKeyAccountAddressesStreamCursorInput>>;
  where?: InputMaybe<AuthKeyAccountAddressesBoolExp>;
};


export type SubscriptionRootBlockMetadataTransactionsArgs = {
  distinct_on?: InputMaybe<Array<BlockMetadataTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BlockMetadataTransactionsOrderBy>>;
  where?: InputMaybe<BlockMetadataTransactionsBoolExp>;
};


export type SubscriptionRootBlockMetadataTransactionsByPkArgs = {
  version: Scalars['bigint']['input'];
};


export type SubscriptionRootBlockMetadataTransactionsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<BlockMetadataTransactionsStreamCursorInput>>;
  where?: InputMaybe<BlockMetadataTransactionsBoolExp>;
};


export type SubscriptionRootBorrowRiskParametersCurrentArgs = {
  distinct_on?: InputMaybe<Array<BorrowRiskParametersCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowRiskParametersCurrentOrderBy>>;
  where?: InputMaybe<BorrowRiskParametersCurrentBoolExp>;
};


export type SubscriptionRootBorrowRiskParametersCurrentByPkArgs = {
  collateral: Scalars['String']['input'];
  config_address: Scalars['String']['input'];
  vault: Scalars['String']['input'];
};


export type SubscriptionRootBorrowRiskParametersCurrentStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<BorrowRiskParametersCurrentStreamCursorInput>>;
  where?: InputMaybe<BorrowRiskParametersCurrentBoolExp>;
};


export type SubscriptionRootCoinActivitiesArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


export type SubscriptionRootCoinActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CoinActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinActivitiesOrderBy>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


export type SubscriptionRootCoinActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CoinActivitiesStreamCursorInput>>;
  where?: InputMaybe<CoinActivitiesBoolExp>;
};


export type SubscriptionRootCoinBalancesArgs = {
  distinct_on?: InputMaybe<Array<CoinBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinBalancesOrderBy>>;
  where?: InputMaybe<CoinBalancesBoolExp>;
};


export type SubscriptionRootCoinBalancesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CoinBalancesStreamCursorInput>>;
  where?: InputMaybe<CoinBalancesBoolExp>;
};


export type SubscriptionRootCoinInfosArgs = {
  distinct_on?: InputMaybe<Array<CoinInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinInfosOrderBy>>;
  where?: InputMaybe<CoinInfosBoolExp>;
};


export type SubscriptionRootCoinInfosStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CoinInfosStreamCursorInput>>;
  where?: InputMaybe<CoinInfosBoolExp>;
};


export type SubscriptionRootCoinSupplyArgs = {
  distinct_on?: InputMaybe<Array<CoinSupplySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CoinSupplyOrderBy>>;
  where?: InputMaybe<CoinSupplyBoolExp>;
};


export type SubscriptionRootCoinSupplyByPkArgs = {
  coin_type_hash: Scalars['String']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootCoinSupplyStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CoinSupplyStreamCursorInput>>;
  where?: InputMaybe<CoinSupplyBoolExp>;
};


export type SubscriptionRootCollateralRiskParametersCurrentArgs = {
  distinct_on?: InputMaybe<Array<CollateralRiskParametersCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CollateralRiskParametersCurrentOrderBy>>;
  where?: InputMaybe<CollateralRiskParametersCurrentBoolExp>;
};


export type SubscriptionRootCollateralRiskParametersCurrentByPkArgs = {
  collateral: Scalars['String']['input'];
  config_address: Scalars['String']['input'];
};


export type SubscriptionRootCollateralRiskParametersCurrentStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CollateralRiskParametersCurrentStreamCursorInput>>;
  where?: InputMaybe<CollateralRiskParametersCurrentBoolExp>;
};


export type SubscriptionRootCollectionDatasArgs = {
  distinct_on?: InputMaybe<Array<CollectionDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CollectionDatasOrderBy>>;
  where?: InputMaybe<CollectionDatasBoolExp>;
};


export type SubscriptionRootCollectionDatasStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CollectionDatasStreamCursorInput>>;
  where?: InputMaybe<CollectionDatasBoolExp>;
};


export type SubscriptionRootCurrentAnsLookupArgs = {
  distinct_on?: InputMaybe<Array<CurrentAnsLookupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAnsLookupOrderBy>>;
  where?: InputMaybe<CurrentAnsLookupBoolExp>;
};


export type SubscriptionRootCurrentAnsLookupStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentAnsLookupStreamCursorInput>>;
  where?: InputMaybe<CurrentAnsLookupBoolExp>;
};


export type SubscriptionRootCurrentAnsLookupV2Args = {
  distinct_on?: InputMaybe<Array<CurrentAnsLookupV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAnsLookupV2OrderBy>>;
  where?: InputMaybe<CurrentAnsLookupV2BoolExp>;
};


export type SubscriptionRootCurrentAnsLookupV2ByPkArgs = {
  domain: Scalars['String']['input'];
  subdomain: Scalars['String']['input'];
  token_standard: Scalars['String']['input'];
};


export type SubscriptionRootCurrentAnsLookupV2StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentAnsLookupV2StreamCursorInput>>;
  where?: InputMaybe<CurrentAnsLookupV2BoolExp>;
};


export type SubscriptionRootCurrentAptosNamesArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


export type SubscriptionRootCurrentAptosNamesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


export type SubscriptionRootCurrentAptosNamesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentAptosNamesStreamCursorInput>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


export type SubscriptionRootCurrentCoinBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentCoinBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCoinBalancesOrderBy>>;
  where?: InputMaybe<CurrentCoinBalancesBoolExp>;
};


export type SubscriptionRootCurrentCoinBalancesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentCoinBalancesStreamCursorInput>>;
  where?: InputMaybe<CurrentCoinBalancesBoolExp>;
};


export type SubscriptionRootCurrentCollectionDatasArgs = {
  distinct_on?: InputMaybe<Array<CurrentCollectionDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionDatasOrderBy>>;
  where?: InputMaybe<CurrentCollectionDatasBoolExp>;
};


export type SubscriptionRootCurrentCollectionDatasStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentCollectionDatasStreamCursorInput>>;
  where?: InputMaybe<CurrentCollectionDatasBoolExp>;
};


export type SubscriptionRootCurrentCollectionOwnershipV2ViewArgs = {
  distinct_on?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewOrderBy>>;
  where?: InputMaybe<CurrentCollectionOwnershipV2ViewBoolExp>;
};


export type SubscriptionRootCurrentCollectionOwnershipV2ViewAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionOwnershipV2ViewOrderBy>>;
  where?: InputMaybe<CurrentCollectionOwnershipV2ViewBoolExp>;
};


export type SubscriptionRootCurrentCollectionOwnershipV2ViewStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentCollectionOwnershipV2ViewStreamCursorInput>>;
  where?: InputMaybe<CurrentCollectionOwnershipV2ViewBoolExp>;
};


export type SubscriptionRootCurrentCollectionsV2Args = {
  distinct_on?: InputMaybe<Array<CurrentCollectionsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentCollectionsV2OrderBy>>;
  where?: InputMaybe<CurrentCollectionsV2BoolExp>;
};


export type SubscriptionRootCurrentCollectionsV2ByPkArgs = {
  collection_id: Scalars['String']['input'];
};


export type SubscriptionRootCurrentCollectionsV2StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentCollectionsV2StreamCursorInput>>;
  where?: InputMaybe<CurrentCollectionsV2BoolExp>;
};


export type SubscriptionRootCurrentDelegatedStakingPoolBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentDelegatedStakingPoolBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentDelegatedStakingPoolBalancesOrderBy>>;
  where?: InputMaybe<CurrentDelegatedStakingPoolBalancesBoolExp>;
};


export type SubscriptionRootCurrentDelegatedStakingPoolBalancesByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
};


export type SubscriptionRootCurrentDelegatedStakingPoolBalancesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentDelegatedStakingPoolBalancesStreamCursorInput>>;
  where?: InputMaybe<CurrentDelegatedStakingPoolBalancesBoolExp>;
};


export type SubscriptionRootCurrentDelegatedVoterArgs = {
  distinct_on?: InputMaybe<Array<CurrentDelegatedVoterSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentDelegatedVoterOrderBy>>;
  where?: InputMaybe<CurrentDelegatedVoterBoolExp>;
};


export type SubscriptionRootCurrentDelegatedVoterByPkArgs = {
  delegation_pool_address: Scalars['String']['input'];
  delegator_address: Scalars['String']['input'];
};


export type SubscriptionRootCurrentDelegatedVoterStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentDelegatedVoterStreamCursorInput>>;
  where?: InputMaybe<CurrentDelegatedVoterBoolExp>;
};


export type SubscriptionRootCurrentDelegatorBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentDelegatorBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentDelegatorBalancesOrderBy>>;
  where?: InputMaybe<CurrentDelegatorBalancesBoolExp>;
};


export type SubscriptionRootCurrentDelegatorBalancesByPkArgs = {
  delegator_address: Scalars['String']['input'];
  pool_address: Scalars['String']['input'];
  pool_type: Scalars['String']['input'];
  table_handle: Scalars['String']['input'];
};


export type SubscriptionRootCurrentDelegatorBalancesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentDelegatorBalancesStreamCursorInput>>;
  where?: InputMaybe<CurrentDelegatorBalancesBoolExp>;
};


export type SubscriptionRootCurrentFungibleAssetBalancesArgs = {
  distinct_on?: InputMaybe<Array<CurrentFungibleAssetBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentFungibleAssetBalancesOrderBy>>;
  where?: InputMaybe<CurrentFungibleAssetBalancesBoolExp>;
};


export type SubscriptionRootCurrentFungibleAssetBalancesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentFungibleAssetBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentFungibleAssetBalancesOrderBy>>;
  where?: InputMaybe<CurrentFungibleAssetBalancesBoolExp>;
};


export type SubscriptionRootCurrentFungibleAssetBalancesByPkArgs = {
  storage_id: Scalars['String']['input'];
};


export type SubscriptionRootCurrentFungibleAssetBalancesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentFungibleAssetBalancesStreamCursorInput>>;
  where?: InputMaybe<CurrentFungibleAssetBalancesBoolExp>;
};


export type SubscriptionRootCurrentObjectsArgs = {
  distinct_on?: InputMaybe<Array<CurrentObjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentObjectsOrderBy>>;
  where?: InputMaybe<CurrentObjectsBoolExp>;
};


export type SubscriptionRootCurrentObjectsByPkArgs = {
  object_address: Scalars['String']['input'];
};


export type SubscriptionRootCurrentObjectsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentObjectsStreamCursorInput>>;
  where?: InputMaybe<CurrentObjectsBoolExp>;
};


export type SubscriptionRootCurrentStakingPoolVoterArgs = {
  distinct_on?: InputMaybe<Array<CurrentStakingPoolVoterSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentStakingPoolVoterOrderBy>>;
  where?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
};


export type SubscriptionRootCurrentStakingPoolVoterByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
};


export type SubscriptionRootCurrentStakingPoolVoterStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentStakingPoolVoterStreamCursorInput>>;
  where?: InputMaybe<CurrentStakingPoolVoterBoolExp>;
};


export type SubscriptionRootCurrentTableItemsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTableItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTableItemsOrderBy>>;
  where?: InputMaybe<CurrentTableItemsBoolExp>;
};


export type SubscriptionRootCurrentTableItemsByPkArgs = {
  key_hash: Scalars['String']['input'];
  table_handle: Scalars['String']['input'];
};


export type SubscriptionRootCurrentTableItemsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTableItemsStreamCursorInput>>;
  where?: InputMaybe<CurrentTableItemsBoolExp>;
};


export type SubscriptionRootCurrentTokenDatasArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenDatasOrderBy>>;
  where?: InputMaybe<CurrentTokenDatasBoolExp>;
};


export type SubscriptionRootCurrentTokenDatasStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTokenDatasStreamCursorInput>>;
  where?: InputMaybe<CurrentTokenDatasBoolExp>;
};


export type SubscriptionRootCurrentTokenDatasV2Args = {
  distinct_on?: InputMaybe<Array<CurrentTokenDatasV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenDatasV2OrderBy>>;
  where?: InputMaybe<CurrentTokenDatasV2BoolExp>;
};


export type SubscriptionRootCurrentTokenDatasV2ByPkArgs = {
  token_data_id: Scalars['String']['input'];
};


export type SubscriptionRootCurrentTokenDatasV2StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTokenDatasV2StreamCursorInput>>;
  where?: InputMaybe<CurrentTokenDatasV2BoolExp>;
};


export type SubscriptionRootCurrentTokenOwnershipsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsOrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};


export type SubscriptionRootCurrentTokenOwnershipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsOrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};


export type SubscriptionRootCurrentTokenOwnershipsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTokenOwnershipsStreamCursorInput>>;
  where?: InputMaybe<CurrentTokenOwnershipsBoolExp>;
};


export type SubscriptionRootCurrentTokenOwnershipsV2Args = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


export type SubscriptionRootCurrentTokenOwnershipsV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenOwnershipsV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenOwnershipsV2OrderBy>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


export type SubscriptionRootCurrentTokenOwnershipsV2ByPkArgs = {
  owner_address: Scalars['String']['input'];
  property_version_v1: Scalars['numeric']['input'];
  storage_id: Scalars['String']['input'];
  token_data_id: Scalars['String']['input'];
};


export type SubscriptionRootCurrentTokenOwnershipsV2StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTokenOwnershipsV2StreamCursorInput>>;
  where?: InputMaybe<CurrentTokenOwnershipsV2BoolExp>;
};


export type SubscriptionRootCurrentTokenPendingClaimsArgs = {
  distinct_on?: InputMaybe<Array<CurrentTokenPendingClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenPendingClaimsOrderBy>>;
  where?: InputMaybe<CurrentTokenPendingClaimsBoolExp>;
};


export type SubscriptionRootCurrentTokenPendingClaimsByPkArgs = {
  from_address: Scalars['String']['input'];
  property_version: Scalars['numeric']['input'];
  to_address: Scalars['String']['input'];
  token_data_id_hash: Scalars['String']['input'];
};


export type SubscriptionRootCurrentTokenPendingClaimsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTokenPendingClaimsStreamCursorInput>>;
  where?: InputMaybe<CurrentTokenPendingClaimsBoolExp>;
};


export type SubscriptionRootCurrentTokenRoyaltyV1Args = {
  distinct_on?: InputMaybe<Array<CurrentTokenRoyaltyV1SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentTokenRoyaltyV1OrderBy>>;
  where?: InputMaybe<CurrentTokenRoyaltyV1BoolExp>;
};


export type SubscriptionRootCurrentTokenRoyaltyV1ByPkArgs = {
  token_data_id: Scalars['String']['input'];
};


export type SubscriptionRootCurrentTokenRoyaltyV1StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CurrentTokenRoyaltyV1StreamCursorInput>>;
  where?: InputMaybe<CurrentTokenRoyaltyV1BoolExp>;
};


export type SubscriptionRootDelegatedStakingActivitiesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingActivitiesOrderBy>>;
  where?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
};


export type SubscriptionRootDelegatedStakingActivitiesByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootDelegatedStakingActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DelegatedStakingActivitiesStreamCursorInput>>;
  where?: InputMaybe<DelegatedStakingActivitiesBoolExp>;
};


export type SubscriptionRootDelegatedStakingPoolBalancesArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingPoolBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingPoolBalancesOrderBy>>;
  where?: InputMaybe<DelegatedStakingPoolBalancesBoolExp>;
};


export type SubscriptionRootDelegatedStakingPoolBalancesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingPoolBalancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingPoolBalancesOrderBy>>;
  where?: InputMaybe<DelegatedStakingPoolBalancesBoolExp>;
};


export type SubscriptionRootDelegatedStakingPoolBalancesByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootDelegatedStakingPoolBalancesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DelegatedStakingPoolBalancesStreamCursorInput>>;
  where?: InputMaybe<DelegatedStakingPoolBalancesBoolExp>;
};


export type SubscriptionRootDelegatedStakingPoolsArgs = {
  distinct_on?: InputMaybe<Array<DelegatedStakingPoolsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatedStakingPoolsOrderBy>>;
  where?: InputMaybe<DelegatedStakingPoolsBoolExp>;
};


export type SubscriptionRootDelegatedStakingPoolsByPkArgs = {
  staking_pool_address: Scalars['String']['input'];
};


export type SubscriptionRootDelegatedStakingPoolsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DelegatedStakingPoolsStreamCursorInput>>;
  where?: InputMaybe<DelegatedStakingPoolsBoolExp>;
};


export type SubscriptionRootDelegatorDistinctPoolArgs = {
  distinct_on?: InputMaybe<Array<DelegatorDistinctPoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatorDistinctPoolOrderBy>>;
  where?: InputMaybe<DelegatorDistinctPoolBoolExp>;
};


export type SubscriptionRootDelegatorDistinctPoolAggregateArgs = {
  distinct_on?: InputMaybe<Array<DelegatorDistinctPoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DelegatorDistinctPoolOrderBy>>;
  where?: InputMaybe<DelegatorDistinctPoolBoolExp>;
};


export type SubscriptionRootDelegatorDistinctPoolStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DelegatorDistinctPoolStreamCursorInput>>;
  where?: InputMaybe<DelegatorDistinctPoolBoolExp>;
};


export type SubscriptionRootEventsArgs = {
  distinct_on?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type SubscriptionRootEventsByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootEventsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventsStreamCursorInput>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type SubscriptionRootFixedPriceOracleActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FixedPriceOracleActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedPriceOracleActivitiesOrderBy>>;
  where?: InputMaybe<FixedPriceOracleActivitiesBoolExp>;
};


export type SubscriptionRootFixedPriceOracleActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootFixedPriceOracleActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FixedPriceOracleActivitiesStreamCursorInput>>;
  where?: InputMaybe<FixedPriceOracleActivitiesBoolExp>;
};


export type SubscriptionRootFixedPriceOracleCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<FixedPriceOracleCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedPriceOracleCurrentConfigOrderBy>>;
  where?: InputMaybe<FixedPriceOracleCurrentConfigBoolExp>;
};


export type SubscriptionRootFixedPriceOracleCurrentConfigByPkArgs = {
  base_asset: Scalars['String']['input'];
  oracle_address: Scalars['String']['input'];
  quote_asset: Scalars['String']['input'];
};


export type SubscriptionRootFixedPriceOracleCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FixedPriceOracleCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<FixedPriceOracleCurrentConfigBoolExp>;
};


export type SubscriptionRootFixedRateIrmActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FixedRateIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedRateIrmActivitiesOrderBy>>;
  where?: InputMaybe<FixedRateIrmActivitiesBoolExp>;
};


export type SubscriptionRootFixedRateIrmActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootFixedRateIrmActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FixedRateIrmActivitiesStreamCursorInput>>;
  where?: InputMaybe<FixedRateIrmActivitiesBoolExp>;
};


export type SubscriptionRootFixedRateIrmCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<FixedRateIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FixedRateIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<FixedRateIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootFixedRateIrmCurrentConfigByPkArgs = {
  config_address: Scalars['String']['input'];
};


export type SubscriptionRootFixedRateIrmCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FixedRateIrmCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<FixedRateIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootFungibleAssetActivitiesArgs = {
  distinct_on?: InputMaybe<Array<FungibleAssetActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FungibleAssetActivitiesOrderBy>>;
  where?: InputMaybe<FungibleAssetActivitiesBoolExp>;
};


export type SubscriptionRootFungibleAssetActivitiesByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootFungibleAssetActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FungibleAssetActivitiesStreamCursorInput>>;
  where?: InputMaybe<FungibleAssetActivitiesBoolExp>;
};


export type SubscriptionRootFungibleAssetMetadataArgs = {
  distinct_on?: InputMaybe<Array<FungibleAssetMetadataSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FungibleAssetMetadataOrderBy>>;
  where?: InputMaybe<FungibleAssetMetadataBoolExp>;
};


export type SubscriptionRootFungibleAssetMetadataByPkArgs = {
  asset_type: Scalars['String']['input'];
};


export type SubscriptionRootFungibleAssetMetadataStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FungibleAssetMetadataStreamCursorInput>>;
  where?: InputMaybe<FungibleAssetMetadataBoolExp>;
};


export type SubscriptionRootHyperionLlpBadDebtActivitiesArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<HyperionLlpBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootHyperionLlpBadDebtActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootHyperionLlpBadDebtActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<HyperionLlpBadDebtActivitiesStreamCursorInput>>;
  where?: InputMaybe<HyperionLlpBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootHyperionLlpDebtStatusActivitiesArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpDebtStatusActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpDebtStatusActivitiesOrderBy>>;
  where?: InputMaybe<HyperionLlpDebtStatusActivitiesBoolExp>;
};


export type SubscriptionRootHyperionLlpDebtStatusActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootHyperionLlpDebtStatusActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<HyperionLlpDebtStatusActivitiesStreamCursorInput>>;
  where?: InputMaybe<HyperionLlpDebtStatusActivitiesBoolExp>;
};


export type SubscriptionRootHyperionLlpLiquidationActivitiesArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpLiquidationActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpLiquidationActivitiesOrderBy>>;
  where?: InputMaybe<HyperionLlpLiquidationActivitiesBoolExp>;
};


export type SubscriptionRootHyperionLlpLiquidationActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootHyperionLlpLiquidationActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<HyperionLlpLiquidationActivitiesStreamCursorInput>>;
  where?: InputMaybe<HyperionLlpLiquidationActivitiesBoolExp>;
};


export type SubscriptionRootHyperionLlpPositionCurrentArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpPositionCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpPositionCurrentOrderBy>>;
  where?: InputMaybe<HyperionLlpPositionCurrentBoolExp>;
};


export type SubscriptionRootHyperionLlpPositionCurrentByPkArgs = {
  position_address: Scalars['String']['input'];
};


export type SubscriptionRootHyperionLlpPositionCurrentStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<HyperionLlpPositionCurrentStreamCursorInput>>;
  where?: InputMaybe<HyperionLlpPositionCurrentBoolExp>;
};


export type SubscriptionRootHyperionLlpPositionDebtStoresArgs = {
  distinct_on?: InputMaybe<Array<HyperionLlpPositionDebtStoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<HyperionLlpPositionDebtStoresOrderBy>>;
  where?: InputMaybe<HyperionLlpPositionDebtStoresBoolExp>;
};


export type SubscriptionRootHyperionLlpPositionDebtStoresByPkArgs = {
  position_address: Scalars['String']['input'];
  vault_address: Scalars['String']['input'];
};


export type SubscriptionRootHyperionLlpPositionDebtStoresStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<HyperionLlpPositionDebtStoresStreamCursorInput>>;
  where?: InputMaybe<HyperionLlpPositionDebtStoresBoolExp>;
};


export type SubscriptionRootIndexerStatusArgs = {
  distinct_on?: InputMaybe<Array<IndexerStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IndexerStatusOrderBy>>;
  where?: InputMaybe<IndexerStatusBoolExp>;
};


export type SubscriptionRootIndexerStatusByPkArgs = {
  db: Scalars['String']['input'];
};


export type SubscriptionRootIndexerStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<IndexerStatusStreamCursorInput>>;
  where?: InputMaybe<IndexerStatusBoolExp>;
};


export type SubscriptionRootKinkedIrmActivitiesArgs = {
  distinct_on?: InputMaybe<Array<KinkedIrmActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<KinkedIrmActivitiesOrderBy>>;
  where?: InputMaybe<KinkedIrmActivitiesBoolExp>;
};


export type SubscriptionRootKinkedIrmActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootKinkedIrmActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<KinkedIrmActivitiesStreamCursorInput>>;
  where?: InputMaybe<KinkedIrmActivitiesBoolExp>;
};


export type SubscriptionRootKinkedIrmCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<KinkedIrmCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<KinkedIrmCurrentConfigOrderBy>>;
  where?: InputMaybe<KinkedIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootKinkedIrmCurrentConfigByPkArgs = {
  config_address: Scalars['String']['input'];
};


export type SubscriptionRootKinkedIrmCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<KinkedIrmCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<KinkedIrmCurrentConfigBoolExp>;
};


export type SubscriptionRootLedgerInfosArgs = {
  distinct_on?: InputMaybe<Array<LedgerInfosSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LedgerInfosOrderBy>>;
  where?: InputMaybe<LedgerInfosBoolExp>;
};


export type SubscriptionRootLedgerInfosByPkArgs = {
  chain_id: Scalars['bigint']['input'];
};


export type SubscriptionRootLedgerInfosStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<LedgerInfosStreamCursorInput>>;
  where?: InputMaybe<LedgerInfosBoolExp>;
};


export type SubscriptionRootMoveResourcesArgs = {
  distinct_on?: InputMaybe<Array<MoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MoveResourcesOrderBy>>;
  where?: InputMaybe<MoveResourcesBoolExp>;
};


export type SubscriptionRootMoveResourcesAggregateArgs = {
  distinct_on?: InputMaybe<Array<MoveResourcesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MoveResourcesOrderBy>>;
  where?: InputMaybe<MoveResourcesBoolExp>;
};


export type SubscriptionRootMoveResourcesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MoveResourcesStreamCursorInput>>;
  where?: InputMaybe<MoveResourcesBoolExp>;
};


export type SubscriptionRootNftMetadataCrawlerParsedAssetUrisArgs = {
  distinct_on?: InputMaybe<Array<NftMetadataCrawlerParsedAssetUrisSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NftMetadataCrawlerParsedAssetUrisOrderBy>>;
  where?: InputMaybe<NftMetadataCrawlerParsedAssetUrisBoolExp>;
};


export type SubscriptionRootNftMetadataCrawlerParsedAssetUrisByPkArgs = {
  asset_uri: Scalars['String']['input'];
};


export type SubscriptionRootNftMetadataCrawlerParsedAssetUrisStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<NftMetadataCrawlerParsedAssetUrisStreamCursorInput>>;
  where?: InputMaybe<NftMetadataCrawlerParsedAssetUrisBoolExp>;
};


export type SubscriptionRootNumActiveDelegatorPerPoolArgs = {
  distinct_on?: InputMaybe<Array<NumActiveDelegatorPerPoolSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NumActiveDelegatorPerPoolOrderBy>>;
  where?: InputMaybe<NumActiveDelegatorPerPoolBoolExp>;
};


export type SubscriptionRootNumActiveDelegatorPerPoolStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<NumActiveDelegatorPerPoolStreamCursorInput>>;
  where?: InputMaybe<NumActiveDelegatorPerPoolBoolExp>;
};


export type SubscriptionRootOracleRouterActivitiesArgs = {
  distinct_on?: InputMaybe<Array<OracleRouterActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OracleRouterActivitiesOrderBy>>;
  where?: InputMaybe<OracleRouterActivitiesBoolExp>;
};


export type SubscriptionRootOracleRouterActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootOracleRouterActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OracleRouterActivitiesStreamCursorInput>>;
  where?: InputMaybe<OracleRouterActivitiesBoolExp>;
};


export type SubscriptionRootOracleRouterCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<OracleRouterCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OracleRouterCurrentConfigOrderBy>>;
  where?: InputMaybe<OracleRouterCurrentConfigBoolExp>;
};


export type SubscriptionRootOracleRouterCurrentConfigByPkArgs = {
  base_asset: Scalars['String']['input'];
  oracle_router: Scalars['String']['input'];
  quote_asset: Scalars['String']['input'];
};


export type SubscriptionRootOracleRouterCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OracleRouterCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<OracleRouterCurrentConfigBoolExp>;
};


export type SubscriptionRootProcessorStatusArgs = {
  distinct_on?: InputMaybe<Array<ProcessorStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProcessorStatusOrderBy>>;
  where?: InputMaybe<ProcessorStatusBoolExp>;
};


export type SubscriptionRootProcessorStatusByPkArgs = {
  processor: Scalars['String']['input'];
};


export type SubscriptionRootProcessorStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProcessorStatusStreamCursorInput>>;
  where?: InputMaybe<ProcessorStatusBoolExp>;
};


export type SubscriptionRootProposalVotesArgs = {
  distinct_on?: InputMaybe<Array<ProposalVotesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProposalVotesOrderBy>>;
  where?: InputMaybe<ProposalVotesBoolExp>;
};


export type SubscriptionRootProposalVotesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProposalVotesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProposalVotesOrderBy>>;
  where?: InputMaybe<ProposalVotesBoolExp>;
};


export type SubscriptionRootProposalVotesByPkArgs = {
  proposal_id: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
  voter_address: Scalars['String']['input'];
};


export type SubscriptionRootProposalVotesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProposalVotesStreamCursorInput>>;
  where?: InputMaybe<ProposalVotesBoolExp>;
};


export type SubscriptionRootPublicKeyAuthKeysArgs = {
  distinct_on?: InputMaybe<Array<PublicKeyAuthKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PublicKeyAuthKeysOrderBy>>;
  where?: InputMaybe<PublicKeyAuthKeysBoolExp>;
};


export type SubscriptionRootPublicKeyAuthKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<PublicKeyAuthKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PublicKeyAuthKeysOrderBy>>;
  where?: InputMaybe<PublicKeyAuthKeysBoolExp>;
};


export type SubscriptionRootPublicKeyAuthKeysByPkArgs = {
  auth_key: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
  public_key_type: Scalars['String']['input'];
};


export type SubscriptionRootPublicKeyAuthKeysStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PublicKeyAuthKeysStreamCursorInput>>;
  where?: InputMaybe<PublicKeyAuthKeysBoolExp>;
};


export type SubscriptionRootPythOracleActivitiesArgs = {
  distinct_on?: InputMaybe<Array<PythOracleActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PythOracleActivitiesOrderBy>>;
  where?: InputMaybe<PythOracleActivitiesBoolExp>;
};


export type SubscriptionRootPythOracleActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootPythOracleActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PythOracleActivitiesStreamCursorInput>>;
  where?: InputMaybe<PythOracleActivitiesBoolExp>;
};


export type SubscriptionRootPythOracleCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<PythOracleCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PythOracleCurrentConfigOrderBy>>;
  where?: InputMaybe<PythOracleCurrentConfigBoolExp>;
};


export type SubscriptionRootPythOracleCurrentConfigByPkArgs = {
  asset_identifier: Scalars['String']['input'];
  oracle_address: Scalars['String']['input'];
};


export type SubscriptionRootPythOracleCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PythOracleCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<PythOracleCurrentConfigBoolExp>;
};


export type SubscriptionRootScmdBadDebtActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<ScmdBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootScmdBadDebtActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootScmdBadDebtActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ScmdBadDebtActivitiesStreamCursorInput>>;
  where?: InputMaybe<ScmdBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootScmdDebtStatusActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdDebtStatusActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdDebtStatusActivitiesOrderBy>>;
  where?: InputMaybe<ScmdDebtStatusActivitiesBoolExp>;
};


export type SubscriptionRootScmdDebtStatusActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootScmdDebtStatusActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ScmdDebtStatusActivitiesStreamCursorInput>>;
  where?: InputMaybe<ScmdDebtStatusActivitiesBoolExp>;
};


export type SubscriptionRootScmdLiquidationActivitiesArgs = {
  distinct_on?: InputMaybe<Array<ScmdLiquidationActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdLiquidationActivitiesOrderBy>>;
  where?: InputMaybe<ScmdLiquidationActivitiesBoolExp>;
};


export type SubscriptionRootScmdLiquidationActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootScmdLiquidationActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ScmdLiquidationActivitiesStreamCursorInput>>;
  where?: InputMaybe<ScmdLiquidationActivitiesBoolExp>;
};


export type SubscriptionRootScmdPositionCurrentArgs = {
  distinct_on?: InputMaybe<Array<ScmdPositionCurrentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdPositionCurrentOrderBy>>;
  where?: InputMaybe<ScmdPositionCurrentBoolExp>;
};


export type SubscriptionRootScmdPositionCurrentByPkArgs = {
  position_address: Scalars['String']['input'];
};


export type SubscriptionRootScmdPositionCurrentStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ScmdPositionCurrentStreamCursorInput>>;
  where?: InputMaybe<ScmdPositionCurrentBoolExp>;
};


export type SubscriptionRootScmdPositionDebtStoresArgs = {
  distinct_on?: InputMaybe<Array<ScmdPositionDebtStoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScmdPositionDebtStoresOrderBy>>;
  where?: InputMaybe<ScmdPositionDebtStoresBoolExp>;
};


export type SubscriptionRootScmdPositionDebtStoresByPkArgs = {
  position_address: Scalars['String']['input'];
  vault_address: Scalars['String']['input'];
};


export type SubscriptionRootScmdPositionDebtStoresStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ScmdPositionDebtStoresStreamCursorInput>>;
  where?: InputMaybe<ScmdPositionDebtStoresBoolExp>;
};


export type SubscriptionRootSignaturesArgs = {
  distinct_on?: InputMaybe<Array<SignaturesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SignaturesOrderBy>>;
  where?: InputMaybe<SignaturesBoolExp>;
};


export type SubscriptionRootSignaturesByPkArgs = {
  is_sender_primary: Scalars['Boolean']['input'];
  multi_agent_index: Scalars['bigint']['input'];
  multi_sig_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootSignaturesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SignaturesStreamCursorInput>>;
  where?: InputMaybe<SignaturesBoolExp>;
};


export type SubscriptionRootSwitchboardOracleActivitiesArgs = {
  distinct_on?: InputMaybe<Array<SwitchboardOracleActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SwitchboardOracleActivitiesOrderBy>>;
  where?: InputMaybe<SwitchboardOracleActivitiesBoolExp>;
};


export type SubscriptionRootSwitchboardOracleActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootSwitchboardOracleActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SwitchboardOracleActivitiesStreamCursorInput>>;
  where?: InputMaybe<SwitchboardOracleActivitiesBoolExp>;
};


export type SubscriptionRootSwitchboardOracleCurrentConfigArgs = {
  distinct_on?: InputMaybe<Array<SwitchboardOracleCurrentConfigSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SwitchboardOracleCurrentConfigOrderBy>>;
  where?: InputMaybe<SwitchboardOracleCurrentConfigBoolExp>;
};


export type SubscriptionRootSwitchboardOracleCurrentConfigByPkArgs = {
  asset_identifier: Scalars['String']['input'];
  oracle_address: Scalars['String']['input'];
};


export type SubscriptionRootSwitchboardOracleCurrentConfigStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SwitchboardOracleCurrentConfigStreamCursorInput>>;
  where?: InputMaybe<SwitchboardOracleCurrentConfigBoolExp>;
};


export type SubscriptionRootTableItemsArgs = {
  distinct_on?: InputMaybe<Array<TableItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TableItemsOrderBy>>;
  where?: InputMaybe<TableItemsBoolExp>;
};


export type SubscriptionRootTableItemsByPkArgs = {
  transaction_version: Scalars['bigint']['input'];
  write_set_change_index: Scalars['bigint']['input'];
};


export type SubscriptionRootTableItemsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TableItemsStreamCursorInput>>;
  where?: InputMaybe<TableItemsBoolExp>;
};


export type SubscriptionRootTableMetadatasArgs = {
  distinct_on?: InputMaybe<Array<TableMetadatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TableMetadatasOrderBy>>;
  where?: InputMaybe<TableMetadatasBoolExp>;
};


export type SubscriptionRootTableMetadatasByPkArgs = {
  handle: Scalars['String']['input'];
};


export type SubscriptionRootTableMetadatasStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TableMetadatasStreamCursorInput>>;
  where?: InputMaybe<TableMetadatasBoolExp>;
};


export type SubscriptionRootTokenActivitiesArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


export type SubscriptionRootTokenActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesOrderBy>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


export type SubscriptionRootTokenActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TokenActivitiesStreamCursorInput>>;
  where?: InputMaybe<TokenActivitiesBoolExp>;
};


export type SubscriptionRootTokenActivitiesV2Args = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


export type SubscriptionRootTokenActivitiesV2AggregateArgs = {
  distinct_on?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenActivitiesV2OrderBy>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


export type SubscriptionRootTokenActivitiesV2ByPkArgs = {
  event_index: Scalars['bigint']['input'];
  transaction_version: Scalars['bigint']['input'];
};


export type SubscriptionRootTokenActivitiesV2StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TokenActivitiesV2StreamCursorInput>>;
  where?: InputMaybe<TokenActivitiesV2BoolExp>;
};


export type SubscriptionRootTokenDatasArgs = {
  distinct_on?: InputMaybe<Array<TokenDatasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenDatasOrderBy>>;
  where?: InputMaybe<TokenDatasBoolExp>;
};


export type SubscriptionRootTokenDatasStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TokenDatasStreamCursorInput>>;
  where?: InputMaybe<TokenDatasBoolExp>;
};


export type SubscriptionRootTokenOwnershipsArgs = {
  distinct_on?: InputMaybe<Array<TokenOwnershipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokenOwnershipsOrderBy>>;
  where?: InputMaybe<TokenOwnershipsBoolExp>;
};


export type SubscriptionRootTokenOwnershipsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TokenOwnershipsStreamCursorInput>>;
  where?: InputMaybe<TokenOwnershipsBoolExp>;
};


export type SubscriptionRootTokensArgs = {
  distinct_on?: InputMaybe<Array<TokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TokensOrderBy>>;
  where?: InputMaybe<TokensBoolExp>;
};


export type SubscriptionRootTokensStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TokensStreamCursorInput>>;
  where?: InputMaybe<TokensBoolExp>;
};


export type SubscriptionRootUserTransactionsArgs = {
  distinct_on?: InputMaybe<Array<UserTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserTransactionsOrderBy>>;
  where?: InputMaybe<UserTransactionsBoolExp>;
};


export type SubscriptionRootUserTransactionsByPkArgs = {
  version: Scalars['bigint']['input'];
};


export type SubscriptionRootUserTransactionsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserTransactionsStreamCursorInput>>;
  where?: InputMaybe<UserTransactionsBoolExp>;
};


export type SubscriptionRootVaultBadDebtActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<VaultBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootVaultBadDebtActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultBadDebtActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultBadDebtActivitiesOrderBy>>;
  where?: InputMaybe<VaultBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootVaultBadDebtActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootVaultBadDebtActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultBadDebtActivitiesStreamCursorInput>>;
  where?: InputMaybe<VaultBadDebtActivitiesBoolExp>;
};


export type SubscriptionRootVaultEmergencyActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultEmergencyActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultEmergencyActivitiesOrderBy>>;
  where?: InputMaybe<VaultEmergencyActivitiesBoolExp>;
};


export type SubscriptionRootVaultEmergencyActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultEmergencyActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultEmergencyActivitiesOrderBy>>;
  where?: InputMaybe<VaultEmergencyActivitiesBoolExp>;
};


export type SubscriptionRootVaultEmergencyActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootVaultEmergencyActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultEmergencyActivitiesStreamCursorInput>>;
  where?: InputMaybe<VaultEmergencyActivitiesBoolExp>;
};


export type SubscriptionRootVaultFlashloanActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultFlashloanActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultFlashloanActivitiesOrderBy>>;
  where?: InputMaybe<VaultFlashloanActivitiesBoolExp>;
};


export type SubscriptionRootVaultFlashloanActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultFlashloanActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultFlashloanActivitiesOrderBy>>;
  where?: InputMaybe<VaultFlashloanActivitiesBoolExp>;
};


export type SubscriptionRootVaultFlashloanActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootVaultFlashloanActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultFlashloanActivitiesStreamCursorInput>>;
  where?: InputMaybe<VaultFlashloanActivitiesBoolExp>;
};


export type SubscriptionRootVaultInfoArgs = {
  distinct_on?: InputMaybe<Array<VaultInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultInfoOrderBy>>;
  where?: InputMaybe<VaultInfoBoolExp>;
};


export type SubscriptionRootVaultInfoAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultInfoOrderBy>>;
  where?: InputMaybe<VaultInfoBoolExp>;
};


export type SubscriptionRootVaultInfoByPkArgs = {
  vault_address: Scalars['String']['input'];
};


export type SubscriptionRootVaultInfoStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultInfoStreamCursorInput>>;
  where?: InputMaybe<VaultInfoBoolExp>;
};


export type SubscriptionRootVaultProtocolCapsArgs = {
  distinct_on?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultProtocolCapsOrderBy>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};


export type SubscriptionRootVaultProtocolCapsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultProtocolCapsOrderBy>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};


export type SubscriptionRootVaultProtocolCapsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultProtocolCapsStreamCursorInput>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};


export type SubscriptionRootVaultSettingsArgs = {
  distinct_on?: InputMaybe<Array<VaultSettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultSettingsOrderBy>>;
  where?: InputMaybe<VaultSettingsBoolExp>;
};


export type SubscriptionRootVaultSettingsByPkArgs = {
  vault_address: Scalars['String']['input'];
};


export type SubscriptionRootVaultSettingsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultSettingsStreamCursorInput>>;
  where?: InputMaybe<VaultSettingsBoolExp>;
};


export type SubscriptionRootVaultStatesActivitiesArgs = {
  distinct_on?: InputMaybe<Array<VaultStatesActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultStatesActivitiesOrderBy>>;
  where?: InputMaybe<VaultStatesActivitiesBoolExp>;
};


export type SubscriptionRootVaultStatesActivitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultStatesActivitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultStatesActivitiesOrderBy>>;
  where?: InputMaybe<VaultStatesActivitiesBoolExp>;
};


export type SubscriptionRootVaultStatesActivitiesByPkArgs = {
  event_index: Scalars['numeric']['input'];
  transaction_version: Scalars['numeric']['input'];
};


export type SubscriptionRootVaultStatesActivitiesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VaultStatesActivitiesStreamCursorInput>>;
  where?: InputMaybe<VaultStatesActivitiesBoolExp>;
};

/** columns and relationships of "switchboard_oracle_activities" */
export type SwitchboardOracleActivities = {
  aggregator_address?: Maybe<Scalars['String']['output']>;
  asset_identifier?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  event_index: Scalars['numeric']['output'];
  max_age_in_seconds?: Maybe<Scalars['numeric']['output']>;
  max_stdev?: Maybe<Scalars['numeric']['output']>;
  oracle_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "switchboard_oracle_activities". All fields are combined with a logical 'AND'. */
export type SwitchboardOracleActivitiesBoolExp = {
  _and?: InputMaybe<Array<SwitchboardOracleActivitiesBoolExp>>;
  _not?: InputMaybe<SwitchboardOracleActivitiesBoolExp>;
  _or?: InputMaybe<Array<SwitchboardOracleActivitiesBoolExp>>;
  aggregator_address?: InputMaybe<StringComparisonExp>;
  asset_identifier?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  max_age_in_seconds?: InputMaybe<NumericComparisonExp>;
  max_stdev?: InputMaybe<NumericComparisonExp>;
  oracle_address?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "switchboard_oracle_activities". */
export type SwitchboardOracleActivitiesOrderBy = {
  aggregator_address?: InputMaybe<OrderBy>;
  asset_identifier?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  max_age_in_seconds?: InputMaybe<OrderBy>;
  max_stdev?: InputMaybe<OrderBy>;
  oracle_address?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "switchboard_oracle_activities" */
export enum SwitchboardOracleActivitiesSelectColumn {
  /** column name */
  AggregatorAddress = 'aggregator_address',
  /** column name */
  AssetIdentifier = 'asset_identifier',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  MaxAgeInSeconds = 'max_age_in_seconds',
  /** column name */
  MaxStdev = 'max_stdev',
  /** column name */
  OracleAddress = 'oracle_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "switchboard_oracle_activities" */
export type SwitchboardOracleActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SwitchboardOracleActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SwitchboardOracleActivitiesStreamCursorValueInput = {
  aggregator_address?: InputMaybe<Scalars['String']['input']>;
  asset_identifier?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  max_age_in_seconds?: InputMaybe<Scalars['numeric']['input']>;
  max_stdev?: InputMaybe<Scalars['numeric']['input']>;
  oracle_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "switchboard_oracle_current_config" */
export type SwitchboardOracleCurrentConfig = {
  aggregator_address?: Maybe<Scalars['String']['output']>;
  asset_identifier: Scalars['String']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  max_age_in_seconds?: Maybe<Scalars['numeric']['output']>;
  max_stdev?: Maybe<Scalars['numeric']['output']>;
  oracle_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "switchboard_oracle_current_config". All fields are combined with a logical 'AND'. */
export type SwitchboardOracleCurrentConfigBoolExp = {
  _and?: InputMaybe<Array<SwitchboardOracleCurrentConfigBoolExp>>;
  _not?: InputMaybe<SwitchboardOracleCurrentConfigBoolExp>;
  _or?: InputMaybe<Array<SwitchboardOracleCurrentConfigBoolExp>>;
  aggregator_address?: InputMaybe<StringComparisonExp>;
  asset_identifier?: InputMaybe<StringComparisonExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  max_age_in_seconds?: InputMaybe<NumericComparisonExp>;
  max_stdev?: InputMaybe<NumericComparisonExp>;
  oracle_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "switchboard_oracle_current_config". */
export type SwitchboardOracleCurrentConfigOrderBy = {
  aggregator_address?: InputMaybe<OrderBy>;
  asset_identifier?: InputMaybe<OrderBy>;
  deleted?: InputMaybe<OrderBy>;
  max_age_in_seconds?: InputMaybe<OrderBy>;
  max_stdev?: InputMaybe<OrderBy>;
  oracle_address?: InputMaybe<OrderBy>;
};

/** select columns of table "switchboard_oracle_current_config" */
export enum SwitchboardOracleCurrentConfigSelectColumn {
  /** column name */
  AggregatorAddress = 'aggregator_address',
  /** column name */
  AssetIdentifier = 'asset_identifier',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  MaxAgeInSeconds = 'max_age_in_seconds',
  /** column name */
  MaxStdev = 'max_stdev',
  /** column name */
  OracleAddress = 'oracle_address'
}

/** Streaming cursor of the table "switchboard_oracle_current_config" */
export type SwitchboardOracleCurrentConfigStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SwitchboardOracleCurrentConfigStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SwitchboardOracleCurrentConfigStreamCursorValueInput = {
  aggregator_address?: InputMaybe<Scalars['String']['input']>;
  asset_identifier?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  max_age_in_seconds?: InputMaybe<Scalars['numeric']['input']>;
  max_stdev?: InputMaybe<Scalars['numeric']['input']>;
  oracle_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "table_items" */
export type TableItems = {
  decoded_key: Scalars['jsonb']['output'];
  decoded_value?: Maybe<Scalars['jsonb']['output']>;
  key: Scalars['String']['output'];
  table_handle: Scalars['String']['output'];
  transaction_version: Scalars['bigint']['output'];
  write_set_change_index: Scalars['bigint']['output'];
};


/** columns and relationships of "table_items" */
export type TableItemsDecodedKeyArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "table_items" */
export type TableItemsDecodedValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "table_items". All fields are combined with a logical 'AND'. */
export type TableItemsBoolExp = {
  _and?: InputMaybe<Array<TableItemsBoolExp>>;
  _not?: InputMaybe<TableItemsBoolExp>;
  _or?: InputMaybe<Array<TableItemsBoolExp>>;
  decoded_key?: InputMaybe<JsonbComparisonExp>;
  decoded_value?: InputMaybe<JsonbComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  write_set_change_index?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "table_items". */
export type TableItemsOrderBy = {
  decoded_key?: InputMaybe<OrderBy>;
  decoded_value?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  write_set_change_index?: InputMaybe<OrderBy>;
};

/** select columns of table "table_items" */
export enum TableItemsSelectColumn {
  /** column name */
  DecodedKey = 'decoded_key',
  /** column name */
  DecodedValue = 'decoded_value',
  /** column name */
  Key = 'key',
  /** column name */
  TableHandle = 'table_handle',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  WriteSetChangeIndex = 'write_set_change_index'
}

/** Streaming cursor of the table "table_items" */
export type TableItemsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TableItemsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TableItemsStreamCursorValueInput = {
  decoded_key?: InputMaybe<Scalars['jsonb']['input']>;
  decoded_value?: InputMaybe<Scalars['jsonb']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  write_set_change_index?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "table_metadatas" */
export type TableMetadatas = {
  handle: Scalars['String']['output'];
  key_type: Scalars['String']['output'];
  value_type: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "table_metadatas". All fields are combined with a logical 'AND'. */
export type TableMetadatasBoolExp = {
  _and?: InputMaybe<Array<TableMetadatasBoolExp>>;
  _not?: InputMaybe<TableMetadatasBoolExp>;
  _or?: InputMaybe<Array<TableMetadatasBoolExp>>;
  handle?: InputMaybe<StringComparisonExp>;
  key_type?: InputMaybe<StringComparisonExp>;
  value_type?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "table_metadatas". */
export type TableMetadatasOrderBy = {
  handle?: InputMaybe<OrderBy>;
  key_type?: InputMaybe<OrderBy>;
  value_type?: InputMaybe<OrderBy>;
};

/** select columns of table "table_metadatas" */
export enum TableMetadatasSelectColumn {
  /** column name */
  Handle = 'handle',
  /** column name */
  KeyType = 'key_type',
  /** column name */
  ValueType = 'value_type'
}

/** Streaming cursor of the table "table_metadatas" */
export type TableMetadatasStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TableMetadatasStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TableMetadatasStreamCursorValueInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  key_type?: InputMaybe<Scalars['String']['input']>;
  value_type?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "legacy_migration_v1.token_activities" */
export type TokenActivities = {
  /** An array relationship */
  aptos_names_owner: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  aptos_names_owner_aggregate: CurrentAptosNamesAggregate;
  /** An array relationship */
  aptos_names_to: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  aptos_names_to_aggregate: CurrentAptosNamesAggregate;
  coin_amount?: Maybe<Scalars['String']['output']>;
  coin_type?: Maybe<Scalars['String']['output']>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  current_token_data?: Maybe<CurrentTokenDatas>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  from_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  to_address?: Maybe<Scalars['String']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  transfer_type?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAptosNamesOwnerArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAptosNamesOwnerAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAptosNamesToArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAptosNamesToAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};

/** aggregated selection of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAggregate = {
  aggregate?: Maybe<TokenActivitiesAggregateFields>;
  nodes: Array<TokenActivities>;
};

export type TokenActivitiesAggregateBoolExp = {
  count?: InputMaybe<TokenActivitiesAggregateBoolExpCount>;
};

export type TokenActivitiesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TokenActivitiesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAggregateFields = {
  avg?: Maybe<TokenActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<TokenActivitiesMaxFields>;
  min?: Maybe<TokenActivitiesMinFields>;
  stddev?: Maybe<TokenActivitiesStddevFields>;
  stddev_pop?: Maybe<TokenActivitiesStddevPopFields>;
  stddev_samp?: Maybe<TokenActivitiesStddevSampFields>;
  sum?: Maybe<TokenActivitiesSumFields>;
  var_pop?: Maybe<TokenActivitiesVarPopFields>;
  var_samp?: Maybe<TokenActivitiesVarSampFields>;
  variance?: Maybe<TokenActivitiesVarianceFields>;
};


/** aggregate fields of "legacy_migration_v1.token_activities" */
export type TokenActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TokenActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesAggregateOrderBy = {
  avg?: InputMaybe<TokenActivitiesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TokenActivitiesMaxOrderBy>;
  min?: InputMaybe<TokenActivitiesMinOrderBy>;
  stddev?: InputMaybe<TokenActivitiesStddevOrderBy>;
  stddev_pop?: InputMaybe<TokenActivitiesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TokenActivitiesStddevSampOrderBy>;
  sum?: InputMaybe<TokenActivitiesSumOrderBy>;
  var_pop?: InputMaybe<TokenActivitiesVarPopOrderBy>;
  var_samp?: InputMaybe<TokenActivitiesVarSampOrderBy>;
  variance?: InputMaybe<TokenActivitiesVarianceOrderBy>;
};

/** aggregate avg on columns */
export type TokenActivitiesAvgFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesAvgOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.token_activities". All fields are combined with a logical 'AND'. */
export type TokenActivitiesBoolExp = {
  _and?: InputMaybe<Array<TokenActivitiesBoolExp>>;
  _not?: InputMaybe<TokenActivitiesBoolExp>;
  _or?: InputMaybe<Array<TokenActivitiesBoolExp>>;
  aptos_names_owner?: InputMaybe<CurrentAptosNamesBoolExp>;
  aptos_names_owner_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  aptos_names_to?: InputMaybe<CurrentAptosNamesBoolExp>;
  aptos_names_to_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  coin_amount?: InputMaybe<StringComparisonExp>;
  coin_type?: InputMaybe<StringComparisonExp>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  current_token_data?: InputMaybe<CurrentTokenDatasBoolExp>;
  event_account_address?: InputMaybe<StringComparisonExp>;
  event_creation_number?: InputMaybe<IntComparisonExp>;
  event_index?: InputMaybe<BigintComparisonExp>;
  event_sequence_number?: InputMaybe<IntComparisonExp>;
  from_address?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  property_version?: InputMaybe<NumericComparisonExp>;
  to_address?: InputMaybe<StringComparisonExp>;
  token_amount?: InputMaybe<NumericComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  transfer_type?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type TokenActivitiesMaxFields = {
  coin_amount?: Maybe<Scalars['String']['output']>;
  coin_type?: Maybe<Scalars['String']['output']>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  from_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  to_address?: Maybe<Scalars['String']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  transfer_type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesMaxOrderBy = {
  coin_amount?: InputMaybe<OrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  transfer_type?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TokenActivitiesMinFields = {
  coin_amount?: Maybe<Scalars['String']['output']>;
  coin_type?: Maybe<Scalars['String']['output']>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  from_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  to_address?: Maybe<Scalars['String']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  transfer_type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesMinOrderBy = {
  coin_amount?: InputMaybe<OrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  transfer_type?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "legacy_migration_v1.token_activities". */
export type TokenActivitiesOrderBy = {
  aptos_names_owner_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  aptos_names_to_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  coin_amount?: InputMaybe<OrderBy>;
  coin_type?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  current_token_data?: InputMaybe<CurrentTokenDatasOrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  transfer_type?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.token_activities" */
export enum TokenActivitiesSelectColumn {
  /** column name */
  CoinAmount = 'coin_amount',
  /** column name */
  CoinType = 'coin_type',
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  EventAccountAddress = 'event_account_address',
  /** column name */
  EventCreationNumber = 'event_creation_number',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  EventSequenceNumber = 'event_sequence_number',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  Name = 'name',
  /** column name */
  PropertyVersion = 'property_version',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  TokenAmount = 'token_amount',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  TransferType = 'transfer_type'
}

/** aggregate stddev on columns */
export type TokenActivitiesStddevFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesStddevOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TokenActivitiesStddevPopFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesStddevPopOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TokenActivitiesStddevSampFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesStddevSampOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "token_activities" */
export type TokenActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TokenActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TokenActivitiesStreamCursorValueInput = {
  coin_amount?: InputMaybe<Scalars['String']['input']>;
  coin_type?: InputMaybe<Scalars['String']['input']>;
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  event_account_address?: InputMaybe<Scalars['String']['input']>;
  event_creation_number?: InputMaybe<Scalars['Int']['input']>;
  event_index?: InputMaybe<Scalars['bigint']['input']>;
  event_sequence_number?: InputMaybe<Scalars['Int']['input']>;
  from_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  property_version?: InputMaybe<Scalars['numeric']['input']>;
  to_address?: InputMaybe<Scalars['String']['input']>;
  token_amount?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  transfer_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type TokenActivitiesSumFields = {
  event_creation_number?: Maybe<Scalars['Int']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  event_sequence_number?: Maybe<Scalars['Int']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesSumOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "token_activities_v2" */
export type TokenActivitiesV2 = {
  after_value?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  aptos_names_from: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  aptos_names_from_aggregate: CurrentAptosNamesAggregate;
  /** An array relationship */
  aptos_names_to: Array<CurrentAptosNames>;
  /** An aggregate relationship */
  aptos_names_to_aggregate: CurrentAptosNamesAggregate;
  before_value?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  current_token_data?: Maybe<CurrentTokenDatasV2>;
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_account_address: Scalars['String']['output'];
  event_index: Scalars['bigint']['output'];
  from_address?: Maybe<Scalars['String']['output']>;
  is_fungible_v2?: Maybe<Scalars['Boolean']['output']>;
  property_version_v1: Scalars['numeric']['output'];
  to_address?: Maybe<Scalars['String']['output']>;
  token_amount: Scalars['numeric']['output'];
  token_data_id: Scalars['String']['output'];
  token_standard: Scalars['String']['output'];
  transaction_timestamp: Scalars['timestamp']['output'];
  transaction_version: Scalars['bigint']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "token_activities_v2" */
export type TokenActivitiesV2AptosNamesFromArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "token_activities_v2" */
export type TokenActivitiesV2AptosNamesFromAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "token_activities_v2" */
export type TokenActivitiesV2AptosNamesToArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};


/** columns and relationships of "token_activities_v2" */
export type TokenActivitiesV2AptosNamesToAggregateArgs = {
  distinct_on?: InputMaybe<Array<CurrentAptosNamesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CurrentAptosNamesOrderBy>>;
  where?: InputMaybe<CurrentAptosNamesBoolExp>;
};

/** aggregated selection of "token_activities_v2" */
export type TokenActivitiesV2Aggregate = {
  aggregate?: Maybe<TokenActivitiesV2AggregateFields>;
  nodes: Array<TokenActivitiesV2>;
};

export type TokenActivitiesV2AggregateBoolExp = {
  bool_and?: InputMaybe<TokenActivitiesV2AggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<TokenActivitiesV2AggregateBoolExpBoolOr>;
  count?: InputMaybe<TokenActivitiesV2AggregateBoolExpCount>;
};

export type TokenActivitiesV2AggregateBoolExpBoolAnd = {
  arguments: TokenActivitiesV2SelectColumnTokenActivitiesV2AggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TokenActivitiesV2BoolExp>;
  predicate: BooleanComparisonExp;
};

export type TokenActivitiesV2AggregateBoolExpBoolOr = {
  arguments: TokenActivitiesV2SelectColumnTokenActivitiesV2AggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TokenActivitiesV2BoolExp>;
  predicate: BooleanComparisonExp;
};

export type TokenActivitiesV2AggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TokenActivitiesV2BoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "token_activities_v2" */
export type TokenActivitiesV2AggregateFields = {
  avg?: Maybe<TokenActivitiesV2AvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<TokenActivitiesV2MaxFields>;
  min?: Maybe<TokenActivitiesV2MinFields>;
  stddev?: Maybe<TokenActivitiesV2StddevFields>;
  stddev_pop?: Maybe<TokenActivitiesV2StddevPopFields>;
  stddev_samp?: Maybe<TokenActivitiesV2StddevSampFields>;
  sum?: Maybe<TokenActivitiesV2SumFields>;
  var_pop?: Maybe<TokenActivitiesV2VarPopFields>;
  var_samp?: Maybe<TokenActivitiesV2VarSampFields>;
  variance?: Maybe<TokenActivitiesV2VarianceFields>;
};


/** aggregate fields of "token_activities_v2" */
export type TokenActivitiesV2AggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TokenActivitiesV2SelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "token_activities_v2" */
export type TokenActivitiesV2AggregateOrderBy = {
  avg?: InputMaybe<TokenActivitiesV2AvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TokenActivitiesV2MaxOrderBy>;
  min?: InputMaybe<TokenActivitiesV2MinOrderBy>;
  stddev?: InputMaybe<TokenActivitiesV2StddevOrderBy>;
  stddev_pop?: InputMaybe<TokenActivitiesV2StddevPopOrderBy>;
  stddev_samp?: InputMaybe<TokenActivitiesV2StddevSampOrderBy>;
  sum?: InputMaybe<TokenActivitiesV2SumOrderBy>;
  var_pop?: InputMaybe<TokenActivitiesV2VarPopOrderBy>;
  var_samp?: InputMaybe<TokenActivitiesV2VarSampOrderBy>;
  variance?: InputMaybe<TokenActivitiesV2VarianceOrderBy>;
};

/** aggregate avg on columns */
export type TokenActivitiesV2AvgFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "token_activities_v2" */
export type TokenActivitiesV2AvgOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "token_activities_v2". All fields are combined with a logical 'AND'. */
export type TokenActivitiesV2BoolExp = {
  _and?: InputMaybe<Array<TokenActivitiesV2BoolExp>>;
  _not?: InputMaybe<TokenActivitiesV2BoolExp>;
  _or?: InputMaybe<Array<TokenActivitiesV2BoolExp>>;
  after_value?: InputMaybe<StringComparisonExp>;
  aptos_names_from?: InputMaybe<CurrentAptosNamesBoolExp>;
  aptos_names_from_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  aptos_names_to?: InputMaybe<CurrentAptosNamesBoolExp>;
  aptos_names_to_aggregate?: InputMaybe<CurrentAptosNamesAggregateBoolExp>;
  before_value?: InputMaybe<StringComparisonExp>;
  current_token_data?: InputMaybe<CurrentTokenDatasV2BoolExp>;
  entry_function_id_str?: InputMaybe<StringComparisonExp>;
  event_account_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<BigintComparisonExp>;
  from_address?: InputMaybe<StringComparisonExp>;
  is_fungible_v2?: InputMaybe<BooleanComparisonExp>;
  property_version_v1?: InputMaybe<NumericComparisonExp>;
  to_address?: InputMaybe<StringComparisonExp>;
  token_amount?: InputMaybe<NumericComparisonExp>;
  token_data_id?: InputMaybe<StringComparisonExp>;
  token_standard?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type TokenActivitiesV2MaxFields = {
  after_value?: Maybe<Scalars['String']['output']>;
  before_value?: Maybe<Scalars['String']['output']>;
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  from_address?: Maybe<Scalars['String']['output']>;
  property_version_v1?: Maybe<Scalars['numeric']['output']>;
  to_address?: Maybe<Scalars['String']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  token_data_id?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "token_activities_v2" */
export type TokenActivitiesV2MaxOrderBy = {
  after_value?: InputMaybe<OrderBy>;
  before_value?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TokenActivitiesV2MinFields = {
  after_value?: Maybe<Scalars['String']['output']>;
  before_value?: Maybe<Scalars['String']['output']>;
  entry_function_id_str?: Maybe<Scalars['String']['output']>;
  event_account_address?: Maybe<Scalars['String']['output']>;
  event_index?: Maybe<Scalars['bigint']['output']>;
  from_address?: Maybe<Scalars['String']['output']>;
  property_version_v1?: Maybe<Scalars['numeric']['output']>;
  to_address?: Maybe<Scalars['String']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  token_data_id?: Maybe<Scalars['String']['output']>;
  token_standard?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "token_activities_v2" */
export type TokenActivitiesV2MinOrderBy = {
  after_value?: InputMaybe<OrderBy>;
  before_value?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "token_activities_v2". */
export type TokenActivitiesV2OrderBy = {
  after_value?: InputMaybe<OrderBy>;
  aptos_names_from_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  aptos_names_to_aggregate?: InputMaybe<CurrentAptosNamesAggregateOrderBy>;
  before_value?: InputMaybe<OrderBy>;
  current_token_data?: InputMaybe<CurrentTokenDatasV2OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  event_account_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  from_address?: InputMaybe<OrderBy>;
  is_fungible_v2?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  to_address?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  token_data_id?: InputMaybe<OrderBy>;
  token_standard?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "token_activities_v2" */
export enum TokenActivitiesV2SelectColumn {
  /** column name */
  AfterValue = 'after_value',
  /** column name */
  BeforeValue = 'before_value',
  /** column name */
  EntryFunctionIdStr = 'entry_function_id_str',
  /** column name */
  EventAccountAddress = 'event_account_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  IsFungibleV2 = 'is_fungible_v2',
  /** column name */
  PropertyVersionV1 = 'property_version_v1',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  TokenAmount = 'token_amount',
  /** column name */
  TokenDataId = 'token_data_id',
  /** column name */
  TokenStandard = 'token_standard',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  Type = 'type'
}

/** select "token_activities_v2_aggregate_bool_exp_bool_and_arguments_columns" columns of table "token_activities_v2" */
export enum TokenActivitiesV2SelectColumnTokenActivitiesV2AggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  IsFungibleV2 = 'is_fungible_v2'
}

/** select "token_activities_v2_aggregate_bool_exp_bool_or_arguments_columns" columns of table "token_activities_v2" */
export enum TokenActivitiesV2SelectColumnTokenActivitiesV2AggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  IsFungibleV2 = 'is_fungible_v2'
}

/** aggregate stddev on columns */
export type TokenActivitiesV2StddevFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "token_activities_v2" */
export type TokenActivitiesV2StddevOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TokenActivitiesV2StddevPopFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "token_activities_v2" */
export type TokenActivitiesV2StddevPopOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TokenActivitiesV2StddevSampFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "token_activities_v2" */
export type TokenActivitiesV2StddevSampOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "token_activities_v2" */
export type TokenActivitiesV2StreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TokenActivitiesV2StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TokenActivitiesV2StreamCursorValueInput = {
  after_value?: InputMaybe<Scalars['String']['input']>;
  before_value?: InputMaybe<Scalars['String']['input']>;
  entry_function_id_str?: InputMaybe<Scalars['String']['input']>;
  event_account_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['bigint']['input']>;
  from_address?: InputMaybe<Scalars['String']['input']>;
  is_fungible_v2?: InputMaybe<Scalars['Boolean']['input']>;
  property_version_v1?: InputMaybe<Scalars['numeric']['input']>;
  to_address?: InputMaybe<Scalars['String']['input']>;
  token_amount?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id?: InputMaybe<Scalars['String']['input']>;
  token_standard?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type TokenActivitiesV2SumFields = {
  event_index?: Maybe<Scalars['bigint']['output']>;
  property_version_v1?: Maybe<Scalars['numeric']['output']>;
  token_amount?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "token_activities_v2" */
export type TokenActivitiesV2SumOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type TokenActivitiesV2VarPopFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "token_activities_v2" */
export type TokenActivitiesV2VarPopOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TokenActivitiesV2VarSampFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "token_activities_v2" */
export type TokenActivitiesV2VarSampOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TokenActivitiesV2VarianceFields = {
  event_index?: Maybe<Scalars['Float']['output']>;
  property_version_v1?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "token_activities_v2" */
export type TokenActivitiesV2VarianceOrderBy = {
  event_index?: InputMaybe<OrderBy>;
  property_version_v1?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type TokenActivitiesVarPopFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesVarPopOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TokenActivitiesVarSampFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesVarSampOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TokenActivitiesVarianceFields = {
  event_creation_number?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  event_sequence_number?: Maybe<Scalars['Float']['output']>;
  property_version?: Maybe<Scalars['Float']['output']>;
  token_amount?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "legacy_migration_v1.token_activities" */
export type TokenActivitiesVarianceOrderBy = {
  event_creation_number?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_sequence_number?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_amount?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** columns and relationships of "legacy_migration_v1.token_datas" */
export type TokenDatas = {
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  default_properties?: Maybe<Scalars['jsonb']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  description_mutable?: Maybe<Scalars['Boolean']['output']>;
  largest_property_version?: Maybe<Scalars['numeric']['output']>;
  maximum?: Maybe<Scalars['numeric']['output']>;
  maximum_mutable?: Maybe<Scalars['Boolean']['output']>;
  metadata_uri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payee_address?: Maybe<Scalars['String']['output']>;
  properties_mutable?: Maybe<Scalars['Boolean']['output']>;
  royalty_mutable?: Maybe<Scalars['Boolean']['output']>;
  royalty_points_denominator?: Maybe<Scalars['String']['output']>;
  royalty_points_numerator?: Maybe<Scalars['String']['output']>;
  supply?: Maybe<Scalars['numeric']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
  uri_mutable?: Maybe<Scalars['Boolean']['output']>;
};


/** columns and relationships of "legacy_migration_v1.token_datas" */
export type TokenDatasDefaultPropertiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.token_datas". All fields are combined with a logical 'AND'. */
export type TokenDatasBoolExp = {
  _and?: InputMaybe<Array<TokenDatasBoolExp>>;
  _not?: InputMaybe<TokenDatasBoolExp>;
  _or?: InputMaybe<Array<TokenDatasBoolExp>>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  default_properties?: InputMaybe<JsonbComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  description_mutable?: InputMaybe<BooleanComparisonExp>;
  largest_property_version?: InputMaybe<NumericComparisonExp>;
  maximum?: InputMaybe<NumericComparisonExp>;
  maximum_mutable?: InputMaybe<BooleanComparisonExp>;
  metadata_uri?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  payee_address?: InputMaybe<StringComparisonExp>;
  properties_mutable?: InputMaybe<BooleanComparisonExp>;
  royalty_mutable?: InputMaybe<BooleanComparisonExp>;
  royalty_points_denominator?: InputMaybe<StringComparisonExp>;
  royalty_points_numerator?: InputMaybe<StringComparisonExp>;
  supply?: InputMaybe<NumericComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
  uri_mutable?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.token_datas". */
export type TokenDatasOrderBy = {
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  default_properties?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  description_mutable?: InputMaybe<OrderBy>;
  largest_property_version?: InputMaybe<OrderBy>;
  maximum?: InputMaybe<OrderBy>;
  maximum_mutable?: InputMaybe<OrderBy>;
  metadata_uri?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  payee_address?: InputMaybe<OrderBy>;
  properties_mutable?: InputMaybe<OrderBy>;
  royalty_mutable?: InputMaybe<OrderBy>;
  royalty_points_denominator?: InputMaybe<OrderBy>;
  royalty_points_numerator?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  uri_mutable?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.token_datas" */
export enum TokenDatasSelectColumn {
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  DefaultProperties = 'default_properties',
  /** column name */
  Description = 'description',
  /** column name */
  DescriptionMutable = 'description_mutable',
  /** column name */
  LargestPropertyVersion = 'largest_property_version',
  /** column name */
  Maximum = 'maximum',
  /** column name */
  MaximumMutable = 'maximum_mutable',
  /** column name */
  MetadataUri = 'metadata_uri',
  /** column name */
  Name = 'name',
  /** column name */
  PayeeAddress = 'payee_address',
  /** column name */
  PropertiesMutable = 'properties_mutable',
  /** column name */
  RoyaltyMutable = 'royalty_mutable',
  /** column name */
  RoyaltyPointsDenominator = 'royalty_points_denominator',
  /** column name */
  RoyaltyPointsNumerator = 'royalty_points_numerator',
  /** column name */
  Supply = 'supply',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  UriMutable = 'uri_mutable'
}

/** Streaming cursor of the table "token_datas" */
export type TokenDatasStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TokenDatasStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TokenDatasStreamCursorValueInput = {
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  default_properties?: InputMaybe<Scalars['jsonb']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  largest_property_version?: InputMaybe<Scalars['numeric']['input']>;
  maximum?: InputMaybe<Scalars['numeric']['input']>;
  maximum_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  metadata_uri?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payee_address?: InputMaybe<Scalars['String']['input']>;
  properties_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  royalty_mutable?: InputMaybe<Scalars['Boolean']['input']>;
  royalty_points_denominator?: InputMaybe<Scalars['String']['input']>;
  royalty_points_numerator?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
  uri_mutable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "legacy_migration_v1.token_ownerships" */
export type TokenOwnerships = {
  amount?: Maybe<Scalars['numeric']['output']>;
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  table_handle?: Maybe<Scalars['String']['output']>;
  table_type?: Maybe<Scalars['String']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.token_ownerships". All fields are combined with a logical 'AND'. */
export type TokenOwnershipsBoolExp = {
  _and?: InputMaybe<Array<TokenOwnershipsBoolExp>>;
  _not?: InputMaybe<TokenOwnershipsBoolExp>;
  _or?: InputMaybe<Array<TokenOwnershipsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  owner_address?: InputMaybe<StringComparisonExp>;
  property_version?: InputMaybe<NumericComparisonExp>;
  table_handle?: InputMaybe<StringComparisonExp>;
  table_type?: InputMaybe<StringComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.token_ownerships". */
export type TokenOwnershipsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner_address?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  table_handle?: InputMaybe<OrderBy>;
  table_type?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.token_ownerships" */
export enum TokenOwnershipsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PropertyVersion = 'property_version',
  /** column name */
  TableHandle = 'table_handle',
  /** column name */
  TableType = 'table_type',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "token_ownerships" */
export type TokenOwnershipsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TokenOwnershipsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TokenOwnershipsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  property_version?: InputMaybe<Scalars['numeric']['input']>;
  table_handle?: InputMaybe<Scalars['String']['input']>;
  table_type?: InputMaybe<Scalars['String']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "legacy_migration_v1.tokens" */
export type Tokens = {
  collection_data_id_hash?: Maybe<Scalars['String']['output']>;
  collection_name?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property_version?: Maybe<Scalars['numeric']['output']>;
  token_data_id_hash?: Maybe<Scalars['String']['output']>;
  token_properties?: Maybe<Scalars['jsonb']['output']>;
  transaction_timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "legacy_migration_v1.tokens" */
export type TokensTokenPropertiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "legacy_migration_v1.tokens". All fields are combined with a logical 'AND'. */
export type TokensBoolExp = {
  _and?: InputMaybe<Array<TokensBoolExp>>;
  _not?: InputMaybe<TokensBoolExp>;
  _or?: InputMaybe<Array<TokensBoolExp>>;
  collection_data_id_hash?: InputMaybe<StringComparisonExp>;
  collection_name?: InputMaybe<StringComparisonExp>;
  creator_address?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  property_version?: InputMaybe<NumericComparisonExp>;
  token_data_id_hash?: InputMaybe<StringComparisonExp>;
  token_properties?: InputMaybe<JsonbComparisonExp>;
  transaction_timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "legacy_migration_v1.tokens". */
export type TokensOrderBy = {
  collection_data_id_hash?: InputMaybe<OrderBy>;
  collection_name?: InputMaybe<OrderBy>;
  creator_address?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  property_version?: InputMaybe<OrderBy>;
  token_data_id_hash?: InputMaybe<OrderBy>;
  token_properties?: InputMaybe<OrderBy>;
  transaction_timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_migration_v1.tokens" */
export enum TokensSelectColumn {
  /** column name */
  CollectionDataIdHash = 'collection_data_id_hash',
  /** column name */
  CollectionName = 'collection_name',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Name = 'name',
  /** column name */
  PropertyVersion = 'property_version',
  /** column name */
  TokenDataIdHash = 'token_data_id_hash',
  /** column name */
  TokenProperties = 'token_properties',
  /** column name */
  TransactionTimestamp = 'transaction_timestamp',
  /** column name */
  TransactionVersion = 'transaction_version'
}

/** Streaming cursor of the table "tokens" */
export type TokensStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TokensStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TokensStreamCursorValueInput = {
  collection_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  collection_name?: InputMaybe<Scalars['String']['input']>;
  creator_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  property_version?: InputMaybe<Scalars['numeric']['input']>;
  token_data_id_hash?: InputMaybe<Scalars['String']['input']>;
  token_properties?: InputMaybe<Scalars['jsonb']['input']>;
  transaction_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "user_transactions" */
export type UserTransactions = {
  block_height: Scalars['bigint']['output'];
  entry_function_contract_address?: Maybe<Scalars['String']['output']>;
  entry_function_function_name?: Maybe<Scalars['String']['output']>;
  entry_function_id_str: Scalars['String']['output'];
  entry_function_module_name?: Maybe<Scalars['String']['output']>;
  epoch: Scalars['bigint']['output'];
  expiration_timestamp_secs: Scalars['timestamp']['output'];
  gas_unit_price: Scalars['numeric']['output'];
  max_gas_amount: Scalars['numeric']['output'];
  parent_signature_type: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  sequence_number?: Maybe<Scalars['bigint']['output']>;
  timestamp: Scalars['timestamp']['output'];
  version: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "user_transactions". All fields are combined with a logical 'AND'. */
export type UserTransactionsBoolExp = {
  _and?: InputMaybe<Array<UserTransactionsBoolExp>>;
  _not?: InputMaybe<UserTransactionsBoolExp>;
  _or?: InputMaybe<Array<UserTransactionsBoolExp>>;
  block_height?: InputMaybe<BigintComparisonExp>;
  entry_function_contract_address?: InputMaybe<StringComparisonExp>;
  entry_function_function_name?: InputMaybe<StringComparisonExp>;
  entry_function_id_str?: InputMaybe<StringComparisonExp>;
  entry_function_module_name?: InputMaybe<StringComparisonExp>;
  epoch?: InputMaybe<BigintComparisonExp>;
  expiration_timestamp_secs?: InputMaybe<TimestampComparisonExp>;
  gas_unit_price?: InputMaybe<NumericComparisonExp>;
  max_gas_amount?: InputMaybe<NumericComparisonExp>;
  parent_signature_type?: InputMaybe<StringComparisonExp>;
  sender?: InputMaybe<StringComparisonExp>;
  sequence_number?: InputMaybe<BigintComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  version?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "user_transactions". */
export type UserTransactionsOrderBy = {
  block_height?: InputMaybe<OrderBy>;
  entry_function_contract_address?: InputMaybe<OrderBy>;
  entry_function_function_name?: InputMaybe<OrderBy>;
  entry_function_id_str?: InputMaybe<OrderBy>;
  entry_function_module_name?: InputMaybe<OrderBy>;
  epoch?: InputMaybe<OrderBy>;
  expiration_timestamp_secs?: InputMaybe<OrderBy>;
  gas_unit_price?: InputMaybe<OrderBy>;
  max_gas_amount?: InputMaybe<OrderBy>;
  parent_signature_type?: InputMaybe<OrderBy>;
  sender?: InputMaybe<OrderBy>;
  sequence_number?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

/** select columns of table "user_transactions" */
export enum UserTransactionsSelectColumn {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  EntryFunctionContractAddress = 'entry_function_contract_address',
  /** column name */
  EntryFunctionFunctionName = 'entry_function_function_name',
  /** column name */
  EntryFunctionIdStr = 'entry_function_id_str',
  /** column name */
  EntryFunctionModuleName = 'entry_function_module_name',
  /** column name */
  Epoch = 'epoch',
  /** column name */
  ExpirationTimestampSecs = 'expiration_timestamp_secs',
  /** column name */
  GasUnitPrice = 'gas_unit_price',
  /** column name */
  MaxGasAmount = 'max_gas_amount',
  /** column name */
  ParentSignatureType = 'parent_signature_type',
  /** column name */
  Sender = 'sender',
  /** column name */
  SequenceNumber = 'sequence_number',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Version = 'version'
}

/** Streaming cursor of the table "user_transactions" */
export type UserTransactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserTransactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserTransactionsStreamCursorValueInput = {
  block_height?: InputMaybe<Scalars['bigint']['input']>;
  entry_function_contract_address?: InputMaybe<Scalars['String']['input']>;
  entry_function_function_name?: InputMaybe<Scalars['String']['input']>;
  entry_function_id_str?: InputMaybe<Scalars['String']['input']>;
  entry_function_module_name?: InputMaybe<Scalars['String']['input']>;
  epoch?: InputMaybe<Scalars['bigint']['input']>;
  expiration_timestamp_secs?: InputMaybe<Scalars['timestamp']['input']>;
  gas_unit_price?: InputMaybe<Scalars['numeric']['input']>;
  max_gas_amount?: InputMaybe<Scalars['numeric']['input']>;
  parent_signature_type?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sequence_number?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "vault_bad_debt_activities" */
export type VaultBadDebtActivities = {
  bad_debt_amount?: Maybe<Scalars['numeric']['output']>;
  bad_debt_shares?: Maybe<Scalars['numeric']['output']>;
  borrow_protocol?: Maybe<Scalars['String']['output']>;
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index: Scalars['numeric']['output'];
  event_type?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_bad_debt_after?: Maybe<Scalars['numeric']['output']>;
  total_bad_debt_before?: Maybe<Scalars['numeric']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "vault_bad_debt_activities" */
export type VaultBadDebtActivitiesAggregate = {
  aggregate?: Maybe<VaultBadDebtActivitiesAggregateFields>;
  nodes: Array<VaultBadDebtActivities>;
};

/** aggregate fields of "vault_bad_debt_activities" */
export type VaultBadDebtActivitiesAggregateFields = {
  avg?: Maybe<VaultBadDebtActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VaultBadDebtActivitiesMaxFields>;
  min?: Maybe<VaultBadDebtActivitiesMinFields>;
  stddev?: Maybe<VaultBadDebtActivitiesStddevFields>;
  stddev_pop?: Maybe<VaultBadDebtActivitiesStddevPopFields>;
  stddev_samp?: Maybe<VaultBadDebtActivitiesStddevSampFields>;
  sum?: Maybe<VaultBadDebtActivitiesSumFields>;
  var_pop?: Maybe<VaultBadDebtActivitiesVarPopFields>;
  var_samp?: Maybe<VaultBadDebtActivitiesVarSampFields>;
  variance?: Maybe<VaultBadDebtActivitiesVarianceFields>;
};


/** aggregate fields of "vault_bad_debt_activities" */
export type VaultBadDebtActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VaultBadDebtActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type VaultBadDebtActivitiesAvgFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vault_bad_debt_activities". All fields are combined with a logical 'AND'. */
export type VaultBadDebtActivitiesBoolExp = {
  _and?: InputMaybe<Array<VaultBadDebtActivitiesBoolExp>>;
  _not?: InputMaybe<VaultBadDebtActivitiesBoolExp>;
  _or?: InputMaybe<Array<VaultBadDebtActivitiesBoolExp>>;
  bad_debt_amount?: InputMaybe<NumericComparisonExp>;
  bad_debt_shares?: InputMaybe<NumericComparisonExp>;
  borrow_protocol?: InputMaybe<StringComparisonExp>;
  debt_store_address?: InputMaybe<StringComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  event_type?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  total_bad_debt_after?: InputMaybe<NumericComparisonExp>;
  total_bad_debt_before?: InputMaybe<NumericComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type VaultBadDebtActivitiesMaxFields = {
  bad_debt_amount?: Maybe<Scalars['numeric']['output']>;
  bad_debt_shares?: Maybe<Scalars['numeric']['output']>;
  borrow_protocol?: Maybe<Scalars['String']['output']>;
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  event_type?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_bad_debt_after?: Maybe<Scalars['numeric']['output']>;
  total_bad_debt_before?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VaultBadDebtActivitiesMinFields = {
  bad_debt_amount?: Maybe<Scalars['numeric']['output']>;
  bad_debt_shares?: Maybe<Scalars['numeric']['output']>;
  borrow_protocol?: Maybe<Scalars['String']['output']>;
  debt_store_address?: Maybe<Scalars['String']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  event_type?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_bad_debt_after?: Maybe<Scalars['numeric']['output']>;
  total_bad_debt_before?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "vault_bad_debt_activities". */
export type VaultBadDebtActivitiesOrderBy = {
  bad_debt_amount?: InputMaybe<OrderBy>;
  bad_debt_shares?: InputMaybe<OrderBy>;
  borrow_protocol?: InputMaybe<OrderBy>;
  debt_store_address?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  event_type?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  total_bad_debt_after?: InputMaybe<OrderBy>;
  total_bad_debt_before?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_bad_debt_activities" */
export enum VaultBadDebtActivitiesSelectColumn {
  /** column name */
  BadDebtAmount = 'bad_debt_amount',
  /** column name */
  BadDebtShares = 'bad_debt_shares',
  /** column name */
  BorrowProtocol = 'borrow_protocol',
  /** column name */
  DebtStoreAddress = 'debt_store_address',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalBadDebtAfter = 'total_bad_debt_after',
  /** column name */
  TotalBadDebtBefore = 'total_bad_debt_before',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** aggregate stddev on columns */
export type VaultBadDebtActivitiesStddevFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type VaultBadDebtActivitiesStddevPopFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type VaultBadDebtActivitiesStddevSampFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vault_bad_debt_activities" */
export type VaultBadDebtActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultBadDebtActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultBadDebtActivitiesStreamCursorValueInput = {
  bad_debt_amount?: InputMaybe<Scalars['numeric']['input']>;
  bad_debt_shares?: InputMaybe<Scalars['numeric']['input']>;
  borrow_protocol?: InputMaybe<Scalars['String']['input']>;
  debt_store_address?: InputMaybe<Scalars['String']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  event_type?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_bad_debt_after?: InputMaybe<Scalars['numeric']['input']>;
  total_bad_debt_before?: InputMaybe<Scalars['numeric']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type VaultBadDebtActivitiesSumFields = {
  bad_debt_amount?: Maybe<Scalars['numeric']['output']>;
  bad_debt_shares?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  total_bad_debt_after?: Maybe<Scalars['numeric']['output']>;
  total_bad_debt_before?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type VaultBadDebtActivitiesVarPopFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type VaultBadDebtActivitiesVarSampFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type VaultBadDebtActivitiesVarianceFields = {
  bad_debt_amount?: Maybe<Scalars['Float']['output']>;
  bad_debt_shares?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_after?: Maybe<Scalars['Float']['output']>;
  total_bad_debt_before?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "vault_emergency_activities" */
export type VaultEmergencyActivities = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
  withdrawn_by?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "vault_emergency_activities" */
export type VaultEmergencyActivitiesAggregate = {
  aggregate?: Maybe<VaultEmergencyActivitiesAggregateFields>;
  nodes: Array<VaultEmergencyActivities>;
};

/** aggregate fields of "vault_emergency_activities" */
export type VaultEmergencyActivitiesAggregateFields = {
  avg?: Maybe<VaultEmergencyActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VaultEmergencyActivitiesMaxFields>;
  min?: Maybe<VaultEmergencyActivitiesMinFields>;
  stddev?: Maybe<VaultEmergencyActivitiesStddevFields>;
  stddev_pop?: Maybe<VaultEmergencyActivitiesStddevPopFields>;
  stddev_samp?: Maybe<VaultEmergencyActivitiesStddevSampFields>;
  sum?: Maybe<VaultEmergencyActivitiesSumFields>;
  var_pop?: Maybe<VaultEmergencyActivitiesVarPopFields>;
  var_samp?: Maybe<VaultEmergencyActivitiesVarSampFields>;
  variance?: Maybe<VaultEmergencyActivitiesVarianceFields>;
};


/** aggregate fields of "vault_emergency_activities" */
export type VaultEmergencyActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VaultEmergencyActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type VaultEmergencyActivitiesAvgFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vault_emergency_activities". All fields are combined with a logical 'AND'. */
export type VaultEmergencyActivitiesBoolExp = {
  _and?: InputMaybe<Array<VaultEmergencyActivitiesBoolExp>>;
  _not?: InputMaybe<VaultEmergencyActivitiesBoolExp>;
  _or?: InputMaybe<Array<VaultEmergencyActivitiesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
  withdrawn_by?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type VaultEmergencyActivitiesMaxFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
  withdrawn_by?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VaultEmergencyActivitiesMinFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
  withdrawn_by?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "vault_emergency_activities". */
export type VaultEmergencyActivitiesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
  withdrawn_by?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_emergency_activities" */
export enum VaultEmergencyActivitiesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address',
  /** column name */
  WithdrawnBy = 'withdrawn_by'
}

/** aggregate stddev on columns */
export type VaultEmergencyActivitiesStddevFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type VaultEmergencyActivitiesStddevPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type VaultEmergencyActivitiesStddevSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vault_emergency_activities" */
export type VaultEmergencyActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultEmergencyActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultEmergencyActivitiesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
  withdrawn_by?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type VaultEmergencyActivitiesSumFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type VaultEmergencyActivitiesVarPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type VaultEmergencyActivitiesVarSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type VaultEmergencyActivitiesVarianceFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "vault_flashloan_activities" */
export type VaultFlashloanActivities = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  fee?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "vault_flashloan_activities" */
export type VaultFlashloanActivitiesAggregate = {
  aggregate?: Maybe<VaultFlashloanActivitiesAggregateFields>;
  nodes: Array<VaultFlashloanActivities>;
};

/** aggregate fields of "vault_flashloan_activities" */
export type VaultFlashloanActivitiesAggregateFields = {
  avg?: Maybe<VaultFlashloanActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VaultFlashloanActivitiesMaxFields>;
  min?: Maybe<VaultFlashloanActivitiesMinFields>;
  stddev?: Maybe<VaultFlashloanActivitiesStddevFields>;
  stddev_pop?: Maybe<VaultFlashloanActivitiesStddevPopFields>;
  stddev_samp?: Maybe<VaultFlashloanActivitiesStddevSampFields>;
  sum?: Maybe<VaultFlashloanActivitiesSumFields>;
  var_pop?: Maybe<VaultFlashloanActivitiesVarPopFields>;
  var_samp?: Maybe<VaultFlashloanActivitiesVarSampFields>;
  variance?: Maybe<VaultFlashloanActivitiesVarianceFields>;
};


/** aggregate fields of "vault_flashloan_activities" */
export type VaultFlashloanActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VaultFlashloanActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type VaultFlashloanActivitiesAvgFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vault_flashloan_activities". All fields are combined with a logical 'AND'. */
export type VaultFlashloanActivitiesBoolExp = {
  _and?: InputMaybe<Array<VaultFlashloanActivitiesBoolExp>>;
  _not?: InputMaybe<VaultFlashloanActivitiesBoolExp>;
  _or?: InputMaybe<Array<VaultFlashloanActivitiesBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  fee?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type VaultFlashloanActivitiesMaxFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VaultFlashloanActivitiesMinFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "vault_flashloan_activities". */
export type VaultFlashloanActivitiesOrderBy = {
  amount?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  fee?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_flashloan_activities" */
export enum VaultFlashloanActivitiesSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  Fee = 'fee',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** aggregate stddev on columns */
export type VaultFlashloanActivitiesStddevFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type VaultFlashloanActivitiesStddevPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type VaultFlashloanActivitiesStddevSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vault_flashloan_activities" */
export type VaultFlashloanActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultFlashloanActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultFlashloanActivitiesStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  fee?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type VaultFlashloanActivitiesSumFields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type VaultFlashloanActivitiesVarPopFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type VaultFlashloanActivitiesVarSampFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type VaultFlashloanActivitiesVarianceFields = {
  amount?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "vault_info" */
export type VaultInfo = {
  /** An object relationship */
  adaptive_irm_config?: Maybe<AdaptiveIrmCurrentConfig>;
  creator?: Maybe<Scalars['String']['output']>;
  debt_asset?: Maybe<Scalars['String']['output']>;
  debt_asset_metadata?: Maybe<FungibleAssetMetadata>;
  /** An object relationship */
  fixed_rate_irm_config?: Maybe<FixedRateIrmCurrentConfig>;
  governance_object?: Maybe<CurrentObjects>;
  governance_object_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  kinked_irm_config?: Maybe<KinkedIrmCurrentConfig>;
  /** An array relationship */
  protocol_configs: Array<VaultProtocolCaps>;
  /** An aggregate relationship */
  protocol_configs_aggregate: VaultProtocolCapsAggregate;
  /** An object relationship */
  settings?: Maybe<VaultSettings>;
  underlying_asset?: Maybe<Scalars['String']['output']>;
  underlying_asset_balance?: Maybe<CurrentFungibleAssetBalances>;
  underlying_asset_metadata?: Maybe<FungibleAssetMetadata>;
  underlying_asset_store?: Maybe<Scalars['String']['output']>;
  vault_address: Scalars['String']['output'];
  vault_asset_metadata?: Maybe<FungibleAssetMetadata>;
};


/** columns and relationships of "vault_info" */
export type VaultInfoProtocolConfigsArgs = {
  distinct_on?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultProtocolCapsOrderBy>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};


/** columns and relationships of "vault_info" */
export type VaultInfoProtocolConfigsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VaultProtocolCapsOrderBy>>;
  where?: InputMaybe<VaultProtocolCapsBoolExp>;
};

/** aggregated selection of "vault_info" */
export type VaultInfoAggregate = {
  aggregate?: Maybe<VaultInfoAggregateFields>;
  nodes: Array<VaultInfo>;
};

/** aggregate fields of "vault_info" */
export type VaultInfoAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<VaultInfoMaxFields>;
  min?: Maybe<VaultInfoMinFields>;
};


/** aggregate fields of "vault_info" */
export type VaultInfoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VaultInfoSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "vault_info". All fields are combined with a logical 'AND'. */
export type VaultInfoBoolExp = {
  _and?: InputMaybe<Array<VaultInfoBoolExp>>;
  _not?: InputMaybe<VaultInfoBoolExp>;
  _or?: InputMaybe<Array<VaultInfoBoolExp>>;
  adaptive_irm_config?: InputMaybe<AdaptiveIrmCurrentConfigBoolExp>;
  creator?: InputMaybe<StringComparisonExp>;
  debt_asset?: InputMaybe<StringComparisonExp>;
  fixed_rate_irm_config?: InputMaybe<FixedRateIrmCurrentConfigBoolExp>;
  governance_object_address?: InputMaybe<StringComparisonExp>;
  kinked_irm_config?: InputMaybe<KinkedIrmCurrentConfigBoolExp>;
  protocol_configs?: InputMaybe<VaultProtocolCapsBoolExp>;
  protocol_configs_aggregate?: InputMaybe<VaultProtocolCapsAggregateBoolExp>;
  settings?: InputMaybe<VaultSettingsBoolExp>;
  underlying_asset?: InputMaybe<StringComparisonExp>;
  underlying_asset_store?: InputMaybe<StringComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type VaultInfoMaxFields = {
  creator?: Maybe<Scalars['String']['output']>;
  debt_asset?: Maybe<Scalars['String']['output']>;
  governance_object_address?: Maybe<Scalars['String']['output']>;
  underlying_asset?: Maybe<Scalars['String']['output']>;
  underlying_asset_store?: Maybe<Scalars['String']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VaultInfoMinFields = {
  creator?: Maybe<Scalars['String']['output']>;
  debt_asset?: Maybe<Scalars['String']['output']>;
  governance_object_address?: Maybe<Scalars['String']['output']>;
  underlying_asset?: Maybe<Scalars['String']['output']>;
  underlying_asset_store?: Maybe<Scalars['String']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "vault_info". */
export type VaultInfoOrderBy = {
  adaptive_irm_config?: InputMaybe<AdaptiveIrmCurrentConfigOrderBy>;
  creator?: InputMaybe<OrderBy>;
  debt_asset?: InputMaybe<OrderBy>;
  fixed_rate_irm_config?: InputMaybe<FixedRateIrmCurrentConfigOrderBy>;
  governance_object_address?: InputMaybe<OrderBy>;
  kinked_irm_config?: InputMaybe<KinkedIrmCurrentConfigOrderBy>;
  protocol_configs_aggregate?: InputMaybe<VaultProtocolCapsAggregateOrderBy>;
  settings?: InputMaybe<VaultSettingsOrderBy>;
  underlying_asset?: InputMaybe<OrderBy>;
  underlying_asset_store?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_info" */
export enum VaultInfoSelectColumn {
  /** column name */
  Creator = 'creator',
  /** column name */
  DebtAsset = 'debt_asset',
  /** column name */
  GovernanceObjectAddress = 'governance_object_address',
  /** column name */
  UnderlyingAsset = 'underlying_asset',
  /** column name */
  UnderlyingAssetStore = 'underlying_asset_store',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "vault_info" */
export type VaultInfoStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultInfoStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultInfoStreamCursorValueInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  debt_asset?: InputMaybe<Scalars['String']['input']>;
  governance_object_address?: InputMaybe<Scalars['String']['input']>;
  underlying_asset?: InputMaybe<Scalars['String']['input']>;
  underlying_asset_store?: InputMaybe<Scalars['String']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "vault_protocol_caps" */
export type VaultProtocolCaps = {
  borrow_cap?: Maybe<Scalars['numeric']['output']>;
  borrow_enabled?: Maybe<Scalars['Boolean']['output']>;
  protocol_module_address?: Maybe<Scalars['String']['output']>;
  protocol_module_name?: Maybe<Scalars['String']['output']>;
  protocol_struct_name?: Maybe<Scalars['String']['output']>;
  supply_enabled?: Maybe<Scalars['Boolean']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "vault_protocol_caps" */
export type VaultProtocolCapsAggregate = {
  aggregate?: Maybe<VaultProtocolCapsAggregateFields>;
  nodes: Array<VaultProtocolCaps>;
};

export type VaultProtocolCapsAggregateBoolExp = {
  bool_and?: InputMaybe<VaultProtocolCapsAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<VaultProtocolCapsAggregateBoolExpBoolOr>;
  count?: InputMaybe<VaultProtocolCapsAggregateBoolExpCount>;
};

export type VaultProtocolCapsAggregateBoolExpBoolAnd = {
  arguments: VaultProtocolCapsSelectColumnVaultProtocolCapsAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<VaultProtocolCapsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type VaultProtocolCapsAggregateBoolExpBoolOr = {
  arguments: VaultProtocolCapsSelectColumnVaultProtocolCapsAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<VaultProtocolCapsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type VaultProtocolCapsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<VaultProtocolCapsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "vault_protocol_caps" */
export type VaultProtocolCapsAggregateFields = {
  avg?: Maybe<VaultProtocolCapsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VaultProtocolCapsMaxFields>;
  min?: Maybe<VaultProtocolCapsMinFields>;
  stddev?: Maybe<VaultProtocolCapsStddevFields>;
  stddev_pop?: Maybe<VaultProtocolCapsStddevPopFields>;
  stddev_samp?: Maybe<VaultProtocolCapsStddevSampFields>;
  sum?: Maybe<VaultProtocolCapsSumFields>;
  var_pop?: Maybe<VaultProtocolCapsVarPopFields>;
  var_samp?: Maybe<VaultProtocolCapsVarSampFields>;
  variance?: Maybe<VaultProtocolCapsVarianceFields>;
};


/** aggregate fields of "vault_protocol_caps" */
export type VaultProtocolCapsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VaultProtocolCapsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vault_protocol_caps" */
export type VaultProtocolCapsAggregateOrderBy = {
  avg?: InputMaybe<VaultProtocolCapsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<VaultProtocolCapsMaxOrderBy>;
  min?: InputMaybe<VaultProtocolCapsMinOrderBy>;
  stddev?: InputMaybe<VaultProtocolCapsStddevOrderBy>;
  stddev_pop?: InputMaybe<VaultProtocolCapsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<VaultProtocolCapsStddevSampOrderBy>;
  sum?: InputMaybe<VaultProtocolCapsSumOrderBy>;
  var_pop?: InputMaybe<VaultProtocolCapsVarPopOrderBy>;
  var_samp?: InputMaybe<VaultProtocolCapsVarSampOrderBy>;
  variance?: InputMaybe<VaultProtocolCapsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type VaultProtocolCapsAvgFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsAvgOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "vault_protocol_caps". All fields are combined with a logical 'AND'. */
export type VaultProtocolCapsBoolExp = {
  _and?: InputMaybe<Array<VaultProtocolCapsBoolExp>>;
  _not?: InputMaybe<VaultProtocolCapsBoolExp>;
  _or?: InputMaybe<Array<VaultProtocolCapsBoolExp>>;
  borrow_cap?: InputMaybe<NumericComparisonExp>;
  borrow_enabled?: InputMaybe<BooleanComparisonExp>;
  protocol_module_address?: InputMaybe<StringComparisonExp>;
  protocol_module_name?: InputMaybe<StringComparisonExp>;
  protocol_struct_name?: InputMaybe<StringComparisonExp>;
  supply_enabled?: InputMaybe<BooleanComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type VaultProtocolCapsMaxFields = {
  borrow_cap?: Maybe<Scalars['numeric']['output']>;
  protocol_module_address?: Maybe<Scalars['String']['output']>;
  protocol_module_name?: Maybe<Scalars['String']['output']>;
  protocol_struct_name?: Maybe<Scalars['String']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsMaxOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
  protocol_module_address?: InputMaybe<OrderBy>;
  protocol_module_name?: InputMaybe<OrderBy>;
  protocol_struct_name?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type VaultProtocolCapsMinFields = {
  borrow_cap?: Maybe<Scalars['numeric']['output']>;
  protocol_module_address?: Maybe<Scalars['String']['output']>;
  protocol_module_name?: Maybe<Scalars['String']['output']>;
  protocol_struct_name?: Maybe<Scalars['String']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsMinOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
  protocol_module_address?: InputMaybe<OrderBy>;
  protocol_module_name?: InputMaybe<OrderBy>;
  protocol_struct_name?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "vault_protocol_caps". */
export type VaultProtocolCapsOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
  borrow_enabled?: InputMaybe<OrderBy>;
  protocol_module_address?: InputMaybe<OrderBy>;
  protocol_module_name?: InputMaybe<OrderBy>;
  protocol_struct_name?: InputMaybe<OrderBy>;
  supply_enabled?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_protocol_caps" */
export enum VaultProtocolCapsSelectColumn {
  /** column name */
  BorrowCap = 'borrow_cap',
  /** column name */
  BorrowEnabled = 'borrow_enabled',
  /** column name */
  ProtocolModuleAddress = 'protocol_module_address',
  /** column name */
  ProtocolModuleName = 'protocol_module_name',
  /** column name */
  ProtocolStructName = 'protocol_struct_name',
  /** column name */
  SupplyEnabled = 'supply_enabled',
  /** column name */
  VaultAddress = 'vault_address'
}

/** select "vault_protocol_caps_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vault_protocol_caps" */
export enum VaultProtocolCapsSelectColumnVaultProtocolCapsAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  BorrowEnabled = 'borrow_enabled',
  /** column name */
  SupplyEnabled = 'supply_enabled'
}

/** select "vault_protocol_caps_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vault_protocol_caps" */
export enum VaultProtocolCapsSelectColumnVaultProtocolCapsAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  BorrowEnabled = 'borrow_enabled',
  /** column name */
  SupplyEnabled = 'supply_enabled'
}

/** aggregate stddev on columns */
export type VaultProtocolCapsStddevFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsStddevOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type VaultProtocolCapsStddevPopFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsStddevPopOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type VaultProtocolCapsStddevSampFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsStddevSampOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "vault_protocol_caps" */
export type VaultProtocolCapsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultProtocolCapsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultProtocolCapsStreamCursorValueInput = {
  borrow_cap?: InputMaybe<Scalars['numeric']['input']>;
  borrow_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  protocol_module_address?: InputMaybe<Scalars['String']['input']>;
  protocol_module_name?: InputMaybe<Scalars['String']['input']>;
  protocol_struct_name?: InputMaybe<Scalars['String']['input']>;
  supply_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type VaultProtocolCapsSumFields = {
  borrow_cap?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsSumOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type VaultProtocolCapsVarPopFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsVarPopOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type VaultProtocolCapsVarSampFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsVarSampOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type VaultProtocolCapsVarianceFields = {
  borrow_cap?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vault_protocol_caps" */
export type VaultProtocolCapsVarianceOrderBy = {
  borrow_cap?: InputMaybe<OrderBy>;
};

/** columns and relationships of "vault_settings" */
export type VaultSettings = {
  auto_socialize_debt_enabled?: Maybe<Scalars['Boolean']['output']>;
  emergency_withdraw_enabled?: Maybe<Scalars['Boolean']['output']>;
  fee_store_address?: Maybe<Scalars['String']['output']>;
  flashloan_enabled?: Maybe<Scalars['Boolean']['output']>;
  flashloan_fee_rate?: Maybe<Scalars['numeric']['output']>;
  flashloan_fee_store_address?: Maybe<Scalars['String']['output']>;
  interest_fee_rate?: Maybe<Scalars['numeric']['output']>;
  irm_kind?: Maybe<Scalars['numeric']['output']>;
  is_paused?: Maybe<Scalars['Boolean']['output']>;
  vault_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "vault_settings". All fields are combined with a logical 'AND'. */
export type VaultSettingsBoolExp = {
  _and?: InputMaybe<Array<VaultSettingsBoolExp>>;
  _not?: InputMaybe<VaultSettingsBoolExp>;
  _or?: InputMaybe<Array<VaultSettingsBoolExp>>;
  auto_socialize_debt_enabled?: InputMaybe<BooleanComparisonExp>;
  emergency_withdraw_enabled?: InputMaybe<BooleanComparisonExp>;
  fee_store_address?: InputMaybe<StringComparisonExp>;
  flashloan_enabled?: InputMaybe<BooleanComparisonExp>;
  flashloan_fee_rate?: InputMaybe<NumericComparisonExp>;
  flashloan_fee_store_address?: InputMaybe<StringComparisonExp>;
  interest_fee_rate?: InputMaybe<NumericComparisonExp>;
  irm_kind?: InputMaybe<NumericComparisonExp>;
  is_paused?: InputMaybe<BooleanComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "vault_settings". */
export type VaultSettingsOrderBy = {
  auto_socialize_debt_enabled?: InputMaybe<OrderBy>;
  emergency_withdraw_enabled?: InputMaybe<OrderBy>;
  fee_store_address?: InputMaybe<OrderBy>;
  flashloan_enabled?: InputMaybe<OrderBy>;
  flashloan_fee_rate?: InputMaybe<OrderBy>;
  flashloan_fee_store_address?: InputMaybe<OrderBy>;
  interest_fee_rate?: InputMaybe<OrderBy>;
  irm_kind?: InputMaybe<OrderBy>;
  is_paused?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_settings" */
export enum VaultSettingsSelectColumn {
  /** column name */
  AutoSocializeDebtEnabled = 'auto_socialize_debt_enabled',
  /** column name */
  EmergencyWithdrawEnabled = 'emergency_withdraw_enabled',
  /** column name */
  FeeStoreAddress = 'fee_store_address',
  /** column name */
  FlashloanEnabled = 'flashloan_enabled',
  /** column name */
  FlashloanFeeRate = 'flashloan_fee_rate',
  /** column name */
  FlashloanFeeStoreAddress = 'flashloan_fee_store_address',
  /** column name */
  InterestFeeRate = 'interest_fee_rate',
  /** column name */
  IrmKind = 'irm_kind',
  /** column name */
  IsPaused = 'is_paused',
  /** column name */
  VaultAddress = 'vault_address'
}

/** Streaming cursor of the table "vault_settings" */
export type VaultSettingsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultSettingsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultSettingsStreamCursorValueInput = {
  auto_socialize_debt_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  emergency_withdraw_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  fee_store_address?: InputMaybe<Scalars['String']['input']>;
  flashloan_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  flashloan_fee_rate?: InputMaybe<Scalars['numeric']['input']>;
  flashloan_fee_store_address?: InputMaybe<Scalars['String']['input']>;
  interest_fee_rate?: InputMaybe<Scalars['numeric']['input']>;
  irm_kind?: InputMaybe<Scalars['numeric']['input']>;
  is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "vault_states_activities" */
export type VaultStatesActivities = {
  bad_debt?: Maybe<Scalars['numeric']['output']>;
  cash?: Maybe<Scalars['numeric']['output']>;
  current_interest_rate?: Maybe<Scalars['numeric']['output']>;
  event_index: Scalars['numeric']['output'];
  last_interest_update_time?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_borrows?: Maybe<Scalars['numeric']['output']>;
  total_debt_shares?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version: Scalars['numeric']['output'];
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "vault_states_activities" */
export type VaultStatesActivitiesAggregate = {
  aggregate?: Maybe<VaultStatesActivitiesAggregateFields>;
  nodes: Array<VaultStatesActivities>;
};

/** aggregate fields of "vault_states_activities" */
export type VaultStatesActivitiesAggregateFields = {
  avg?: Maybe<VaultStatesActivitiesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<VaultStatesActivitiesMaxFields>;
  min?: Maybe<VaultStatesActivitiesMinFields>;
  stddev?: Maybe<VaultStatesActivitiesStddevFields>;
  stddev_pop?: Maybe<VaultStatesActivitiesStddevPopFields>;
  stddev_samp?: Maybe<VaultStatesActivitiesStddevSampFields>;
  sum?: Maybe<VaultStatesActivitiesSumFields>;
  var_pop?: Maybe<VaultStatesActivitiesVarPopFields>;
  var_samp?: Maybe<VaultStatesActivitiesVarSampFields>;
  variance?: Maybe<VaultStatesActivitiesVarianceFields>;
};


/** aggregate fields of "vault_states_activities" */
export type VaultStatesActivitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VaultStatesActivitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type VaultStatesActivitiesAvgFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vault_states_activities". All fields are combined with a logical 'AND'. */
export type VaultStatesActivitiesBoolExp = {
  _and?: InputMaybe<Array<VaultStatesActivitiesBoolExp>>;
  _not?: InputMaybe<VaultStatesActivitiesBoolExp>;
  _or?: InputMaybe<Array<VaultStatesActivitiesBoolExp>>;
  bad_debt?: InputMaybe<NumericComparisonExp>;
  cash?: InputMaybe<NumericComparisonExp>;
  current_interest_rate?: InputMaybe<NumericComparisonExp>;
  event_index?: InputMaybe<NumericComparisonExp>;
  last_interest_update_time?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestampComparisonExp>;
  total_borrows?: InputMaybe<NumericComparisonExp>;
  total_debt_shares?: InputMaybe<NumericComparisonExp>;
  total_shares?: InputMaybe<NumericComparisonExp>;
  transaction_version?: InputMaybe<NumericComparisonExp>;
  vault_address?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type VaultStatesActivitiesMaxFields = {
  bad_debt?: Maybe<Scalars['numeric']['output']>;
  cash?: Maybe<Scalars['numeric']['output']>;
  current_interest_rate?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  last_interest_update_time?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_borrows?: Maybe<Scalars['numeric']['output']>;
  total_debt_shares?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VaultStatesActivitiesMinFields = {
  bad_debt?: Maybe<Scalars['numeric']['output']>;
  cash?: Maybe<Scalars['numeric']['output']>;
  current_interest_rate?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  last_interest_update_time?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_borrows?: Maybe<Scalars['numeric']['output']>;
  total_debt_shares?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
  vault_address?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "vault_states_activities". */
export type VaultStatesActivitiesOrderBy = {
  bad_debt?: InputMaybe<OrderBy>;
  cash?: InputMaybe<OrderBy>;
  current_interest_rate?: InputMaybe<OrderBy>;
  event_index?: InputMaybe<OrderBy>;
  last_interest_update_time?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  total_borrows?: InputMaybe<OrderBy>;
  total_debt_shares?: InputMaybe<OrderBy>;
  total_shares?: InputMaybe<OrderBy>;
  transaction_version?: InputMaybe<OrderBy>;
  vault_address?: InputMaybe<OrderBy>;
};

/** select columns of table "vault_states_activities" */
export enum VaultStatesActivitiesSelectColumn {
  /** column name */
  BadDebt = 'bad_debt',
  /** column name */
  Cash = 'cash',
  /** column name */
  CurrentInterestRate = 'current_interest_rate',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  LastInterestUpdateTime = 'last_interest_update_time',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalBorrows = 'total_borrows',
  /** column name */
  TotalDebtShares = 'total_debt_shares',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  TransactionVersion = 'transaction_version',
  /** column name */
  VaultAddress = 'vault_address'
}

/** aggregate stddev on columns */
export type VaultStatesActivitiesStddevFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type VaultStatesActivitiesStddevPopFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type VaultStatesActivitiesStddevSampFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vault_states_activities" */
export type VaultStatesActivitiesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: VaultStatesActivitiesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VaultStatesActivitiesStreamCursorValueInput = {
  bad_debt?: InputMaybe<Scalars['numeric']['input']>;
  cash?: InputMaybe<Scalars['numeric']['input']>;
  current_interest_rate?: InputMaybe<Scalars['numeric']['input']>;
  event_index?: InputMaybe<Scalars['numeric']['input']>;
  last_interest_update_time?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_borrows?: InputMaybe<Scalars['numeric']['input']>;
  total_debt_shares?: InputMaybe<Scalars['numeric']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  transaction_version?: InputMaybe<Scalars['numeric']['input']>;
  vault_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type VaultStatesActivitiesSumFields = {
  bad_debt?: Maybe<Scalars['numeric']['output']>;
  cash?: Maybe<Scalars['numeric']['output']>;
  current_interest_rate?: Maybe<Scalars['numeric']['output']>;
  event_index?: Maybe<Scalars['numeric']['output']>;
  last_interest_update_time?: Maybe<Scalars['numeric']['output']>;
  total_borrows?: Maybe<Scalars['numeric']['output']>;
  total_debt_shares?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_version?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type VaultStatesActivitiesVarPopFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type VaultStatesActivitiesVarSampFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type VaultStatesActivitiesVarianceFields = {
  bad_debt?: Maybe<Scalars['Float']['output']>;
  cash?: Maybe<Scalars['Float']['output']>;
  current_interest_rate?: Maybe<Scalars['Float']['output']>;
  event_index?: Maybe<Scalars['Float']['output']>;
  last_interest_update_time?: Maybe<Scalars['Float']['output']>;
  total_borrows?: Maybe<Scalars['Float']['output']>;
  total_debt_shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
  transaction_version?: Maybe<Scalars['Float']['output']>;
};
