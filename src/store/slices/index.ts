import counter from './counter';
import { pokemonApi } from '../services/pokemon';

export default {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  counter,
};
