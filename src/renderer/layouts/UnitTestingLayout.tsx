import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';

type TestLayoutProps = {
  children?: React.ReactNode;
};

export const UnitTestingLayout = (props: TestLayoutProps) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

UnitTestingLayout.defaultProps = {
  children: null,
};
