// Copyright © Yeap Finance
// SPDX-License-Identifier: Apache-2.0

import { AptosScriptComposer } from "@aptos-labs/script-composer-sdk";
import {
  AccountAddress,
  AccountAddressInput,
  AnyNumber,
  InputGenerateTransactionPayloadData,
  Serializer,
  U128,
  U256,
  U64,
} from "@aptos-labs/ts-sdk";

const OP_OPEN_POSITION = 0;
const OP_ATTACH_COLLATERAL = 1;
const OP_DETACH_COLLATERAL = 2;
const OP_ADD_LIQUIDITY = 3;
const OP_REMOVE_LIQUIDITY = 4;
const OP_BORROW = 5;
const OP_REPAY = 6;
const OP_CLAIM_REWARD = 7;
const OP_CLOSE_POSITION = 8;

type BuilderOperation = Uint8Array;

type MarketContext = {
  /** Borrow market that scopes the operation. */
  market: AccountAddressInput;
  /** Optional specific position to operate on. */
  position?: AccountAddressInput | null;
};

type OpenPositionArgs = {
  market: AccountAddressInput;
};

type AddLiquidityStableArgs = MarketContext & {
  /** Amount to deposit for each underlying asset in the pool. */
  amounts: AnyNumber[];
  /** Minimum amount of LP tokens the user is willing to mint. */
  minMintAmount: AnyNumber;
};

type RemoveLiquidityStableImbalanceArgs = MarketContext & {
  /** Amounts of each underlying asset to withdraw (same ordering as pool assets). */
  amounts: AnyNumber[];
  /** Maximum amount of LP tokens the user is willing to burn. */
  maxBurnAmount: AnyNumber;
};
type RemoveLiquidityStableRatioArgs = MarketContext & {
  /** Amount of LP tokens to burn. */
  amount: AnyNumber;
  /** Minimum redemption amounts per asset (same ordering as pool assets). */
  minAmounts: AnyNumber[];
};

type RemoveLiquidityStableSingleArgs = MarketContext & {
    /** Amount of LP tokens to burn. */
  amount: AnyNumber;
  /** Index of the asset to withdraw. */
  index: number;
  /** Minimum amount of the asset to receive. */
  minAmount: AnyNumber;
};

type AttachCollateralArgs = MarketContext & {
  /** Address of the collateral object to transfer to the position. */
  collateral: AccountAddressInput;
};

type DetachCollateralArgs = MarketContext;

type BorrowArgs = MarketContext & {
  /** Address of the vault to borrow from. */
  vaultAddress: AccountAddressInput;
  /** Quantity of the asset to borrow. */
  amount: AnyNumber;
};

type RepayArgs = MarketContext & {
  /** Address of the vault that issued the debt. */
  vaultAddress: AccountAddressInput;
  /** Amount to repay. */
  amount: AnyNumber;
};

type ClaimRewardArgs = MarketContext & {
  /** Metadata object address of the reward asset. */
  assetAddress: AccountAddressInput;
  /** Optional max amount to claim; omit or null for "claim all". */
  amountToClaim?: AnyNumber;
};

type ClosePositionArgs = MarketContext;

/**
 * Helper for building the `vector<vector<u8>>` payload expected by `yeap_tapp_llp::api::execute`.
 * Each method appends a single encoded operation that matches the decoding logic in `api.move`.
 */
export class TappLLPOperationBuilder {
  readonly operations: BuilderOperation[] = [];
  readonly protocolAddress: AccountAddress;
  private static ENCODING_VERSION = 1;
  /**
   * Creates an instance of TappLLPOperationBuilder.
   * @param config - YeapConfig configuration instance
   */
  constructor(protocolAddress: AccountAddress) {
    this.protocolAddress = protocolAddress;
  }

  /**
   * Append an `OP_OPEN_POSITION` instruction.
   */
  openPosition({ market }: OpenPositionArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    this.operations.push(
      TappLLPOperationBuilder.encodeOperation(OP_OPEN_POSITION, (serializer) => {
        serializer.serialize(marketAddress);
      }),
    );
    return this;
  }

  /**
   * Append an `OP_ATTACH_COLLATERAL` instruction.
   */
  attachCollateral({ market, position, collateral }: AttachCollateralArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    const collateralAddress = TappLLPOperationBuilder.toAccountAddress(collateral);
    this.operations.push(
      this.encodeOperationWithContext(OP_ATTACH_COLLATERAL, marketAddress, position, (serializer) => {
        serializer.serialize(collateralAddress);
      }),
    );
    return this;
  }

  /**
   * Append an `OP_DETACH_COLLATERAL` instruction.
   */
  detachCollateral({ market, position }: DetachCollateralArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    this.operations.push(this.encodeOperationWithContext(OP_DETACH_COLLATERAL, marketAddress, position));
    return this;
  }

  /**
   * Add liquidity to a stable pool.
   * Append an `OP_ADD_LIQUIDITY` instruction.
   */
  addLiquidityStable({ market, position, amounts, minMintAmount }: AddLiquidityStableArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    // encode arguments using bcs first
    const serializer = new Serializer();
    serializer.serializeVector(amounts.map(v => new U256(v)));
    serializer.serializeU256(minMintAmount);
    const encodedParams = serializer.toUint8Array();
    this.operations.push(
      this.encodeOperationWithContext(OP_ADD_LIQUIDITY, marketAddress, position, (serializer) => {
        serializer.serializeBytes(encodedParams);
      }),
    );
    return this;
  }

