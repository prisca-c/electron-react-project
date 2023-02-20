import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { Anime } from '../../types/Anime';

type AnimeState = {
  value: number;
};

const initialState: AnimeState[] = [];

export const animesSlice = createSlice({
  name: 'animes',
  initialState,
  reducers: {},
});

export const selectAnimes = (state: RootState) => {
  return state.animes;
};

export default animesSlice.reducer;
