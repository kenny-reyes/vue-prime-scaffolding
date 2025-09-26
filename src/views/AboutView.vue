<script setup lang="ts">
  import { ref } from 'vue'

  const technologies = ref([
    { name: 'Vue 3', description: 'Progressive JavaScript framework', icon: 'mdi mdi-vuejs' },
    { name: 'PrimeVue', description: 'Rich UI component library', icon: 'mdi mdi-palette' },
    { name: 'TypeScript', description: 'Typed superset of JavaScript', icon: 'mdi mdi-language-typescript' },
    { name: 'Vite', description: 'Next generation frontend tooling', icon: 'mdi mdi-lightning-bolt' }
  ])

  const features = ref([
    { title: 'Responsive Design', icon: 'mdi mdi-responsive' },
    { title: 'Dark Mode', icon: 'mdi mdi-theme-light-dark' },
    { title: 'Templated Design', icon: 'mdi mdi-material-design' },
    { title: 'Accessibility', icon: 'mdi mdi-accessibility' }
  ])
</script>

<template>
  <div>
    <Card class="mb-4">
      <template #title>Technologies Used</template>
      <template #content>
        <div class="grid">
          <div
            v-for="tech in technologies"
            :key="tech.name"
            class="col-12 md:col-6"
          >
            <div class="flex align-items-center gap-3 p-3">
              <i
                :class="tech.icon"
                class="text-2xl text-primary"
              ></i>
              <div>
                <div class="font-semibold">{{ tech.name }}</div>
                <div class="text-sm text-color-secondary">{{ tech.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Key Features</template>
      <template #content>
        <div class="grid">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="col-12 md:col-6"
          >
            <div class="flex align-items-center gap-3 p-3">
              <i
                :class="feature.icon"
                class="text-2xl text-primary"
              ></i>
              <div class="font-semibold">{{ feature.title }}</div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
