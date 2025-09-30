import { TappApiClient } from "../src/thirdparties";
describe("Tapp SDK tests", () => {
  beforeAll(() => {});
  test("should initialize Tapp SDK correctly", () => {
    const client = new TappApiClient();
    expect(client).toBeDefined();
    expect(typeof client).toBe("object");
    expect(typeof client.getPoolList).toBe("function");
  });

  test("should fetch pool list from Tapp API", async () => {
    const client = new TappApiClient("https://display-engine.dev.tapp-dex.devucc.name/api/v1");
    const { data: pools, total } = await client.getPoolList({ poolType: "STABLE", pageSize: 40 });
    console.log(`Fetched ${pools.length} pools, total: ${total}`);
    expect(pools).toBeDefined();
    expect(Array.isArray(pools)).toBe(true);
    if (pools.length > 0) {
      const pool = pools[0];
      expect(pool).toHaveProperty("poolId");
      expect(pool).toHaveProperty("apr");
    }
    console.log(JSON.stringify(pools));
  });

  test("should fetch pool info by ID from Tapp API", async () => {
    const client = new TappApiClient();
    const poolId = "0x82e0b52f95ae57b35220726a32c3415919389aa5b8baa33a058d7125797535cc"; // tapp mainnet stable pool usdt/usdc
    const poolInfo = await client.getPoolInfo({ poolId: poolId });
    expect(poolInfo).toBeDefined();
    expect(poolInfo.poolId).toBe(poolId);
    expect(poolInfo).toHaveProperty("status");
    expect(poolInfo).toHaveProperty("totalShare");
    console.log(poolInfo);
  });
  test("should fetch pool status from Tapp API", async () => {
    const client = new TappApiClient();
    const poolId = "0x82e0b52f95ae57b35220726a32c3415919389aa5b8baa33a058d7125797535cc"; // tapp mainnet stable pool usdt/usdc
    const poolStatus = await client.getPoolStats({ poolId: poolId });
    expect(poolStatus).toBeDefined();
    expect(poolStatus.poolId).toBe(poolId);
    expect(poolStatus).toHaveProperty("volume24h");
    expect(poolStatus).toHaveProperty("tvl");
    console.log(poolStatus);
  });
});
