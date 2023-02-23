import { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'renderer/hooks/useAppSelector';
import { watchListAction } from 'renderer/store/slices/watchListSlice';
import { selectAnimes } from 'renderer/store/selectors/animeSelector';
import AnimeType from 'renderer/types/AnimeType';
import Button from '../buttons/Button';
import Styles from './AnimeRecommendCard.module.scss';
import { AnimeRecommendation } from '../../types/AnimeRecommendedType';
import { getAnimeById } from '../../services/animeServices';

type AnimeRecommendCardProps = {
  data: AnimeRecommendation[];
};

export const AnimeRecommendCard = (props: AnimeRecommendCardProps) => {
  const [selectAnime, setSelectAnime] = useState<AnimeType | null>();
  const dispatch = useAppDispatch();
  const animeSelector = useAppSelector(selectAnimes);
  const { data } = props;

  useEffect(() => {
    if (animeSelector !== null) {
      setSelectAnime(animeSelector.info);
    }
  }, [animeSelector, selectAnime, dispatch]);

  const checkIfAnimeExists = async (id: number) => {
    await getAnimeById(id);
  };

  const addToWatchList = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.value);
    await checkIfAnimeExists(id).then((response) => {
      dispatch(watchListAction.addAnime({ anime: animeSelector.info }));
      return response;
    });
  };

  return (
    <>
      {data.map((anime: AnimeRecommendation) => (
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
      ))}
    </>
  );
};
