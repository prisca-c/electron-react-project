import { reducer } from 'renderer/store/slices/animesSlice';
import fetchAnimeById from 'renderer/store/effetcs/animeFetchEffect';
import { nullAnimeState } from 'renderer/types/AnimeStateType';
import { nullAnimeType } from 'renderer/types/AnimeType';
import StatusType from 'renderer/types/StatusType';

describe('animesSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(nullAnimeState);
  });

  it('should handle fetchAnimeById.pending', () => {
    const action = fetchAnimeById.pending('1', { id: 1 });
    expect(reducer(nullAnimeState, action)).toEqual({
      ...nullAnimeState,
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

    expect(reducer(nullAnimeState, action)).toEqual({
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

    expect(reducer(nullAnimeState, action)).toEqual({
      ...nullAnimeState,
      status: StatusType.failure,
      error: 'error',
    });
  });
});
