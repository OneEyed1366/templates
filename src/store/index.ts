import reducers from './slices';
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      pokemonApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
