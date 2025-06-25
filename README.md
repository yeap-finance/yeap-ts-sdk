# Yeap SDK Sub-Package

This sub-package provides a structured way to interact with the Yeap DeFi protocol's GraphQL APIs following the same patterns as the main Aptos TypeScript SDK.

## Features

- 🏦 Vault management and querying
- 🔄 GraphQL code generation support
- 📊 Type-safe queries and operations
- 🎯 Similar API patterns to the main Aptos SDK
- 🛠️ Utilities for common operations
- ✅ Comprehensive testing setup
- 📦 Independent build and publish capabilities

## Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables (see Configuration section below)
cp .env.example .env
# Edit .env with your actual values

# Generate GraphQL types
pnpm indexer-codegen

# Build the package
pnpm build

# Run tests
pnpm test
```

## Configuration

### Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and set your GraphQL schema URL:
   ```bash
   GRAPHQL_SCHEMA_URL=https://your-actual-graphql-api.com/graphql
   CUSTOM_API_KEY=your-api-key  # Optional
   ```

3. For different environments, you can use:
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

```typescript
import { Yeap } from "@aptos-labs/yeap-sdk";

// Initialize the custom indexer
const yeap = new Yeap({
  endpoint: "https://your-custom-graphql-api.com/graphql",
  apiKey: "your-api-key", // optional
});

// Query custom data
const data = await yeap.getCustomData({
  limit: 10,
  offset: 0,
  orderBy: [{ created_at: "desc" }]
});

// Get specific data by ID
const item = await yeap.getCustomDataById("example-id");

// Execute raw GraphQL queries
const result = await yeap.query(`
  query CustomQuery($filter: String!) {
    custom_data(where: { name: { _eq: $filter } }) {
      id
      name
      description
    }
  }
`, { filter: "example" });
```

## Structure

```
custom-indexer/
├── src/
│   ├── api/                    # API classes (similar to main SDK)
│   ├── internal/              # Internal implementations
│   │   └── queries/           # GraphQL queries
│   ├── types/                 # Type definitions
│   │   ├── generated/         # Generated GraphQL types
│   │   └── codegen.yaml       # GraphQL codegen configuration
│   └── utils/                 # Utility functions
├── tests/                     # Test files
├── package.json              # Package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## GraphQL Code Generation

This package uses GraphQL Code Generator to create TypeScript types from your GraphQL schema:

1. Place your `.graphql` query files in `src/internal/queries/`
2. Update the schema URL in `src/types/codegen.yaml`
3. Run `pnpm indexer-codegen` to generate types in `src/types/generated/`

## Scripts

- `pnpm build` - Build the package
- `pnpm test` - Run all tests
- `pnpm unit-test` - Run unit tests only
- `pnpm e2e-test` - Run end-to-end tests only
- `pnpm indexer-codegen` - Generate GraphQL types
- `pnpm fmt` - Format code
- `pnpm lint` - Lint code

## Integration with Main SDK

This sub-package is designed to work alongside the main Aptos TypeScript SDK:

```typescript
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Yeap } from "@aptos-labs/yeap-sdk";

// Main Aptos SDK
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);

// Custom indexer (can use compatibility method)
const yeap = Yeap.fromAptosConfig(aptosConfig, {
  endpoint: "https://your-custom-graphql-api.com/graphql"
});

// Use both together
const accountInfo = await aptos.getAccountInfo("0x1");
const customData = await yeap.getCustomData();
```

## Development

1. Clone the repository
2. Navigate to the custom-indexer directory
3. Install dependencies: `pnpm install`
4. Configure your GraphQL schema URL
5. Generate types: `pnpm indexer-codegen`
6. Build: `pnpm build`
7. Test: `pnpm test`

## Publishing

The package can be published independently:

```bash
pnpm build
npm publish
```
