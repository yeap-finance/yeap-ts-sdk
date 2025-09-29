/* eslint-disable camelcase */

// const TAPP_API_BASE_URL = "https://display-engine.dev.tapp-dex.devucc.name/api/v1";
const TAPP_API_BASE_URL = 'https://api.tapp.exchange/api/v1';

// #region Generic JSON-RPC types
interface JsonRpcRequest<T> {
  method: string;
  jsonrpc: '2.0';
  id: number;
  params: {
    query: T;
  };
}

interface JsonRpcResponse<T> {
  jsonrpc: '2.0';
  id: number;
  method: string;
  result: T;
  usIn: number;
  usOut: number;
  usDiff: number;
}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
}
// #endregion

// #region API Response Types
interface Apr {
  feeAprPercentage: number;
  boostedAprPercentage: number;
  campaignAprs: any[];
  totalAprPercentage: number;
}

interface PoolTokenSummary {
  addr: string;
  symbol: string;
  img: string;
  verified: boolean;
  amount: number;
  reserve: number;
  color: string;
}

export interface Pool {
  poolId: string;
  poolType: 'AMM' | 'CLMM' | 'STABLE';
  createdAt: string;
  fee: string;
  feeTier: string;
  tvl: string;
  txns: number | string;
  volume: string;
  volumeData: {
    volume24h: number;
    volume7d: number;
    volume30d: number;
    volumeprev24h: number;
  };
  volumePercentage24h: string;
  volumePercentage7d: string;
  volumePercentage30d: string;
  apr: Apr;
  tokens: PoolTokenSummary[];
}

interface PoolStatsToken {
  idx: number;
  addr: string;
  symbol: string;
  img: string;
  amount: number;
  amount_change?: number;
  tvl?: number;
  tvl_change?: number;
  color: string;
  verified: boolean;
}

export interface PoolStats {
  poolId: string;
  poolType: 'AMM' | 'CLMM' | 'STABLE';
  feeTier: string;
  tvl: string;
  volume24h: string | null;
  fee24h: string | null;
  apr: Apr;
  tokens: PoolStatsToken[];
}

export interface Token {
  addr: string;
  name: string;
  ticker: string;
  decimals: number;
  img: string;
  isVerified: boolean;
  price: string;
  tvl: string;
  txnCount: number;
  volume: string;
  createdAt: string;
  price1hPercentage: string;
  price24hPercentage: string;
  price7dPercentage: string;
  price30dPercentage: string;
}

interface PoolInfoToken {
  addr: string;
  decimals: number;
  reserve: number;
  ticker: string;
  color: string;
  verified: boolean;
}

export interface PoolInfo {
  poolId: string;
  poolType: 'AMM' | 'CLMM' | 'STABLE';
  feeTier: string;
  sqrtPrice: string;
  tickSpacing: number;
  tokens: PoolInfoToken[];
  totalShare: string;
}

interface PositionTokenDetails {
  addr: string;
  amount: string;
  color: string;
  decimals: number;
  idx: number;
  img: string;
  symbol: string;
  usd: string;
  verified: boolean;
}

export interface Position {
  apr: Apr & {
    boostedAprPercentage: string;
    campaignAprs: {
      aprPercentage: string;
      campaignIdx: string;
      token: {
        addr: string;
        color: string;
        decimals: number;
        img: string;
        symbol: string;
        verified: boolean;
      };
    }[];
    feeAprPercentage: string;
    totalAprPercentage: string;
  };
  collectedFees: string;
  createdAt: string;
  estimatedCollectFees: PositionTokenDetails[];
  estimatedIncentives: PositionTokenDetails[];
  estimatedWithdrawals: PositionTokenDetails[];
  feeTier: string;
  initialDeposits: PositionTokenDetails[];
  max: string;
  min: string;
  mintedShare: string;
  poolId: string;
  poolType: string;
  positionAddr: string;
  positionIdx: string;
  shareOfPool: string;
  sqrtPrice: string;
  timeWeightedTvl: string;
  totalEarnings: PositionTokenDetails[];
  tvl: string;
  userAddr: string;
}

