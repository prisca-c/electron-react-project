import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type AnimeType from '../../types/AnimeType';
import { AnimeRecommendation } from '../../types/AnimeRecommendedType';

export type DataAnime = {
  data: AnimeType;
};

export type DataAnimeRecommendation = {
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
    fetchAnimeById: builder.query<AnimeType, number>({
      query: (id) => `/anime/${id}`,
      transformResponse: (response: DataAnime) => response.data,
    }),
  }),
});

export const { useFetchAnimeByIdQuery, useFetchRecommendationsQuery } =
  animeApi;
