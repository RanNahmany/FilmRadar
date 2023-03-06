import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TMDBApi } from '../services/TMDB';

export const store = configureStore({
  reducer: {
    [TMDBApi.reducerPath]: TMDBApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TMDBApi.middleware),
});

setupListeners(store.dispatch);
