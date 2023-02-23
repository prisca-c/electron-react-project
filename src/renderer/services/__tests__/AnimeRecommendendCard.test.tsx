import { render } from '@testing-library/react';
import { AnimeRecommendCard } from '../../components/animeRecommendations/AnimeRecommendCard';
import { nullAnimeRecommendation } from '../../types/AnimeRecommendedType';
import { TestLayout } from './TestLayout';

describe('AnimeRecommendCard', () => {
  test('should render successfully', async () => {
    const recommendations = [nullAnimeRecommendation];

    const props = {
      data: recommendations,
    };

    const { baseElement } = render(
      <TestLayout>
        <AnimeRecommendCard {...props} />
      </TestLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
