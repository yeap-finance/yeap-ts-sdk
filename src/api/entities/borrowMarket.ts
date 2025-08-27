// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { YeapConfig } from "../yeapConfig";
import { BorrowMarketFieldsFragment } from "../../types/generated/operations";
import { BorrowRiskParameters } from "../interfaces";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { createVault } from "./vault";
import { BorrowMarket } from "../interfaces";

type RawBorrowMarket = BorrowMarketFieldsFragment;


function parseNumeric(v?: string | null): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

/** Factory creating a BorrowMarket from raw GraphQL data */
export function createBorrowMarket(config: YeapConfig, raw: RawBorrowMarket): BorrowMarket {
  const borrowRiskParameters: Record<string, BorrowRiskParameters> = {};
  for (const rp of raw.borrow_risk_parameters ?? []) {
    const entry: BorrowRiskParameters = {
      brw: Number(rp.brw || 0),
      collateral: AccountAddress.fromString(rp.collateral),
      market: AccountAddress.fromString(rp.market),
      vault: AccountAddress.fromString(rp.vault),
    };
    borrowRiskParameters[entry.vault.toString()] = entry;
  }

  return {
    market: AccountAddress.fromString(raw.market),
    collateral: AccountAddress.fromString(raw.collateral!),
    collateralVault: raw.collateral_vault ? createVault(config, raw.collateral_vault!) ??undefined :undefined,
    oracle: AccountAddress.fromString(raw.oracle!),
    crf: parseNumeric(raw.crf),
    ltv: parseNumeric(raw.ltv),
    lltv: parseNumeric(raw.lltv),
    liquidationBonusBps: parseNumeric(raw.liquidation_bonus_bps),
    maxBorrowableVaults: parseNumeric(raw.max_borrowable_vaults),
    status: parseNumeric(raw.status),
    whitelisted: Boolean(raw.whitelisted),
    borrowRiskParameters,
    __raw: raw,
  };
}
