import { reducer } from 'renderer/store/slices/animesSlice';
import fetchAnimeById from 'renderer/store/effetcs/animeFetchEffect';
import { nullAnimeStateType } from 'renderer/types/AnimeStateType';
import { nullAnimeType } from 'renderer/types/AnimeType';
import StatusType from 'renderer/types/StatusType';
import { getAnimeById } from '../animeServices';

describe('animesSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(nullAnimeStateType);
  });

  const payload = getAnimeById(1);

  it('should handle fetchAnimeById.pending', () => {
    const action = fetchAnimeById.pending('1', { id: 1 });
    expect(reducer(nullAnimeStateType, action)).toEqual({
      ...nullAnimeStateType,
      status: StatusType.loading,
    });
  });

  it('should handle fetchAnimeById.fulfilled', () => {
    const action = fetchAnimeById.fulfilled(
      {
        info: nullAnimeType,
      },
      '1',
      {
        id: 1,
      }
    );

    expect(reducer(nullAnimeStateType, action)).toEqual({
      error: '',
      status: StatusType.success,
      info: nullAnimeType,
    });
  });

  it('should handle fetchAnimeById.rejected', () => {
    const action = fetchAnimeById.rejected(
      { name: '', message: 'error', stack: '' },
      '2',
      { id: 2 }
    );

    expect(reducer(nullAnimeStateType, action)).toEqual({
      ...nullAnimeStateType,
      status: StatusType.failure,
      error: 'error',
    });
  });
});
