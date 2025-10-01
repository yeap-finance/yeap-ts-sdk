import { configDotenv } from 'dotenv';
import {initializeYeapFromEnv} from './setup';

describe("Tapp LLP API tests", () => {
    beforeAll(() => {
        // Load environment variables from .env file
        configDotenv();
    });
  test("should initialize Tapp LLP API correctly", async () => {
    const yeap = await initializeYeapFromEnv();
    const api = yeap.tappLLPApi;
    expect(api).toBeDefined();
    expect(typeof api).toBe("object");
    expect(typeof api.getPositionsByOwner).toBe("function");
  });
  test("should get markets", async () => {
    const yeap = await initializeYeapFromEnv();
    const api = yeap.tappLLPApi;
    const markets = await api.getAllMarkets();
    expect(markets).toBeDefined();
    expect(Array.isArray(markets)).toBe(true);
    if (markets.length > 0) {
      const market = markets[0];
      expect(market).toHaveProperty("market");
      expect(market).toHaveProperty("collateral");
      expect(market).toHaveProperty("status");
    }
    console.log(`Fetched ${markets.length} markets`);
    console.log(JSON.stringify(markets, null, 2));
  });
});
