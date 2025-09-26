import type { Plugin } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import Drawer from 'primevue/drawer'
import PanelMenu from 'primevue/panelmenu'

const usePrimeVue = (): Plugin => ({
  install(app) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura
      }
    })

    // Global components commonly used in layout
    app.component('Button', Button)
    app.component('Toolbar', Toolbar)
    app.component('Drawer', Drawer)
    app.component('PanelMenu', PanelMenu)
  }
})

export default usePrimeVue
