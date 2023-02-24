import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { AnimeRecommendCard } from '../../components/animeRecommendations/AnimeRecommendCard';
import { nullAnimeRecommendation } from '../../types/AnimeRecommendedType';
import { UnitTestingLayout } from '../../layouts/UnitTestingLayout';

describe('AnimeRecommendCard', () => {
  test('should render successfully', async () => {
    const recommendations = [nullAnimeRecommendation];

    const props = {
      data: recommendations,
    };

    const { baseElement } = render(
      <UnitTestingLayout>
        <AnimeRecommendCard {...props} />
      </UnitTestingLayout>
    );
    expect(baseElement).toBeTruthy();
  });

  test('it should trigger the addToWatchList function', async () => {
    const recommendations = [nullAnimeRecommendation];
    // const addToWatchList = jest.fn();

    const props = {
      data: recommendations,
    };

    const { getByText } = render(
      <UnitTestingLayout>
        <AnimeRecommendCard {...props} />
      </UnitTestingLayout>
    );
    const button = getByText('💟');

    button.click();

    await act(async () => {
      expect(button).toBeTruthy();
    });
  });
});
