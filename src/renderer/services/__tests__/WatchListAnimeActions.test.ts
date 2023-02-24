import { addAnime, removeAnime } from '../../store/actions/watchListActions';
import { nullAnimeType } from '../../types/AnimeType';

describe('WatchList Actions', () => {
  it('should add an anime to the watchList', () => {
    const state = {
      watchList: [],
      count: 0,
    };
    const action = {
      payload: {
        anime: nullAnimeType,
      },
      type: 'test',
    };
    addAnime(state, action);
    expect(state).toStrictEqual({
      watchList: [nullAnimeType],
      count: 1,
    });
  });

  it('should remove an anime from the watchList', () => {
    const state = {
      watchList: [nullAnimeType],
      count: 1,
    };
    const action = {
      payload: {
        id: nullAnimeType.mal_id,
      },
      type: 'test',
    };
    removeAnime(state, action);
    expect(state).toStrictEqual({
      watchList: [],
      count: 0,
    });
  });
});
