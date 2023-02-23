import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Styles from './WatchListNavIcon.module.scss';

interface WatchListNavIconProps {
  setPopUp: Dispatch<SetStateAction<boolean>>;
  showPopUp: boolean;
}

const WatchListNavIcon = (props: WatchListNavIconProps) => {
  const watchList = useAppSelector((state) => state.watchList.count);
  const { setPopUp, showPopUp } = props;

  return (
    <div
      className={Styles.box}
      onClickCapture={() => {
        setPopUp(!showPopUp);
      }}
    >
      <FontAwesomeIcon
        icon={faHeart}
        className={Styles.icon}
        bounce
        size="1x"
      />
      <p className={Styles.count}>{watchList}</p>
    </div>
  );
};

export default WatchListNavIcon;
