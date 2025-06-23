import { YeapFinanceClient } from '../lib/client';

describe('YeapFinanceClient', () => {
  let client: YeapFinanceClient;

  beforeEach(() => {
    client = new YeapFinanceClient();
  });

  describe('constructor', () => {
    it('should create client with default config', () => {
      const config = client.getConfig();
      expect(config.baseUrl).toBe('https://api.yeapfinance.com');
      expect(config.timeout).toBe(5000);
      expect(config.apiKey).toBe('');
    });

    it('should create client with custom config', () => {
      const customClient = new YeapFinanceClient({
        apiKey: 'test-key',
        baseUrl: 'https://custom-api.com',
        timeout: 10000,
      });

      const config = customClient.getConfig();
      expect(config.apiKey).toBe('test-key');
      expect(config.baseUrl).toBe('https://custom-api.com');
      expect(config.timeout).toBe(10000);
    });
  });

  describe('updateConfig', () => {
    it('should update configuration', () => {
      client.updateConfig({ apiKey: 'new-key' });
      const config = client.getConfig();
      expect(config.apiKey).toBe('new-key');
    });
  });

  describe('getFinanceData', () => {
    it('should return finance data', async () => {
      const result = await client.getFinanceData('test-id');
      
      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.data?.id).toBe('test-id');
      expect(result.data?.amount).toBe(1000);
      expect(result.data?.currency).toBe('USD');
    });
  });
}); 