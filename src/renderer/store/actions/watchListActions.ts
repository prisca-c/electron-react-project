import type { PayloadAction } from '@reduxjs/toolkit';
import type { WatchListState } from '../slices/watchListSlice';
import AnimeType from '../../types/AnimeType';

const addAnime = (
  state: WatchListState,
  action: PayloadAction<{ anime: AnimeType }>
) => {
  const { anime } = action.payload;
  state.watchList.push(anime);
  state.count += 1;
};

const removeAnime = (
  state: WatchListState,
  action: PayloadAction<{ id: number }>
) => {
  const { id } = action.payload;
  state.watchList = state.watchList.filter((anime) => anime.mal_id !== id);
  state.count -= 1;
};

export { addAnime, removeAnime };
