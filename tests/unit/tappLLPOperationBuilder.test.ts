import { AccountAddress, Deserializer } from "@aptos-labs/ts-sdk";
import { TappLLPOperationBuilder } from "../../src/api/tappLLPOperationBuilder";

describe("TappLLPOperationBuilder", () => {
  test("open position encodes opcode and market", () => {
    const builder = new TappLLPOperationBuilder();
    const [operation] = builder.openPosition({ market: "0x1" }).build();

    const deserializer = new Deserializer(operation);
    expect(deserializer.deserializeU8()).toBe(0);
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(
      AccountAddress.from("0x1").toString(),
    );
    deserializer.assertFinished();
  });

  test("add liquidity serializes amounts and min mint", () => {
    const builder = new TappLLPOperationBuilder();
    builder.addLiquidity({
      market: "0x9",
      position: "0xabc",
      amounts: [1n, 2n],
      minMintAmount: 3n,
    });

    const vectorBytes = builder.toVectorBytes();
    const vectorDeserializer = new Deserializer(vectorBytes);

    expect(vectorDeserializer.deserializeUleb128AsU32()).toBe(1);
    const operationBytes = vectorDeserializer.deserializeBytes();
    vectorDeserializer.assertFinished();

    const operationDeserializer = new Deserializer(operationBytes);
    expect(operationDeserializer.deserializeU8()).toBe(3); // OP_ADD_LIQUIDITY
    expect(AccountAddress.deserialize(operationDeserializer).toString()).toBe(
      AccountAddress.from("0x9").toString(),
    );
    expect(operationDeserializer.deserializeBool()).toBe(true);
    expect(AccountAddress.deserialize(operationDeserializer).toString()).toBe(
      AccountAddress.from("0xabc").toString(),
    );
    expect(operationDeserializer.deserializeUleb128AsU32()).toBe(2);
    expect(operationDeserializer.deserializeU256()).toBe(BigInt(1));
    expect(operationDeserializer.deserializeU256()).toBe(BigInt(2));
    expect(operationDeserializer.deserializeU256()).toBe(BigInt(3));
    operationDeserializer.assertFinished();
  });

  test("claim reward encodes optional amount", () => {
    const builder = new TappLLPOperationBuilder();
    const [operation] = builder
      .claimReward({
        market: "0x5",
        position: "0x42",
        assetAddress: "0x1",
        amountToClaim: null,
      })
      .build();

    const deserializer = new Deserializer(operation);
    expect(deserializer.deserializeU8()).toBe(7); // OP_CLAIM_REWARD
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(
      AccountAddress.from("0x5").toString(),
    );
    expect(deserializer.deserializeBool()).toBe(true);
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(
      AccountAddress.from("0x42").toString(),
    );
    deserializer.deserializeFixedBytes(32);
    expect(deserializer.deserializeBool()).toBe(false);
    deserializer.assertFinished();
  });
});
