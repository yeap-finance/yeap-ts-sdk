# Custom Indexer Sub-Package - Architecture Summary

## Overview

I've created a comprehensive sub-package called `custom-indexer` that follows the exact same architectural patterns as the main Aptos TypeScript SDK and the existing `confidential-assets` sub-package. This sub-package provides a structured way to interact with any custom GraphQL API.

## Architecture Pattern Analysis

The main Aptos SDK follows this pattern:

```
src/
├── api/                    # Public API classes (Account, DigitalAsset, etc.)
├── internal/              # Internal implementations
│   └── queries/           # GraphQL queries
├── types/                 # Type definitions
│   ├── generated/         # Generated GraphQL types
│   └── codegen.yaml       # GraphQL codegen configuration
└── utils/                 # Utility functions
```

## Created Sub-Package Structure

```
custom-indexer/
├── package.json          # Independent package configuration
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration (same as main SDK)
├── jest.config.js        # Test configuration
├── README.md            # Comprehensive documentation
├── src/
│   ├── api/
│   │   ├── customIndexer.ts    # Main API class (follows Aptos pattern)
│   │   └── index.ts
│   ├── internal/
│   │   ├── customIndexer.ts    # Implementation layer
│   │   ├── queries/            # GraphQL queries directory
│   │   │   ├── getCustomData.graphql
│   │   │   └── customDataFields.graphql
│   │   └── index.ts
│   ├── types/
│   │   ├── generated/          # Generated GraphQL types
│   │   │   ├── types.ts
│   │   │   ├── operations.ts
│   │   │   └── queries.ts
│   │   ├── codegen.yaml        # GraphQL code generation config
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts           # Utility functions
│   └── index.ts               # Main package exports
├── tests/
│   ├── unit/
│   │   └── customIndexer.test.ts
│   └── e2e/
└── examples/
    └── usage.ts               # Example usage patterns
```

## Key Features Implemented

### 1. **API Class Pattern** (`src/api/customIndexer.ts`)
- Follows the exact same pattern as `DigitalAsset`, `Account`, etc.
- Constructor accepts configuration
- Methods with comprehensive JSDoc documentation
- Type-safe parameters and return types
- Example usage in documentation

### 2. **Internal Implementation** (`src/internal/customIndexer.ts`)
- Separates public API from implementation details
- GraphQL client wrapper
- Query execution methods
- Error handling

### 3. **GraphQL Code Generation**
- Same `codegen.yaml` pattern as main SDK
- Generates TypeScript types from GraphQL schema
- Supports custom GraphQL endpoints
- Script: `pnpm indexer-codegen`

### 4. **Type Safety**
- Generated GraphQL types
- Custom type definitions
- Pagination, ordering, and filtering types
- Export patterns matching main SDK

### 5. **Build System**
- Same `tsup` configuration as main SDK
- CommonJS and ESM builds
- Declaration files generation
- Source maps

### 6. **Testing Setup**
- Jest configuration
- Unit tests with examples
- E2E test structure
- Coverage reporting

### 7. **Development Tools**
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Scripts for common tasks

## Usage Examples

### Basic Usage
```typescript
import { CustomIndexer } from "@aptos-labs/custom-indexer";

const customIndexer = new CustomIndexer({
  endpoint: "https://your-graphql-api.com/graphql",
  apiKey: "optional-api-key"
});

const data = await customIndexer.getCustomData({
  limit: 10,
  orderBy: [{ created_at: "desc" }]
});
```

### Integration with Main SDK
```typescript
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { CustomIndexer } from "@aptos-labs/custom-indexer";

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);

const customIndexer = CustomIndexer.fromAptosConfig(aptosConfig, {
  endpoint: "https://your-graphql-api.com/graphql"
});

// Use both APIs together
const accountInfo = await aptos.getAccountInfo("0x1");
const customData = await customIndexer.getCustomData();
```

## Configuration Steps

1. **Update GraphQL Schema URL**
   ```yaml
   # src/types/codegen.yaml
   schema: https://your-custom-graphql-api.com/graphql
   ```

2. **Add GraphQL Queries**
   - Place `.graphql` files in `src/internal/queries/`
   - Define your specific queries and fragments

3. **Generate Types**
   ```bash
   pnpm indexer-codegen
   ```

4. **Implement Custom Methods**
   - Add methods to `src/api/customIndexer.ts`
   - Implement logic in `src/internal/customIndexer.ts`

## Integration with Root Project

Updated root project files to include the new sub-package:

- **package.json**: Added `custom-indexer/**/*.ts` to formatting script
- **jest.config.js**: Added exclusions for the sub-package tests
- **Maintains separation**: Sub-package has its own dependencies and can be published independently

## Benefits of This Pattern

1. **Consistency**: Follows exact same patterns as main SDK
2. **Type Safety**: Full TypeScript support with generated types
3. **Maintainability**: Clear separation of concerns
4. **Extensibility**: Easy to add new GraphQL endpoints
5. **Testing**: Comprehensive test setup
6. **Documentation**: Thorough documentation and examples
7. **Independence**: Can be developed and published separately
8. **Compatibility**: Designed to work with main Aptos SDK

## Next Steps

To use this sub-package:

1. Update the GraphQL schema URL in `codegen.yaml`
2. Replace example queries with your actual GraphQL queries
3. Run `pnpm indexer-codegen` to generate types
4. Customize the API methods for your specific use case
5. Add tests for your specific functionality
6. Build and publish: `pnpm build && npm publish`

This architecture provides a solid foundation for any custom GraphQL API integration while maintaining consistency with the Aptos TypeScript SDK patterns.
