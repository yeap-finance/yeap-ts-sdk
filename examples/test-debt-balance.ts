// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * 测试债务余额功能
 * 验证用户借贷位置的债务信息获取
 */

import dotenv from "dotenv";
import { initializeYeapFromEnv, printEnvSetupHelp } from "./shared/yeapUtils";

// Load environment variables
dotenv.config();

async function testDebtBalance() {
  console.log("💰 测试债务余额功能");
  console.log("=" .repeat(50));

  try {
    // Initialize Yeap SDK using shared utility
    const yeap = await initializeYeapFromEnv();
    console.log("✅ Yeap SDK initialized successfully");

    // 测试用户地址（您需要替换为实际的用户地址）
    const testUserAddress = "0x1234567890abcdef..."; // 请替换为实际地址
    
    console.log(`\n🔍 查询用户位置: ${testUserAddress}`);
    console.log("-".repeat(40));

    // 1. 获取用户的所有位置
    const positions = await yeap.scmdApi.getPositionsByOwner(testUserAddress);
    
    if (positions.length === 0) {
      console.log("❌ 用户没有创建任何 SCMD 位置");
      return;
    }

    console.log(`✅ 找到 ${positions.length} 个位置`);

    // 2. 分析每个位置
    for (let i = 0; i < positions.length; i++) {
      const position = positions[i];
      console.log(`\n📊 位置 ${i + 1}: ${position.positionAddress}`);
      console.log("-".repeat(30));

      // 基本信息
      console.log(`所有者: ${position.ownerAddress}`);
      console.log(`抵押品类型: ${position.collateralType}`);
      console.log(`抵押品地址: ${position.collateral}`);
      console.log(`状态: ${position.isActive ? "活跃" : "非活跃"}`);

      // 抵押品信息
      if (position.collateralAssetBalance) {
        console.log(`抵押品余额: ${position.collateralAssetBalance.amount}`);
        if (position.collateralAssetMetadata) {
          console.log(`抵押品: ${position.collateralAssetMetadata.name} (${position.collateralAssetMetadata.symbol})`);
        }
      }

      // 债务信息
      console.log(`\n💳 债务信息:`);
      console.log(`借款金库数量: ${position.vaultCount}`);
      
      if (position.debtStores.length > 0) {
        console.log(`借款金库地址:`);
        position.debtStores.forEach((store, index) => {
          console.log(`  ${index + 1}. ${store.vaultAddress}`);
          console.log(`     债务存储地址: ${store.debtStoreAddress}`);
          
          // 检查债务余额
          if (store.debtAssetBalance) {
            console.log(`     💰 借款金额: ${store.debtAssetBalance.amount}`);
            if (store.debtAssetBalance.metadata) {
              console.log(`     📊 借款资产: ${store.debtAssetBalance.metadata.symbol}`);
            }
          } else {
            console.log(`     ⚠️  债务余额信息不可用（需要更新类型生成）`);
          }
        });
      } else {
        console.log("   ✅ 没有借款");
      }

      // 3. 计算总借款（如果债务余额可用）
      const totalBorrow = position.debtStores
        .filter(store => store.debtAssetBalance)
        .reduce((total, store) => {
          const amount = BigInt(store.debtAssetBalance!.amount);
          return total + amount;
        }, BigInt(0));

      if (totalBorrow > 0) {
        console.log(`\n💰 总借款金额: ${totalBorrow.toString()}`);
      }
    }

    // 4. 测试 SCMD 配置
    console.log(`\n⚙️  测试 SCMD 配置`);
    console.log("-".repeat(30));

    const scmdConfig = await yeap.scmdApi.getConfig();
    console.log(`✅ SCMD 配置获取成功`);
    
    const collateralConfigs = scmdConfig.supportedCollateralConfigs();
    console.log(`支持的抵押品类型: ${collateralConfigs.size}`);

    const vaultConfigs = scmdConfig.supportedVaultConfigs();
    console.log(`支持的金库配置: ${vaultConfigs.size}`);

  } catch (error) {
    console.error("❌ 测试失败:", error);
    
    // 如果是环境配置问题，显示帮助信息
    if (error.message.includes("GRAPHQL_ENDPOINT") || error.message.includes("endpoint")) {
      console.log("\n💡 环境配置帮助:");
      printEnvSetupHelp();
    }
  }
}

// 运行测试
testDebtBalance().catch(console.error); 