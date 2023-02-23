import { selectWatchList } from 'renderer/store/selectors/watchListSelector';
import { useAppHook } from 'renderer/hooks/useAppHook';

const WatchListPopUpItem = () => {
  const { watchList } = useAppHook(selectWatchList);
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
