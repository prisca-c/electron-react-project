import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';

type TestLayoutProps = {
  children?: React.ReactNode;
};

export const UnitTestingLayout = (props: TestLayoutProps) => {
  const { children } = props;
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

UnitTestingLayout.defaultProps = {
  children: null,
};
