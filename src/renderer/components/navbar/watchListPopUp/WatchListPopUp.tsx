import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { WatchListState } from '../../../store/slices/watchListSlice';
import Styles from './WatchListPopUp.module.scss';
import { selectWatchList } from '../../../store/selectors/watchListSelector';
import WatchListPopUpItem from './watchListPopUpItem/WatchListPopUpItem';
import Button from '../../buttons/Button';

type WatchListPopUpProps = {
  setPopUp: (value: boolean) => void;
};

const WatchListPopUp = (props: WatchListPopUpProps) => {
  const state: WatchListState = useAppSelector(selectWatchList);
  const { setPopUp } = props;

  console.log(state);

  return (
    <div className={Styles.popup}>
      <div className={Styles.button}>
        <Button onClick={() => setPopUp(false)} variant="secondary">
          <FontAwesomeIcon icon={faCircleXmark} />
        </Button>
      </div>
      <h2 className={Styles.title}>Watch List</h2>
      {state.watchList.length > 0 ? (
        <WatchListPopUpItem />
      ) : (
        <>
          <p className={Styles.center}>Watch List is empty 😢</p>
          <p className={Styles.center}>
            Click on the heart icon to add anime to your watch list ! 💟
          </p>
        </>
      )}
    </div>
  );
};

export default WatchListPopUp;
