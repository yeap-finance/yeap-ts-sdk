// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { SCMDPosition } from "../api/entities";
import { YeapFungibleAssetBalance } from "../api/interfaces";

/**
 * 债务余额计算工具
 * 提供各种债务相关的计算功能
 */

/**
 * 债务详情接口
 */
export interface DebtDetail {
  /** 金库地址 */
  vaultAddress: string;
  /** 债务存储地址 */
  debtStoreAddress: string;
  /** 借款金额 */
  borrowAmount: string;
  /** 借款资产符号 */
  borrowAsset: string;
  /** 借款资产小数位数 */
  borrowAssetDecimals: number;
  /** 借款资产名称 */
  borrowAssetName: string;
}

/**
 * 债务汇总信息
 */
export interface DebtSummary {
  /** 总借款金额（原始单位） */
  totalBorrowAmount: bigint;
  /** 按资产分组的借款金额 */
  borrowByAsset: Map<string, bigint>;
  /** 债务详情列表 */
  debtDetails: DebtDetail[];
  /** 活跃债务金库数量 */
  activeDebtVaultCount: number;
  /** 是否有任何债务 */
  hasAnyDebt: boolean;
}

/**
 * 风险分析结果
 */
export interface RiskAnalysis {
  /** 抵押品价值（原始单位） */
  collateralValue: bigint;
  /** 抵押品小数位数 */
  collateralDecimals: number;
  /** 总借款价值（原始单位） */
  totalBorrowValue: bigint;
  /** 最大借款额度（基于 LTV） */
  maxBorrowAmount: bigint;
  /** 利用率百分比 */
  utilizationRate: number;
  /** 风险等级 */
  riskLevel: "SAFE" | "MEDIUM" | "WARNING" | "DANGER";
  /** 是否接近清算 */
  isNearLiquidation: boolean;
}

/**
 * 计算位置的债务汇总信息
 * @param position - SCMD 位置
 * @returns 债务汇总信息
 */
export function calculateDebtSummary(position: SCMDPosition): DebtSummary {
  const debtDetails: DebtDetail[] = [];
  const borrowByAsset = new Map<string, bigint>();
  let totalBorrowAmount = BigInt(0);

  // 收集所有债务详情
  position.debtStores.forEach((store) => {
    if (store.debtAssetBalance) {
      const amount = BigInt(store.debtAssetBalance.amount);
      const symbol = store.debtAssetBalance.metadata?.symbol || "Unknown";
      const name = store.debtAssetBalance.metadata?.name || "Unknown";
      const decimals = store.debtAssetBalance.metadata?.decimals || 0;

      // 添加到总借款金额
      totalBorrowAmount += amount;

      // 按资产分组
      const current = borrowByAsset.get(symbol) || BigInt(0);
      borrowByAsset.set(symbol, current + amount);

      // 添加到详情列表
      debtDetails.push({
        vaultAddress: store.vaultAddress,
        debtStoreAddress: store.debtStoreAddress,
        borrowAmount: BigInt(store.debtAssetBalance.amount).toString(),
        borrowAsset: symbol,
        borrowAssetDecimals: decimals,
        borrowAssetName: name,
      });
    }
  });

  return {
    totalBorrowAmount,
    borrowByAsset,
    debtDetails,
    activeDebtVaultCount: position.getActiveDebtVaultCount(),
    hasAnyDebt: position.hasAnyDebt(),
  };
}

/**
 * 分析位置的风险状况
 * @param position - SCMD 位置
 * @param ltv - 贷款价值比（百分比，如 75 表示 75%）
 * @param lltv - 清算贷款价值比（百分比，如 80 表示 80%）
 * @returns 风险分析结果
 */
export function analyzePositionRisk(position: SCMDPosition, ltv: number = 75, lltv: number = 80): RiskAnalysis {
  // 获取抵押品信息
  const collateralBalance = position.collateralAssetBalance;
  if (!collateralBalance) {
    throw new Error("No collateral balance found for position");
  }

  const collateralValue = BigInt(collateralBalance.amount);
  const collateralDecimals = position.collateralAssetMetadata?.decimals || 0;

  // 获取债务汇总
  const debtSummary = calculateDebtSummary(position);
  const totalBorrowValue = debtSummary.totalBorrowAmount;

  // 计算最大借款额度
  const maxBorrowAmount = (collateralValue * BigInt(ltv)) / BigInt(100);

  // 计算利用率
  const utilizationRate = maxBorrowAmount > 0 ? Number((totalBorrowValue * BigInt(10000)) / maxBorrowAmount) / 100 : 0;

  // 确定风险等级
  let riskLevel: "SAFE" | "MEDIUM" | "WARNING" | "DANGER";
  let isNearLiquidation = false;

  if (utilizationRate >= lltv) {
    riskLevel = "DANGER";
    isNearLiquidation = true;
  } else if (utilizationRate >= lltv * 0.8) {
    riskLevel = "WARNING";
    isNearLiquidation = true;
  } else if (utilizationRate >= lltv * 0.6) {
    riskLevel = "MEDIUM";
  } else {
    riskLevel = "SAFE";
  }

  return {
    collateralValue,
    collateralDecimals,
    totalBorrowValue,
    maxBorrowAmount,
    utilizationRate,
    riskLevel,
    isNearLiquidation,
  };
}

