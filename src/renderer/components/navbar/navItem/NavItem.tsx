import { NavLink } from 'react-router-dom';
import Styles from '../Navbar.module.css';
import { items } from './Items';

const NavItem = () => {
  const activeClass = `${Styles.link} ${Styles.active}`;

  return (
    <>
      {Object.entries(items).map(([key, value]) => (
        <NavLink
          key={key}
          to={value.to}
          className={({ isActive }) => (isActive ? activeClass : Styles.link)}
        >
          {value.text}
        </NavLink>
      ))}
    </>
  );
};

export default NavItem;
