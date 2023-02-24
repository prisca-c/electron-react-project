import { useState } from 'react';
import NavItem from './navItem/NavItem';
import Styles from './Navbar.module.scss';
import WatchListNavIcon from './watchListNavIcon/WatchListNavIcon';
import WatchListPopUp from './watchListPopUp/WatchListPopUp';

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopUpProps = {
    setPopUp: setShowPopUp,
    showPopUp,
  };

  return (
    <nav className={Styles.navbar}>
      <NavItem />
      <WatchListNavIcon {...showPopUpProps} />
      {showPopUp && <WatchListPopUp {...showPopUpProps} />}
    </nav>
  );
};

export default Navbar;
