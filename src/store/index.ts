import { createStore } from 'vuex';
import modules from './modules';

const store = createStore({
  modules
});

export type rootStateType = typeof store.state;

export default store;
