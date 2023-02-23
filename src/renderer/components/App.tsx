import '../../assets/styles/Main.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'renderer/store/store';
import MainRoutes from '../routes/MainRoutes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </Provider>
);

export default App;
