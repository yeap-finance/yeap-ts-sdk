export const vault_abi = {
  "address": "0x7b90b95e1060d9d2e424c6687ba03cccaed6996cccd4868b759c9fca361fa70",
  "name": "vault",
  "friends": [],
  "exposed_functions": [
    {
      "name": "borrow",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "&signer",
        "address",
        "0x1::object::Object<0x1::fungible_asset::FungibleStore>",
        "u64"
      ],
      "return": [
        "0x1::fungible_asset::FungibleAsset"
      ]
    },
    {
      "name": "deposit",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "&signer",
        "address",
        "0x1::fungible_asset::FungibleAsset"
      ],
      "return": [
        "0x1::fungible_asset::FungibleAsset"
      ]
    },
    {
      "name": "flashloan",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "address",
        "u64"
      ],
      "return": [
        "0x7b90b95e1060d9d2e424c6687ba03cccaed6996cccd4868b759c9fca361fa70::vault::FlashLoan",
        "0x1::fungible_asset::FungibleAsset"
      ]
    },
    {
      "name": "mark_bad_debt",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "&signer",
        "address",
        "0x1::object::Object<0x1::fungible_asset::FungibleStore>",
        "u64"
      ],
      "return": []
    },
    {
      "name": "payback_flashloan",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "0x7b90b95e1060d9d2e424c6687ba03cccaed6996cccd4868b759c9fca361fa70::vault::FlashLoan",
        "&mut 0x1::fungible_asset::FungibleAsset"
      ],
      "return": []
    },
    {
      "name": "redeem",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "&signer",
        "address",
        "0x1::fungible_asset::FungibleAsset"
      ],
      "return": [
        "0x1::fungible_asset::FungibleAsset"
      ]
    },
    {
      "name": "repay",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "&signer",
        "address",
        "0x1::object::Object<0x1::fungible_asset::FungibleStore>",
        "u64",
        "&mut 0x1::fungible_asset::FungibleAsset"
      ],
      "return": []
    },
    {
      "name": "repay_bad_debt",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "address",
        "&mut 0x1::fungible_asset::FungibleAsset"
      ],
      "return": []
    },
    {
      "name": "touch",
      "visibility": "public",
      "is_entry": false,
      "is_view": false,
      "generic_type_params": [],
      "params": [
        "address"
      ],
      "return": []
    }
  ],
  "structs": [
    {
      "name": "FlashLoan",
      "is_native": false,
      "is_event": false,
      "abilities": [],
      "generic_type_params": [],
      "fields": [
        {
          "name": "vault",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "fee_rate",
          "type": "0x1::fixed_point32::FixedPoint32"
        }
      ]
    }
  ]
} as const;

export default vault_abi;
