# Yeap TypeScript SDK - 类型导出说明

## 📋 概述

本文档列出了 Yeap TypeScript SDK 中所有可用的导出类型，确保使用者可以正确地导入和使用这些类型。

## 🎯 主要 API 类

### 核心 API 类
```typescript
import { 
  Yeap,           // 主要客户端类
  YeapConfig,     // 配置类
  VaultApi,       // 金库 API
  ScmdApi,        // SCMD 位置 API
  OracleApi       // 预言机 API
} from "@aptos-labs/yeap-sdk";
```

### 实体类
```typescript
import { 
  Vault,          // 金库实体
  VaultState,     // 金库状态实体
  SCMDPosition,   // SCMD 位置实体
  OracleConfig,   // 预言机配置实体
  OracleRouter,   // 预言机路由器实体
  ScmdConfig      // SCMD 配置实体
} from "@aptos-labs/yeap-sdk";
```

## 🏗️ 核心接口类型

### 金库相关接口
```typescript
import { 
  YeapVaultInfo,              // 金库信息
  YeapVaultSettings,          // 金库设置
  YeapVaultState,             // 金库状态
  YeapVaultProtocolCaps,      // 金库协议能力
  YeapVaultBadDebtActivity,   // 坏账活动
  YeapVaultEmergencyActivity, // 紧急提取活动
  YeapVaultFlashloanActivity, // 闪电贷活动
  YeapVaultStateActivity      // 状态活动
} from "@aptos-labs/yeap-sdk";
```

### 资产相关接口
```typescript
import { 
  YeapFungibleAssetMetadata,  // 可互换资产元数据
  YeapFungibleAssetBalance,   // 可互换资产余额
  YeapCurrentObject           // 当前对象信息
} from "@aptos-labs/yeap-sdk";
```

### 利率模型接口
```typescript
import { 
  YeapAdaptiveIrmConfig,      // 自适应利率模型配置
  YeapAdaptiveIrmState,       // 自适应利率模型状态
  YeapFixedRateIrmConfig,     // 固定利率模型配置
  YeapKinkedIrmConfig         // 分段利率模型配置
} from "@aptos-labs/yeap-sdk";
```

### 位置相关接口
```typescript
import { 
  YeapPosition,               // 位置信息（通用）
  YeapPositionDebtStore,      // 位置债务存储（通用）
  PositionDebtStore           // 位置债务存储（实体特定）
} from "@aptos-labs/yeap-sdk";
```

## 🛡️ 风险参数类型

```typescript
import { 
  CollateralRiskParameters,   // 抵押品风险参数
  BorrowRiskParameters        // 借贷风险参数
} from "@aptos-labs/yeap-sdk";
```

## 🔮 预言机类型

```typescript
import { 
  YeapOracleRouterConfig      // 预言机路由器配置
} from "@aptos-labs/yeap-sdk";
```

## 🔍 查询选项和过滤器

### 位置查询选项
```typescript
import { 
  PositionFilterOptions,      // 位置过滤选项
  PositionSortOptions,        // 位置排序选项
  PositionQueryOptions        // 位置查询选项
} from "@aptos-labs/yeap-sdk";
```

### 金库查询选项
```typescript
import { 
  VaultFilterOptions,         // 金库过滤选项
  VaultSortOptions,           // 金库排序选项
  VaultQueryOptions           // 金库查询选项
} from "@aptos-labs/yeap-sdk";
```

### 通用查询选项
```typescript
import { 
  QueryOptions,               // 通用查询选项
  PaginationInfo              // 分页信息
} from "@aptos-labs/yeap-sdk";
```

## 🌐 客户端类型

```typescript
import { 
  YeapResponse,               // API 响应包装器
  GraphqlQuery                // GraphQL 查询结构
} from "@aptos-labs/yeap-sdk";
```

## 📊 生成的 GraphQL 类型

### 查询类型
```typescript
import { 
  GetVaultInfoQuery,                    // 获取金库信息查询
  GetActiveVaultsQuery,                 // 获取活跃金库查询
  GetPositionsByOwnerQuery,             // 按所有者获取位置查询
  GetVaultLatestStateQuery,             // 获取金库最新状态查询
  GetOracleRouterConfigByPrimaryKeyQuery, // 获取预言机路由器配置查询
  GetCollateralRiskParametersByConfigAddressQuery, // 获取抵押品风险参数查询
  GetBorrowRiskParametersByConfigAddressQuery      // 获取借贷风险参数查询
} from "@aptos-labs/yeap-sdk";
```

### 片段类型
```typescript
import { 
  VaultInfoFieldsFragment,            // 金库信息片段
  PositionFieldsFragment,             // 位置信息片段
  OracleRouterConfigFieldsFragment,   // 预言机路由器配置片段
  CollateralRiskParametersFieldsFragment, // 抵押品风险参数片段
  BorrowRiskParametersFieldsFragment      // 借贷风险参数片段
} from "@aptos-labs/yeap-sdk";
```

## 🛠️ 工具函数

```typescript
import { 
  validateEndpoint,           // 验证端点 URL
  createPaginationParams,     // 创建分页参数
  formatGraphQLError,         // 格式化 GraphQL 错误
  buildWhereCondition         // 构建查询条件
} from "@aptos-labs/yeap-sdk";
```

## 🔄 转换函数

```typescript
import { 
  transformFungibleAssetMetadata, // 转换资产元数据
  transformVaultSettings,         // 转换金库设置
  transformVaultInfo,             // 转换金库信息
  transformVaultState,            // 转换金库状态
  transformCollateralRiskParameters, // 转换抵押品风险参数
  transformBorrowRiskParameters      // 转换借贷风险参数
} from "@aptos-labs/yeap-sdk";
```

## 📝 使用示例

### 基本导入
```typescript
import { 
  Yeap, 
  YeapConfig,
  YeapVaultInfo,
  VaultQueryOptions 
} from "@aptos-labs/yeap-sdk";

// 使用类型
const config = new YeapConfig({ endpoint: "https://api.example.com" });
const yeap = new Yeap(config);

const queryOptions: VaultQueryOptions = {
  pagination: { limit: 10 },
  filter: { isActive: true }
};
```

### 高级类型使用
```typescript
import { 
  CollateralRiskParameters,
  YeapResponse,
  GetVaultInfoQuery 
} from "@aptos-labs/yeap-sdk";

// 类型安全的风险参数
const riskParams: CollateralRiskParameters = {
  borrowVaultMaxNum: 5,
  collateral: accountAddress,
  configAddress: configAddress,
  liquidationBonusBps: 500,
  lltv: 80,
  ltv: 75,
  oracle: oracleAddress,
  riskFactor: 100,
};

// 类型安全的 API 响应
const response: YeapResponse<any, GetVaultInfoQuery> = await someApiCall();
```

## ✅ 验证

所有列出的类型都已经过编译验证，确保：
- ✅ 所有类型都能正确导入
- ✅ 没有命名冲突
- ✅ TypeScript 编译无错误
- ✅ 提供完整的类型安全保障

使用这些类型可以确保在开发过程中获得完整的 TypeScript 类型提示和编译时类型检查。 