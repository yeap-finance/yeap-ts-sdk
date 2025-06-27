// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Example script to test SCMD API and ScmdConfig     c    if (commonCollaterals.length > 0) {
      console.log("\n   🔗 Collaterals with complete configuration:"); Found ${commonCollaterals.length} collaterals with both risk parameters and vault configurations`);

    if (commonCollaterals.length > 0) {
      console.log("\n   🔗 Collaterals with complete configuration:");.
 * This script demonstrates how to fetch SCMD configuration and access risk parameters.
 */

import dotenv from "dotenv";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { initializeYeapFromEnv, printEnvSetupHelp } from "./shared/yeapUtils";

// Load environment variables
dotenv.config();

async function testScmdConfig() {
  console.log("🏗️  Starting SCMD Configuration Test");
  console.log("=====================================");

  try {
    // Initialize Yeap SDK using shared utility
    const yeap = await initializeYeapFromEnv();
    console.log("✅ Yeap SDK initialized successfully");

    // Test 1: Get SCMD Configuration
    console.log("\n1. Testing getConfig()...");
    console.log("----------------------------");

    const scmdConfig = await yeap.scmdApi.getConfig();
    console.log("✅ Successfully fetched SCMD configuration");

    // Test 2: Get Supported Collateral Configurations
    console.log("\n2. Testing supportedCollateralConfigs()...");
    console.log("--------------------------------------------");

    const collateralConfigs = scmdConfig.supportedCollateralConfigs();
    console.log(`✅ Found ${collateralConfigs.size} collateral configurations`);

    if (collateralConfigs.size > 0) {
      console.log("\n   📊 Collateral Risk Parameters:");
      let count = 0;
      for (const [collateralAddress, config] of collateralConfigs) {
        count++;
        console.log(`   ${count}. Collateral: ${collateralAddress}`);
        console.log(`      - Config Address: ${config.configAddress.toString()}`);
        console.log(`      - LTV: ${config.ltv}`);
        console.log(`      - LLTV (Liquidation LTV): ${config.lltv}`);
        console.log(`      - Liquidation Bonus (BPS): ${config.liquidationBonusBps}`);
        console.log(`      - Risk Factor: ${config.riskFactor}`);
        console.log(`      - Max Borrow Vaults: ${config.borrowVaultMaxNum}`);
        console.log(`      - Oracle: ${config.oracle.toString()}`);

        // Only show first 3 to avoid cluttering output
        if (count >= 3) {
          const remaining = collateralConfigs.size - count;
          if (remaining > 0) {
            console.log(`   ... and ${remaining} more collateral configurations`);
          }
          break;
        }
      }
    } else {
      console.log("   ⚠️  No collateral configurations found");
    }

    // Test 3: Get Supported Vault Configurations
    console.log("\n3. Testing supportedVaultConfigs()...");
    console.log("--------------------------------------");

    const vaultConfigs = scmdConfig.supportedVaultConfigs();
    console.log(`✅ Found vault configurations for ${vaultConfigs.size} collateral types`);

    if (vaultConfigs.size > 0) {
      console.log("\n   📊 Borrow Risk Parameters by Collateral:");
      let collateralCount = 0;
      let totalVaultConfigs = 0;

      for (const [collateralAddress, configs] of vaultConfigs) {
        collateralCount++;
        totalVaultConfigs += configs.length;

        console.log(`   ${collateralCount}. Collateral: ${collateralAddress}`);
        console.log(`      - Available vaults: ${configs.length}`);

        configs.forEach((config, index) => {
          console.log(`      Vault ${index + 1}:`);
          console.log(`        - Vault Address: ${config.vault.toString()}`);
          console.log(`        - Config Address: ${config.configAddress.toString()}`);
          console.log(`        - Borrowing Weight (BRW): ${config.brw}`);
        });

        // Only show first 2 collateral types to avoid cluttering output
        if (collateralCount >= 2) {
          const remainingCollaterals = vaultConfigs.size - collateralCount;
          if (remainingCollaterals > 0) {
            // Count remaining vault configs
            let remainingVaultConfigs = 0;
            let tempCount = 0;
            for (const [, configs] of vaultConfigs) {
              tempCount++;
              if (tempCount > collateralCount) {
                remainingVaultConfigs += configs.length;
              }
            }
            console.log(`   ... and ${remainingCollaterals} more collateral types with ${remainingVaultConfigs} additional vault configurations`);
          }
          break;
        }
      }

      console.log(`\n   📈 Summary: ${totalVaultConfigs} total vault configurations across ${collateralConfigs.size} collateral types`);
    } else {
      console.log("   ⚠️  No vault configurations found");
    }

    // Test 4: Cross-reference data
    console.log("\n4. Cross-referencing collateral and vault data...");
    console.log("--------------------------------------------------");

    const collateralAddresses = Array.from(collateralConfigs.keys());
    const vaultCollateralAddresses = Array.from(vaultConfigs.keys());

    const commonCollaterals = collateralAddresses.filter(addr =>
      vaultCollateralAddresses.includes(addr)
    );

    console.log(`✅ Found ${commonCollaterals.length} collaterals with both risk parameters and vault configurations`);

    if (commonCollaterals.length > 0) {
      console.log("\n   🔗 Collaterals with complete configuration:");

      // Debug: Show what keys exist in each map
      console.log("\n   🔍 Debug: Collateral Config Keys:");
      Array.from(collateralConfigs.keys()).forEach((key, i) => {
        console.log(`      ${i + 1}. ${key.toString()} (${typeof key})`);
      });

      console.log("\n   � Debug: Vault Config Keys:");
      Array.from(vaultConfigs.keys()).forEach((key, i) => {
        console.log(`      ${i + 1}. ${key.toString()} (${typeof key})`);
      });

      commonCollaterals.slice(0, 3).forEach((addr, index) => {
        const collateralConfig = collateralConfigs.get(addr);
        const vaultConfigsForCollateral = vaultConfigs.get(addr);

        console.log(`\n   ${index + 1}. ${addr}`);
        console.log(`      - Risk Parameters: LTV=${collateralConfig?.ltv}, LLTV=${collateralConfig?.lltv}`);
        console.log(`      - Available Vaults: ${vaultConfigsForCollateral?.length || 0}`);

        // Show vault details if available
        if (vaultConfigsForCollateral && vaultConfigsForCollateral.length > 0) {
          vaultConfigsForCollateral.forEach((vaultConfig, vIndex) => {
            console.log(`        ${vIndex + 1}. Vault: ${vaultConfig.vault.toString()}, BRW: ${vaultConfig.brw}`);
          });
        }
      });
    }

    console.log("\n🎉 SCMD Configuration test completed successfully!");

  } catch (error) {
    console.error("❌ Error during SCMD configuration test:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Stack trace:", error.stack);
    }

    // Check for common configuration issues
    if (!process.env.GRAPHQL_ENDPOINT) {
      console.error("💡 Missing GRAPHQL_ENDPOINT in environment variables");
    }
    if (!process.env.CUSTOM_API_KEY) {
      console.error("💡 Missing CUSTOM_API_KEY in environment variables");
    }
    if (!process.env.YEAP_SCMD_PROTOCOL_ADDRESS) {
      console.error("💡 Missing YEAP_SCMD_PROTOCOL_ADDRESS in environment variables");
    }

    process.exit(1);
  }
}

// Run the test
if (require.main === module) {
  testScmdConfig().catch(console.error);
}

export { testScmdConfig };
