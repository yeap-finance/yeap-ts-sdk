import { Yeap, YeapConfig, YeapAddresses } from '../src/';
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { configDotenv } from "dotenv";

export async function initializeYeapFromEnv(): Promise<Yeap> {
  // Get configuration from environment variables
  const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT || process.env.GRAPHQL_SCHEMA_URL;
  const apiKey = process.env.CUSTOM_API_KEY;

  if (!graphqlEndpoint) {
    throw new Error('GRAPHQL_ENDPOINT or GRAPHQL_SCHEMA_URL must be set in .env');
  }

  console.log('📡 GraphQL Endpoint:', graphqlEndpoint);
  console.log('🔑 API Key:', apiKey ? '***configured***' : 'not configured');

  // Create Aptos client for testnet (matching the GraphQL endpoint)
  const aptosConfig = new AptosConfig({
    network: Network.TESTNET,
    fullnode: 'https://api.testnet.aptoslabs.com/v1'
  });
  const aptosClient = new Aptos(aptosConfig);

  // Load Yeap contract addresses from environment variables
  const requiredAddresses = [
    { env: 'YEAP_ORACLE', key: 'yeap_oracle' as const },
    { env: 'YEAP_VAULT', key: 'yeap_vault' as const },
    { env: 'YEAP_SCMD_PROTOCOL', key: 'yeap_scmd_protocol' as const },
    { env: 'YEAP_IRM', key: 'yeap_irm' as const },
    { env: 'YEAP_ORACLE_LENS', key: 'yeap_oracle_lens' as const },
    { env: 'YEAP_EARN_API', key: 'yeap_earn_api' as const },
    { env: 'YEAP_BORROW_API', key: 'yeap_borrow_api' as const },
    { env: 'YEAP_TAPP_LLP', key: 'yeap_tapp_llp' as const },
  ];

  const addresses: YeapAddresses = {};
  const missingAddresses: string[] = [];

  for (const { env, key } of requiredAddresses) {
    const address = process.env[env] || process.env[env.toLowerCase()];
    if (address) {
      addresses[key] = address;
      console.log(`📍 ${key}: ${address}`);
    } else {
      missingAddresses.push(env);
    }
  }

  if (missingAddresses.length > 0) {
    throw new Error(
      `Missing required Yeap contract addresses in .env: ${missingAddresses.join(', ')}\n` +
      'Please update your .env file with the actual contract addresses.'
    );
  }

  // Create Yeap configuration
  const yeapConfig = new YeapConfig({
    endpoint: graphqlEndpoint,
    apiKey: apiKey,
    aptosClient: aptosClient,
    addresses: addresses,
  });

  // Initialize and return Yeap client
  return new Yeap(yeapConfig);
}
