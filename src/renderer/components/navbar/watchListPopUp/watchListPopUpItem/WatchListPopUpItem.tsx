import { selectWatchList } from 'renderer/store/selectors/watchListSelector';
import { useAppSelector } from 'renderer/hooks/useAppSelector';
import { Link } from 'react-router-dom';
import Styles from './WatchListPopUpItem.module.scss';

const WatchListPopUpItem = () => {
  const { watchList } = useAppSelector(selectWatchList);
  console.log(watchList);

  return (
    <div>
      {watchList.length > 0
        ? watchList.map((anime, i) => {
            const key = `${i}_${anime.mal_id}`;
            return (
              <Link to={`/anime/${anime.mal_id}`} key={key}>
                <div key={key} className={Styles.item}>
                  <img
                    src={
                      anime.images.webp.image_url ||
                      anime.images.jpg.image_url ||
                      'https://shorturl.at/puxU0'
                    }
                    alt={anime.title}
                    className={Styles.image}
                  />
                  <p>{anime.title}</p>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default WatchListPopUpItem;
