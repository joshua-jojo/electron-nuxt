import { defineStore } from 'pinia'

export const store = defineStore({
  id: 'store',

  state: () => ({
    value: 1
  }),

  getters: {
    valueWithName: state => `Value is ${state.value}`
  },

  actions: {
    setNewValue(newValue: number) {
      this.value = newValue
    }
  }
})