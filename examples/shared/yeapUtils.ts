// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Shared utility functions for example scripts.
 * This provides common functionality for initializing Yeap client with environment configuration.
 */

import { Yeap, YeapConfig, YeapAddresses } from '../../src';
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';

/**
 * Initialize a Yeap client using environment variables.
 *
 * @returns Promise containing initialized Yeap client
 * @throws Error if required environment variables are missing
 */
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
    { env: 'YEAP_LENS', key: 'yeap_lens' as const },
    { env: 'YEAP_EARN_API', key: 'yeap_earn_api' as const },
    { env: 'YEAP_BORROW_API', key: 'yeap_borrow_api' as const }
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
    hermesUrl: process.env.HERMES_URL || 'https://hermes-beta.pyth.network',
  });

  // Initialize and return Yeap client
  return new Yeap(yeapConfig);
}

/**
 * Print common error help message for environment setup.
 */
export function printEnvSetupHelp(): void {
  console.error('\nMake sure you have:');
  console.error('1. Copied .env.example to .env (if available) or created a .env file');
  console.error('2. Updated the GRAPHQL_ENDPOINT in .env');
  console.error('3. Updated all Yeap contract addresses (YEAP_ORACLE, YEAP_VAULT, YEAP_SCMD_PROTOCOL, YEAP_IRM) with real addresses');
}
