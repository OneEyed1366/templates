import { ActionContext, Module, MutationTree } from 'vuex';
import { rootStateType } from '@/store';

interface counterModuleStateInterface {
  value: number,
}

export enum counterModuleMutationEnum {
  increment = 'COUNTER_INCREMENT',
  decrement = 'COUNTER_DECREMENT',
}

interface counterModuleMutationsInterface<S = counterModuleStateInterface> {
  [counterModuleMutationEnum.increment]: (state: S, payload?: number) => void,
  [counterModuleMutationEnum.decrement]: (state: S, payload?: number) => void,
}

export enum counterModuleActionsEnum {
  GET_COUNTER_VALUE = 'COUNTER_GET_VALUE',
}

interface counterModuleActionsInterface {
  [counterModuleActionsEnum.GET_COUNTER_VALUE]: (ctx: ActionContext<counterModuleStateInterface, rootStateType>) => number,
}

export default {
  state: (): counterModuleStateInterface => ({
    value: 0
  }),
  mutations: {
    [counterModuleMutationEnum.increment]: (state, payload = 1) => {
      state.value += payload;
    },
    [counterModuleMutationEnum.decrement]: (state, payload = 1) => {
      state.value -= payload;
    },
  } as MutationTree<counterModuleStateInterface> & counterModuleMutationsInterface,
  actions: {
    async [counterModuleActionsEnum.GET_COUNTER_VALUE] ({ state }) {
      return state.value;
    }
  } as counterModuleActionsInterface
} as Module<counterModuleStateInterface, rootStateType>
