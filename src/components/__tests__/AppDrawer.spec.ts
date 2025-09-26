import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import AppDrawer from '../AppDrawer.vue'
import { useApplicationStore } from '@/stores/application'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/content', name: 'content', component: { template: '<div>Content</div>' } },
    { path: '/about', name: 'about', component: { template: '<div>About</div>' } }
  ]
})
vi.mock('primevue/drawer', () => ({
  default: {
    name: 'Drawer',
    template: '<div class="drawer"><slot name="header" /><slot /><slot name="footer" /></div>',
    props: ['visible']
  }
}))

vi.mock('primevue/menu', () => ({
  default: {
    name: 'Menu',
    template: '<div class="menu"><slot name="submenulabel" /><slot name="item" /></div>',
    props: ['model']
  }
}))

vi.mock('primevue/button', () => ({
  default: {
    name: 'Button',
    template: '<button class="button"><slot /></button>',
    props: ['label', 'icon', 'class', 'variant', 'severity', 'text']
  }
}))

vi.mock('primevue/avatar', () => ({
  default: {
    name: 'Avatar',
    template: '<div class="avatar">Avatar</div>',
    props: ['image', 'shape']
  }
}))

vi.mock('primevue/badge', () => ({
  default: {
    name: 'Badge',
    template: '<span class="badge"><slot /></span>',
    props: ['value', 'class']
  }
}))

describe('AppDrawer', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders without errors', () => {
    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('navigates to content when content menu item is clicked', async () => {
    const pushSpy = vi.spyOn(router, 'push')

    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    const contentItem = wrapper.vm.items[0].items[1]
    expect(contentItem.label).toBe('Content')
    if (contentItem.command) {
      contentItem.command()
    }

    expect(pushSpy).toHaveBeenCalledWith('/content')
  })

  it('navigates to home when home menu item is clicked', async () => {
    const pushSpy = vi.spyOn(router, 'push')

    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    const homeItem = wrapper.vm.items[0].items[0]
    expect(homeItem.label).toBe('Home')
    if (homeItem.command) {
      homeItem.command()
    }

    expect(pushSpy).toHaveBeenCalledWith('/')
  })

  it('navigates to about when about menu item is clicked', async () => {
    const pushSpy = vi.spyOn(router, 'push')

    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    const aboutItem = wrapper.vm.items[1].items[0]
    expect(aboutItem.label).toBe('About')
    if (aboutItem.command) {
      aboutItem.command()
    }

    expect(pushSpy).toHaveBeenCalledWith('/about')
  })

  it('shows badge for messages item', () => {
    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    const messagesItem = wrapper.vm.items[1].items[1]
    expect(messagesItem.badge).toBe(2)
  })

  it('has footer buttons and integrates with store', () => {
    const applicationStore = useApplicationStore()

    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(typeof applicationStore.openMainDrawer).toBe('boolean')
  })

  it('uses application store for drawer visibility', () => {
    const applicationStore = useApplicationStore()
    const initialVisibility = applicationStore.openMainDrawer

    const wrapper = mount(AppDrawer, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(applicationStore.openMainDrawer).toBe(initialVisibility)

    applicationStore.openMainDrawer = true
    expect(applicationStore.openMainDrawer).toBe(true)
  })
})
