import { EntryFunctionArgumentTypes, SimpleEntryFunctionArgumentTypes, TypeArgument } from "@aptos-labs/ts-sdk";
import type { AptosScriptComposer } from "@aptos-labs/script-composer-sdk";
import type { CallArgument } from "@aptos-labs/script-composer-pack";
import { ABIRoot } from "./abi";

/**
 * A type representing the possible argument types for module function calls.
 * @typedef {EntryFunctionArgumentTypes | CallArgument | SimpleEntryFunctionArgumentTypes} FunctionArgument
 * @property {EntryFunctionArgumentTypes} EntryFunctionArgumentTypes - Argument types for entry functions.
 * @property {CallArgument} CallArgument - Argument types for call functions.
 * @property {SimpleEntryFunctionArgumentTypes} SimpleEntryFunctionArgumentTypes - Argument types for simple entry functions.
 * @returns {FunctionArgument} The combined argument type for module function calls.
 */
export type FunctionArgument = EntryFunctionArgumentTypes | CallArgument | SimpleEntryFunctionArgumentTypes;

type ModuleFunctions<T extends ABIRoot> = NonNullable<T["exposed_functions"]>;
type ModuleFunction<T extends ABIRoot> = ModuleFunctions<T>[number];
type PublicModuleFunction<T extends ABIRoot> = Extract<ModuleFunction<T>, { visibility: "public" }>;
type PublicModuleFunctionName<T extends ABIRoot> = PublicModuleFunction<T>["name"];
type PublicModuleFunctionByName<TModule extends ABIRoot, TName extends PublicModuleFunctionName<TModule>> = Extract<
  PublicModuleFunction<TModule>,
  { name: TName }
>;

type ModuleFunctionReturnTuple<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>,
> = PublicModuleFunctionByName<TModule, TName>["return"];

type ModuleFunctionArgsTuple<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>,
> = PublicModuleFunctionByName<TModule, TName>["params"];
type ModuleFunctionGenericTypeParamsTuple<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>,
> = PublicModuleFunctionByName<TModule, TName>["generic_type_params"];

type TupleOfLength<TElements extends readonly unknown[], TValue> = TElements extends readonly [
  unknown,
  ...infer TRest extends readonly unknown[],
]
  ? [TValue, ...TupleOfLength<TRest, TValue>]
  : [];

/**
 * A type representing the return type of a module function based on its return tuple.
 * @template TReturns - The tuple of return types for the module function.
 * @returns The return type of the module function, which can be undefined, a single value, or a tuple of values.
 */
export type FunctionReturns<TReturns extends readonly string[]> = TReturns["length"] extends 0
  ? undefined
  : TReturns["length"] extends 1
    ? TupleOfLength<TReturns, CallArgument>[0]
    : TupleOfLength<TReturns, CallArgument>;
/**
 * A type representing the function arguments for a module function based on its parameter tuple.
 * @template TParams - The tuple of parameter types for the module function.
 * @returns An object containing the function arguments for the module function.
 */
export type FunctionArguments<TParams extends readonly string[]> = TParams extends readonly []
  ? {}
  : { functionArguments: TupleOfLength<TParams, FunctionArgument> };

/**
 * A type representing the generic type arguments for a module function based on its generic type parameter tuple.
 * @template TParams - The tuple of generic type parameters for the module function.
 * @returns An object containing the generic type arguments for the module function.
 */
export type FunctionGenericTypeArguments<TParams extends readonly unknown[]> = TParams extends readonly []
  ? {}
  : { typeArguments: TupleOfLength<TParams, TypeArgument> };

/**
 * An interface representing extra options for module function calls.
 * @property {string[]} [moduleBytecodes] - An optional array of module bytecodes to include in the function call.
 * @property {boolean} [allowFetch] - An optional flag indicating whether to allow fetching data during the function call.
 */
export interface ExtraCallOptions {
  moduleBytecodes?: string[];
  allowFetch?: boolean;
}
/**
 * A type representing the combined arguments for invoking a module function,
 * including generic type arguments, function arguments, and extra call options.
 *
 * @template TModule - The type of the module ABI.
 * @template TName - The name of the public module function.
 * @returns An object containing the combined arguments for the function call.
 */
export type FunctionCallArgs<
  TModule extends ABIRoot,
  TName extends PublicModuleFunctionName<TModule>,
> = FunctionGenericTypeArguments<ModuleFunctionGenericTypeParamsTuple<TModule, TName>> &
  FunctionArguments<ModuleFunctionArgsTuple<TModule, TName>> &
  ExtraCallOptions;

/**
 * A type representing a client for invoking public functions defined in a module ABI.
 * @template TModule - The type of the module ABI.
 * @returns A mapping of public function names to callable functions.
 */
