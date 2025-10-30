import {
  AccountAddress,
  AccountAddressInput,
  AptosConfig,
  getAptosFullNode,
  LedgerVersionArg,
  MoveModule,
  MoveModuleBytecode,
  Network,
} from '@aptos-labs/ts-sdk';
import { AptosScriptComposer,
  BuildScriptComposerTransaction,
  getModuleInner,
  CallArgument } from '@aptos-labs/script-composer-sdk';
import { createModuleClient } from '../../src';
import { before } from 'node:test';

const coin_module = await getModuleInner({
  aptosConfig: new AptosConfig({ network: Network.TESTNET }),
  accountAddress: '0x1',
  moduleName: 'coin',
});

const fa_module = await getModuleInner({
  aptosConfig: new AptosConfig({ network: Network.TESTNET }),
  accountAddress: '0x1',
  moduleName: 'fungible_asset',
});

const aptos_coin_module = await getModuleInner({
  aptosConfig: new AptosConfig({ network: Network.TESTNET }),
  accountAddress: '0x1',
  moduleName: 'aptos_coin',
});

const primary_fungible_store_module = await getModuleInner({
  aptosConfig: new AptosConfig({ network: Network.TESTNET }),
  accountAddress: '0x1',
  moduleName: 'primary_fungible_store',
});

describe('module composer tests', () => {
  test('module composer returns callable function map', async () => {
    const aptosConfig = new AptosConfig({ network: Network.TESTNET });
    const builder = new AptosScriptComposer(aptosConfig);

    const moduleComposer = await createModuleClient({
      composer: builder,
      moduleAbi: coin_module.abi!,
      defaults: {
        moduleBytecodes: [coin_module.bytecode],
      },
    });

    expect(moduleComposer.moduleAbi).toBe(coin_module.abi);
    expect(moduleComposer.composer).toBe(builder);
    expect(typeof moduleComposer.withdraw).toBe('function');
    expect(typeof moduleComposer.balance).toBe('function');
    expect((moduleComposer as Record<string, unknown>).entry).toBeUndefined();
    expect((moduleComposer as Record<string, unknown>).initialize_aggregatable_coin).toBeUndefined();

    expect(() => {
      (moduleComposer as { moduleAbi?: unknown }).moduleAbi = null;
    }).toThrow();

    expect(() => {
      (moduleComposer as { composer?: unknown }).composer = null;
    }).toThrow();

    const coin = await moduleComposer.withdraw({
      functionArguments: [CallArgument.newSigner(0), 1],
      typeArguments: ['0x1::aptos_coin::AptosCoin'],
    });

    expect(Array.isArray(coin)).toBe(true);
    expect(coin.length).toBeGreaterThan(0);

    await expect(
      moduleComposer.withdraw({
        functionArguments: [CallArgument.newSigner(0), 1],
        typeArguments: [],
      })
    ).rejects.toThrow('Type argument count mismatch');

    const viewResult = await moduleComposer.balance({
      functionArguments: ['0x1'],
      typeArguments: ['0x1::aptos_coin::AptosCoin'],
    });

    expect(Array.isArray(viewResult)).toBe(true);
  });
});
