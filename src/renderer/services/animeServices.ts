import type ErrorApiType from 'renderer/types/ErrorApiType';
import type { AxiosError } from 'axios';
import api from 'renderer/services/api';
import AnimeType from 'renderer/types/AnimeType';

export const getAnimeById = async (id: number): Promise<AnimeType> =>
  api
    .get(`/anime/${id}`)
    .then((res) => res.data.data)
    .catch((err) => {
      const error: AxiosError<ErrorApiType> = err;
      throw new Error(error.response?.data.message);
    });
