import { render } from '@testing-library/react';
import { UnitTestingLayout } from '../../layouts/UnitTestingLayout';

describe('render test layout', () => {
  it('should render', () => {
    expect(render(<UnitTestingLayout />)).toBeTruthy();
  });
});
