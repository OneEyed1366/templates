import { counterModuleState } from '~/store/counter/state';

export interface counterModuleGetters {
  doubleValue: (state: counterModuleState) => number,
}

export default {
  doubleValue (state) {
    return state.counter * 2
  }
} as counterModuleGetters
