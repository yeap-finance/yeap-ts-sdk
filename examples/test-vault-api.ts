// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Example script to test VaultApi using environment-based configuration.
 * This example demonstrates how to query vault data from the Yeap protocol
 * using contract addresses loaded from environment variables.
 *
 * To run this example:
 * 1. Copy .env.example to .env (if it exists) or create a .env file
 * 2. Update the environment variables with actual Yeap contract addresses
 * 3. Run: pnpm tsx examples/test-vault-api.ts
 */

import { configDotenv } from 'dotenv';

import { initializeYeapFromEnv, printEnvSetupHelp } from './shared/yeapUtils';


async function testVaultApi() {
  console.log('🚀 Starting Yeap VaultApi Test with Environment Configuration');
  console.log('=' .repeat(60));

  try {
    // Initialize Yeap client from environment variables
    const yeap = await initializeYeapFromEnv();

    console.log('\n🏦 Testing Vault API...');
    console.log('-' .repeat(40));

    // Step 1: Get all vaults
    console.log('\n1. Getting all vaults...');
    let selectedVault: any = null;
    let selectedUnderlyingAsset: string | null = null;

    try {
      const allVaults = await yeap.vaultApi.getAllVaults(10, 0); // Get first 10 vaults
      console.log(`✅ Found ${allVaults.length} total vaults`);

      if (allVaults.length > 0) {
        selectedVault = allVaults[0];
        selectedUnderlyingAsset = selectedVault.underlyingAsset;

        console.log('\n   Sample vaults:');
        allVaults.slice(0, 3).forEach((vault, index) => {
          console.log(`   ${index + 1}. Vault Address: ${vault.vaultAddress}`);
          console.log(`      Creator: ${vault.creator || 'N/A'}`);
          console.log(`      Underlying Asset: ${vault.underlyingAsset || 'N/A'}`);
        });

        if (allVaults.length > 3) {
          console.log(`   ... and ${allVaults.length - 3} more vaults`);
        }
      } else {
        console.log('ℹ️  No vaults found in the system');
      }
    } catch (error) {
      console.log(`❌ Error fetching all vaults: ${error.message}`);
    }

    // Step 2: Get vaults by underlying asset (using asset from Step 1)
    if (selectedUnderlyingAsset) {
      console.log(`\n2. Getting vaults by underlying asset: ${selectedUnderlyingAsset}...`);
      try {
        const vaultsByAsset = await yeap.vaultApi.getVaultsByUnderlyingAsset(selectedUnderlyingAsset, 5);
        console.log(`✅ Found ${vaultsByAsset.length} vaults for asset: ${selectedUnderlyingAsset}`);

        if (vaultsByAsset.length > 0) {
          console.log('\n   Vaults with this underlying asset:');
          vaultsByAsset.forEach((vault, index) => {
            console.log(`   ${index + 1}. Vault Address: ${vault.vaultAddress}`);
            console.log(`      Creator: ${vault.creator || 'N/A'}`);
            console.log(`      Governance Object: ${vault.governanceObjectAddress || 'N/A'}`);
          });
        }
      } catch (error) {
        console.log(`❌ Error fetching vaults by asset: ${error.message}`);
      }
    } else {
      console.log('\n2. Skipping vaults by underlying asset test (no vault found in step 1)');
    }

    // Step 3: Get vault details by address (using address from Step 1)
    if (selectedVault) {
      console.log(`\n3. Getting vault details for address: ${selectedVault.vaultAddress}...`);
      try {
        const vaultDetails = await yeap.vaultApi.vault(selectedVault.vaultAddress);

        if (vaultDetails) {
          console.log(`✅ Found vault details: ${vaultDetails.vaultAddress}`);
          console.log(`   Creator: ${vaultDetails.creator || 'N/A'}`);
          console.log(`   Underlying Asset: ${vaultDetails.underlyingAsset || 'N/A'}`);
          console.log(`   Governance Object: ${vaultDetails.governanceObjectAddress || 'N/A'}`);
          console.log(`   Settings available: ${!!vaultDetails.settings}`);
          console.log(`   Underlying asset metadata: ${!!vaultDetails.underlyingAssetMetadata}`);

          if (vaultDetails.settings) {
            console.log(`   Is paused: ${vaultDetails.settings.isPaused}`);
            console.log(`   Flashloan enabled: ${vaultDetails.settings.flashloanEnabled}`);
          }

          if (vaultDetails.underlyingAssetMetadata) {
            console.log(`   Asset symbol: ${vaultDetails.underlyingAssetMetadata.symbol || 'N/A'}`);
            console.log(`   Asset name: ${vaultDetails.underlyingAssetMetadata.name || 'N/A'}`);
            console.log(`   Asset decimals: ${vaultDetails.underlyingAssetMetadata.decimals || 'N/A'}`);
          }
        } else {
          console.log(`ℹ️  No vault found at address: ${selectedVault.vaultAddress}`);
        }
      } catch (error) {
        console.log(`❌ Error looking up vault details: ${error.message}`);
      }
    } else {
      console.log('\n3. Skipping vault details test (no vault found in step 1)');
    }

    // Step 4: Test getting active vaults
    console.log('\n4. Testing getActiveVaults...');
    try {
      const activeVaults = await yeap.vaultApi.getActiveVaults(5, 0); // Get first 5 active vaults
      console.log(`✅ Found ${activeVaults.length} active vaults (first 5)`);
      activeVaults.forEach((vault, index) => {
        console.log(`   ${index + 1}. Active Vault Address: ${vault.vaultAddress}`);
        console.log(`      Creator: ${vault.creator || 'N/A'}`);
        console.log(`      Underlying Asset: ${vault.underlyingAsset || 'N/A'}`);
      });
    } catch (error) {
      console.log(`❌ Error fetching active vaults: ${error.message}`);
    }

    // Step 5: Test configuration
    console.log('\n5. Testing configuration...');
    console.log(`✅ Yeap Config - Endpoint: ${yeap.config.endpoint}`);
    console.log(`✅ Yeap Config - Timeout: ${yeap.config.timeout}ms`);
    console.log(`✅ Aptos Client Connected: ${!!yeap.config.aptosClient}`);
    console.log(`✅ Available addresses: ${Object.keys(yeap.config.addresses).join(', ')}`);

    if (yeap.config.hasAddress('yeap_oracle')) {
      console.log(`✅ Yeap Oracle Address: ${yeap.config.getAddress('yeap_oracle')}`);
    }

    console.log('\n🎉 Vault API test completed successfully!');

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    printEnvSetupHelp();
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the test
if (require.main === module) {
    configDotenv(); // Load environment variables from .env file
  testVaultApi().catch(console.error);
}

export { testVaultApi };
