import { gql } from '@apollo/client';

import { client } from '../lib/client'
import { fragmentRegistry } from "../lib/apollo-fragment-registry"

export const VaultFields = gql`
    fragment VaultFields on yeap_vaults {
        vault_address
        underlying_asset_address
        debt_asset_address
        interest_fee_store_address
        underlying_asset_store_address
    }
`;
fragmentRegistry.register(VaultFields);

export const GET_VAULT_LIST = gql`
    query GetVaultList {
        yeap_vaults {
            ...VaultFields
        }
    }
    ${VaultFields}
`;

export const getVaultList = async () => {
    const { data } = await client.query({
        query: GET_VAULT_LIST
    })

    return data.yeap_vaults
}