export type ModuleFunctionClient<TModule extends ABIRoot> = {
  [TName in PublicModuleFunctionName<TModule>]: (
    args?: FunctionCallArgs<TModule, TName>,
  ) => Promise<FunctionReturns<ModuleFunctionReturnTuple<TModule, TName>>>;
};

/**
 * A proxy type that combines the module function client with additional properties.
 * @template TModule - The type of the module ABI.
 * @returns An object that includes the module function client, module ABI, and composer instance.
 */
export type ModuleProxy<TModule extends ABIRoot> = ModuleFunctionClient<TModule> & {
  readonly moduleAbi: TModule;
  readonly composer: AptosScriptComposer;
};

/**
 * Creates a module proxy that allows invoking public functions defined in the module ABI.
 *
 * @param args - The arguments for creating the module proxy.
 * @param args.composer - The AptosScriptComposer instance to use for composing and sending transactions.
 * @param args.moduleAbi - The ABI of the module to create the proxy for.
 * @param args.address - (Optional) The address of the module. If not provided, the address from the module ABI will be used.
 * @param args.defaults - (Optional) Default options for function calls.
 * @param args.defaults.moduleBytecodes - (Optional) Default module bytecodes to include in function calls.
 * @returns A proxy object that exposes the public functions of the module.
 * @throws Will throw an error if the module ABI is missing required fields or if function calls have mismatched arguments.
 */
export function createModuleProxy<TModule extends ABIRoot>(args: {
  composer: AptosScriptComposer;
  moduleAbi: TModule;
  address?: string;
  defaults?: {
    moduleBytecodes?: string[];
  };
}): ModuleProxy<TModule> {
  const { composer, moduleAbi, defaults, address } = args;

  if (!moduleAbi.address) {
    throw new Error("moduleAbi.address is required to create a module client");
  }

  if (!moduleAbi.name) {
    throw new Error("moduleAbi.name is required to create a module client");
  }

  const moduleAddress = address ?? moduleAbi.address;

  const resolvedModuleName = moduleAbi.name;
  const exposedFunctions = moduleAbi.exposed_functions ?? [];

  const publicFunctions = exposedFunctions.filter(
    (func): func is PublicModuleFunction<TModule> => func.visibility === "public",
  );
  const functionMap = new Map<PublicModuleFunctionName<TModule>, PublicModuleFunction<TModule>>(
    publicFunctions.map((func) => [func.name, func]),
  );
  const defaultModuleBytecodes = defaults?.moduleBytecodes;

  const invokeFunction = async <TName extends PublicModuleFunctionName<TModule>>(
    functionName: TName,
    callArgs?: FunctionCallArgs<TModule, TName>,
  ): Promise<FunctionReturns<ModuleFunctionReturnTuple<TModule, TName>>> => {
    const functionAbi = functionMap.get(functionName) as PublicModuleFunctionByName<TModule, TName> | undefined;
    if (!functionAbi) {
      throw new Error(`Function '${functionName}' does not exist on module '${moduleAddress}::${resolvedModuleName}'`);
    }

    const typeArguments =
      callArgs && "typeArguments" in callArgs && callArgs.typeArguments ? callArgs.typeArguments : [];
    if (typeArguments.length !== functionAbi.generic_type_params.length) {
      throw new Error(
        `Type argument count mismatch for '${moduleAddress}::${resolvedModuleName}::${functionName}', expected ${functionAbi.generic_type_params.length}, received ${typeArguments.length}`,
      );
    }
    const functionArguments =
      callArgs && "functionArguments" in callArgs && callArgs.functionArguments ? callArgs.functionArguments : [];
    if (functionArguments.length !== functionAbi.params.length) {
      throw new Error(
        `Function argument count mismatch for '${moduleAddress}::${resolvedModuleName}::${functionName}', expected ${functionAbi.params.length}, received ${functionArguments.length}`,
      );
    }
    const callResult = await composer.addBatchedCalls({
      function: `${moduleAddress}::${resolvedModuleName}::${functionName}`,
      typeArguments,
      functionArguments,
      moduleBytecodes: callArgs?.moduleBytecodes ?? defaultModuleBytecodes,
      options: callArgs?.allowFetch !== undefined ? { allowFetch: callArgs.allowFetch } : undefined,
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
      value: {
        ...moduleAbi,
        address: moduleAddress,
      },
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
      if (prop === "moduleAbi") {
        return moduleAbi;
      }

      if (prop === "composer") {
        return composer;
      }

      if (typeof prop !== "string") {
        return undefined;
      }

      if (!functionMap.has(prop)) {
        return undefined;
      }

      const functionName = prop as PublicModuleFunctionName<TModule>;
      return (callArgs?: FunctionCallArgs<TModule, typeof functionName>) => invokeFunction(functionName, callArgs);
    },
    set: () => false,
  });
}
