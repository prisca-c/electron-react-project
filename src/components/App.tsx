import { Routes, Route } from 'react-router-dom';
import '../assets/styles/Main.scss';
import Navbar from './navbar/Navbar';
import Home from '../views/Home/Home';
import Cart from '../views/Cart/Cart';
import Products from '../views/Products/Products';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
