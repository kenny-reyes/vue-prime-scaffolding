<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  type MenuItem = {
    label: string
    icon?: string
    route?: string
    items?: MenuItem[]
  }

  const router = useRouter()
  const sidebarVisible = ref(false)

  const model: MenuItem[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' }
  ]

  const onSelect = (item: MenuItem) => {
    if (item.route) {
      router.push(item.route)
      sidebarVisible.value = false
    }
  }
</script>

<template>
  <div class="min-h-screen flex flex-column">
    <Toolbar class="surface-0 border-none shadow-1">
      <template #start>
        <Button
          icon="pi pi-bars"
          text
          rounded
          @click="sidebarVisible = true"
        />
      </template>
      <template #center>
        <span class="text-lg font-semibold">Main</span>
      </template>
    </Toolbar>

    <Drawer
      v-model:visible="sidebarVisible"
      position="left"
      :modal="true"
      :dismissable="true"
    >
      <div class="p-3">
        <ul class="list-none p-0 m-0">
          <li
            v-for="item in model"
            :key="item.label"
            class="py-2"
          >
            <Button
              :label="item.label"
              text
              class="w-full text-left"
              @click="onSelect(item)"
            />
          </li>
        </ul>
      </div>
    </Drawer>

    <div class="flex-1 p-3">
      <RouterView />
    </div>

    <footer class="surface-0 p-3 border-top-1 surface-border text-center">
      <small>© {{ new Date().getFullYear() }} My App</small>
    </footer>
  </div>
</template>

<style scoped>
  .text-left {
    text-align: left;
  }
</style>
