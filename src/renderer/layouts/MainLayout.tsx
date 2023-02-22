import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default MainLayout;
