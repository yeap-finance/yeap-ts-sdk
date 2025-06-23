const { YeapClient } = require('./dist');
const { gql } = require('@apollo/client');

const client = YeapClient.setup({
  uri: 'https://api.testnet.aptoslabs.com/nocode/v1/api/cma11lb8c0044s601jof9ly05/v1/graphql',
  apiKey: 'AG-K7EWVPHIJQAJPXZVYNMHI4G7AHVMEWHQY'
})

client.query({
  query: gql`
      query GetVaultList {
        yeap_vaults {
            vault_address
            underlying_asset_address
            debt_asset_address
            interest_fee_store_address
            underlying_asset_store_address
        }
    }
  `
}).then(data => {
    console.log(data.data.yeap_vaults)
})