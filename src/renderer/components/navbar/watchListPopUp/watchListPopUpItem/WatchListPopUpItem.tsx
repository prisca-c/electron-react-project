import { selectWatchList } from 'renderer/store/selectors/watchListSelector';
import { useAppSelector } from 'renderer/hooks/useAppSelector';

const WatchListPopUpItem = () => {
  const { watchList } = useAppSelector(selectWatchList);
  console.log(watchList);

  return (
    <div>
      {watchList.length > 0
        ? watchList.map((anime, i) => (
            <div key={i}>
              <p>{anime.title}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default WatchListPopUpItem;
