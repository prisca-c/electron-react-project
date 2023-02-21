import StatusType from './StatusType';
import AnimeType from './AnimeType';

export type AnimeState = {
  status: StatusType;
  info: AnimeType | Record<string, null>;
  error: string;
};
