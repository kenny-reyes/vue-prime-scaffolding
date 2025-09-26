import type { Plugin } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

const usePrimeVue = (): Plugin => ({
  install(app) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura
      }
    })
  }
})

export default usePrimeVue
