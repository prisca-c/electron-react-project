import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCharacters } from '../../store/selectors/charactersSelector';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { fetchCharacters } from '../../store/effetcs/charactersFecthEffect';

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
      {topCharacters.info.length > 0 &&
        topCharacters.info.map((character) => (
          <div key={character.mal_id}>
            <h2>{character.name}</h2>
            <img src={character.images.jpg.image_url} alt={character.name} />
          </div>
        ))}
    </div>
  );
};

export default TopCharacter;
