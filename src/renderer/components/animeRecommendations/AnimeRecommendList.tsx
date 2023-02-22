import { AnimeRecommendCard } from './AnimeRecommendCard';
import Styles from './AnimeRecommendList.module.scss';

export const AnimeRecommendList = () => (
  <div className={Styles.recommendations}>
    <h2 className={Styles.title}>Last 6 recommendations</h2>
    <div className={Styles.cardList}>
      <AnimeRecommendCard />
    </div>
  </div>
);
