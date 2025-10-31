import {
  EntryFunctionArgumentTypes,
  MoveFunctionVisibility,
  MoveModule,
  SimpleEntryFunctionArgumentTypes,
  TypeArgument,
} from '@aptos-labs/ts-sdk';
import type { AptosScriptComposer, CallArgument } from '@aptos-labs/script-composer-sdk';

export type ModuleFunctionCallArgs = {
  typeArguments?: Array<TypeArgument>;
  functionArguments?: Array<
    EntryFunctionArgumentTypes | CallArgument | SimpleEntryFunctionArgumentTypes
  >;
  moduleBytecodes?: string[];
  options?: {
    allowFetch?: boolean;
  };
};

type ModuleFunctions<T extends MoveModule = MoveModule> = NonNullable<T['exposed_functions']>;
type ModuleFunction<T extends MoveModule = MoveModule> = ModuleFunctions<T>[number];
type PublicModuleFunction<T extends MoveModule = MoveModule> = Extract<
  ModuleFunction<T>,
  { visibility: MoveFunctionVisibility.PUBLIC }
>;

type PublicModuleFunctionName<T extends MoveModule = MoveModule> = PublicModuleFunction<T>['name'];

export type ModuleFunctionClient<TModule extends MoveModule = MoveModule> = {
  [TName in PublicModuleFunctionName<TModule>]: (
    args?: ModuleFunctionCallArgs
  ) => Promise<CallArgument[]>;
};

export type ModuleClient<TModule extends MoveModule = MoveModule> =
  ModuleFunctionClient<TModule> & {
    readonly moduleAbi: TModule;
    readonly composer: AptosScriptComposer;
  };

export interface CallOptionDefaults {
  moduleBytecodes?: string[];
  options?: {
    allowFetch?: boolean;
  };
}

export async function createModuleClient<TModule extends MoveModule = MoveModule>(args: {
  composer: AptosScriptComposer;
  moduleAbi: TModule;
  defaults?: CallOptionDefaults;
}): Promise<ModuleClient<TModule>> {
  const { composer, moduleAbi, defaults } = args;

  if (!moduleAbi.address) {
    throw new Error('moduleAbi.address is required to create a module client');
  }

  if (!moduleAbi.name) {
    throw new Error('moduleAbi.name is required to create a module client');
  }

  const moduleAddress = moduleAbi.address;
  const resolvedModuleName = moduleAbi.name;
  const exposedFunctions = moduleAbi.exposed_functions ?? [];

  const publicFunctions = exposedFunctions.filter(
    (func) => func.visibility === MoveFunctionVisibility.PUBLIC
  );
  const functionMap = new Map(publicFunctions.map((func) => [func.name, func] as const));
  const defaultModuleBytecodes = defaults?.moduleBytecodes;
  const defaultOptions = defaults?.options;

  const invokeFunction = async (
    functionName: string,
    callArgs: ModuleFunctionCallArgs = {}
  ): Promise<CallArgument[]> => {
    const functionAbi = functionMap.get(functionName);
    if (!functionAbi) {
      throw new Error(
        `Function '${functionName}' does not exist on module '${moduleAddress}::${resolvedModuleName}'`
      );
    }

    const typeArguments = callArgs.typeArguments ?? [];
    if (typeArguments.length !== functionAbi.generic_type_params.length) {
      throw new Error(
        `Type argument count mismatch for '${moduleAddress}::${resolvedModuleName}::${functionName}', expected ${functionAbi.generic_type_params.length}, received ${typeArguments.length}`
      );
    }

    return composer.addBatchedCalls({
      function: `${moduleAddress}::${resolvedModuleName}::${functionName}`,
      typeArguments,
      functionArguments: callArgs.functionArguments ?? [],
      moduleAbi,
      moduleBytecodes: callArgs.moduleBytecodes ?? defaultModuleBytecodes,
      options: callArgs.options ?? defaultOptions,
    });
  };

  const target = {} as ModuleClient<TModule>;

  Object.defineProperties(target, {
    moduleAbi: {
      value: moduleAbi,
      writable: false,
      enumerable: true,
      configurable: false,
    },
    composer: {
      value: composer,
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });

  return new Proxy(target, {
    get: (_target, prop) => {
      if (prop === 'moduleAbi') {
        return moduleAbi;
      }

      if (prop === 'composer') {
        return composer;
      }

      if (typeof prop !== 'string') {
        return undefined;
      }

      if (!functionMap.has(prop)) {
        return undefined;
      }

      return (callArgs?: ModuleFunctionCallArgs) => invokeFunction(prop, callArgs);
    },
    set: () => false,
  });
}
