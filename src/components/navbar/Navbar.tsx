import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Styles from './Navbar.module.css';
import { RootState } from '../../store/store';
import { useAppSelector } from '../../store/hooks';

const Navbar = () => {
  const itemsCount = useAppSelector((state: RootState) => {
    return state.cart.itemsCount;
  });

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
      <NavLink
        to="/products"
        className={({ isActive }) => {
          return isActive ? activeClass : Styles.link;
        }}
      >
        Products
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => {
          return isActive ? activeClass : Styles.link;
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <p className={Styles.count}>{itemsCount}</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
