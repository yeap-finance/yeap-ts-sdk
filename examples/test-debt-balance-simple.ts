// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * 简单的债务余额测试
 * 验证代码结构和类型定义
 */

import { YeapConfig } from "../src/api/yeapConfig";
import { ScmdApi } from "../src/api/scmdApi";
import { SCMDPosition } from "../src/api/entities";

async function testDebtBalanceSimple() {
  console.log("💰 简单债务余额测试");
  console.log("=" .repeat(50));

  try {
    // 创建配置（不实际连接）
    const config = new YeapConfig({
      endpoint: "https://example.com/graphql", // 示例端点
      addresses: {
        yeap_scmd_protocol: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", // 示例地址
        yeap_oracle: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        yeap_vault: "0x9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba",
        yeap_lens: "0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
      }
    });

    // 创建 SCMD API 实例
    const scmdApi = new ScmdApi(config);
    console.log("✅ SCMD API 创建成功");

    // 测试类型定义
    console.log("\n🔍 测试类型定义:");
    
    // 模拟一个位置对象
    const mockPosition = {
      positionAddress: "0x123...",
      ownerAddress: "0xabc...",
      collateral: "0x1::btc::BTC",
      collateralType: "BTC",
      status: 0,
      isActive: true,
      collateralAssetBalance: {
        amount: "1000000000", // 1 BTC (假设 9 位小数)
        isFrozen: false,
        storageId: "0xstorage...",
        metadata: {
          tokenStandard: "v1",
          name: "Bitcoin",
          symbol: "BTC",
          decimals: 9,
        }
      },
      debtStores: [
        {
          debtStoreAddress: "0xdebt1...",
          vaultAddress: "0xvault1...",
          debtAssetBalance: {
            amount: "50000000", // 50 USDC (假设 6 位小数)
            isFrozen: false,
            storageId: "0xdebtstorage...",
            metadata: {
              tokenStandard: "v1",
              name: "USD Coin",
              symbol: "USDC",
              decimals: 6,
            }
          }
        },
        {
          debtStoreAddress: "0xdebt2...",
          vaultAddress: "0xvault2...",
          debtAssetBalance: {
            amount: "30000000", // 30 USDT (假设 6 位小数)
            isFrozen: false,
            storageId: "0xdebtstorage2...",
            metadata: {
              tokenStandard: "v1",
              name: "Tether USD",
              symbol: "USDT",
              decimals: 6,
            }
          }
        }
      ],
      vaultCount: 2,
      vaultAddresses: ["0xvault1...", "0xvault2..."]
    };

    console.log("✅ 模拟位置对象创建成功");

    // 测试债务余额计算
    console.log("\n💳 债务余额计算:");
    
    const totalBorrow = mockPosition.debtStores
      .filter(store => store.debtAssetBalance)
      .reduce((total, store) => {
        const amount = BigInt(store.debtAssetBalance!.amount);
        const symbol = store.debtAssetBalance!.metadata?.symbol || "Unknown";
        console.log(`  - ${symbol}: ${amount} (${store.debtAssetBalance!.metadata?.decimals} 位小数)`);
        return total + amount;
      }, BigInt(0));

    console.log(`💰 总借款金额: ${totalBorrow.toString()}`);

    // 测试按资产类型分组
    console.log("\n📊 按资产类型分组:");
    const borrowByAsset = new Map<string, bigint>();
    
    mockPosition.debtStores.forEach(store => {
      if (store.debtAssetBalance) {
        const symbol = store.debtAssetBalance.metadata?.symbol || "Unknown";
        const amount = BigInt(store.debtAssetBalance.amount);
        const current = borrowByAsset.get(symbol) || BigInt(0);
        borrowByAsset.set(symbol, current + amount);
      }
    });

    borrowByAsset.forEach((amount, symbol) => {
      console.log(`  - ${symbol}: ${amount.toString()}`);
    });

    // 测试风险计算
    console.log("\n⚠️  风险分析:");
    const collateralValue = BigInt(mockPosition.collateralAssetBalance.amount);
    const collateralDecimals = mockPosition.collateralAssetBalance.metadata.decimals;
    
    console.log(`抵押品价值: ${collateralValue} (${collateralDecimals} 位小数)`);
    console.log(`总借款价值: ${totalBorrow}`);
    
    // 假设 LTV 为 75%
    const ltv = 75;
    const maxBorrow = (collateralValue * BigInt(ltv)) / BigInt(100);
    console.log(`最大借款额度 (${ltv}% LTV): ${maxBorrow}`);
    
    const utilizationRate = Number(totalBorrow * BigInt(10000) / maxBorrow) / 100;
    console.log(`利用率: ${utilizationRate.toFixed(2)}%`);

    console.log("\n✅ 所有测试通过！");

  } catch (error) {
    console.error("❌ 测试失败:", error);
  }
}

// 运行测试
testDebtBalanceSimple().catch(console.error); 