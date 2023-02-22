import { useState } from 'react';
import { useFetchAnimeByIdQuery } from '../../store/slices/fetchApiSlice';
import Styles from './Anime.module.scss';

const Anime = () => {
  const [animeId, setAnimeId] = useState(1);

  const { data, error, isLoading } = useFetchAnimeByIdQuery(animeId);

  const fetchAnime = () => {
    const input = document.querySelector('#anime_id') as HTMLInputElement;
    if (input) setAnimeId(Number(input.value));
  };

  return (
    <div>
      <input type="text" id="anime_id" />
      <button type="button" onClick={fetchAnime}>
        Fetch
      </button>
      {isLoading && <p>Loading...</p>}

      {data && (
        <div className={Styles.container}>
          <h1 className="text-slate-500">{data.title}</h1>
          <img
            src={
              data.images.webp.image_url ||
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fnull_5266799&psig=AOvVaw1aeRW8xUXzRuq9RK2NN6wI&ust=1677088041546000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDdt_mVp_0CFQAAAAAdAAAAABBD'
            }
            alt={data.title}
            className={Styles.image}
          />
          <p>{data.synopsis}</p>
        </div>
      )}

      {error && <p>error</p>}
    </div>
  );
};

export default Anime;
