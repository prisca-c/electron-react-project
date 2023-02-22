import { createSlice } from '@reduxjs/toolkit';
import { AnimeState } from 'renderer/types/AnimeState';
import Status from '../../types/Status';
import {
  fetchAnimeFailureCase,
  fetchAnimeStartCase,
  fetchAnimeSuccessCase,
} from '../actions/fetchAnimeActions';
import fetchAnimeById from '../effetcs/animeFetchEffect';

const initialState: AnimeState = {
  status: Status.start,
  info: null,
  error: '',
};

export const animesSlice = createSlice({
  name: 'animes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimeById.pending, fetchAnimeStartCase);
    builder.addCase(fetchAnimeById.fulfilled, fetchAnimeSuccessCase);
    builder.addCase(fetchAnimeById.rejected, fetchAnimeFailureCase);
  },
});

export const { reducer } = animesSlice;