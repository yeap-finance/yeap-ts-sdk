import { AccountAddress, createObjectAddress } from "@aptos-labs/ts-sdk";
import { YeapConfig } from "../yeapConfig";
import { BorrowRiskParameters, CollateralRiskParameters } from "../interfaces";
import {
  getBorrowRiskParametersByConfigAddress,
  getCollateralRiskParametersByConfigAddress,
} from "../../internal/riskParameters";
import {
  BorrowRiskParametersCurrent,
  BorrowRiskParametersFieldsFragment,
  CollateralRiskParametersCurrent,
  CollateralRiskParametersFieldsFragment,
} from "../../types";
import { transformCollateralRiskParameters, transformBorrowRiskParameters } from "../transforms";

export class ScmdConfig {
  readonly rawCollateralRiskParameters: CollateralRiskParametersFieldsFragment[];
  readonly rawBorrowRiskParameters: BorrowRiskParametersFieldsFragment[];

  constructor(
    private readonly config: YeapConfig,
    rawCollateralRiskParameters: CollateralRiskParametersFieldsFragment[] = [],
    rawBorrowRiskParameters: BorrowRiskParametersFieldsFragment[] = [],
  ) {
    this.rawCollateralRiskParameters = rawCollateralRiskParameters;
    this.rawBorrowRiskParameters = rawBorrowRiskParameters;
  }

  // map from collateral address string to CollateralRiskParameters
  supportedCollateralConfigs(): Map<string, CollateralRiskParameters> {
    const configMap = new Map<string, CollateralRiskParameters>();

    for (const rawConfig of this.rawCollateralRiskParameters) {
      const config = transformCollateralRiskParameters(rawConfig);
      if (config) {
        configMap.set(config.collateral.toString(), config);
      }
    }

    return configMap;
  }

  // map from collateral address string to BorrowRiskParameters[]
  supportedVaultConfigs(): Map<string, Array<BorrowRiskParameters>> {
    const configMap = new Map<string, Array<BorrowRiskParameters>>();

    for (const rawConfig of this.rawBorrowRiskParameters) {
      const config = transformBorrowRiskParameters(rawConfig);
      if (config) {
        const collateralAddress = config.collateral.toString();
        // Get existing configs for this collateral or create new array
        const existingConfigs = configMap.get(collateralAddress) || [];
        existingConfigs.push(config);
        configMap.set(collateralAddress, existingConfigs);
      }
    }

    return configMap;
  }

  /**
   * Get collateral risk parameters by address string
   * This method avoids AccountAddress reference equality issues
   */
  getCollateralConfigByAddress(address: string | AccountAddress): CollateralRiskParameters | undefined {
    const targetAddress =
      typeof address === "string" ? AccountAddress.fromString(address).toString() : address.toString();

    for (const rawConfig of this.rawCollateralRiskParameters) {
      const config = transformCollateralRiskParameters(rawConfig);
      if (config && config.collateral.toString() === targetAddress) {
        return config;
      }
    }

    return undefined;
  }

  /**
   * Get vault configurations by collateral address string
   * This method avoids AccountAddress reference equality issues
   */
  getVaultConfigsByCollateralAddress(address: string | AccountAddress): Array<BorrowRiskParameters> {
    const targetAddress =
      typeof address === "string" ? AccountAddress.fromString(address).toString() : address.toString();
    const configs: Array<BorrowRiskParameters> = [];

    for (const rawConfig of this.rawBorrowRiskParameters) {
      const config = transformBorrowRiskParameters(rawConfig);
      if (config && config.collateral.toString() === targetAddress) {
        configs.push(config);
      }
    }

    return configs;
  }
}
