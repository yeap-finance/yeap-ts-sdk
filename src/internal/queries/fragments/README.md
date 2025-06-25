# GraphQL Fragments

This directory contains reusable GraphQL fragments for the Yeap SDK queries.

## Available Fragments

### Core Entity Fragments

- **`FungibleAssetMetadataFields`** - Fields for fungible asset metadata (name, symbol, decimals, etc.)
- **`VaultSettingsFields`** - Complete vault settings fields
- **`CurrentObjectFields`** - Current object fields (object_address, owner_address, etc.)
- **`FungibleAssetBalanceFields`** - Fungible asset balance fields (amount, is_frozen, storage_id)

### Composite Fragments

- **`VaultInfoFields`** - Complete vault information with all related data (uses all above fragments)

## Usage

Fragments are imported using the `#import` directive at the top of GraphQL files:

```graphql
#import "./fragments/VaultInfoFields.graphql"

query GetVaultInfo($where: vault_info_bool_exp) {
  vault_info(where: $where) {
    ...VaultInfoFields
  }
}
```

## Benefits

- **Consistency**: Ensures consistent field selection across queries
- **Maintainability**: Changes to field sets only need to be made in one place
- **Reusability**: Fragments can be composed to create different data requirements
- **Performance**: Reduces query size and improves readability
