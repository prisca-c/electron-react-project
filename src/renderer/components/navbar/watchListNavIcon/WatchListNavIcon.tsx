import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Styles from './WatchListNavIcon.module.scss';

const WatchListNavIcon = (props: unknown) => {
  const watchList = useAppSelector((state) => state.watchList.length);
  const { setPopUp } = props;

  return (
    <div className={Styles.box} onClickCapture={setPopUp}>
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
