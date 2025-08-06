# Yeap DeFi Protocol SDK

A comprehensive TypeScript SDK for interacting with the Yeap DeFi protocol on Aptos. This SDK provides structured access to vault management, SCMD (Single Collateral Multi Debt) positions, oracle configurations, and risk parameters through GraphQL APIs.

## Features

- 🏦 **Vault Management**: Query active vaults, vault information, states, and settings
- 💰 **SCMD Positions**: Access position data and risk parameters for single collateral multi debt trading
- 📊 **Risk Parameters**: Type-safe access to collateral and borrow risk configurations
- 🔮 **Oracle Integration**: Fetch oracle configurations and real-time price data
- 📈 **GraphQL Code Generation**: Automated type generation from GraphQL schemas
- 🎯 **Type Safety**: Fully typed interfaces with comprehensive error handling
- 🛠️ **Shared Utilities**: Common functions for SDK initialization and configuration
- ✅ **Working Examples**: Complete example scripts demonstrating all features
- 📦 **Independent Build**: Standalone package with its own build and publish capabilities

## Installation

### From GitHub (Recommended for direct usage)

```bash
# Install from GitHub repository
npm install git+https://github.com/your-username/yeap-ts-sdk.git

# Using yarn
yarn add git+https://github.com/your-username/yeap-ts-sdk.git

# Using pnpm
pnpm add git+https://github.com/your-username/yeap-ts-sdk.git
```

The package will automatically build when installed from GitHub.

### For Development

```bash
# Clone the repository
git clone https://github.com/your-username/yeap-ts-sdk.git
cd yeap-ts-sdk

# Install dependencies
pnpm install

# Set up environment variables (see Configuration section below)
cp .env.example .env
# Edit .env with your actual values

# Generate GraphQL types from schema
pnpm indexer-codegen

# Build the package
pnpm build

# Run example scripts
pnpm example:vault-api      # Vault management examples
pnpm example:oracle-api     # Oracle configuration examples
pnpm example:scmd-api       # SCMD config and risk parameters

# Run tests
pnpm test
```

## Configuration

### Environment Variables

Create your environment configuration:

```bash
cp .env.example .env
```

Configure the following variables in your `.env` file:

```bash
# GraphQL API Configuration
GRAPHQL_ENDPOINT=https://api.testnet.aptoslabs.com/nocode/v1/api/your-project/v1/graphql
CUSTOM_API_KEY=your-api-key-here

# Yeap Protocol Addresses (Testnet)
YEAP_ORACLE_ADDRESS=0x2e3d12f4b20dcb775a7161cdaa5b6ad56dd5f8f69187cc78cd45d83652889fab
YEAP_VAULT_ADDRESS=0x2345678901bcdef12345678901bcdef12345678901bcdef12345678901bcdef1
YEAP_SCMD_PROTOCOL_ADDRESS=0x3e2ac2676af70e926d2a400ff48c9fcf9446bf44bcbe229ebc997bee8bef401c
YEAP_IRM_ADDRESS=0x456789013def123456789013def123456789013def123456789013def123456789
YEAP_LENS_ADDRESS=0xaab95641745dfd23fbe8c6f4ac9f8ceae063f8dbd700d78915a0d5fa2d829ebf

# GraphQL Schema URL for codegen
GRAPHQL_SCHEMA_URL=${GRAPHQL_ENDPOINT}
```

For different environments:

```bash
# Development
cp .env.development.example .env.development
pnpm indexer-codegen:dev

# Production
cp .env.production.example .env.production
pnpm indexer-codegen:prod
```

### GraphQL Schema Setup

The GraphQL schema URL is now configured via environment variables:

1. The `src/types/codegen.yaml` uses `${GRAPHQL_SCHEMA_URL}` from your environment
2. Add your GraphQL queries to `src/internal/queries/`
3. Run `pnpm indexer-codegen` to generate TypeScript types

**Note**: The codegen.yaml no longer needs manual URL updates - just set the environment variable!

## Usage

### Basic Setup

```typescript
import { Yeap, YeapConfig } from "@aptos-labs/yeap-sdk";
import { AptosConfig, Network } from "@aptos-labs/ts-sdk";

// Initialize with Aptos network configuration
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const config = new YeapConfig({
  endpoint: "https://api.testnet.aptoslabs.com/nocode/v1/api/your-project/v1/graphql",
  apiKey: "your-api-key", // optional
  aptosConfig: aptosConfig // required for on-chain oracle interactions
});

const yeap = new Yeap(config);
```

### Vault Management

```typescript
// Get all active vaults
const activeVaults = await yeap.vaultApi.getActiveVaults();
console.log(`Found ${activeVaults.length} active vaults`);

// Get specific vault information
const vaultInfo = await yeap.vaultApi.getVaultInfoByAddress("0x123...");
if (vaultInfo) {
  console.log("Vault creator:", vaultInfo.creator);
  console.log("Underlying asset:", vaultInfo.underlyingAsset);
  console.log("Settings:", vaultInfo.settings);
}

// Get vault state and activities
const vaultState = await yeap.vaultApi.getVaultLatestState("0x123...");
const activities = await yeap.vaultApi.getVaultStateActivities("0x123...");
```

