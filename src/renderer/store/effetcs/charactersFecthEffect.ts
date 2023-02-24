import { createAsyncThunk } from '@reduxjs/toolkit';
import ErrorApiType from '../../types/ErrorApiType';
import { CharacterType } from '../../types/CharacterType';
import { getCharacters } from '../../services/characterService';

export const fetchCharacters = createAsyncThunk<
  { info: CharacterType[] },
  undefined,
  { rejectValue: { error: string } }
>('characters/fetchCharacters', async (_: undefined, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  try {
    const info: CharacterType[] = await getCharacters();
    return fulfillWithValue({ info });
  } catch (error) {
    return rejectWithValue({
      error: (error as ErrorApiType).message,
    });
  }
});
