import { createSlice } from '@reduxjs/toolkit';
import { AnimeStateType } from 'renderer/types/AnimeStateType';
import StatusType from '../../types/StatusType';
import {
  fetchAnimeFailureCase,
  fetchAnimeStartCase,
  fetchAnimeSuccessCase,
} from '../actions/fetchAnimeActions';
import fetchAnimeById from '../effetcs/animeFetchEffect';

const initialState: AnimeStateType = {
  status: StatusType.start,
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
