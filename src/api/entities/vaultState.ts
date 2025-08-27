// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { GetVaultLatestStateQuery } from "../../types";
import { Decimal } from "decimal.js";
import {bignumber, BigNumber} from "mathjs";
// Configure decimal.js for financial calculations
Decimal.set({
  precision: 38, // Handle large blockchain numbers with precision
  rounding: Decimal.ROUND_DOWN, // Standard financial rounding
  toExpNeg: -18, // Handle small percentages
  toExpPos: 38, // Handle large token amounts
});

// Raw type for vault state data
type RawVaultStateData = NonNullable<GetVaultLatestStateQuery["vault_states_activities"][0]>;

export function rate2Apy(rate: Decimal | bigint | number, precision: number = 2 ** 96): BigNumber {
  if (rate === 0 || !rate) {
    return bignumber(0);
  }

  // return math.bignumber(rate).div(precision).add(1).pow(365 * 24 * 60 * 60).sub(1).mul(100)
  return bignumber(rate).div(precision).mul(365 * 24 * 60 * 60).mul(100)
}

/** Interface representation of a vault's state */
export interface VaultState {
  /** On-chain vault address (hex string) */
  vaultAddress: string;
  /** Total bad debt (unrecoverable borrows) in underlying smallest units */
  badDebt: bigint;
  /** Cash (unlent liquidity) currently held by the vault in underlying smallest units */
  cash: bigint;
  /** Current per-second interest rate (fixed‑point 96 bit precision on chain) */
  currentInterestRate: bigint;
  /** Unix timestamp (seconds) when interest was last accrued */
  lastInterestUpdateTime: bigint;
  /** Total outstanding borrows in underlying smallest units */
  totalBorrows: bigint;
  /** Total outstanding debt share tokens (denominator for debtShareExchangeRate) */
  totalDebtShares: bigint;
  /** Total outstanding vault share tokens (denominator for shareExchangeRate) */
  totalShares: bigint;
  /** Aggregate supply = totalBorrows + cash + badDebt (underlying smallest units) */
  totalSupply: bigint;
  /** Utilization ratio (borrows / (borrows + cash + badDebt)) in [0,1] */
  utilizationRate: BigNumber;
  /** Underlying per share (totalSupply / totalShares) as Decimal; 0 if no shares */
  shareExchangeRate: BigNumber;
  /** Borrowed underlying per debt share (totalBorrows / totalDebtShares); 0 if no debt shares */
  debtShareExchangeRate: BigNumber;
  /** Nominal borrow APY (percentage form, e.g. 5.5 == 5.5%) derived from currentInterestRate */
  borrowApy?: BigNumber;
  /** Nominal supply APY (borrowApy * utilizationRate) in percentage form */
  supplyApy?: BigNumber;
  /** Raw GraphQL state object for advanced / debugging usage */
  __raw?: RawVaultStateData;
}

/** Factory to create an immutable VaultState */
export function createVaultState(rawStateData: RawVaultStateData): VaultState {
  const badDebt = rawStateData.bad_debt ? BigInt(rawStateData.bad_debt) : BigInt(0);
  const cash = rawStateData.cash ? BigInt(rawStateData.cash) : BigInt(0);
  const currentInterestRate = rawStateData.current_interest_rate
    ? BigInt(rawStateData.current_interest_rate)
    : BigInt(0);
  const lastInterestUpdateTime = rawStateData.last_interest_update_time
    ? BigInt(rawStateData.last_interest_update_time)
    : BigInt(0);
  const totalBorrows = rawStateData.total_borrows ? BigInt(rawStateData.total_borrows) : BigInt(0);
  const totalDebtShares = rawStateData.total_debt_shares ? BigInt(rawStateData.total_debt_shares) : BigInt(0);
  const totalShares = rawStateData.total_shares ? BigInt(rawStateData.total_shares) : BigInt(0);
  const totalSupply = totalBorrows + cash + badDebt;

  const cashD = Decimal(cash.toString());
  const badDebtD = Decimal(badDebt.toString());
  const borrowsD = Decimal(totalBorrows.toString());
  const totalAvailable = cashD.plus(borrowsD).plus(badDebtD);
  const utilizationRate = totalAvailable.isZero() ? Decimal(0) : borrowsD.dividedBy(totalAvailable);
  const shareExchangeRate = totalShares === BigInt(0)
    ? Decimal(0)
    : Decimal(totalSupply.toString()).dividedBy(Decimal(totalShares.toString()));
  const debtShareExchangeRate = totalDebtShares === BigInt(0)
    ? Decimal(0)
    : Decimal(totalBorrows.toString()).dividedBy(Decimal(totalDebtShares.toString()));

  const borrowApy = rate2Apy(currentInterestRate);
  const supplyApy = utilizationRate.mul(borrowApy);
  return {
    vaultAddress: rawStateData.vault_address!!,
    badDebt,
    cash,
    currentInterestRate,
    lastInterestUpdateTime,
    totalBorrows,
    totalDebtShares,
    totalShares,
    totalSupply,
    utilizationRate,
    shareExchangeRate,
    debtShareExchangeRate,
    borrowApy,
    supplyApy,
    __raw: rawStateData,
  };
}
