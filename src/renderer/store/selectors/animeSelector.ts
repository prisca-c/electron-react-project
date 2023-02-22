import { RootState } from '../store';
import AnimeType from '../../types/Anime';
import StatusType from '../../types/Status';
import { AnimeState } from '../../types/AnimeState';

const selectAnimes = (state: RootState): AnimeState => state.animes;

const selectAnimesStatus = (state: RootState): StatusType =>
  state.animes.status;

const selectAnimesError = (state: RootState): string => state.animes.error;

const selectAnimesInfo = (state: RootState): AnimeType | null =>
  state.animes.info;

export {
  selectAnimes,
  selectAnimesStatus,
  selectAnimesError,
  selectAnimesInfo,
};
