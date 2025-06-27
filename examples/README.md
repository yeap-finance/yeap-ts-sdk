# Yeap SDK Examples

This directory contains example scripts demonstrating how to use the Yeap SDK APIs with shared utilities for consistent initialization.

## Setup

1. **Environment Configuration**: Copy `.env.example` to `.env` (if available) or create a `.env` file with the following variables:

```bash
# GraphQL endpoint for the Yeap indexer
GRAPHQL_ENDPOINT=https://your-yeap-graphql-api.com/graphql
# Or alternatively:
GRAPHQL_SCHEMA_URL=https://your-yeap-graphql-api.com/graphql

# Optional API key
CUSTOM_API_KEY=your-api-key

# Yeap contract addresses
YEAP_ORACLE=0x...
YEAP_VAULT=0x...
YEAP_SCMD_PROTOCOL=0x...
YEAP_IRM=0x...
```

2. **Install Dependencies**: Make sure you have installed the project dependencies:

```bash
pnpm install
```

## Available Examples

### 1. Vault API Example (`test-vault-api.ts`)

Demonstrates how to use the Vault API to query vault information:

- **Step 1**: Get all vaults using `getAllVaults()`
- **Step 2**: Filter vaults by underlying asset using `getVaultsByUnderlyingAsset()`
- **Step 3**: Get detailed vault information using `vault()`
- **Step 4**: Get only active vaults using `getActiveVaults()`

```bash
pnpm tsx examples/test-vault-api.ts
```

**Key API Methods Demonstrated:**
- `yeap.vaultApi.getAllVaults(limit?, offset?)` - Get all vaults with pagination
- `yeap.vaultApi.getActiveVaults(limit?, offset?)` - Get only active (non-paused) vaults
- `yeap.vaultApi.getVaultsByUnderlyingAsset(asset, limit?, offset?)` - Get vaults by underlying asset
- `yeap.vaultApi.vault(vaultAddress)` - Get detailed vault information by address

### 2. Oracle API Example (`test-oracle-api.ts`)

Demonstrates how to use the Oracle API to query oracle configurations and fetch prices:

- **Step 1**: Get oracle configurations using `getConfigsByOracle()`
- **Step 2**: Fetch oracle price using one of the configurations
- **Step 3**: Test oracle configuration setup

```bash
pnpm tsx examples/test-oracle-api.ts
```

**Key API Methods Demonstrated:**
- `yeap.oracleRouterApi.getConfigsByOracle(oracleRouter, limit?, offset?)` - Get oracle configs by router
- `yeap.oracleRouterApi.getConfigByPrimaryKey(baseAsset, oracleRouter, quoteAsset)` - Get specific oracle config
- `oracleConfig.get_price()` - Fetch current oracle price

## Shared Utilities

### `shared/yeapUtils.ts`

Contains shared utility functions used by all example scripts:

- **`initializeYeapFromEnv()`**: Initialize Yeap client from environment variables
- **`printEnvSetupHelp()`**: Print helpful error messages for environment setup

This abstraction allows for consistent initialization across all examples and makes it easier to maintain.
   # Copy the example file if it exists, or create a new .env file
   cp .env.example .env  # (if .env.example exists)
   # OR create a new .env file
   touch .env

   # Edit .env with your configuration
   nano .env
   ```

2. **Update contract addresses:**
   Add your Yeap protocol contract addresses to `.env`:
   ```bash
   # Required Yeap contract addresses
   YEAP_ORACLE=0x...real_oracle_address...
   YEAP_VAULT=0x...real_vault_address...
   YEAP_SCMD_PROTOCOL=0x...real_scmd_address...
   YEAP_IRM=0x...real_irm_address...

   # GraphQL endpoint (required)
   GRAPHQL_ENDPOINT=https://your-graphql-endpoint.com/graphql
   # OR use GRAPHQL_SCHEMA_URL as alternative

   # Optional API key
   CUSTOM_API_KEY=your_api_key_here
   ```

3. **Run the example:**
   ```bash
   # Using npm script
   pnpm example:vault-api

   # Or directly with tsx
   pnpm tsx examples/test-vault-api.ts
   ```

**Expected Output:**
```
🚀 Starting Yeap VaultApi Test with Environment Configuration
============================================================
📡 GraphQL Endpoint: https://api.mainnet.aptoslabs.com/v1/graphql
🔑 API Key: not configured

🏦 Testing Vault API...
----------------------------------------

1. Fetching vaults by underlying asset...
✅ Found 0 vaults for asset: 0x1::aptos_coin::AptosCoin
   (No vaults found - this is expected with example addresses)

2. Testing vault lookup by address...
ℹ️  No vault found at address: 0x1234567890abcdef1234567890abcdef12345678
   (No vault found - this is expected with example addresses)

3. Testing configuration...
✅ Yeap Config - Endpoint: https://api.mainnet.aptoslabs.com/v1/graphql
✅ Yeap Config - Timeout: 30000ms
✅ Aptos Client Connected: true
✅ Available addresses: yeap_oracle, yeap_vault, yeap_scmd_protocol, yeap_irm
✅ Yeap Oracle Address: 0x1234567890abcdef1234567890abcdef12345678

🎉 Vault API test completed successfully!
```

## Environment Files

- `.env.example` - Template for environment variables (if available)
- `.env` - Your configuration file (created manually or from example)

## Notes

- Examples use environment variables for configuration
- Replace placeholder addresses with real Yeap protocol addresses for actual testing
- The GraphQL endpoint must be configured in `.env`
- No API key is required for public Aptos endpoints, but can be added if needed
- Examples include proper error handling for educational purposes

## Troubleshooting

**"Module 'dotenv' not found":**
```bash
pnpm install
```

**"No vault found" messages:**
This is expected when using example addresses. Replace with real Yeap protocol contract addresses.

**GraphQL errors:**
Check that the `GRAPHQL_ENDPOINT` in `.env` is correct and accessible.
