import { PayloadAction } from '@reduxjs/toolkit';
import AnimeType from 'renderer/types/Anime';
import { AnimeState } from 'renderer/types/AnimeState';
import Status from 'renderer/types/Status';

export const fetchAnimeStartCase = (state: AnimeState) => {
  console.log('CASE > PENDING');
  state.status = Status.loading; // we change status to `loading`
  state.error = ''; // and clear all the previous errors:
};

export const fetchAnimeSuccessCase = (
  state: AnimeState,
  action: PayloadAction<{ info: AnimeType }>
) => {
  const { info } = action.payload;
  console.log('CASE > FULFILLED', info);
  state.info = info; // We add all the new anime info into the state
  state.status = Status.success; // and change `status` to `success`:
};

export const fetchAnimeFailureCase = (
  state: AnimeState,
  action: PayloadAction<{ error: string } | undefined>
) => {
  console.log('CASE > FAILURE', action.payload);
  state.error = action.payload ? action.payload.error : 'error'; // We store error message
  state.status = Status.failure; // and change `status` to `failure` again.
};
