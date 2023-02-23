import { PayloadAction } from '@reduxjs/toolkit';
import AnimeType from 'renderer/types/AnimeType';
import { AnimeStateType } from 'renderer/types/AnimeStateType';
import StatusType from 'renderer/types/StatusType';

export const fetchAnimeStartCase = (state: AnimeStateType) => {
  console.log('CASE > PENDING');
  state.status = StatusType.loading; // we change status to `loading`
  state.error = ''; // and clear all the previous errors:
};

export const fetchAnimeSuccessCase = (
  state: AnimeStateType,
  action: PayloadAction<{ info: AnimeType }>
) => {
  const { info } = action.payload;
  console.log('CASE > FULFILLED', info);
  state.info = info; // We add all the new anime info into the state
  state.status = StatusType.success; // and change `status` to `success`:
};

export const fetchAnimeFailureCase = (
  state: AnimeStateType,
  action: PayloadAction<{ error: string } | undefined>
) => {
  console.log('CASE > FAILURE', action.payload);
  state.error = action.payload ? action.payload.error : 'error'; // We store error message
  state.status = StatusType.failure; // and change `status` to `failure` again.
};