  /**
   * Remove liquidity from a stable pool with imbalanced amounts.
   * Append an `OP_REMOVE_LIQUIDITY` instruction.
   */
  removeLiquidityStableImbalance({
    market,
    position,
    amounts,
    maxBurnAmount,
  }: RemoveLiquidityStableImbalanceArgs) {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    // encode arguments using bcs first
    const serializer = new Serializer();
    serializer.serializeU8(1);
    serializer.serializeVector(amounts.map(v => new U256(v)));
    serializer.serializeU256(maxBurnAmount);
    const encodedParams = serializer.toUint8Array();
    this.operations.push(
      this.encodeOperationWithContext(OP_REMOVE_LIQUIDITY, marketAddress, position, (serializer) => {
        serializer.serializeBytes(encodedParams);
      }),
    );
    return this;
  }

  /**
   * Remove liquidity from a stable pool in ratio.
   * Append an `OP_REMOVE_LIQUIDITY` instruction.
   */
  removeLiquidityStableRatio({
    market,
    position,
    amount,
    minAmounts,
  }: RemoveLiquidityStableRatioArgs) {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    // encode arguments using bcs first
    const serializer = new Serializer();
    serializer.serializeU8(2);
    serializer.serializeU256(amount);
    serializer.serializeVector(minAmounts.map(v => new U256(v)));
    const encodedParams = serializer.toUint8Array();
    this.operations.push(
      this.encodeOperationWithContext(OP_REMOVE_LIQUIDITY, marketAddress, position, (serializer) => {
        serializer.serializeBytes(encodedParams);
      }),
    );
    return this;
  }

  /**
   * Remove liquidity from a stable pool as single asset.
   * Append an `OP_REMOVE_LIQUIDITY` instruction.
   */
  removeLiquidityStableSingle({
    market,
    position,
    amount,
    index,
    minAmount,
  }: RemoveLiquidityStableSingleArgs) {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    // encode arguments using bcs first
    const serializer = new Serializer();
    serializer.serializeU8(0); // single asset redemption type
    serializer.serializeU256(amount); // amount of LP tokens to burn
    serializer.serializeU64(index); // index of the asset to withdraw
    serializer.serializeU256(minAmount); // minimum amount of the asset to receive
    const encodedParams = serializer.toUint8Array();
    this.operations.push(
      this.encodeOperationWithContext(OP_REMOVE_LIQUIDITY, marketAddress, position, (serializer) => {
        serializer.serializeBytes(encodedParams);
      }),
    );
    return this;
  }


  /**
   * Append an `OP_BORROW` instruction.
   */
  borrow({ market, position, vaultAddress, amount }: BorrowArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    const vault = TappLLPOperationBuilder.toAccountAddress(vaultAddress);
    this.operations.push(
      this.encodeOperationWithContext(OP_BORROW, marketAddress, position, (serializer) => {
        serializer.serialize(vault);
        serializer.serializeU64(amount);
      }),
    );
    return this;
  }

  /**
   * Append an `OP_REPAY` instruction.
   */
  repay({ market, position, vaultAddress, amount }: RepayArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    const vault = TappLLPOperationBuilder.toAccountAddress(vaultAddress);
    this.operations.push(
      this.encodeOperationWithContext(OP_REPAY, marketAddress, position, (serializer) => {
        serializer.serialize(vault);
        serializer.serializeU64(amount);
      }),
    );
    return this;
  }

  /**
   * Append an `OP_CLAIM_REWARD` instruction.
   */
  claimReward({ market, position, assetAddress, amountToClaim }: ClaimRewardArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    const asset = TappLLPOperationBuilder.toAccountAddress(assetAddress);
    this.operations.push(
      this.encodeOperationWithContext(OP_CLAIM_REWARD, marketAddress, position, (serializer) => {
        serializer.serialize(asset);
        serializer.serializeOption(amountToClaim === undefined ? undefined : new U64(amountToClaim));
      }),
    );
    return this;
  }

  /**
   * Append an `OP_CLOSE_POSITION` instruction.
   */
  closePosition({ market, position }: ClosePositionArgs): this {
    const marketAddress = TappLLPOperationBuilder.toAccountAddress(market);
    this.operations.push(this.encodeOperationWithContext(OP_CLOSE_POSITION, marketAddress, position));
    return this;
  }

  // closePositionScript({
  //   market,
  //   position,
  // }: ClosePositionArgs): this {
  //   new AptosScriptComposer();
  // }

  /**
   * Returns a txn of the encoded operations for direct use as a transaction payload.
   */
  build(): InputGenerateTransactionPayloadData {
    return {
      function: `${this.protocolAddress}::api::execute`,
      typeArguments: [],
      functionArguments: [this.operations],
    };
  }


  private encodeOperationWithContext(
    kind: number,
    marketAddress: AccountAddress,
    position: AccountAddressInput | null | undefined,
    withPayload?: (serializer: Serializer) => void,
  ): Uint8Array {
    return TappLLPOperationBuilder.encodeOperation(kind, (serializer) => {
      serializer.serialize(marketAddress);
      const resolvedPosition =
        position === undefined || position === null
          ? undefined
          : TappLLPOperationBuilder.toAccountAddress(position);
      serializer.serializeOption(resolvedPosition);
      if (withPayload) {
        withPayload(serializer);
      }
    });
  }

  private static encodeOperation(kind: number, withPayload?: (serializer: Serializer) => void): Uint8Array {
    const serializer = new Serializer();
    serializer.serializeU8(TappLLPOperationBuilder.ENCODING_VERSION); // encoding version
    serializer.serializeU8(kind);
    if (withPayload) {
      withPayload(serializer);
    }
    return serializer.toUint8Array();
  }

  private static toAccountAddress(input: AccountAddressInput | AccountAddress): AccountAddress {
    return input instanceof AccountAddress ? input : AccountAddress.from(input);
  }
}
