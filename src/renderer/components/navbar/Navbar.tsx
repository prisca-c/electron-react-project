import { useState } from 'react';
import NavItem from './navItem/NavItem';
import Styles from './Navbar.module.css';
import WatchListNavIcon from './watchListNavIcon/WatchListNavIcon';
import WatchListPopUp from './watchListPopUp/WatchListPopUp';

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const watchListNavIconProps = {
    setPopUp: setShowPopUp,
    showPopUp,
  };

  return (
    <nav className={Styles.navbar}>
      <NavItem />
      <WatchListNavIcon {...watchListNavIconProps} />
      {showPopUp && <WatchListPopUp />}
    </nav>
  );
};

export default Navbar;
