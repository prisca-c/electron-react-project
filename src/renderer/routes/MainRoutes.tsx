import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Anime from '../views/Anime/Anime';
import Contact from '../views/Contact/Contact';
import AnimeByIdPage from '../views/Anime/AnimeByIdPage';
import MainLayout from '../layouts/MainLayout';

const NavbarRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/anime">
        <Route index element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeByIdPage />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default NavbarRoutes;
