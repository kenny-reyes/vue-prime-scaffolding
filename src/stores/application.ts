import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApplicationStore = defineStore('application', () => {
  const openMainDrawer = ref(false)

  return {
    openMainDrawer
  }
})
