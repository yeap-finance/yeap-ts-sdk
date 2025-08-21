// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { BorrowMarketFieldsFragment } from "../../types/generated/operations";
import { BorrowRiskParameters } from "../interfaces";
import { AccountAddress } from "@aptos-labs/ts-sdk";

type RawBorrowMarket = BorrowMarketFieldsFragment;

/**
 * Represents a borrow market entity with convenient accessors.
 * @group Entities
 */
export class BorrowMarket {
  private readonly config: YeapConfig;
  private readonly _raw: RawBorrowMarket;

  constructor(config: YeapConfig, raw: RawBorrowMarket) {
    this.config = config;
    this._raw = raw;
  }

  private parseNumeric(v?: string | null): number | null {
    if (v === undefined || v === null) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  /** Unique market identifier/address */
  get market(): AccountAddress {
    return AccountAddress.fromString(this._raw.market);
  }

  /** Collateral asset address */
  get collateral(): AccountAddress {
    return AccountAddress.fromString(this._raw.collateral!);
  }

  /** Oracle address (if any) */
  get oracle(): AccountAddress {
    return AccountAddress.fromString(this._raw.oracle!);
  }

  /** Collateral risk factor */
  get crf(): number | null {
    return this.parseNumeric(this._raw.crf);
  }

  /** Loan-to-Value ratio */
  get ltv(): number {
    return this.parseNumeric(this._raw.ltv)!;
  }

  /** Liquidation Loan-to-Value ratio */
  get lltv(): number {
    return this.parseNumeric(this._raw.lltv)!;
  }

  /** Liquidation bonus in basis points (number if parseable) */
  get liquidationBonusBps(): number {
    return this.parseNumeric(this._raw.liquidation_bonus_bps)!;
  }

  /** Max number of borrowable vaults for this market */
  get maxBorrowableVaults(): number {
    return this.parseNumeric(this._raw.max_borrowable_vaults)!;
  }

  /** Market status as number (if parseable) */
  get status(): number  {
    return this.parseNumeric(this._raw.status)!;
  }

  /** Whether the market is whitelisted */
  get whitelisted(): boolean {
    return Boolean(this._raw.whitelisted);
  }

  /** Borrow risk parameters transformed to clean interface */
  get borrowRiskParameters(): BorrowRiskParameters[] {
    const raw = this._raw.borrow_risk_parameters ?? [];
    return raw.map((rp) => ({
      brw: Number(rp.brw || 0),
      collateral: AccountAddress.fromString(rp.collateral),
      market: AccountAddress.fromString(rp.market),
      vault: AccountAddress.fromString(rp.vault),
    }));
  }
}
