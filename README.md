# Yeap Finance Client

A TypeScript npm package for interacting with finance APIs.

## Installation

```bash
npm install yeap-finance-client
```

## Usage

```typescript
import { YeapClient } from 'yeap-finance-client';

// Create client instance
const client = new YeapFinanceClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.yeapfinance.com',
  timeout: 5000
});

// Use the client with 
const { gql } = require('@apollo/client');
const result = await client.query(gql`
      query GetVaultList {
        yeap_vaults {
            vault_address
            underlying_asset_address
            debt_asset_address
            interest_fee_store_address
            underlying_asset_store_address
        }
    }
`);
console.log(result);
```

## Development

### Scripts

- `npm run dev` - Start development server with watch mode
- `npm run build` - Build the package
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`

### Building

```bash
npm run build
```

This will compile TypeScript to JavaScript in the `dist/` directory.

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## API

### YeapFinanceClient

Main client class for interacting with finance APIs.

#### Constructor

```typescript
new YeapClient(config?: ClientConfig)
```

#### Methods

- `getConfig()` - Get current configuration
- `updateConfig(config)` - Update configuration
- `getFinanceData(id)` - Fetch finance data by ID

## License

MIT 