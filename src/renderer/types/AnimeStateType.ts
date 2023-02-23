import StatusType from './StatusType';
import AnimeType from './AnimeType';
import { nullAnimeType } from './AnimeType';

export type AnimeStateType = {
  status: StatusType;
  info: AnimeType;
  error: string;
};

export const nullAnimeStateType: AnimeStateType = {
  status: StatusType.start,
  info: nullAnimeType,
  error: '',
};
