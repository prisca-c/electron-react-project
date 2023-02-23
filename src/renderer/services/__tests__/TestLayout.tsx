import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

type TestLayoutProps = {
  children: React.ReactNode;
};

export const TestLayout = (props: TestLayoutProps) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};
