<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useApplicationStore } from '@/stores/application'
  import AppDrawer from '@/components/AppDrawer.vue'

  const applicationStore = useApplicationStore()
  const isDark = ref(false)

  const userMenuItems = ref([
    { label: 'Profile', icon: 'mdi mdi-account' },
    { label: 'Settings', icon: 'mdi mdi-cog' },
    { separator: true },
    { label: 'Logout', icon: 'mdi mdi-logout' }
  ])

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('app-dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('app-dark')
    }
  })
</script>

<template>
  <div class="min-h-screen surface-ground flex">
    <AppDrawer />

    <div class="flex-1 flex flex-column">
      <Toolbar class="border-none shadow-2">
        <template #start>
          <div class="flex align-items-center gap-2">
            <Button
              icon="mdi mdi-menu"
              text
              @click="applicationStore.$state.openMainDrawer = !applicationStore.$state.openMainDrawer"
            />
            <span class="text-xl font-semibold">Vue Prime Demo</span>
          </div>
        </template>
        <template #end>
          <div class="flex align-items-center gap-2">
            <Button
              :icon="isDark ? 'mdi mdi-white-balance-sunny' : 'mdi mdi-moon-waning-crescent'"
              text
              @click="toggleTheme"
            />
            <Button
              icon="mdi mdi-bell"
              text
            >
              <Badge
                value="3"
                severity="danger"
              />
            </Button>
            <Menu
              ref="userMenu"
              :model="userMenuItems"
              popup
            />
            <Button
              @click="($refs.userMenu as any).toggle($event)"
              text
            >
              <Avatar icon="mdi mdi-account" />
            </Button>
          </div>
        </template>
      </Toolbar>

      <div class="flex-1 p-4">
        <router-view />
      </div>

      <div class="surface-section border-top-1 surface-border p-3">
        <div class="flex align-items-center justify-content-between">
          <Chip
            label="Vue Prime Demo"
            icon="mdi mdi-vuejs"
          />
          <div class="flex gap-2">
            <a
              href="https://github.com/kenny-reyes/vue-prime-scaffolding"
              target="_blank"
              rel="noopener noreferrer"
              class="p-button p-button-text p-button-sm"
            >
              <i class="mdi mdi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .min-h-screen {
    min-height: 100vh;
  }
</style>
