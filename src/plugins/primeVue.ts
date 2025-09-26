import type { Plugin } from 'vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import DataView from 'primevue/dataview'
import Toolbar from 'primevue/toolbar'
import Drawer from 'primevue/drawer'
import PanelMenu from 'primevue/panelmenu'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Chip from 'primevue/chip'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import StyleClass from 'primevue/styleclass'

const usePrimeVue = (): Plugin => ({
  install(app) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura, // you can change the theme here f.e. Material
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primevue',
            order: 'primevue'
          }
        }
      }
    })

    app.directive('ripple', Ripple)
    app.directive('tooltip', Tooltip)
    app.directive('styleclass', StyleClass)

    app.component('Button', Button)
    app.component('Card', Card)
    app.component('Panel', Panel)
    app.component('DataView', DataView)
    app.component('Toolbar', Toolbar)
    app.component('Drawer', Drawer)
    app.component('PanelMenu', PanelMenu)
    app.component('Avatar', Avatar)
    app.component('Badge', Badge)
    app.component('Menu', Menu)
    app.component('Menubar', Menubar)
    app.component('Divider', Divider)
    app.component('Tag', Tag)
    app.component('ProgressBar', ProgressBar)
    app.component('Chip', Chip)
  }
})

export default usePrimeVue
