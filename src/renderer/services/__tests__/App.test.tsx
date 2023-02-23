import { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../../components/App';

describe('App', () => {
  it('should render', async () => {
    await act(async () => {
      expect(render(<App />)).toBeTruthy();
    });
  });
});