interface UserTransactionToken {
  amount: string;
  decimals: number;
  img: string;
  isVerified: boolean;
  ticker: string;
  tokenAddr: string;
  tokenIdx: number;
}

export interface UserTransaction {
  createdAt: string;
  createdBy: string;
  txType: 'Swap' | 'Add' | 'Remove' | 'Claim';
  transactionVersion: number;
  volume: string;
  swapData: {
    amountIn: string;
    amountOut: string;
    fromIdx: number;
    toIdx: number;
  } | null;
  tokens: UserTransactionToken[];
}

export interface PayloadResponse {
  payload: string;
}
// #endregion

// #region API Request Types
export interface PoolListParams {
  poolType: 'AMM' | 'CLMM' | 'STABLE';
  page?: number;
  pageSize?: number;
}

export interface PoolStatsParams {
  poolId: string;
}

export interface TokenListParams {
  keyword?: string;
  page?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
}

export interface PoolInfoParams {
  poolId?: string;
  tokenAddrs?: [string, string];
}

export interface PositionParams {
  userAddr: string;
  page?: number;
  pageSize?: number;
}

export interface UserTransactionParams {
  userAddr: string;
  txType?: 'Swap' | 'Add' | 'Remove';
  page?: number;
  pageSize?: number;
}

export type SwapParams =
  | SwapParamsAmm
  | SwapParamsClmm
  | SwapParamsStable;

export interface SwapParamsAmm {
  version: 'v2';
  poolId: string;
  a2b: boolean;
  fixedAmountIn: boolean;
  amountIn: number;
  amountOut: number;
  accountAddress: string;
}

export interface SwapParamsClmm {
  version: 'v3';
  poolId: string;
  a2b: boolean;
  fixedAmountIn: boolean;
  minAmountOut: number;
  sqrtPrice: number;
  amountIn: number;
  accountAddress: string;
}

export interface SwapParamsStable {
  version: 'stable';
  poolId: string;
  accountAddress: string;
  tokenIn: number;
  tokenOut: number;
  amountIn: number;
  minAmountOut: number;
}

export type CreatePoolAddLiquidityParams =
  | CreatePoolAddLiquidityAmm
  | CreatePoolAddLiquidityClmm
  | CreatePoolAddLiquidityStable;

interface CreatePoolAddLiquidityBase {
  accountAddress: string;
  coins: [string, string];
  amounts: [string, string];
  fee: number;
}

export interface CreatePoolAddLiquidityAmm extends CreatePoolAddLiquidityBase {
  version: 'v2';
  minAmounts: [string, string];
}

export interface CreatePoolAddLiquidityClmm extends CreatePoolAddLiquidityBase {
  version: 'v3';
  minAmounts: [string, string];
  sqrtPrice: string;
  lowerTick: string;
  upperTick: string;
  fixedAmountA: boolean;
}

export interface CreatePoolAddLiquidityStable extends CreatePoolAddLiquidityBase {
  version: 'stable';
  amplification: string;
  offPegMultiplier: string;
  minMintAmount: string;
}

export type AddLiquidityParams =
  | AddLiquidityAmm
  | AddLiquidityClmm
  | AddLiquidityStable;

interface AddLiquidityBase {
  poolId: string;
  accountAddress: string;
  amounts: [string, string];
}

export interface AddLiquidityAmm extends AddLiquidityBase {
  version: 'v2';
  minAmounts: [string, string];
}

export interface AddLiquidityClmm extends AddLiquidityBase {
  version: 'v3';
  minAmounts: [string, string];
  lowerTick: string;
  upperTick: string;
  fixedAmountA: boolean;
}

export interface AddLiquidityStable extends AddLiquidityBase {
  version: 'stable';
  minMintAmount: string;
}

export type RemoveLiquidityParams =
  | RemoveLiquidityAmm
  | RemoveLiquidityClmm
  | RemoveLiquidityStable;

