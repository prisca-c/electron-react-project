import { createSlice } from '@reduxjs/toolkit';
import { AnimeStateType, nullAnimeState } from 'renderer/types/AnimeStateType';
import {
  fetchAnimeFailureCase,
  fetchAnimeStartCase,
  fetchAnimeSuccessCase,
} from '../actions/fetchAnimeActions';
import fetchAnimeById from '../effetcs/animeFetchEffect';

const initialState: AnimeStateType = nullAnimeState;

export const animesSlice = createSlice({
  name: 'animes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeById.pending, fetchAnimeStartCase)
      .addCase(fetchAnimeById.fulfilled, fetchAnimeSuccessCase)
      .addCase(fetchAnimeById.rejected, fetchAnimeFailureCase);
  },
});

export const { reducer } = animesSlice;
