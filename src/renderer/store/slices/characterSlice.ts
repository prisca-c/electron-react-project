import { createSlice } from '@reduxjs/toolkit';
import {
  CharacterStateType,
  nullCharacterState,
} from 'renderer/types/CharacterStateType';
import {
  fetchCharacterFailureCase,
  fetchCharacterStartCase,
  fetchCharacterSuccessCase,
} from '../actions/fetchCharacterActions';
import { fetchCharacters } from '../effetcs/charactersFecthEffect';

const initialState: CharacterStateType = nullCharacterState;

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, fetchCharacterStartCase)
      .addCase(fetchCharacters.fulfilled, fetchCharacterSuccessCase)
      .addCase(fetchCharacters.rejected, fetchCharacterFailureCase);
  },
});

export const { reducer } = charactersSlice;
