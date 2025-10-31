import { AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { AptosScriptComposer } from '@aptos-labs/script-composer-sdk';
import { createModuleProxy } from '../../src/composer/moduleProxy';
import { vault_abi } from '../abi/vault.abi';

describe('module composer tests', () => {
  test('module composer returns callable function map', async () => {
    const aptosConfig = new AptosConfig({ network: Network.TESTNET });
    const builder = new AptosScriptComposer(aptosConfig);

    const vaultComposer = createModuleProxy({
      composer: builder,
      moduleAbi: vault_abi,
    });

    expect(vaultComposer.moduleAbi).toBe(vault_abi);
    expect(vaultComposer.composer).toBe(builder);
    expect(typeof vaultComposer.borrow).toBe('function');
    expect(typeof vaultComposer.touch).toBe('function');
    expect((vaultComposer as Record<string, unknown>).entry).toBeUndefined();
    expect((vaultComposer as Record<string, unknown>).initialize_aggregatable_coin).toBeUndefined();

    expect(() => {
      (vaultComposer as { moduleAbi?: unknown }).moduleAbi = null;
    }).toThrow();

    expect(() => {
      (vaultComposer as { composer?: unknown }).composer = null;
    }).toThrow();

    const touchResult = await vaultComposer.touch({
      functionArguments: ['0x1'],
    });

    expect(touchResult).toBeUndefined();
  });
});
