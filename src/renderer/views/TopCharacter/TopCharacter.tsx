import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useAppSelector';
import { selectCharacters } from '../../store/selectors/charactersSelector';
import { fetchCharacters } from '../../store/effetcs/charactersFecthEffect';
import Styles from './TopCharacter.module.scss';

const TopCharacter = () => {
  const topCharacters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();
  console.log(topCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Top Character</h1>
      <div className={Styles.container}>
        {topCharacters.info.length > 0 &&
          topCharacters.info.map((character) => (
            <div key={character.mal_id}>
              <h2>{character.name}</h2>
              <img src={character.images.jpg.image_url} alt={character.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopCharacter;
