// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { BorrowMarketFieldsFragment } from "../../types/generated/operations";
import { BorrowRiskParameters } from "../interfaces";
import { AccountAddress, InputViewFunctionData, MoveUint128Type } from "@aptos-labs/ts-sdk";

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
  get crf(): number {
    return this.parseNumeric(this._raw.crf)!;
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

  /**
  * Batch fetch on-chain prices for multiple asset pairs via the oracle lens.
  *
  * Utilizes the `oracle_lens::batch_get_price_of_pairs` view to reduce RPC round trips
  * compared to calling a single-pair price function repeatedly.
  *
  * Requirements:
  * - `YeapConfig` must include an Aptos client.
  * - `yeap_lens` address must be configured in the address map.
  *
  * Notes:
  * - The order of returned prices matches the order of the supplied `pairs` array.
  * - If a pair can't be priced on-chain the corresponding value may be `0n` (no explicit
  *   sentinel handling is performed here—interpret according to protocol semantics).
  * - When a `quote` is omitted it defaults to USD (protocol USD quote asset). Current implementation
  *   passes `AccountAddress.ZERO` as a sentinel that the on-chain lens interprets as USD.
  *
  * @param routerAddress Oracle router address used for routing
  * @param pairs Array of base / optional quote asset address pairs
  * @returns Array of bigint prices (same length and ordering as `pairs`)
  */
  async getPrices(routerAddress: string, pairs: { base: AccountAddress, quote?: AccountAddress }[]): Promise<bigint[]> {
    if (!this.config?.aptosClient) {
      throw new Error(
        "Aptos client is required to fetch on-chain price. Please provide an Aptos client in YeapConfig.",
      );
    }

    if (!this.config.hasAddress("yeap_lens")) {
      throw new Error(
        "yeap_lens address not found in configuration. Please add 'yeap_lens' to the addresses mapping in YeapConfig.",
      );
    }

    const yeapLensAddress = this.config.yeapLensAddress;
    const viewFunctionData: InputViewFunctionData = {
      function: `${yeapLensAddress}::oracle_lens::batch_get_price_of_pairs` as `${string}::${string}::${string}`,
      typeArguments: [],
      functionArguments: [routerAddress, pairs.map(v => v.base.toString()), pairs.map(v => (v.quote || AccountAddress.ZERO).toString())],
    };

    const result = await this.config.aptosClient.view({ payload: viewFunctionData });
    const prices = result[0] as MoveUint128Type[];

    return prices.map((price) => { return BigInt(price); });
  }
}
