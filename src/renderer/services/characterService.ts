import type { AxiosError } from 'axios';
import api from './api';
import type ErrorApiType from '../types/ErrorApiType';
import { CharacterType } from '../types/CharacterType';

export const getCharacters = async (): Promise<CharacterType[]> => {
  return api
    .get('/top/characters')
    .then((res) => res.data.data)
    .catch((err) => {
      const error: AxiosError<ErrorApiType> = err;
      throw new Error(error.response?.data.message);
    });
};
