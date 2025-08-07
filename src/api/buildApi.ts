// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import {YeapConfig} from "./yeapConfig";
import {InputViewFunctionData} from "@aptos-labs/ts-sdk";

/**
 * BuildApi is a utility class for constructing transaction data related to Yeap Earn and Borrow APIs.
 * It provides methods to generate InputViewFunctionData for deposit, redeem, withdraw, borrow, repay, and collateral operations.
 */
export class BuildApi {
  readonly config: YeapConfig;

  /**
   * Creates an instance of BuildApi.
   * @param config - YeapConfig configuration instance
   */
  constructor(config: YeapConfig) {
    this.config = config;
  }

  // ==================== build transactions for Yeap Earn API ====================

  /**
   * Builds transaction data for deposit operation.
   * @param vaultAddress - The vault address
   * @param amount - The deposit amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildDepositTxn(vaultAddress: string, amount: bigint): InputViewFunctionData {
    const yeapEarnApiAddress = this.config.yeapEarnApiAddress;
    return {
      function: `${yeapEarnApiAddress}::earn_api::deposit`,
      typeArguments: [],
      functionArguments: [vaultAddress, amount.toString()],
    };
  }

  /**
   * Builds transaction data for redeem operation.
   * @param vaultAddress - The vault address
   * @param shares - The shares to redeem (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildRedeemTxn(vaultAddress: string, shares: bigint): InputViewFunctionData {
    const yeapEarnApiAddress = this.config.yeapEarnApiAddress;
    return {
      function: `${yeapEarnApiAddress}::earn_api::redeem`,
      typeArguments: [],
      functionArguments: [vaultAddress, shares.toString()],
    };
  }

  /**
   * Builds transaction data for withdraw operation.
   * @param vaultAddress - The vault address
   * @param amount - The withdraw amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildWithdrawTxn(vaultAddress: string, amount: bigint): InputViewFunctionData {
    const yeapEarnApiAddress = this.config.yeapEarnApiAddress;
    return {
      function: `${yeapEarnApiAddress}::earn_api::withdraw`,
      typeArguments: [],
      functionArguments: [vaultAddress, amount.toString()],
    };
  }

  // ==================== build transactions for Yeap Borrow API ====================

  /**
   * Builds transaction data for opening a borrow position.
   * @param collateralVaultAddress - The collateral vault address
   * @returns InputViewFunctionData transaction data
   */
  buildOpenPositionTxn(collateralVaultAddress: string): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::open_position`,
      typeArguments: [],
      functionArguments: [collateralVaultAddress],
    };
  }

  /**
   * Builds transaction data for adding collateral and borrowing.
   * @param collateralVaultAddress - The collateral vault address
   * @param borrowVaultAddress - The borrow vault address
   * @param collateralAmount - The collateral amount (bigint)
   * @param borrowAmount - The borrow amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildAddCollateralAndBorrowTxn(
    collateralVaultAddress: string,
    borrowVaultAddress: string,
    collateralAmount: bigint,
    borrowAmount: bigint,
  ): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::add_collateral_and_borrow`,
      typeArguments: [],
      functionArguments: [collateralVaultAddress, borrowVaultAddress, collateralAmount.toString(), borrowAmount.toString()],
    };
  }

  /**
   * Builds transaction data for adding more collateral and borrowing more.
   * @param positionAddress - The position address
   * @param borrowVaultAddress - The borrow vault address
   * @param collateralAmount - The collateral amount (bigint)
   * @param borrowAmount - The borrow amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildAddCollateralAndBorrowMore(
    positionAddress: string,
    borrowVaultAddress: string,
    collateralAmount: bigint,
    borrowAmount: bigint,
  ): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::add_collateral_and_borrow_more`,
      typeArguments: [],
      functionArguments: [positionAddress, borrowVaultAddress, collateralAmount.toString(), borrowAmount.toString()],
    };
  }

  /**
   * Builds transaction data for repaying and withdrawing collateral.
   * @param positionAddress - The position address
   * @param repayVaultAddress - The vault address for repayment
   * @param repayAmount - The amount to repay (bigint)
   * @param withdrawAmount - The amount to withdraw (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildRepayAndWithdrawCollateralTxn(
    positionAddress: string,
    repayVaultAddress: string,
    repayAmount: bigint,
    withdrawAmount: bigint,
  ): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::repay_and_withdraw_collateral`,
      typeArguments: [],
      functionArguments: [positionAddress, repayVaultAddress, repayAmount.toString(), withdrawAmount.toString()],
    };
  }

  /**
   * Builds transaction data for repaying and withdrawing collateral shares.
   * @param positionAddress - The position address
   * @param repayVaultAddress - The vault address for repayment
   * @param repayAmount - The amount to repay (bigint)
   * @param withdrawAmount - The amount to withdraw (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildRepayAndWithdrawCollateralSharesTxn(
    positionAddress: string,
    repayVaultAddress: string,
    repayAmount: bigint,
    withdrawAmount: bigint,
  ): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::repay_and_withdraw_collateral_shares`,
      typeArguments: [],
      functionArguments: [positionAddress, repayVaultAddress, repayAmount.toString(), withdrawAmount.toString()],
    };
  }

  /**
   * Builds transaction data for depositing collateral.
   * @param positionAddress - The position address
   * @param amount - The collateral amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildDepositCollateralTxn(positionAddress: string, amount: bigint): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::deposit_collateral`,
      typeArguments: [],
      functionArguments: [positionAddress, amount.toString()],
    };
  }

  /**
   * Builds transaction data for depositing vault assets as collateral.
   * @param positionAddress - The position address
   * @param shares - The shares amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildDepositVaultAssetAsCollateralTxn(positionAddress: string, shares: bigint): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::deposit_vault_asset_as_collateral`,
      typeArguments: [],
      functionArguments: [positionAddress, shares.toString()],
    };
  }

  /**
   * Builds transaction data for withdrawing collateral.
   * @param positionAddress - The position address
   * @param amount - The withdraw amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildWithdrawCollateralTxn(positionAddress: string, amount: bigint): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::withdraw_collateral`,
      typeArguments: [],
      functionArguments: [positionAddress, amount.toString()],
    };
  }

  /**
   * Builds transaction data for withdrawing collateral shares.
   * @param positionAddress - The position address
   * @param amount - The withdraw amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildWithdrawCollateralShareTxn(positionAddress: string, amount: bigint): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::withdraw_collateral_share`,
      typeArguments: [],
      functionArguments: [positionAddress, amount.toString()],
    };
  }

  /**
   * Builds transaction data for borrowing.
   * @param positionAddress - The position address
   * @param vaultAddress - The vault address
   * @param amount - The borrow amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildBorrowTxn(positionAddress: string, vaultAddress: string, amount: bigint): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::borrow`,
      typeArguments: [],
      functionArguments: [positionAddress, vaultAddress, amount.toString()],
    };
  }

  /**
   * Builds transaction data for repaying.
   * @param positionAddress - The position address
   * @param vaultAddress - The vault address
   * @param amount - The repay amount (bigint)
   * @returns InputViewFunctionData transaction data
   */
  buildRepayTxn(positionAddress: string, vaultAddress: string, amount: bigint): InputViewFunctionData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::repay`,
      typeArguments: [],
      functionArguments: [positionAddress, vaultAddress, amount.toString()],
    };
  }
}