/**
 * 格式化债务金额显示
 * @param amount - 原始金额（字符串）
 * @param decimals - 小数位数
 * @param symbol - 资产符号
 * @returns 格式化的金额字符串
 */
export function formatDebtAmount(amount: string, decimals: number, symbol: string): string {
  const bigAmount = BigInt(amount);
  const divisor = BigInt(10 ** decimals);

  const wholePart = bigAmount / divisor;
  const fractionalPart = bigAmount % divisor;

  // 格式化小数部分，确保显示正确的小数位数
  const fractionalStr = fractionalPart.toString().padStart(decimals, "0");

  // 移除尾部的零
  const trimmedFractional = fractionalStr.replace(/0+$/, "");

  if (trimmedFractional === "") {
    return `${wholePart.toString()} ${symbol}`;
  } else {
    return `${wholePart.toString()}.${trimmedFractional} ${symbol}`;
  }
}

/**
 * 计算用户所有位置的总债务
 * @param positions - 用户的所有位置
 * @returns 总债务汇总
 */
export function calculateTotalUserDebt(positions: SCMDPosition[]): {
  totalDebtByAsset: Map<string, bigint>;
  totalDebtAmount: bigint;
  positionCount: number;
  activePositionCount: number;
} {
  const totalDebtByAsset = new Map<string, bigint>();
  let totalDebtAmount = BigInt(0);
  let activePositionCount = 0;

  positions.forEach((position) => {
    if (position.isActive) {
      activePositionCount++;
      const debtSummary = calculateDebtSummary(position);

      totalDebtAmount += debtSummary.totalBorrowAmount;

      debtSummary.borrowByAsset.forEach((amount, symbol) => {
        const current = totalDebtByAsset.get(symbol) || BigInt(0);
        totalDebtByAsset.set(symbol, current + amount);
      });
    }
  });

  return {
    totalDebtByAsset,
    totalDebtAmount,
    positionCount: positions.length,
    activePositionCount,
  };
}

/**
 * 生成债务报告
 * @param position - SCMD 位置
 * @param ltv - 贷款价值比
 * @param lltv - 清算贷款价值比
 * @returns 格式化的债务报告
 */
export function generateDebtReport(position: SCMDPosition, ltv: number = 75, lltv: number = 80): string {
  const debtSummary = calculateDebtSummary(position);
  const riskAnalysis = analyzePositionRisk(position, ltv, lltv);

  let report = `📊 债务报告 - 位置 ${position.positionAddress}\n`;
  report += "=".repeat(50) + "\n";

  // 基本信息
  report += `所有者: ${position.ownerAddress}\n`;
  report += `状态: ${position.isActive ? "活跃" : "非活跃"}\n`;
  report += `抵押品: ${position.market.collateral}\n`;

  // 抵押品信息
  if (position.collateralAssetBalance) {
    const collateralFormatted = formatDebtAmount(
      BigInt(position.collateralAssetBalance.amount).toString(),
      position.collateralAssetMetadata?.decimals || 0,
      position.collateralAssetMetadata?.symbol || "Unknown",
    );
    report += `抵押品余额: ${collateralFormatted}\n`;
  }

  // 债务信息
  report += `\n💳 债务信息:\n`;
  report += `总借款金额: ${riskAnalysis.totalBorrowValue.toString()}\n`;
  report += `活跃债务金库: ${debtSummary.activeDebtVaultCount}\n`;

  if (debtSummary.borrowByAsset.size > 0) {
    report += `按资产分组:\n`;
    debtSummary.borrowByAsset.forEach((amount, symbol) => {
      report += `  - ${symbol}: ${amount.toString()}\n`;
    });
  }

  // 风险信息
  report += `\n⚠️  风险分析:\n`;
  report += `利用率: ${riskAnalysis.utilizationRate.toFixed(2)}%\n`;
  report += `最大借款额度: ${riskAnalysis.maxBorrowAmount.toString()}\n`;
  report += `风险等级: ${riskAnalysis.riskLevel}\n`;
  report += `接近清算: ${riskAnalysis.isNearLiquidation ? "是" : "否"}\n`;

  return report;
}
