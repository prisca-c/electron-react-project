import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { animesSlice } from './slices/animesSlice';
import { animeApi } from './slices/fetchApiSlice';
import { watchListSlice } from './slices/watchListSlice';
import { charactersSlice } from './slices/characterSlice';

export const store = configureStore({
  reducer: {
    animes: animesSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
    watchList: watchListSlice.reducer,
    characters: charactersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
