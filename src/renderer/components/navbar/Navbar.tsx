import { useState } from 'react';
import NavItem from './navItem/NavItem';
import Styles from './Navbar.module.css';
import WatchListNavIcon from './watchListNavIcon/WatchListNavIcon';
import WatchListPopUp from './watchListPopUp/WatchListPopUp';

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <nav className={Styles.navbar}>
      <NavItem />
      <WatchListNavIcon setPopUp={() => setShowPopUp(!showPopUp)} />
      {showPopUp && <WatchListPopUp />}
    </nav>
  );
};

export default Navbar;
