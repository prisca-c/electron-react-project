import { createAsyncThunk } from '@reduxjs/toolkit';
import ErrorApi from 'renderer/types/ErrorApi';
import Anime from '../../types/Anime';
import { getAnimeById } from '../../services/animeServices';

const fetchAnimeById = createAsyncThunk<
  { info: Anime },
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
      error: (error as ErrorApi).message,
    });
  }
});

export default fetchAnimeById;
