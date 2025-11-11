import { AccountAddress, Deserializer } from "@aptos-labs/ts-sdk";
import { TappLLPOperationBuilder } from "../../src/api/tappLLPOperationBuilder";

const address = (hex: string) => `0x${hex.padStart(64, "0")}`;

describe("TappLLPOperationBuilder", () => {
  test("open position encodes opcode and market", () => {
    const protocolAddress = AccountAddress.from(address("1"));
    const builder = new TappLLPOperationBuilder(protocolAddress);
    const market = address("2");
    builder.openPosition({ market });

    const payload = builder.build();
    if (!("function" in payload)) {
      throw new Error("Expected entry function payload");
    }
    expect(payload.function).toBe(`${protocolAddress.toString()}::api::execute`);
    expect(payload.typeArguments).toEqual([]);

    const operations = payload.functionArguments[0] as Uint8Array[];
    expect(operations).toHaveLength(1);

    const [operation] = operations;

    const deserializer = new Deserializer(operation);
    expect(deserializer.deserializeU8()).toBe(0);
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(AccountAddress.from(market).toString());
    deserializer.assertFinished();
  });

  test("add liquidity serializes amounts and min mint", () => {
    const protocolAddress = AccountAddress.from(address("1"));
    const builder = new TappLLPOperationBuilder(protocolAddress);
    const market = address("9");
    const position = address("abc");
    builder.addLiquidity({
      market,
      position,
      amounts: [1n, 2n],
      minMintAmount: 3n,
    });

    const [operation] = builder.operations;
    const operationDeserializer = new Deserializer(operation);
    expect(operationDeserializer.deserializeU8()).toBe(3); // OP_ADD_LIQUIDITY
    expect(AccountAddress.deserialize(operationDeserializer).toString()).toBe(AccountAddress.from(market).toString());
    expect(operationDeserializer.deserializeBool()).toBe(true);
    expect(AccountAddress.deserialize(operationDeserializer).toString()).toBe(AccountAddress.from(position).toString());
    expect(operationDeserializer.deserializeUleb128AsU32()).toBe(2);
    expect(operationDeserializer.deserializeU256()).toBe(BigInt(1));
    expect(operationDeserializer.deserializeU256()).toBe(BigInt(2));
    expect(operationDeserializer.deserializeU256()).toBe(BigInt(3));
    operationDeserializer.assertFinished();
  });

  test("claim reward encodes optional amount", () => {
    const protocolAddress = AccountAddress.from(address("1"));
    const builder = new TappLLPOperationBuilder(protocolAddress);
    const market = address("5");
    const position = address("42");
    const assetAddress = address("dead");
    builder.claimReward({
      market,
      position,
      assetAddress,
      amountToClaim: undefined,
    });

    const [operation] = builder.operations;

    const deserializer = new Deserializer(operation);
    expect(deserializer.deserializeU8()).toBe(7); // OP_CLAIM_REWARD
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(AccountAddress.from(market).toString());
    expect(deserializer.deserializeBool()).toBe(true);
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(AccountAddress.from(position).toString());
    expect(AccountAddress.deserialize(deserializer).toString()).toBe(AccountAddress.from(assetAddress).toString());
    expect(deserializer.deserializeBool()).toBe(false);
    deserializer.assertFinished();
  });
});
