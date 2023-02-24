import { Images } from './CharacterPropsType/ImagesType';

export type CharacterType = {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
};
