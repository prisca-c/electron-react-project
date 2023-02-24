import { PayloadAction } from '@reduxjs/toolkit';
import { CharacterType } from '../../types/CharacterType';
import { CharacterStateType } from '../../types/CharacterStateType';
import StatusType from '../../types/StatusType';

export const fetchCharacterStartCase = (state: CharacterStateType) => {
  console.log('CASE > PENDING');
  state.status = StatusType.loading; // we change status to `loading`
  state.error = ''; // and clear all the previous errors:
};

export const fetchCharacterSuccessCase = (
  state: CharacterStateType,
  action: PayloadAction<{ info: CharacterType[] }>
) => {
  const { info } = action.payload;
  console.log('CASE > FULFILLED', info);
  state.info = info; // We add all the new anime info into the state
  state.status = StatusType.success; // and change `status` to `success`:
};

export const fetchCharacterFailureCase = (
  state: CharacterStateType,
  action: PayloadAction<{ error: string } | undefined>
) => {
  console.log('CASE > FAILURE', action.payload);
  state.error = action.payload ? action.payload.error : 'error'; // We store error message
  state.status = StatusType.failure; // and change `status` to `failure` again.
};
