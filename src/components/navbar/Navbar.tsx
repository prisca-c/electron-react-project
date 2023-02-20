import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Styles from './Navbar.module.css';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../hooks/useAppSelector';

const Navbar = () => {
  const activeClass = `${Styles.link} ${Styles.active}`;

  return (
    <nav className={Styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? activeClass : Styles.link;
        }}
      >
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
