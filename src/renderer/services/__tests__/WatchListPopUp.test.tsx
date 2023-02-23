import { render } from '@testing-library/react';
import WatchListPopUp from '../../components/navbar/watchListPopUp/WatchListPopUp';
import WatchListPopUpItem from '../../components/navbar/watchListPopUp/watchListPopUpItem/WatchListPopUpItem';
import { UnitTestingLayout } from '../../layouts/UnitTestingLayout';

describe('WatchListPopUp', () => {
  test('should render successfully', async () => {
    const { baseElement } = render(
      <UnitTestingLayout>
        <WatchListPopUp />
      </UnitTestingLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});

describe('WatchListPopUpItem', () => {
  test('should render successfully', async () => {
    const { baseElement } = render(
      <UnitTestingLayout>
        <WatchListPopUpItem />
      </UnitTestingLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
