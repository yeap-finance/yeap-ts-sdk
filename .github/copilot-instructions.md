This file provides focused guidance for AI coding agents working in the `sdk/yeap-ts-sdk` package.

Key goals

- Help contributors generate small, correct edits (TS types, entity transforms, GraphQL fragments).
- Preserve project conventions: deterministic ordering, GraphQL-first types, and Move/Aptos address handling.

Quick architecture overview

- Purpose: a TypeScript SDK that wraps GraphQL indexer data and on-chain view calls (see `src/api/*`, `src/internal/*`).
- Two main data flows:
  - Indexer -> GraphQL types -> generated `src/types/generated/*` -> entity wrappers in `src/api/entities/*`.
  - On-chain calls via Aptos `ts-sdk` from `YeapConfig`/`src/api/*` using `InputViewFunctionData`.
- Canonical files:
  - GraphQL fragments: `src/internal/queries/fragments/*.graphql` (source of truth for codegen)
  - Codegen artifacts: `src/types/generated/*` (do not hand-edit)
  - Entity wrappers & transforms: `src/api/entities/*.ts`, `src/api/transforms.ts`

Developer workflows & commands

- Generate/update GraphQL types: update fragments in `src/internal/queries/fragments/` and run the project's codegen (see `package.json` scripts). Prefer editing fragments over generated code.
- Build + typecheck: run `npm ci` then `npm run build` from `sdk/yeap-ts-sdk`.
- Run examples: `npm run example` or execute TS examples in `examples/` after building.

Project-specific conventions

- Addresses use Aptos `AccountAddress` in SDK interfaces; GraphQL `String` addresses must be converted via `AccountAddress.from(...)` in entity getters.
- Use BTreeMap / deterministic ordering patterns in configs (follow existing code in `src/api/*`).
- Keep GraphQL fragments and generated types in sync. If you change a fragment, update codegen and then update entity transforms to match new field names.
- Numeric DB types (Postgres numeric/u64/u128) appear as `string` in generated types; keep those as strings in interfaces where precision matters.

Testing & quality gates

- Run `npm run build` and `npm run lint` in the package before opening PRs.
- Unit tests are light; rely on example scripts under `examples/` for integration smoke tests.

Files to check when editing behavior

- `src/internal/queries/fragments/*` — fragment field names map directly to generated `src/types/generated/*` types.
- `src/api/entities/*` — map GraphQL fields -> SDK interfaces. Convert addresses and numeric strings here.
- `src/api/interfaces.ts` — canonical SDK interfaces; update these when shape/precision requirements change.
- `src/types/codegen.yaml` and `src/types/generated/*` — codegen config and outputs.

Common edits examples

- When fragment renames `base_asset` -> `base`, update:
  - fragment file
  - run codegen
  - update `src/api/entities/*` to map the new field name and convert types
- When database numeric fields are u64/u128, keep types as `string` in interfaces and parse only when needed.

Safety notes for AI agents

- Never edit generated files in `src/types/generated/*` directly; change the fragment then re-run codegen.
- Preserve exported API shapes in `src/api/interfaces.ts` and `src/api/entities/*` unless changing a public SDK contract—note such changes in PR description.
- Use `AccountAddress.from(...)` for address conversions and preserve `deleted`/optional fields as nullable values.

If anything is unclear, ask for the specific fragment name and target SDK file to change; provide a small, single-file patch and a short rationale.
