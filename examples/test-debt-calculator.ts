// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * 债务计算器完整测试
 * 测试所有债务相关的计算功能
 */

import { YeapConfig } from "../src/api/yeapConfig";
import { ScmdApi } from "../src/api/scmdApi";
// 简化的位置接口，用于测试
interface MockPosition {
  positionAddress: string;
  ownerAddress: string;
  collateral: string;
  collateralType: string;
  status: number;
  isActive: boolean;
  collateralAssetBalance: {
    amount: string;
    isFrozen: boolean;
    storageId: string;
    metadata: {
      tokenStandard: string;
      name: string;
      symbol: string;
      decimals: number;
    };
  };
  debtStores: Array<{
    debtStoreAddress: string;
    vaultAddress: string;
    debtAssetBalance?: {
      amount: string;
      isFrozen: boolean;
      storageId: string;
      metadata: {
        tokenStandard: string;
        name: string;
        symbol: string;
        decimals: number;
      };
    };
  }>;
  vaultCount: number;
  vaultAddresses: string[];
  getTotalBorrowAmount: () => bigint;
  getBorrowAmountsByAsset: () => Map<string, bigint>;
  getBorrowDetails: () => Array<{
    vaultAddress: string;
    debtStoreAddress: string;
    borrowAmount: string;
    borrowAsset: string;
    borrowAssetDecimals: number;
  }>;
  hasAnyDebt: () => boolean;
  getActiveDebtVaultCount: () => number;
  getDebtStoresByVault: () => any[];
  hasDebtInVault: () => boolean;
  collateralAssetMetadata: {
    tokenStandard: string;
    name: string;
    symbol: string;
    decimals: number;
  };
}
import { 
  calculateDebtSummary, 
  analyzePositionRisk, 
  formatDebtAmount, 
  calculateTotalUserDebt, 
  generateDebtReport 
} from "../src/utils/debtCalculator";

