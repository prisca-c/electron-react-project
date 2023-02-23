import { createSlice } from '@reduxjs/toolkit';
import AnimeType from '../../types/AnimeType';
import { addAnime, removeAnime } from '../actions/watchListActions';

export type WatchListState = {
  count: number;
  watchList: AnimeType[];
};

const initialState: WatchListState = {
  count: 0,
  watchList: [],
};

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addAnime,
    removeAnime,
  },
});

export const watchListAction = watchListSlice.actions;

export default watchListSlice.reducer;
