// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { bignumber, BigNumber } from "mathjs";
import { VaultState, RawVaultStateData } from "../interfaces";
/**
 * Converts a per-second rate to APY using compounding:
 *   APY = (1 + rate/precision)^(seconds_per_year) - 1
 * Returns as a BigNumber (not percent, e.g. 0.05 for 5%).
 */
export function rate2Apy(rate: BigNumber | bigint | number, precision: number = 2 ** 96): BigNumber {
  if (rate === 0 || rate === 0n) {
    return bignumber(0);
  }
  const rateBN = bignumber(rate.toString());

  const secondsPerYear = 365 * 24 * 60 * 60;
  const r = rateBN.div(precision);
  // APY = (1 + r) ^ secondsPerYear - 1
  return bignumber(1).plus(r).pow(secondsPerYear).minus(1).mul(100);
}

// VaultState interface moved to interfaces.ts

/** Factory to create an immutable VaultState */
export function createVaultState(rawStateData: RawVaultStateData): VaultState {
  const zero = bignumber(0);
  const badDebt = rawStateData.bad_debt ? bignumber(rawStateData.bad_debt) : zero;
  const cash = rawStateData.cash ? bignumber(rawStateData.cash) : zero;
  const currentInterestRate = rawStateData.current_interest_rate ? bignumber(rawStateData.current_interest_rate) : zero;
  const lastInterestUpdateTime = rawStateData.last_interest_update_time
    ? bignumber(rawStateData.last_interest_update_time)
    : zero;
  const totalBorrows = rawStateData.total_borrows ? bignumber(rawStateData.total_borrows) : zero;
  const totalDebtShares = rawStateData.total_debt_shares ? bignumber(rawStateData.total_debt_shares) : zero;
  const totalShares = rawStateData.total_shares ? bignumber(rawStateData.total_shares) : zero;
  const totalSupply = badDebt.plus(cash).plus(totalBorrows);

  const totalAvailableBN = cash.plus(totalBorrows).plus(badDebt);
  const utilizationRate = totalAvailableBN.eq(0) ? zero : totalBorrows.div(totalAvailableBN);
  const shareExchangeRate = totalShares.eq(0) ? zero : totalSupply.div(totalShares);
  const debtShareExchangeRate = totalDebtShares.eq(0) ? zero : totalBorrows.div(totalDebtShares);

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
