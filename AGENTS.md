# AGENTS.md

## Cursor Cloud specific instructions

### Project layout

The application source lives in `/workspace/project_contents/` (not the repo root). All `pnpm` commands must be run from that directory.

### Quick reference

| Action | Command | Working directory |
|--------|---------|-------------------|
| Install deps | `pnpm install` | `project_contents/` |
| Dev server | `pnpm run dev` | `project_contents/` |
| Production build | `pnpm run build` | `project_contents/` |

### Key caveats

- **react / react-dom are peer dependencies** — pnpm auto-installs them alongside the other dependencies. No extra step needed.
- **pnpm build scripts**: `@tailwindcss/oxide` and `esbuild` require post-install build scripts. The `pnpm.onlyBuiltDependencies` field in `package.json` allowlists them. Without this, Tailwind CSS and Vite will fail at runtime.
- **No lock file is committed** — first install resolves from scratch; subsequent installs are fast thanks to the generated lockfile.
- **No lint or test framework** is configured in this project. There are no `lint` or `test` scripts in `package.json`.
- **No backend / database** — the app is a pure static React SPA. The only external dependency is a Google Apps Script endpoint for the contact form, which is optional and outside developer control.
- **Vite dev server** listens on port **5173** by default. Use `--host 0.0.0.0` to expose it on all interfaces.
