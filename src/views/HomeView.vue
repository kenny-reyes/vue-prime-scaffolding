<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n({ useScope: 'global' })
  const stats = ref([
    { label: t('menu.users'), value: '1,234', icon: 'mdi mdi-account-multiple' },
    { label: 'Projects', value: '56', icon: 'mdi mdi-folder' },
    { label: 'Tasks', value: '789', icon: 'mdi mdi-check-circle' },
    { label: 'Revenue', value: '$12.4k', icon: 'mdi mdi-currency-usd' }
  ])

  const activities = ref([
    { title: 'New user registered', time: '5 minutes ago', icon: 'mdi mdi-account-plus' },
    { title: 'Project completed', time: '1 hour ago', icon: 'mdi mdi-check-circle' },
    { title: 'Task assigned', time: '2 hours ago', icon: 'mdi mdi-calendar-plus' },
    { title: 'System maintenance', time: '3 hours ago', icon: 'mdi mdi-wrench' }
  ])
</script>

<template>
  <div>
    <Card class="mb-4">
      <template #title>{{ t('welcome.title') }}</template>
      <template #content>
        <p>{{ t('welcome.subtitle') }}</p>
      </template>
    </Card>

    <div class="grid">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="col-12 md:col-6 xl:col-3"
      >
        <Card>
          <template #content>
            <div class="flex align-items-center justify-content-between">
              <div>
                <div class="text-2xl font-bold">{{ stat.value }}</div>
                <div class="text-color-secondary">{{ stat.label }}</div>
              </div>
              <i
                :class="stat.icon"
                class="text-3xl text-primary"
              ></i>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="grid mt-4">
      <div class="col-12 lg:col-8">
        <Card>
          <template #title>Recent Activity</template>
          <template #content>
            <div
              v-for="activity in activities"
              :key="activity.title"
              class="flex align-items-center gap-3 mb-3"
            >
              <i
                :class="activity.icon"
                class="text-primary text-xl"
              ></i>
              <div class="flex-1">
                <div class="font-semibold">{{ activity.title }}</div>
                <div class="text-sm text-color-secondary">{{ activity.time }}</div>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="col-12 lg:col-4">
        <Card>
          <template #title>Quick Actions</template>
          <template #content>
            <div class="flex flex-column gap-2">
              <Button
                label="Create Project"
                icon="mdi mdi-plus"
                class="w-full"
              />
              <Button
                label="Add User"
                icon="mdi mdi-account-plus"
                severity="success"
                class="w-full"
              />
              <Button
                label="View Reports"
                icon="mdi mdi-chart-line"
                severity="info"
                class="w-full"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
