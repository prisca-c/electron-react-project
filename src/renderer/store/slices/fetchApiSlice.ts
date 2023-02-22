import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type Anime from '../../types/Anime';
import { AnimeRecommendation } from '../../types/AnimeRecommended';

type DataAnime = {
  data: Anime;
};

type DataAnimeRecommendation = {
  data: AnimeRecommendation[];
};

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
  endpoints: (builder) => ({
    fetchRecommendations: builder.query<AnimeRecommendation[], unknown>({
      query: () => `/recommendations/anime`,
      transformResponse: (response: DataAnimeRecommendation) =>
        response.data.slice(0, 6),
    }),
    fetchAnimeById: builder.query<Anime, number>({
      query: (id) => `/anime/${id}`,
      transformResponse: (response: DataAnime) => response.data,
    }),
  }),
});

export const { useFetchAnimeByIdQuery, useFetchRecommendationsQuery } =
  animeApi;
