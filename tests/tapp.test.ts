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
    const filteredPools = pools.filter(pool => pool.poolId === "0xe0b38051940ebb02885ba5139f2bc86d0726cf5292360725514a56f21f81d66d");
    // expect(filteredPools.length).toBeGreaterThan(0);

    const poolInfo = await client.getPoolInfo({
      poolId: "0xe0b38051940ebb02885ba5139f2bc86d0726cf5292360725514a56f21f81d66d",
    });
    const poolStats = await client.getPoolStats({
      poolId: "0xe0b38051940ebb02885ba5139f2bc86d0726cf5292360725514a56f21f81d66d",
    });
    expect(poolInfo).toBeDefined();
    expect(poolStats).toBeDefined();

    console.log("Pool info:", poolInfo);
    console.log("Pool stats:", poolStats);
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
  test("should fetch position info from Tapp API", async () => {
    const client = new TappApiClient("https://display-engine.dev.tapp-dex.devucc.name/api/v1");
    const positionId = "0xcd01c0a7d8c88c1dc07099f945bcbcb309b15218f2e33bd834a0534dc9386e60";
    const positionInfo = await client.getPositions({ nftAddrs: ["0xc216c58397f59d7c659168ab79068c22ebd82b291d83af08781495a582fff7f2"]}); // get postioin problems
    expect(positionInfo.data.length).toBeGreaterThan(0);
    console.log(positionInfo.data);
  });
});