### SCMD Positions and Risk Parameters

```typescript
// Get user positions
const positions = await yeap.scmdApi.getPositionsByOwner("0xabc...");
console.log(`User has ${positions.length} positions`);

// Get SCMD configuration with risk parameters
const scmdConfig = await yeap.scmdApi.getConfig();

// Access collateral risk parameters
const collateralConfigs = scmdConfig.supportedCollateralConfigs();
for (const [collateralAddress, config] of collateralConfigs) {
  console.log(`Collateral: ${collateralAddress}`);
  console.log(`- LTV: ${config.ltv}`);
  console.log(`- Liquidation LTV: ${config.lltv}`);
  console.log(`- Liquidation Bonus: ${config.liquidationBonusBps} bps`);
}

// Access vault configurations (borrow risk parameters)
const vaultConfigs = scmdConfig.supportedVaultConfigs();
for (const [collateralAddress, configs] of vaultConfigs) {
  console.log(`Collateral ${collateralAddress} supports ${configs.length} vaults`);
  configs.forEach(config => {
    console.log(`- Vault: ${config.vault.toString()}, BRW: ${config.brw}`);
  });
}

// Get specific configurations using helper methods
const collateralConfig = scmdConfig.getCollateralConfigByAddress("0x123...");
const vaultConfigs = scmdConfig.getVaultConfigsByCollateralAddress("0x123...");
```

### Oracle Configuration and Prices

```typescript
// Get oracle router and its configurations
const oracleRouter = await yeap.oracleRouterApi.getRouter("0xrouter...");

if (oracleRouter) {
  console.log(`Router has ${oracleRouter.getAllConfigs().length} configurations`);

  // Get specific oracle config for an asset pair
  const oracleConfig = oracleRouter.getOracleConfig("0xbase...", "0xquote...");

  if (oracleConfig) {
    console.log("Oracle kind:", oracleConfig.oracleKind);
    console.log("Is deleted:", oracleConfig.isDeleted);

    // Fetch real-time price (requires aptosConfig in YeapConfig)
    const price = await oracleConfig.get_price();
    console.log("Current price:", price?.toString());
  }

  // Get all configurations
  const allConfigs = oracleRouter.getAllConfigs();
  console.log(`Found ${allConfigs.length} total configurations`);
}
```

## Project Structure

```
yeap-ts-sdk/
├── src/
│   ├── api/                    # Main API classes
│   │   ├── entities/          # Data entities (Vault, ScmdConfig, etc.)
│   │   ├── interfaces.ts      # Type-safe interfaces
│   │   ├── transforms.ts      # Data transformation functions
│   │   ├── vaultApi.ts       # Vault management API
│   │   ├── scmdApi.ts        # SCMD positions and config API
│   │   ├── oracleApi.ts      # Oracle configuration API
│   │   ├── yeap.ts           # Main SDK entry point
│   │   └── yeapConfig.ts     # Configuration management
│   ├── client/                # GraphQL client implementation
│   ├── internal/              # Internal implementations
│   │   ├── queries/           # GraphQL queries and fragments
│   │   └── riskParameters.ts  # Risk parameter fetching
│   ├── types/                 # Type definitions
│   │   ├── generated/         # Auto-generated GraphQL types
│   │   └── codegen.yaml       # GraphQL codegen configuration
│   └── utils/                 # Utility functions
├── examples/                  # Working example scripts
│   ├── shared/               # Shared utilities for examples
│   ├── test-vault-api.ts     # Vault API examples
│   ├── test-oracle-api.ts    # Oracle API examples
│   └── test-scmd-config.ts   # SCMD configuration examples
├── tests/                     # Test files
├── package.json              # Package configuration with example scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## GraphQL Code Generation

This package uses GraphQL Code Generator to create TypeScript types from your GraphQL schema:

1. Place your `.graphql` query files in `src/internal/queries/`
2. Update the schema URL in `src/types/codegen.yaml`
3. Run `pnpm indexer-codegen` to generate types in `src/types/generated/`

## Available Scripts

- `pnpm build` - Build the package for distribution
- `pnpm test` - Run all tests
- `pnpm unit-test` - Run unit tests only
- `pnpm e2e-test` - Run end-to-end tests only
- `pnpm indexer-codegen` - Generate GraphQL types from schema
- `pnpm indexer-codegen:dev` - Generate types using development environment
- `pnpm indexer-codegen:prod` - Generate types using production environment
- `pnpm indexer-codegen:watch` - Watch mode for continuous type generation
- `pnpm fmt` - Format code using Prettier
- `pnpm lint` - Lint code using ESLint

### Example Scripts

- `pnpm example:vault-api` - Run vault management examples
- `pnpm example:oracle-api` - Run oracle configuration examples
- `pnpm example:scmd-api` - Run SCMD configuration and risk parameter examples

## Integration with Aptos SDK

The Yeap SDK is designed to work seamlessly with the official Aptos TypeScript SDK:

```typescript
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Yeap, YeapConfig } from "@aptos-labs/yeap-sdk";

