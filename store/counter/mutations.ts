import { counterModuleState } from '~/store/counter/state';

export interface counterModuleMutations {
  increment: (state: counterModuleState, payload?: number) => void,
  decrement: (state: counterModuleState, payload?: number) => void,
}

export default {
  increment (state, payload = 1) {
    state.counter += payload
  },
  decrement (state, payload = 1) {
    state.counter -= payload
  }
} as counterModuleMutations
