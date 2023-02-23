import type { Broadcast } from './AnimePropsType/Broadcast';
import type { Relational } from './AnimePropsType/Relational';
import type { Image, ImageFormat } from './AnimePropsType/Images';
import type { Trailer } from './AnimePropsType/Trailer';
import type { Title } from './AnimePropsType/Title';
import type { Aired } from './AnimePropsType/Aired';

type AnimeType = {
  mal_id: number;
  url: string;
  images: { [key in ImageFormat]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Relational[];
  licensors: Relational[];
  studios: Relational[];
  genres: Relational[];
  explicit_genres: unknown[];
  themes: Relational[];
  demographics: Relational[];
};

export const nullAnimeType: AnimeType = {
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
  trailer: {
    url: '',
    embed_url: '',
    images: {
      image_url: '',
      large_image_url: '',
      small_image_url: '',
      maximum_image_url: '',
      medium_image_url: '',
    },
    youtube_id: '',
  },
  approved: false,
  titles: [
    {
      title: '',
      type: '',
    },
  ],
  type: '',
  aired: {
    from: '',
    to: '',
    prop: {
      from: {
        day: 0,
        month: 0,
        year: 0,
      },
      to: {
        day: 0,
        month: 0,
        year: 0,
      },
    },
    string: '',
  },
  airing: false,
  background: '',
  broadcast: {
    day: '',
    time: '',
    string: '',
    timezone: '',
  },
  demographics: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: '',
    },
  ],
  duration: '',
  episodes: 0,
  year: 0,
  title: '',
  explicit_genres: [],
  favorites: 0,
  genres: [
    {
      mal_id: 0,
      type: '',
      name: '',
      url: '',
    },
  ],
  licensors: [],
  members: 0,
  popularity: 0,
  producers: [],
  rank: 0,
  rating: '',
  scored_by: 0,
  score: 0,
  season: '',
  source: '',
  status: '',
  studios: [],
  synopsis: '',
  themes: [],
  title_english: '',
  title_japanese: '',
  title_synonyms: [],
};

export default AnimeType;