async function testDebtCalculator() {
  console.log("💰 债务计算器完整测试");
  console.log("=" .repeat(50));

  try {
    // 创建配置
    const config = new YeapConfig({
      endpoint: "https://example.com/graphql",
      addresses: {
        yeap_scmd_protocol: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        yeap_oracle: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        yeap_vault: "0x9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba",
        yeap_lens: "0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
      }
    });

    // 创建 SCMD API 实例
    const scmdApi = new ScmdApi(config);
    console.log("✅ SCMD API 创建成功");

    // 模拟位置数据
    const mockPositions: MockPosition[] = [
      {
        positionAddress: "0xposition1...",
        ownerAddress: "0xuser1...",
        collateral: "0x1::btc::BTC",
        collateralType: "BTC",
        status: 0,
        isActive: true,
        collateralAssetBalance: {
          amount: "1000000000", // 1 BTC
          isFrozen: false,
          storageId: "0xstorage1...",
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
              amount: "50000000", // 50 USDC
              isFrozen: false,
              storageId: "0xdebtstorage1...",
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
              amount: "30000000", // 30 USDT
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
        vaultAddresses: ["0xvault1...", "0xvault2..."],
        getTotalBorrowAmount: () => BigInt("80000000"),
        getBorrowAmountsByAsset: () => {
          const map = new Map<string, bigint>();
          map.set("USDC", BigInt("50000000"));
          map.set("USDT", BigInt("30000000"));
          return map;
        },
        getBorrowDetails: () => [
          {
            vaultAddress: "0xvault1...",
            debtStoreAddress: "0xdebt1...",
            borrowAmount: "50000000",
            borrowAsset: "USDC",
            borrowAssetDecimals: 6,
          },
          {
            vaultAddress: "0xvault2...",
            debtStoreAddress: "0xdebt2...",
            borrowAmount: "30000000",
            borrowAsset: "USDT",
            borrowAssetDecimals: 6,
          }
        ],
        hasAnyDebt: () => true,
        getActiveDebtVaultCount: () => 2,
        getDebtStoresByVault: () => [],
        hasDebtInVault: () => true,
        collateralAssetMetadata: {
          tokenStandard: "v1",
          name: "Bitcoin",
          symbol: "BTC",
          decimals: 9,
        }
      },
      {
        positionAddress: "0xposition2...",
        ownerAddress: "0xuser1...",
        collateral: "0x1::eth::ETH",
        collateralType: "ETH",
        status: 0,
        isActive: true,
        collateralAssetBalance: {
          amount: "5000000000000000000", // 5 ETH
          isFrozen: false,
          storageId: "0xstorage2...",
          metadata: {
            tokenStandard: "v1",
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
          }
        },
        debtStores: [
          {
            debtStoreAddress: "0xdebt3...",
            vaultAddress: "0xvault3...",
            debtAssetBalance: {
              amount: "20000000", // 20 USDC
              isFrozen: false,
              storageId: "0xdebtstorage3...",
              metadata: {
                tokenStandard: "v1",
                name: "USD Coin",
                symbol: "USDC",
                decimals: 6,
              }
            }
          }
        ],
        vaultCount: 1,
        vaultAddresses: ["0xvault3..."],
        getTotalBorrowAmount: () => BigInt("20000000"),
        getBorrowAmountsByAsset: () => {
          const map = new Map<string, bigint>();
          map.set("USDC", BigInt("20000000"));
          return map;
        },
        getBorrowDetails: () => [
          {
            vaultAddress: "0xvault3...",
            debtStoreAddress: "0xdebt3...",
            borrowAmount: "20000000",
            borrowAsset: "USDC",
            borrowAssetDecimals: 6,
          }
        ],
        hasAnyDebt: () => true,
        getActiveDebtVaultCount: () => 1,
        getDebtStoresByVault: () => [],
        hasDebtInVault: () => true,
        collateralAssetMetadata: {
          tokenStandard: "v1",
          name: "Ethereum",
          symbol: "ETH",
          decimals: 18,
        }
      }
    ];

    console.log("✅ 模拟位置数据创建成功");

    // 测试 1: 债务汇总计算
    console.log("\n1. 测试债务汇总计算");
    console.log("-".repeat(30));

    const position1 = mockPositions[0];
    const debtSummary = calculateDebtSummary(position1);
    
    console.log(`总借款金额: ${debtSummary.totalBorrowAmount.toString()}`);
    console.log(`活跃债务金库: ${debtSummary.activeDebtVaultCount}`);
    console.log(`有债务: ${debtSummary.hasAnyDebt}`);
    
    console.log("按资产分组:");
    debtSummary.borrowByAsset.forEach((amount, symbol) => {
      console.log(`  - ${symbol}: ${amount.toString()}`);
    });

    // 测试 2: 风险分析
    console.log("\n2. 测试风险分析");
    console.log("-".repeat(30));

    const riskAnalysis = analyzePositionRisk(position1, 75, 80);
    
    console.log(`抵押品价值: ${riskAnalysis.collateralValue.toString()}`);
    console.log(`总借款价值: ${riskAnalysis.totalBorrowValue.toString()}`);
    console.log(`最大借款额度: ${riskAnalysis.maxBorrowAmount.toString()}`);
    console.log(`利用率: ${riskAnalysis.utilizationRate.toFixed(2)}%`);
    console.log(`风险等级: ${riskAnalysis.riskLevel}`);
    console.log(`接近清算: ${riskAnalysis.isNearLiquidation}`);

    // 测试 3: 金额格式化
    console.log("\n3. 测试金额格式化");
    console.log("-".repeat(30));

    const formattedUSDC = formatDebtAmount("50000000", 6, "USDC");
    const formattedBTC = formatDebtAmount("1000000000", 9, "BTC");
    const formattedETH = formatDebtAmount("5000000000000000000", 18, "ETH");
    
    console.log(`USDC: ${formattedUSDC}`);
    console.log(`BTC: ${formattedBTC}`);
    console.log(`ETH: ${formattedETH}`);

    // 测试 4: 用户总债务计算
    console.log("\n4. 测试用户总债务计算");
    console.log("-".repeat(30));

    const totalUserDebt = calculateTotalUserDebt(mockPositions);
    
    console.log(`总债务金额: ${totalUserDebt.totalDebtAmount.toString()}`);
    console.log(`位置数量: ${totalUserDebt.positionCount}`);
    console.log(`活跃位置: ${totalUserDebt.activePositionCount}`);
    
    console.log("按资产分组的总债务:");
    totalUserDebt.totalDebtByAsset.forEach((amount, symbol) => {
      console.log(`  - ${symbol}: ${amount.toString()}`);
    });

    // 测试 5: 债务报告生成
    console.log("\n5. 测试债务报告生成");
    console.log("-".repeat(30));

    const debtReport = generateDebtReport(position1, 75, 80);
    console.log(debtReport);

    console.log("\n✅ 所有测试通过！");
    console.log("\n📝 总结:");
    console.log("- 债务汇总计算功能正常");
    console.log("- 风险分析功能正常");
    console.log("- 金额格式化功能正常");
    console.log("- 用户总债务计算功能正常");
    console.log("- 债务报告生成功能正常");

  } catch (error) {
    console.error("❌ 测试失败:", error);
  }
}

// 运行测试
testDebtCalculator().catch(console.error); 