import { Link } from 'react-router-dom';
import Styles from './AnimeRecommendCard.module.scss';
import type { AnimeRecommendation } from '../../types/AnimeRecommendedType';
import AddToWatchListButton from '../buttons/AddToWatchListButton/AddToWatchListButton';

type AnimeRecommendCardProps = {
  data: AnimeRecommendation[];
};

export const AnimeRecommendCard = (props: AnimeRecommendCardProps) => {
  const { data } = props;

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
                'https://shorturl.at/puxU0'
              }
              alt={anime.entry[0].title}
            />
            <AddToWatchListButton value={anime.entry[0].mal_id} />
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
