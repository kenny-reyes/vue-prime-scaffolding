import { loadFonts } from './webfontloader'
import vueI18n from './i18n'
import router from '@/router'
import { createPinia } from 'pinia'
import usePrimeVue from './primeVue'
import type { App } from 'vue'

export function registerPlugins(app: App): void {
  loadFonts()
  app.use(createPinia())
  app.use(router)
  app.use(vueI18n)
  app.use(usePrimeVue())
}
