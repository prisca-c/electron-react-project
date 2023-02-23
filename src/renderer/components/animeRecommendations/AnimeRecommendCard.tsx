import { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppHook } from 'renderer/hooks/useAppHook';
import fetchAnimeById from 'renderer/store/effetcs/animeFetchEffect';
import { watchListAction } from 'renderer/store/slices/watchListSlice';
import { selectAnimes } from 'renderer/store/selectors/animeSelector';
import AnimeType from 'renderer/types/Anime';
import Button from '../buttons/Button';
import Styles from './AnimeRecommendCard.module.scss';
import { useFetchRecommendationsQuery } from '../../store/slices/fetchApiSlice';
import { AnimeRecommendation } from '../../types/AnimeRecommended';

export const AnimeRecommendCard = () => {
  const { data, error, isLoading } = useFetchRecommendationsQuery(0);
  const [selectAnime, setSelectAnime] = useState<AnimeType | null>();
  const dispatch = useAppDispatch();
  const animeSelector = useAppHook(selectAnimes);

  useEffect(() => {
    if (animeSelector !== null) {
      setSelectAnime(animeSelector.info);
    }
  }, [animeSelector, selectAnime]);

  console.log(data);

  const checkIfAnimeExists = async (id: number) => {
    await dispatch(fetchAnimeById({ id }));
  };

  const addToWatchList = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = parseInt(e.currentTarget.value, 10);
    e.preventDefault();
    await checkIfAnimeExists(id).then((response) => {
      if (animeSelector.info !== null) {
        dispatch(watchListAction.addAnime({ anime: animeSelector.info }));
      }
      return response;
    });
  };

  const show = () => {
    const animes = data;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (animes) {
      return animes.map((anime: AnimeRecommendation) => (
        <div key={anime.mal_id + anime.date} className={Styles.card}>
          <h3 className={Styles.title}>{anime.entry[0].title}</h3>
          <p className={Styles.link}>
            <Link to={`/anime/${anime.entry[0].mal_id}`}>
              Click to discover
            </Link>
          </p>
          <div className={Styles.image_box}>
            <img
              src={
                anime.entry[0].images.webp.image_url ||
                anime.entry[0].images.jpg.image_url ||
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fnull_5266799&psig=AOvVaw1aeRW8xUXzRuq9RK2NN6wI&ust=1677088041546000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDdt_mVp_0CFQAAAAAdAAAAABBD'
              }
              alt={anime.entry[0].title}
            />
            <Button
              onClick={addToWatchList}
              variant="primary"
              value={anime.entry[0].mal_id}
            >
              💟
            </Button>
          </div>
          <p>
            Recommended by: <b>{anime.user.username}</b>
          </p>
          <p>{anime.content}</p>
        </div>
      ));
    }

    if (error) {
      return <p>Something went wrong.</p>;
    }

    return <p>No recommendations found.</p>;
  };

  return <>{show()}</>;
};
