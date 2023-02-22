import { AnimeRecommendList } from '../../components/animeRecommendations/AnimeRecommendList';
import Styles from './Home.module.scss';

const Home = () => (
  <div>
    <h1 className={Styles.title}>Home</h1>
    <AnimeRecommendList />
  </div>
);

export default Home;
