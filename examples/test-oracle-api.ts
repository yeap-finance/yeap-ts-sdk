// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/**
 * Example script to test OracleApi functionality.
 * This example demonstrates how to query oracle configurations and fetch oracle prices.
 *
 * To run this examp              if (hasPricing) {
                successfulPriceChecks++;

                if (samplesShown < maxSamplesToShow) {
                  // Check if pricing path exists
                  console.log(`         ✅ ${baseAsset}/${quoteAsset}: pricing available`);py .env.example to .env (if it exists) or create a .env file
 * 2. Update the environment variables with actual Yeap contract addresses
 * 3. Run: pnpm tsx examples/test-oracle-api.ts
 */

import {configDotenv} from 'dotenv';

import {initializeYeapFromEnv, printEnvSetupHelp} from './shared/yeapUtils';
import {OracleRouter} from '../src/api/entities';

async function testOracleApi() {
  console.log('🔮 Starting Yeap OracleApi Test with Environment Configuration');
  console.log('=' .repeat(60));

  try {
    // Initialize Yeap client from environment variables
    const yeap = await initializeYeapFromEnv();

    console.log('\n🔮 Testing Oracle API...');
    console.log('-' .repeat(40));

    // Step 1: Get oracle router and test its functionality
    console.log('\n1. Getting oracle router...');
    let oracleRouter: OracleRouter|null = null;

    try {
      // Use the oracle router address from our configuration
      const oracleRouterAddress = process.env.ORACLE_ROUTER;

      if (!oracleRouterAddress) {
        throw new Error('ORACLE_ROUTER environment variable is not set');
      }

      oracleRouter = await yeap.oracleRouterApi.getRouter(oracleRouterAddress);

      if (oracleRouter) {
        console.log(`✅ Found oracle router: ${oracleRouterAddress}`);

        const configs = oracleRouter.getAllConfigs();
        console.log(`   - Total configurations: ${configs.length}`);

        // Show sample configurations
        if (configs.length > 0) {
          console.log('\n   Sample oracle configurations:');
          configs.slice(0, 3).forEach((config, index) => {
            console.log(`   ${index + 1}. Base Asset: ${config.baseAsset || 'N/A'}`);
            console.log(`      Quote Asset: ${config.quoteAsset || 'N/A'}`);
            console.log(`      Oracle: ${config.oracle || 'N/A'}`);
            console.log(`      Oracle Kind: ${config.oracleKind || 'N/A'}`);
          });

          if (configs.length > 3) {
            console.log(`   ... and ${configs.length - 3} more configurations`);
          }
        }

        // Test available asset pairs
        console.log('\n   Available asset pairs:');
        const pairs = oracleRouter.getAvailableAssetPairs();
        console.log(`   - ${pairs.size} asset pairs available`);

        if (pairs.size > 0) {
          let count = 0;
          pairs.forEach((quoteAsset, baseAsset) => {
            if (count < 3) {
              console.log(`     ${baseAsset} -> ${quoteAsset}`);
              count++;
            }
          });
          if (pairs.size > 3) {
            console.log(`     ... and ${pairs.size - 3} more pairs`);
          }
        }

        // Test statistics
        const stats = oracleRouter.getStats();
        console.log('\n   Router statistics:');
        console.log(`   - Total configs: ${stats.totalConfigs}`);
        console.log(`   - Unique base assets: ${stats.uniqueBaseAssets}`);
        console.log(`   - Unique quote assets: ${stats.uniqueQuoteAssets}`);
        console.log(`   - Unique oracles: ${stats.uniqueOracles}`);
        console.log(`   - Asset pairs: ${stats.assetPairs}`);

      } else {
        console.log('ℹ️  No oracle router found for this address');
      }
    } catch (error) {
      console.log(`❌ Error fetching oracle router: ${error.message}`);
    }

    // Step 2: Test pricing functionality and path finding
    if (oracleRouter && oracleRouter.getAllConfigs().length > 0) {
      console.log(`\n2. Testing pricing functionality...`);

      const configs = oracleRouter.getAllConfigs();
      const firstConfig = configs[0];

      console.log(`   Testing with pair: ${firstConfig.baseAsset} -> ${firstConfig.quoteAsset}`);

      try {
        // Test pricing path finding
        const hasPricing = oracleRouter.hasPricing(firstConfig.baseAsset, firstConfig.quoteAsset);
        console.log(`   ✅ Has pricing path: ${hasPricing}`);

        if (hasPricing) {
          console.log(`   ✅ Pricing path exists for ${firstConfig.baseAsset}→${firstConfig.quoteAsset}`);

          // Try to fetch the price using the oracle router
          try {
            console.log('\n   Attempting to fetch oracle price...');
            const price = await oracleRouter.getPrice(firstConfig.baseAsset, firstConfig.quoteAsset);

            if (price) {
              console.log(`   ✅ Oracle price fetched successfully: ${price.toString()}`);
            } else {
              console.log('   ℹ️  Oracle price is currently null/unavailable');
            }
          } catch (priceError) {
            console.log(`   ❌ Error fetching oracle price: ${priceError.message}`);
            console.log('     This might be expected if the oracle is not properly configured or the price feed is unavailable');
          }

          // Test getting OracleConfig entity
          const oracleConfig = oracleRouter.getOracleConfig(firstConfig.baseAsset, firstConfig.quoteAsset);
          if (oracleConfig) {
            console.log(`   ✅ Found OracleConfig entity for pair`);
            console.log(`     Oracle type: ${oracleConfig.oracleTypeDescription}`);
            console.log(`     Is active: ${oracleConfig.isActive}`);
          }
        }
      } catch (error) {
        console.log(`   ❌ Error testing pricing functionality: ${error.message}`);
      }
    } else {
      console.log('\n2. Skipping pricing test (no oracle router or configurations found)');
    }

    // Step 3: Test additional oracle router functionality
    if (oracleRouter) {
      console.log('\n3. Testing additional oracle router functionality...');

      try {
        // Test filtering by oracle kind
        const pythOracles = oracleRouter.getConfigsByKind(0); // Primary/Backup oracles
        const vaultOracles = oracleRouter.getConfigsByKind(1); // Vault oracles
        const fixedPriceOracles = oracleRouter.getConfigsByKind(2); // Fixed price oracles
        const delegateOracles = oracleRouter.getConfigsByKind(3); // Delegate oracles

        console.log(`   Oracle kind distribution:`);
        console.log(`   - Primary/Backup oracles (Pyth + Switchboard): ${pythOracles.length}`);
        console.log(`   - Vault oracles: ${vaultOracles.length}`);
        console.log(`   - Fixed price oracles: ${fixedPriceOracles.length}`);
        console.log(`   - Delegate oracles: ${delegateOracles.length}`);

        // Test oracle kind descriptions
        if (pythOracles.length > 0) {
          const kindDescription = OracleRouter.getOracleKindDescription(0);
          console.log(`   - Kind 0 description: ${kindDescription}`);
        }

        // Test uniqueness constraints with first available config
        const configs = oracleRouter.getAllConfigs();
        if (configs.length > 0) {
          const firstConfig = configs[0];
          console.log(`\n   Testing uniqueness constraints with asset: ${firstConfig.baseAsset}`);

          try {
            // Test getConfigForBaseAsset (enforces uniqueness)
            const baseAssetConfig = oracleRouter.getConfigForBaseAsset(firstConfig.baseAsset);
            if (baseAssetConfig) {
              console.log(`   ✅ Found unique config for base asset ${firstConfig.baseAsset}`);
              console.log(`      Quote asset: ${baseAssetConfig.quoteAsset}`);
              console.log(`      Oracle kind: ${baseAssetConfig.oracleKind}`);

              // Test getOracleConfig (enforces uniqueness)
              const pairConfig = oracleRouter.getOracleConfig(
                baseAssetConfig.baseAsset,
                baseAssetConfig.quoteAsset
              );
              if (pairConfig) {
                console.log(`   ✅ Found unique config for pair ${baseAssetConfig.baseAsset}/${baseAssetConfig.quoteAsset}`);
              }
            }
          } catch (error) {
            console.log(`   ⚠️  Uniqueness constraint violation: ${error.message}`);
          }
        }

        console.log(`\n   ✅ Additional oracle router tests completed successfully`);
      } catch (error) {
        console.log(`   ❌ Error testing additional oracle router functionality: ${error.message}`);
      }
    } else {
      console.log('\n3. Skipping additional tests (no oracle router found)');
    }

    // Step 4: Fetch prices for all possible pairs
    if (oracleRouter) {
      console.log('\n4. Fetching prices for all possible pairs (including multi-hop)...');

      try {
        // Get all available asset pairs
        const assetPairsMap = oracleRouter.getAvailableAssetPairs();

        if (assetPairsMap.size === 0) {
          console.log('   No asset pairs available in the oracle router');
        } else {
          console.log(`   Found ${assetPairsMap.size} direct asset pairs:`);

          // Track all unique quote assets
          const allQuoteAssets = new Set<string>();
          assetPairsMap.forEach(quoteAsset => {
            allQuoteAssets.add(quoteAsset);
          });

          console.log(`   Total unique quote assets: ${allQuoteAssets.size}`);

          // Sample pricing requests for demonstration
          let successfulPriceChecks = 0;
          let totalPriceChecks = 0;
          const maxSamplesToShow = 10; // Limit output for readability
          let samplesShown = 0;

          // Test direct pairs first
          console.log('\n   📊 Testing direct price pairs:');
          for (const [baseAsset, quoteAsset] of assetPairsMap) {
            totalPriceChecks++;

            try {
              // Check if this pair has pricing available
              const hasPricing = oracleRouter.hasPricing(baseAsset, quoteAsset);
              if (hasPricing) {
                successfulPriceChecks++;

                if (samplesShown < maxSamplesToShow) {
                  // Check if pricing path exists
                  console.log(`      ✅ ${baseAsset}/${quoteAsset} - pricing available`);
                  samplesShown++;
                }
              }
            } catch (error) {
              console.log(`      ❌ Error checking ${baseAsset}/${quoteAsset}: ${error.message}`);
            }
          }

          // Test multi-hop pricing for cross-asset combinations
          console.log('\n   🔄 Testing multi-hop price paths:');
          const baseAssets = Array.from(assetPairsMap.keys());
          const quoteAssets = Array.from(allQuoteAssets);
          let multiHopFound = 0;
          let multiHopSamplesShown = 0;
          const maxMultiHopSamples = 5;

          // Try combinations that might require multi-hop pricing
          for (let i = 0; i < baseAssets.length && multiHopSamplesShown < maxMultiHopSamples; i++) {
            for (let j = 0; j < quoteAssets.length && multiHopSamplesShown < maxMultiHopSamples; j++) {
              const baseAsset = baseAssets[i];
              const targetQuoteAsset = quoteAssets[j];

              // Skip if this is a direct pair
              const directQuoteAsset = assetPairsMap.get(baseAsset);
              if (directQuoteAsset === targetQuoteAsset) {
                continue;
              }

              totalPriceChecks++;

              try {
                const hasPricing = oracleRouter.hasPricing(baseAsset, targetQuoteAsset);
                if (hasPricing) {
                  successfulPriceChecks++;
                  multiHopFound++;

                  if (multiHopSamplesShown < maxSamplesToShow) {
                    console.log(`      ✅ ${baseAsset}/${targetQuoteAsset} - multi-hop pricing available`);
                    multiHopSamplesShown++;
                  }
                }
              } catch (error) {
                // Silent for multi-hop attempts - many will fail
              }
            }
          }

          // Summary statistics
          console.log(`\n   📈 Pricing Coverage Summary:`);
          console.log(`   - Total pricing checks performed: ${totalPriceChecks}`);
          console.log(`   - Successful pricing paths found: ${successfulPriceChecks}`);
          console.log(`   - Multi-hop paths discovered: ${multiHopFound}`);
          console.log(`   - Coverage rate: ${((successfulPriceChecks / totalPriceChecks) * 100).toFixed(1)}%`);

          // Show oracle router statistics
          const stats = oracleRouter.getStats();
          console.log(`\n   🔧 Oracle Router Statistics:`);
          console.log(`   - Total active configs: ${stats.totalConfigs}`);
          console.log(`   - Unique base assets: ${stats.uniqueBaseAssets}`);
          console.log(`   - Unique quote assets: ${stats.uniqueQuoteAssets}`);
          console.log(`   - Configs by oracle kind: ${JSON.stringify(stats.oracleKindDistribution)}`);
        }

        console.log(`\n   ✅ Price fetching demonstration completed successfully`);
      } catch (error) {
        console.log(`   ❌ Error demonstrating price fetching: ${error.message}`);
      }
    } else {
      console.log('\n4. Skipping price fetching demonstration (no oracle router found)');
    }

    // Step 5: Test configuration
    console.log('\n5. Testing oracle configuration...');
    console.log(`✅ Yeap Config - Endpoint: ${yeap.config.endpoint}`);
    console.log(`✅ Yeap Config - Timeout: ${yeap.config.timeout}ms`);
    console.log(`✅ Aptos Client Connected: ${!!yeap.config.aptosClient}`);
    console.log(`✅ Available addresses: ${Object.keys(yeap.config.addresses).join(', ')}`);

    if (yeap.config.hasAddress('yeap_oracle')) {
      console.log(`✅ Yeap Oracle Address: ${yeap.config.getAddress('yeap_oracle')}`);
    }

    // Step 6: Test fetching latest Pyth price updates via Hermes
    if (oracleRouter) {
      console.log('\n6. Fetching latest Pyth price updates via Hermes...');
      try {
        const updates = await oracleRouter.getPythPriceUpdate();
        if (updates && updates.length > 0) {
          console.log(`   ✅ Retrieved ${updates.length} Pyth price feeds`);
          const sample = updates.slice(0, 3);
          sample.forEach((u, idx) => {
            const f = u;
            console.log(`   ${idx + 1}. id=${f.id ?? 'unknown'} price=${f.getPriceUnchecked().price ?? 'n/a'} expo=${f.getPriceUnchecked().expo ?? 'n/a'} publishTime=${f.getPriceUnchecked().publishTime ?? 'n/a'}`);
          });
        } else {
          console.log('   ℹ️  No Pyth price updates returned');
        }
      } catch (e: any) {
        console.log(`   ❌ Error fetching Pyth price updates: ${e?.message ?? e}`);
      }
    } else {
      console.log('\n6. Skipping Pyth price updates test (no oracle router found)');
    }

    console.log('\n🎉 Oracle API test completed successfully!');

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
  testOracleApi().catch(console.error);
}

export { testOracleApi };
