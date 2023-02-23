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
