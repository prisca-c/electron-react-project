import { useAppSelector } from '../../../hooks/useAppSelector';
import { WatchListState } from '../../../store/slices/watchListSlice';
import Styles from './WatchListPopUp.module.scss';
import { selectWatchList } from '../../../store/selectors/watchListSelector';
import WatchListPopUpItem from './watchListPopUpItem/WatchListPopUpItem';

const WatchListPopUp = () => {
  const state: WatchListState = useAppSelector(selectWatchList);

  console.log(state);

  return (
    <div className={Styles.popup}>
      <h2 className={Styles.title}>Watch List</h2>
      {state.watchList.length > 0 ? (
        <WatchListPopUpItem />
      ) : (
        <>
          <p>Watch List is empty 😢</p>
          <p>Click on the heart icon to add anime to your watch list ! 💟</p>
        </>
      )}
    </div>
  );
};

export default WatchListPopUp;
