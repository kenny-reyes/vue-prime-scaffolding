# vue-prime-scaffolding

Starter template for Vue 3 + Vite, integrated with PrimeVue and managed with pnpm.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur).

## Type Support for `.vue` in TypeScript

TypeScript does not understand `.vue` files by default, so we use `vue-tsc` for type checking. In the editor, Volar enables `.vue` type support.

## Customize configuration

See the [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
pnpm exec playwright install

# When testing on CI, build the project first
pnpm run build

# Run all end-to-end tests
pnpm run test:e2e
# Run only on Chromium
pnpm run test:e2e -- --project=chromium
# Run a specific file
pnpm run test:e2e -- tests/example.spec.ts
# Debug mode
pnpm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```

## UI with PrimeVue

This project already includes `primevue` and `@primeuix/themes` in `package.json`.

### Install (if starting from scratch)

```sh
pnpm add primevue @primeuix/themes
```

### Basic setup

In your entry file (e.g., `src/main.ts`) configure PrimeVue and a theme. Example using the Aura theme:
I don't know but possibly the company will provide the theme like the commented line

```ts
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
// import CustomPreset from '@companyName/themes/customPreset'
const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    // preset: CustomPreset
    preset: Aura
  }
})

app.mount('#app')
```

To use components (e.g., `Button`):

```ts
import Button from 'primevue/button'

app.component('Button', Button)
```

See the official docs for more details and available components: `https://primevue.org/`.

## Other features

### Prettier

Opinionated code formatter that enforces a consistent style across JavaScript/TypeScript and Vue SFCs. Use the provided script to auto-format files and keep diffs small and readable in reviews.

### CSpell

Source code spell checker to catch typos in identifiers, strings, comments, and docs. It reduces noisy diffs and improves readability; customize dictionaries in `cspell.json`.

### I18n

Application internationalization powered by `vue-i18n`, with messages and date/time formats per locale. The default language is driven by the `VITE_DEFAULT_LANGUAGE` environment variable.

### Stylelint

Lints styles inside `.vue` SFCs and standalone CSS using the recommended Vue config. It helps prevent invalid CSS and enforces consistent conventions across the codebase.

### webfontloader

Asynchronously loads web fonts to avoid render-blocking and reduce layout shifts. Fonts are preloaded at startup, improving perceived performance and visual stability.
