import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import animesReducer from './animes/animesSlice';

export const store = configureStore({
  reducer: {
    animes: animesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
