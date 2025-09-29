<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useApplicationStore } from '@/stores/application'
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const router = useRouter()
  const applicationStore = useApplicationStore()
  const { t } = useI18n({ useScope: 'global' })

  const items = computed(() => [
    {
      label: 'Documents',
      items: [
        {
          label: t('menu.home'),
          icon: 'pi pi-home',
          command: () => router.push('/')
        },
        {
          label: t('menu.content'),
          icon: 'pi pi-book', // prime icons
          command: () => router.push('/content')
        }
      ]
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'About',
          icon: 'mdi mdi-information', // mdi icons (material design, has much more icons)
          command: () => router.push('/about')
        },
        {
          label: 'Messages',
          icon: 'pi pi-inbox',
          badge: 2
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out'
        }
      ]
    }
  ])
</script>
<template>
  <Drawer v-model:visible="applicationStore.$state.openMainDrawer">
    <template #header>
      <div class="flex items-center gap-2">
        <Avatar
          image="https://avatars.githubusercontent.com/u/11137579?s=40&v=4"
          shape="circle"
        />
        <span class="font-bold">Kenny Reyes</span>
      </div>
    </template>

    <Menu
      :model="items"
      class="w-full md:w-60"
    >
      <template #submenulabel="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
      </template>
      <template #item="{ item, props }">
        <a
          v-ripple
          class="flex items-center"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            class="ml-auto"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
        </a>
      </template>
    </Menu>
    <template #footer>
      <div class="flex items-center gap-2">
        <Button
          label="Account"
          icon="pi pi-user"
          class="flex-auto"
          variant="outlined"
        ></Button>
        <Button
          label="Logout"
          icon="pi pi-sign-out"
          class="flex-auto"
          severity="danger"
          text
        ></Button>
      </div>
    </template>
  </Drawer>
</template>
