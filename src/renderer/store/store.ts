import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import animesReducer from './slices/animesSlice';
import { animeApi } from './slices/fetchApiSlice';

export const store = configureStore({
  reducer: {
    animes: animesReducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

setupListeners(store.dispatch);
