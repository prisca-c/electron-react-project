import StatusType from './StatusType';
import AnimeType, { nullAnimeType } from './AnimeType';

export type AnimeStateType = {
  status: StatusType;
  info: AnimeType;
  error: string;
};

export const nullAnimeState: AnimeStateType = {
  status: StatusType.start,
  info: nullAnimeType,
  error: '',
};
