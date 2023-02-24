import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Anime from '../views/Anime/Anime';
import Contact from '../views/Contact/Contact';
import AnimeByIdPage from '../views/Anime/AnimeByIdPage';
import MainLayout from '../layouts/MainLayout';
import TopCharacter from '../views/TopCharacter/TopCharacter';

const NavbarRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/anime">
        <Route index element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeByIdPage />} />
      </Route>
      <Route path="characters" element={<TopCharacter />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default NavbarRoutes;
