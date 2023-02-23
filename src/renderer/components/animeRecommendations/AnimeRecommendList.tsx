import { AnimeRecommendCard } from './AnimeRecommendCard';
import Styles from './AnimeRecommendList.module.scss';
import { useFetchRecommendationsQuery } from '../../store/slices/fetchApiSlice';
import { AnimeRecommendation } from '../../types/AnimeRecommendedType';

export const AnimeRecommendList = () => {
  const { data } = useFetchRecommendationsQuery(0);

  const animeRecommendCardProps = {
    data: data as AnimeRecommendation[],
  };

  return (
    <div className={Styles.recommendations}>
      <h2 className={Styles.title}>Last 6 recommendations</h2>
      <div className={Styles.cardList}>
        {data !== undefined ? (
          <AnimeRecommendCard {...animeRecommendCardProps} />
        ) : (
          <p>No recommendations for the moment.</p>
        )}
      </div>
    </div>
  );
};
