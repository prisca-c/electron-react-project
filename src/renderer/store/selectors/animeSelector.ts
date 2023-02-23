import { RootState } from '../store';
import AnimeType from '../../types/AnimeType';
import StatusType from '../../types/StatusType';
import { AnimeStateType } from '../../types/AnimeStateType';

const selectAnimes = (state: RootState): AnimeStateType => state.animes;

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