// Initialize Aptos SDK for on-chain interactions
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);

// Initialize Yeap SDK with Aptos configuration
const yeapConfig = new YeapConfig({
  endpoint: "https://api.testnet.aptoslabs.com/nocode/v1/api/your-project/v1/graphql",
  apiKey: "your-api-key",
  aptosConfig: aptosConfig // Enables oracle price fetching
});
const yeap = new Yeap(yeapConfig);

// Use both SDKs together
const accountInfo = await aptos.getAccountInfo("0x1");
const userPositions = await yeap.scmdApi.getPositionsByOwner("0x1");
const activeVaults = await yeap.vaultApi.getActiveVaults();

// Fetch oracle prices (requires both SDKs)
const oracleRouter = await yeap.oracleRouterApi.getRouter("0xrouter...");
const oracleConfig = oracleRouter?.getOracleConfig("0xbase", "0xquote");
const currentPrice = await oracleConfig?.get_price(); // Uses Aptos SDK internally
```

## Key Features in Detail

### Type-Safe Risk Parameters

All risk parameters are fully typed with proper transformations:

```typescript
interface CollateralRiskParameters {
  borrowVaultMaxNum: number;        // Maximum number of borrow vaults
  collateral: AccountAddress;       // Collateral asset address
  configAddress: AccountAddress;    // Configuration contract address
  liquidationBonusBps: number;      // Liquidation bonus in basis points
  lltv: number;                     // Liquidation Loan-to-Value ratio
  ltv: number;                      // Loan-to-Value ratio
  oracle: AccountAddress;           // Oracle address for price feeds
  riskFactor: number;               // Risk factor for calculations
}

interface BorrowRiskParameters {
  brw: number;                      // Borrowing weight
  collateral: AccountAddress;       // Collateral asset address
  configAddress: AccountAddress;    // Configuration contract address
  vault: AccountAddress;            // Vault address
}
```

### String-Based Map Keys

To avoid `AccountAddress` reference equality issues, all Maps use string keys:

```typescript
// Maps use string keys for reliable lookups
const collateralConfigs: Map<string, CollateralRiskParameters> = scmdConfig.supportedCollateralConfigs();
const vaultConfigs: Map<string, Array<BorrowRiskParameters>> = scmdConfig.supportedVaultConfigs();

// Helper methods for convenient access
const config = scmdConfig.getCollateralConfigByAddress("0x123...");
const vaults = scmdConfig.getVaultConfigsByCollateralAddress("0x123...");
```

## Development

### Getting Started

1. Clone the repository
2. Navigate to the yeap-ts-sdk directory
3. Install dependencies: `pnpm install`
4. Configure environment variables (copy `.env.example` to `.env`)
5. Generate GraphQL types: `pnpm indexer-codegen`
6. Build the project: `pnpm build`
7. Run examples: `pnpm example:vault-api`
8. Run tests: `pnpm test`

### Working with Examples

The `examples/` directory contains fully working scripts that demonstrate all SDK features:

```bash
# Test vault management features
pnpm example:vault-api

# Test oracle configuration and price fetching
pnpm example:oracle-api

# Test SCMD configuration and risk parameters
pnpm example:scmd-api
```

Each example script includes:
- Environment setup validation
- Comprehensive error handling
- Detailed output showing all available data
- Cross-referencing between different data types

### GraphQL Code Generation

The SDK uses GraphQL Code Generator for type safety:

1. Add `.graphql` query files to `src/internal/queries/`
2. Create fragments in `src/internal/queries/fragments/`
3. Update schema URL in environment variables
4. Run `pnpm indexer-codegen` to generate TypeScript types
5. Import generated types from `src/types/generated/`

### Adding New Features

1. **API Classes**: Add new API classes in `src/api/`
2. **Entities**: Create data entities in `src/api/entities/`
3. **Interfaces**: Define type-safe interfaces in `src/api/interfaces.ts`
4. **Transforms**: Add transformation functions in `src/api/transforms.ts`
5. **Queries**: Add GraphQL queries in `src/internal/queries/`
6. **Examples**: Create example scripts in `examples/`

## Publishing

The package is designed for independent publishing to npm:

```bash
# Build the package
pnpm build

# Run tests to ensure everything works
pnpm test

# Publish to npm
npm publish
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Ensure all tests pass: `pnpm test`
5. Ensure code is properly formatted: `pnpm fmt`
6. Ensure no linting errors: `pnpm lint`
7. Update documentation if needed
8. Commit your changes: `git commit -m 'Add amazing feature'`
9. Push to the branch: `git push origin feature/amazing-feature`
10. Open a Pull Request

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.
