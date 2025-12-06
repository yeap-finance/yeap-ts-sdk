// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import BigNumber from "bignumber.js";
import type { RawVaultStateData, VaultState } from "../interfaces";

type DecimalInput = BigNumber | bigint | number | string;

function toBigNumber(value: DecimalInput): BigNumber {
  if (BigNumber.isBigNumber(value)) {
    return value;
  }
  if (typeof value === "bigint") {
    return new BigNumber(value.toString());
  }
  return new BigNumber(value);
}
/**
 * Converts a per-second rate to APY using compounding:
 *   APY = (1 + rate/precision)^(seconds_per_year) - 1
 * Returns as a BigNumber (not percent, e.g. 0.05 for 5%).
 */
export function rate2Apy(rate: BigNumber | bigint | number, precision: number = 2 ** 96): BigNumber {
  const zero = new BigNumber(0);
  const rateDecimal = toBigNumber(rate);

  if (rateDecimal.isZero()) {
    return zero;
  }

  const secondsPerYear = 365 * 24 * 60 * 60;
  const r = rateDecimal.div(precision);
  // APY = (1 + r) ^ secondsPerYear - 1
  return new BigNumber(1).plus(r).pow(secondsPerYear).minus(1).times(100);
}

// VaultState interface moved to interfaces.ts

/** Factory to create an immutable VaultState */
export function createVaultState(rawStateData: RawVaultStateData): VaultState {
  const zero = new BigNumber(0);
  const decimalOrZero = (value?: DecimalInput | null): BigNumber => {
    if (value === undefined || value === null) {
      return zero;
    }
    return toBigNumber(value);
  };

  const badDebt = decimalOrZero(rawStateData.bad_debt);
  const cash = decimalOrZero(rawStateData.cash);
  const currentInterestRate = decimalOrZero(rawStateData.current_interest_rate);
  const lastInterestUpdateTime = decimalOrZero(rawStateData.last_interest_update_time);
  const totalBorrows = decimalOrZero(rawStateData.total_borrows);
  const totalDebtShares = decimalOrZero(rawStateData.total_debt_shares);
  const totalShares = decimalOrZero(rawStateData.total_shares);
  const totalSupply = badDebt.plus(cash).plus(totalBorrows);

  const totalAvailableBN = cash.plus(totalBorrows).plus(badDebt);
  const utilizationRate = totalAvailableBN.eq(0) ? zero : totalBorrows.div(totalAvailableBN);
  const shareExchangeRate = totalShares.eq(0) ? zero : totalSupply.div(totalShares);
  const debtShareExchangeRate = totalDebtShares.eq(0) ? zero : totalBorrows.div(totalDebtShares);

  const borrowApy = rate2Apy(currentInterestRate);
  const supplyApy = utilizationRate.times(borrowApy);
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
