import { MouseEvent } from 'react';
import Button from '../Button';
import { useAppDispatch } from '../../../hooks/useAppSelector';
import { getAnimeById } from '../../../services/animeServices';
import { watchListAction } from '../../../store/slices/watchListSlice';

type AddToWatchListButtonProps = {
  value: number;
};

const AddToWatchListButton = (props: AddToWatchListButtonProps) => {
  const dispatch = useAppDispatch();
  const { value } = props;

  const addToWatchList = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.value);
    await getAnimeById(id).then((response) => {
      if (response) {
        return dispatch(watchListAction.addAnime({ anime: response }));
      }
      return false;
    });
  };
  return (
    <Button onClick={addToWatchList} variant="primary" value={value}>
      💟
    </Button>
  );
};

export default AddToWatchListButton;
