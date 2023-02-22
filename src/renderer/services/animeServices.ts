import type ErrorApi from 'renderer/types/ErrorApi';
import type { AxiosError } from 'axios';
import api from 'renderer/services/api';
import Anime from 'renderer/types/Anime';

export const getAnimeById = async (id: number): Promise<Anime> =>
  api
    .get(`/anime/${id}`)
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      const error: AxiosError<ErrorApi> = err;
      throw new Error(error.response?.data.message);
    });
