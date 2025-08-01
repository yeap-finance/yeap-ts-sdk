// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { configDotenv } from "dotenv";
import { initializeYeapFromEnv, printEnvSetupHelp } from "./shared/yeapUtils";

async function testBuildApi() {
  console.log("🚀 Starting Yeap VaultApi Test with Environment Configuration");
  console.log("=".repeat(60));

  try {
    // Initialize Yeap client from environment variables
    const yeap = await initializeYeapFromEnv();

    console.log("\n🏦 Testing Build API for earn...");
    console.log("-".repeat(40));

    const depositTxn = yeap.buildApi.buildDepositTxn("vaultAddress-xxx", 100n);
    console.log("\n1. Building deposit transaction...");
    console.log("   Transaction Data:", JSON.stringify(depositTxn, null, 2));

    const redeemTxn = yeap.buildApi.buildRedeemTxn("vaultAddress-xxx", 50n);
    console.log("\n2. Building redeem transaction...");
    console.log("   Transaction Data:", JSON.stringify(redeemTxn, null, 2));

    const withdrawTxn = yeap.buildApi.buildWithdrawTxn("vaultAddress-xxx", 30n);
    console.log("\n3. Building withdraw transaction...");
    console.log("   Transaction Data:", JSON.stringify(withdrawTxn, null, 2));

    console.log("\n🏦 Testing Build API for borrow...");
    console.log("-".repeat(40));

    const borrowTxn = yeap.buildApi.buildBorrowTxn(`positionAddress-xxx`, "vaultAddress-xxx", 100n);
    console.log("\n4. Building borrow transaction...");
    console.log("   Transaction Data:", JSON.stringify(borrowTxn, null, 2));

    const repayTxn = yeap.buildApi.buildRepayTxn(`positionAddress-xxx`, "vaultAddress-xxx", 50n);
    console.log("\n5. Building repay transaction...");
    console.log("   Transaction Data:", JSON.stringify(repayTxn, null, 2));
  } catch (error) {
    console.error("\n❌ Test failed:", error.message);
    printEnvSetupHelp();
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Run the test
if (require.main === module) {
  configDotenv(); // Load environment variables from .env file
  testBuildApi().catch(console.error);
}

export { testBuildApi };
