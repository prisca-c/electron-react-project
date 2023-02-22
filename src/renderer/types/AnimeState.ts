import StatusType from './Status';
import Anime from './Anime';

export type AnimeState = {
  status: StatusType;
  info: Anime | null;
  error: string;
};
