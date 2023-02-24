import { redirect, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchAnimeByIdQuery } from '../../store/slices/fetchApiSlice';

const AnimeByIdPage = () => {
  const [animeId, setAnimeId] = useState(0);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id != null) {
      setAnimeId(parseInt(id, 10));
    } else {
      redirect('/');
    }
  }, [id]);

  const { data, error, isLoading } = useFetchAnimeByIdQuery(animeId);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {animeId !== 0 && data && (
        <div>
          <h1>{data.title}</h1>
          <img
            src={
              data.images.jpg.image_url ||
              data.images.webp.image_url ||
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fnull_5266799&psig=AOvVaw1aeRW8xUXzRuq9RK2NN6wI&ust=1677088041546000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDdt_mVp_0CFQAAAAAdAAAAABBD'
            }
            alt={data.title}
          />
          <p>{data.synopsis}</p>
        </div>
      )}

      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default AnimeByIdPage;
