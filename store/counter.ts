import { defineStore } from 'pinia';

interface counterState {
  value: number,
}

export const useCounter = defineStore('counter', {
  state: (): counterState => ({
    value: 0
  }),
  actions: {
    increment (payload = 1): void {
      this.value += payload
    },
    decrement (payload = 1): void {
      this.value -= payload
    }
  }
})
