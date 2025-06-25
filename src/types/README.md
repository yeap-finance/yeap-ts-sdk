# Query Types and Interfaces

This document describes the comprehensive set of interfaces and types available for working with Yeap SDK queries.

## Overview

The Yeap SDK provides two main groups of types:

1.  **API Interfaces** (`src/api/interfaces.ts`) - User-friendly, stable API interfaces. These are part of the public API.
2.  **Internal Query Types** (`src/types/`) - These are internal types used for building and processing GraphQL queries. They are not meant to be used directly by consumers of the SDK.

## Internal Query Types (`src/types/`)

These types are specifically designed for building GraphQL queries with full type safety:

### Boolean Expressions for Filtering

```typescript
// Filter vault_info queries
interface YeapVaultInfoBoolExp {
  _and?: YeapVaultInfoBoolExp[];
  _or?: YeapVaultInfoBoolExp[];
  _not?: YeapVaultInfoBoolExp;
  vault_address?: StringComparison;
  creator?: StringComparison;
  underlying_asset?: StringComparison;
  debt_asset?: StringComparison;
  settings?: YeapVaultSettingsBoolExp;
}

// Filter vault_settings queries
interface YeapVaultSettingsBoolExp {
  vault_address?: StringComparison;
  auto_socialize_debt_enabled?: BooleanComparison;
  flashloan_enabled?: BooleanComparison;
  interest_fee_rate?: NumericComparison;
  is_paused?: BooleanComparison;
  // ... other fields
}
```

### Comparison Operators

```typescript
interface StringComparison {
  _eq?: string;
  _neq?: string;
  _in?: string[];
  _nin?: string[];
  _like?: string;
  _is_null?: boolean;
}

interface NumericComparison {
  _eq?: string | number;
  _gte?: string | number;
  _lte?: string | number;
  _in?: (string | number)[];
  _is_null?: boolean;
}

interface BooleanComparison {
  _eq?: boolean;
  _neq?: boolean;
  _is_null?: boolean;
}
```

### Order By Types

```typescript
interface YeapVaultInfoOrderBy {
  vault_address?: OrderDirection;
  underlying_asset?: OrderDirection;
  settings?: YeapVaultSettingsOrderBy;
}

enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
  ASC_NULLS_FIRST = 'asc_nulls_first',
  ASC_NULLS_LAST = 'asc_nulls_last',
  DESC_NULLS_FIRST = 'desc_nulls_first',
  DESC_NULLS_LAST = 'desc_nulls_last',
}
```

### Query Variables

Strongly typed variables for each query:

```typescript
interface GetVaultInfoVariables {
  where?: YeapVaultInfoBoolExp;
  orderBy?: YeapVaultInfoOrderBy[];
  limit?: number;
  offset?: number;
}

interface GetVaultInfoByAddressVariables {
  vaultAddress: string;
}

interface GetVaultsWithHighYieldVariables {
  minInterestRate: string; // numeric type in GraphQL
  limit?: number;
  offset?: number;
}
```

### Pre-built Query Helpers

The query types include helper classes for common filtering and sorting:

```typescript
// Common filters
class VaultQueryFilters {
  static activeVaults(): YeapVaultInfoBoolExp
  static flashloanEnabled(): YeapVaultInfoBoolExp
  static minInterestRate(rate: string): YeapVaultInfoBoolExp
  static byUnderlyingAsset(assetAddress: string): YeapVaultInfoBoolExp
  static byAddresses(addresses: string[]): YeapVaultInfoBoolExp
}

// Common sorting
class VaultQueryOrdering {
  static byVaultAddressAsc(): YeapVaultInfoOrderBy[]
  static byInterestRateDesc(): YeapVaultInfoOrderBy[]
  static byUnderlyingAssetAsc(): YeapVaultInfoOrderBy[]
}
```

## Files Structure

```
src/
├── api/
│   ├── interfaces.ts         # Clean, user-friendly interfaces
│   └── transforms.ts         # Internal transformation functions
└── types/
    ├── index.ts              # Main exports for internal types
    ├── queryTypes.ts         # GraphQL query-specific types
    ├── types.ts              # Existing response type aliases
    └── generated/            # Auto-generated GraphQL types
        ├── operations.ts
        ├── queries.ts
        └── types.ts
```

## Best Practices

1. **Use Clean Interfaces in Public APIs** - Always expose `YeapVaultInfo` and `YeapVaultSettings` to end users
2. **Use Query Types for Building Queries** - Use `YeapVaultInfoBoolExp` and related types when constructing GraphQL queries
3. **Leverage Helper Classes** - Use `VaultQueryFilters` and `VaultQueryOrdering` for common query patterns
4. **Transform Raw Data** - Use transformation functions to convert GraphQL responses to clean interfaces
5. **Type Safety** - Always use the typed variable interfaces for GraphQL queries

This type system provides both flexibility for advanced users and simplicity for common use cases, while maintaining full type safety throughout the SDK.
