import StatusType from './StatusType';
import type { CharacterType } from './CharacterType';

export type CharacterStateType = {
  info: CharacterType[];
  status: StatusType;
  error: string;
};

export const nullCharacterState: CharacterStateType = {
  info: [],
  status: StatusType.start,
  error: '',
};
