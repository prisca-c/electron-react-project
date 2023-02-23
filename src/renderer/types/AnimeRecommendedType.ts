import { Image, ImageFormat } from './AnimePropsType/Images';

export type Entry = {
  mal_id: number;
  url: string;
  images: { [key in ImageFormat]: Image };
  title: string;
};

export type User = {
  url: string;
  username: string;
};

export type AnimeRecommendation = {
  mal_id: string;
  entry: Entry[];
  content: string;
  date: string;
  user: User;
};

export const nullAnimeRecommendation: AnimeRecommendation = {
  mal_id: '',
  entry: [
    {
      mal_id: 0,
      url: '',
      images: {
        jpg: {
          image_url: '',
          large_image_url: '',
          small_image_url: '',
        },
        webp: {
          image_url: '',
          large_image_url: '',
          small_image_url: '',
        },
      },
      title: '',
    },
  ],
  content: '',
  date: '',
  user: {
    url: '',
    username: '',
  },
};
