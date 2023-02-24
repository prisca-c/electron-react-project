import { RootState } from '../store';
import { CharacterStateType } from '../../types/CharacterStateType';

const selectCharacters = (state: RootState): CharacterStateType =>
  state.characters;

export { selectCharacters };
