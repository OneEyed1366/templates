import { acceptHMRUpdate, defineStore, DefineStoreOptions } from 'pinia';

interface counterStoreState {
  value: number,
}

interface counterStoreActions {
  increment: (payload?: number) => void,
  decrement: (payload?: number) => void,
}

export const useCounter = defineStore('counter', {
  state: (): counterStoreState => ({
    value: 0,
  }),
  actions: {
    increment(payload = 1) {
      this.value += payload;
    },
    decrement(payload = 1) {
      this.value -= payload;
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
