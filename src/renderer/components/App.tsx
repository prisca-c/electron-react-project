import { Routes, Route } from 'react-router-dom';
import '../../assets/styles/Main.scss';
import Navbar from './navbar/Navbar';
import Home from '../views/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
