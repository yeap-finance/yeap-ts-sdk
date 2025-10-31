import {
  EntryFunctionArgumentTypes,
  SimpleEntryFunctionArgumentTypes,
  TypeArgument,
} from '@aptos-labs/ts-sdk';
import type { AptosScriptComposer, CallArgument } from '@aptos-labs/script-composer-sdk';
import { ABIRoot } from './abi';

export type FunctionArgument =
  | EntryFunctionArgumentTypes
  | CallArgument
  | SimpleEntryFunctionArgumentTypes;

type ModuleFunctions<T extends ABIRoot> = NonNullable<T['exposed_functions']>;
type ModuleFunction<T extends ABIRoot> = ModuleFunctions<T>[number];
type PublicModuleFunction<T extends ABIRoot> = Extract<
  ModuleFunction<T>,
  { visibility: 'public' }
>;
type PublicModuleFunctionName<T extends ABIRoot> = PublicModuleFunction<T>['name'];
type PublicModuleFunctionByName<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>
> = Extract<PublicModuleFunction<TModule>, { name: TName }>;

type ModuleFunctionReturnTuple<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>
> = PublicModuleFunctionByName<TModule, TName>['return'];

type ModuleFunctionArgsTuple<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>
> = PublicModuleFunctionByName<TModule, TName>['params'];
type ModuleFunctionGenericTypeParamsTuple<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>
> = PublicModuleFunctionByName<TModule, TName>['generic_type_params'];

type TupleOfLength<TElements extends readonly unknown[], TValue> =
  TElements extends readonly [unknown, ...infer TRest extends readonly unknown[]]
  ? [TValue, ...TupleOfLength<TRest, TValue>]
  : [];

export type FunctionReturns<TReturns extends readonly string[]> = TReturns['length'] extends 0
  ? undefined
  : (TReturns['length'] extends 1
    ? TupleOfLength<TReturns, CallArgument>[0]
    : TupleOfLength<TReturns, CallArgument>);

export type FunctionArguments<TParams extends readonly string[]> = TParams extends readonly []
  ? {}
  : { functionArguments: TupleOfLength<TParams, FunctionArgument> };

export type FunctionGenericTypeArguments<TParams extends readonly unknown[]> = TParams extends readonly []
  ? {}
  : { typeArguments: TupleOfLength<TParams, TypeArgument> };
export interface ExtraCallOptions {
  moduleBytecodes?: string[];
  allowFetch?: boolean;
}

type FunctionCallArgs<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>
> = FunctionGenericTypeArguments<ModuleFunctionGenericTypeParamsTuple<TModule, TName>> &
  FunctionArguments<ModuleFunctionArgsTuple<TModule, TName>> &
  ExtraCallOptions;

export type ModuleFunctionClient<TModule extends ABIRoot> = {
  [TName in PublicModuleFunctionName<TModule>]: (
    args?: FunctionGenericTypeArguments<ModuleFunctionGenericTypeParamsTuple<TModule, TName>>
      & FunctionArguments<ModuleFunctionArgsTuple<TModule, TName>> & ExtraCallOptions
  ) => Promise<FunctionReturns<ModuleFunctionReturnTuple<TModule, TName>>>;
};

export type ModuleProxy<TModule extends ABIRoot> =
  ModuleFunctionClient<TModule> & {
    readonly moduleAbi: TModule;
    readonly composer: AptosScriptComposer;
  };

export function createModuleProxy<TModule extends ABIRoot>(args: {
  composer: AptosScriptComposer;
  moduleAbi: TModule;
  defaults?: {
    moduleBytecodes?: string[];
  };
}): ModuleProxy<TModule> {
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
    (func): func is PublicModuleFunction<TModule> => func.visibility === 'public'
  );
  const functionMap = new Map<
    PublicModuleFunctionName<TModule>,
    PublicModuleFunction<TModule>
  >(publicFunctions.map((func) => [func.name, func]));
  const defaultModuleBytecodes = defaults?.moduleBytecodes;

  const invokeFunction = async <TName extends PublicModuleFunctionName<TModule>>(
    functionName: TName,
    callArgs?: FunctionCallArgs<TModule, TName>,
  ): Promise<FunctionReturns<ModuleFunctionReturnTuple<TModule, TName>>> => {
    const functionAbi = functionMap.get(functionName) as
      | PublicModuleFunctionByName<TModule, TName>
      | undefined;
    if (!functionAbi) {
      throw new Error(
        `Function '${functionName}' does not exist on module '${moduleAddress}::${resolvedModuleName}'`
      );
    }

    const typeArguments =
      callArgs && 'typeArguments' in callArgs && callArgs.typeArguments
        ? callArgs.typeArguments
        : [];
    if (typeArguments.length !== functionAbi.generic_type_params.length) {
      throw new Error(
        `Type argument count mismatch for '${moduleAddress}::${resolvedModuleName}::${functionName}', expected ${functionAbi.generic_type_params.length}, received ${typeArguments.length}`
      );
    }
    const functionArguments =
      callArgs && 'functionArguments' in callArgs && callArgs.functionArguments
        ? callArgs.functionArguments
        : [];
    if (functionArguments.length !== functionAbi.params.length) {
      throw new Error(
        `Function argument count mismatch for '${moduleAddress}::${resolvedModuleName}::${functionName}', expected ${functionAbi.params.length}, received ${functionArguments.length}`
      );
    }
    const callResult = await composer.addBatchedCalls({
      function: `${moduleAddress}::${resolvedModuleName}::${functionName}`,
      typeArguments,
      functionArguments,
      moduleBytecodes: callArgs?.moduleBytecodes ?? defaultModuleBytecodes,
      options: callArgs?.allowFetch !== undefined
        ? { allowFetch: callArgs.allowFetch }
        : undefined
    });

    let normalizedResult: CallArgument[] | CallArgument | undefined;

    if (callResult.length === 0) {
      normalizedResult = undefined;
    } else if (callResult.length === 1) {
      [normalizedResult] = callResult;
    } else {
      normalizedResult = callResult;
    }

    return normalizedResult as FunctionReturns<ModuleFunctionReturnTuple<TModule, TName>>;
  };

  const target = {} as ModuleProxy<TModule>;

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

      const functionName = prop as PublicModuleFunctionName<TModule>;
      return (callArgs?: FunctionCallArgs<TModule, typeof functionName>) =>
        invokeFunction(functionName, callArgs);
    },
    set: () => false,
  });
}
