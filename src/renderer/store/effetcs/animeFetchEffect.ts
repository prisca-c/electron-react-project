import { createAsyncThunk } from '@reduxjs/toolkit';
import ErrorApiType from 'renderer/types/ErrorApiType';
import AnimeType from '../../types/AnimeType';
import { getAnimeById } from '../../services/animeServices';

const fetchAnimeById = createAsyncThunk<
  { info: AnimeType },
  { id: number },
  { rejectValue: { error: string } }
>('animes/fetchAnimeById', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  const { id } = params;
  try {
    const info = await getAnimeById(id);
    return fulfillWithValue({ info });
  } catch (error) {
    return rejectWithValue({
      error: (error as ErrorApiType).message,
    });
  }
});

export default fetchAnimeById;
