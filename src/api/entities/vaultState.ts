// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { GetVaultLatestStateQuery } from "../../types";
import { Decimal } from "decimal.js";

// Configure decimal.js for financial calculations
Decimal.set({
  precision: 38,                    // Handle large blockchain numbers with precision
  rounding: Decimal.ROUND_DOWN,  // Standard financial rounding
  toExpNeg: -18,                     // Handle small percentages
  toExpPos: 38                      // Handle large token amounts
});

// Raw type for vault state data
type RawVaultStateData = NonNullable<GetVaultLatestStateQuery["vault_states_activities"][0]>;

/**
 * Represents a vault state entity with convenient methods to access financial metrics.
 */
export class VaultState {
  private readonly _rawStateData: RawVaultStateData;

  public readonly vaultAddress: string;
  public readonly eventIndex: string;
  public readonly transactionVersion: string;

  private constructor(rawStateData: RawVaultStateData) {
    this._rawStateData = rawStateData;
    this.vaultAddress = rawStateData.vault_address!!;
    this.eventIndex = rawStateData.event_index;
    this.transactionVersion = rawStateData.transaction_version;
  }

  /**
   * Get the bad debt amount.
   */
  get badDebt(): bigint {
    return this._rawStateData.bad_debt ? BigInt(this._rawStateData.bad_debt) : 0n;
  }

  /**
   * Get the cash amount.
   */
  get cash(): bigint {
    return this._rawStateData.cash ? BigInt(this._rawStateData.cash) : 0n;
  }

  /**
   * Get the current interest rate.
   */
  get currentInterestRate(): bigint {
    return this._rawStateData.current_interest_rate ? BigInt(this._rawStateData.current_interest_rate) : 0n;
  }

  /**
   * Get the last interest update time.
   */
  get lastInterestUpdateTime(): bigint {
    return this._rawStateData.last_interest_update_time ? BigInt(this._rawStateData.last_interest_update_time) : 0n;
  }

  /**
   * Get the total borrows.
   */
  get totalBorrows(): bigint {
    return this._rawStateData.total_borrows ? BigInt(this._rawStateData.total_borrows) : 0n;
  }

  /**
   * Get the total debt shares.
   */
  get totalDebtShares(): bigint {
    return this._rawStateData.total_debt_shares ? BigInt(this._rawStateData.total_debt_shares) : 0n;
  }

  /**
   * Get the total shares.
   */
  get totalShares(): bigint {
    return this._rawStateData.total_shares ? BigInt(this._rawStateData.total_shares) : 0n;
  }


  get totalSupply(): bigint {
    return this.totalBorrows + this.cash + this.badDebt;
  }

  /**
   * Calculate the utilization rate of the vault.
   * @returns Utilization rate as a Decimal (0-1)
   */
  get utilizationRate(): Decimal {
    const cash = Decimal(this.cash.toString());
    const badDebt = Decimal(this.badDebt.toString());
    const borrows = Decimal(this.totalBorrows.toString());

    const totalAvailable = cash.plus(borrows).plus(badDebt);

    if (totalAvailable.isZero()) {
      return Decimal(0);
    }

    return borrows.dividedBy(totalAvailable);
  }

  get shareExchangeRate(): Decimal {
    const shares = Decimal(this.totalShares.toString());
    const totalSupply = Decimal(this.totalSupply.toString());
    if (shares.isZero()) {
      return Decimal(0);
    }
    return totalSupply.dividedBy(shares);
  }
  get debtShareExchangeRate(): Decimal {
    const debtShares = Decimal(this.totalDebtShares.toString());
    const totalBorrows = Decimal(this.totalBorrows.toString());
    if (debtShares.isZero()) {
      return Decimal(0);
    }
    return totalBorrows.dividedBy(debtShares);
  }

  /**
   * Creates a new VaultState instance from raw GraphQL vault state data.
   * @param rawStateData The raw GraphQL vault state data.
   * @returns A new VaultState instance.
   */
  static fromRawData(rawStateData: RawVaultStateData): VaultState {
    return new VaultState(rawStateData);
  }
}
