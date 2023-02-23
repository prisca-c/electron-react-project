import StatusType from './StatusType';
import AnimeType from './AnimeType';

export type AnimeStateType = {
  status: StatusType;
  info: AnimeType | null;
  error: string;
};
