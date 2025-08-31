// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import {YeapConfig} from "./yeapConfig";
import {InputGenerateTransactionPayloadData} from "@aptos-labs/ts-sdk";

/**
 * BuildApi is a utility class for constructing transaction data related to Yeap Earn and Borrow APIs.
 * It provides methods to generate InputGenerateTransactionPayloadData for deposit, redeem, withdraw, borrow, repay, and collateral operations.
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildDepositTxn(vaultAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildRedeemTxn(vaultAddress: string, shares: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildWithdrawTxn(vaultAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
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
   * Mirrors Move: open_position(user, market, borrow_vault, collateral_amount, borrow_amount, collateral_amount_in_shares)
   * @param marketAddress - Borrow market address
   * @param borrowVaultAddress - The borrow vault address (debt vault)
   * @param collateralAmount - Amount of collateral to deposit (bigint)
   * @param borrowAmount - Amount to borrow (bigint)
   * @param collateralAmountInShares - Whether collateralAmount is in shares (boolean)
   */
  buildOpenPositionTxn(
    marketAddress: string,
    borrowVaultAddress: string,
    collateralAmount: bigint,
    borrowAmount: bigint,
    collateralAmountInShares: boolean = false,
  ): InputGenerateTransactionPayloadData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::open_position`,
      typeArguments: [],
      functionArguments: [
        marketAddress,
        borrowVaultAddress,
        collateralAmount.toString(),
        borrowAmount.toString(),
        collateralAmountInShares,
      ],
    };
  }

  /**
   * Builds transaction data for adding collateral and borrowing more.
   * Mirrors Move: add_collateral_and_borrow(user, position, borrow_vault, collateral_amount, borrrow_amount, collateral_amount_in_shares)
   * @param positionAddress - Existing position object address
   * @param borrowVaultAddress - Borrow (debt) vault address
   * @param collateralAmount - Collateral amount (bigint) (use MAX to indicate all)
   * @param borrowAmount - Borrow amount (bigint)
   * @param collateralAmountInShares - Whether collateralAmount is in shares (boolean)
   */
  buildAddCollateralAndBorrowTxn(
    positionAddress: string,
    borrowVaultAddress: string,
    collateralAmount: bigint,
    borrowAmount: bigint,
    collateralAmountInShares: boolean = false,
  ): InputGenerateTransactionPayloadData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::add_collateral_and_borrow`,
      typeArguments: [],
      functionArguments: [
        positionAddress,
        borrowVaultAddress,
        collateralAmount.toString(),
        borrowAmount.toString(),
        collateralAmountInShares,
      ],
    };
  }

  /**
   * Builds transaction data for repaying and withdrawing collateral.
   * Mirrors Move: repay_and_withdraw_collateral(user, position, repay_vault, repay_amount, withdraw_amount, unwrap)
   * @param positionAddress - The position address
   * @param repayVaultAddress - The vault address for repayment
   * @param repayAmount - The amount to repay (bigint)
   * @param withdrawAmount - The amount to withdraw (bigint)
   * @param unwrap - Whether to unwrap to underlying asset (boolean)
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildRepayAndWithdrawCollateralTxn(
    positionAddress: string,
    repayVaultAddress: string,
    repayAmount: bigint,
    withdrawAmount: bigint,
    unwrap: boolean = true,
  ): InputGenerateTransactionPayloadData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::repay_and_withdraw_collateral`,
      typeArguments: [],
      functionArguments: [positionAddress, repayVaultAddress, repayAmount.toString(), withdrawAmount.toString(), unwrap],
    };
  }

  /**
   * Builds transaction data for repaying and withdrawing collateral shares.
   * @param positionAddress - The position address
   * @param repayVaultAddress - The vault address for repayment
   * @param repayAmount - The amount to repay (bigint)
   * @param withdrawAmount - The amount to withdraw (bigint)
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildRepayAndWithdrawCollateralSharesTxn(
    positionAddress: string,
    repayVaultAddress: string,
    repayAmount: bigint,
    withdrawAmount: bigint,
  ): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildDepositCollateralTxn(positionAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildDepositVaultAssetAsCollateralTxn(positionAddress: string, shares: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildWithdrawCollateralTxn(positionAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildWithdrawCollateralShareTxn(positionAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildBorrowTxn(positionAddress: string, vaultAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
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
   * @returns InputGenerateTransactionPayloadData transaction data
   */
  buildRepayTxn(positionAddress: string, vaultAddress: string, amount: bigint): InputGenerateTransactionPayloadData {
    const yeapBorrowApiAddress = this.config.yeapBorrowApiAddress;
    return {
      function: `${yeapBorrowApiAddress}::borrow_api::repay`,
      typeArguments: [],
      functionArguments: [positionAddress, vaultAddress, amount.toString()],
    };
  }
}