interface RemoveLiquidityBase {
  poolId: string;
  accountAddress: string;
  positionAddress: string;
  minAmounts: [string, string];
  burnedShare: string;
}

export interface RemoveLiquidityAmm extends RemoveLiquidityBase {
  version: 'v2';
}

export interface RemoveLiquidityClmm extends RemoveLiquidityBase {
  version: 'v3';
}

export interface RemoveLiquidityStable extends RemoveLiquidityBase {
  version: 'stable';
  type: 1 | 2 | 3;
}

interface MultiRemovePosition {
  positionAddress: string;
  minAmounts: [string, string];
  burnedShare: string;
}

interface MultiRemovePositionStable extends MultiRemovePosition {
  type: 1 | 2 | 3;
}

export type RemoveMultiLiquidityParams =
  | RemoveMultiLiquidityAmm
  | RemoveMultiLiquidityClmm
  | RemoveMultiLiquidityStable;

interface RemoveMultiLiquidityBase {
  poolId: string;
  accountAddress: string;
}

export interface RemoveMultiLiquidityAmm extends RemoveMultiLiquidityBase {
  version: 'v2';
  positions: MultiRemovePosition[];
}

export interface RemoveMultiLiquidityClmm extends RemoveMultiLiquidityBase {
  version: 'v3';
  positions: MultiRemovePosition[];
}

export interface RemoveMultiLiquidityStable extends RemoveMultiLiquidityBase {
  version: 'stable';
  positions: MultiRemovePositionStable[];
}

export interface CollectFeeParams {
  version: 'v3';
  poolId: string;
  accountAddress: string;
  positionAddress: string;
}
// #endregion

export class TappApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string = TAPP_API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async post<TRequest, TResponse>(
    method: string,
    params: TRequest,
  ): Promise<TResponse> {
    const body: JsonRpcRequest<TRequest> = {
      method,
      jsonrpc: '2.0',
      id: 1, // ID can be static for simple clients
      params: {
        query: params,
      },
    };

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonRpcResponse = (await response.json()) as JsonRpcResponse<TResponse>;
    return jsonRpcResponse.result;
  }

  async getPoolList(params: PoolListParams): Promise<PaginatedResponse<Pool>> {
    return this.post('public/pool', params);
  }

  async getPoolStats(params: PoolStatsParams): Promise<PoolStats> {
    return this.post('public/pool_stats', params);
  }

  async getTokenList(params: TokenListParams): Promise<PaginatedResponse<Token>> {
    return this.post('public/token', params);
  }

  async getPoolInfo(params: PoolInfoParams): Promise<PoolInfo> {
    return this.post('public/pool_info', params);
  }

  async getPositions(params: PositionParams): Promise<PaginatedResponse<Position>> {
    return this.post('public/position', params);
  }

  async getUserTransactions(params: UserTransactionParams): Promise<PaginatedResponse<UserTransaction>> {
    return this.post('public/txns', params);
  }

  async getSwapPayload(params: SwapParams): Promise<PayloadResponse> {
    return this.post('public/swap', params);
  }

  async getCreatePoolAddLiquidityPayload(
    params: CreatePoolAddLiquidityParams,
  ): Promise<PayloadResponse> {
    return this.post('public/create_pool_add_liquidity', params);
  }

  async getAddLiquidityPayload(
    params: AddLiquidityParams,
  ): Promise<PayloadResponse> {
    return this.post('public/add_liquidity', params);
  }

  async getRemoveLiquidityPayload(
    params: RemoveLiquidityParams,
  ): Promise<PayloadResponse> {
    return this.post('public/remove_liquidity', params);
  }

  async getRemoveMultiLiquidityPayload(
    params: RemoveMultiLiquidityParams,
  ): Promise<PayloadResponse> {
    return this.post('public/remove_multi_liquidity', params);
  }

  async getCollectFeePayload(
    params: CollectFeeParams,
  ): Promise<PayloadResponse> {
    return this.post('public/collect_fee', params);
  }
}
