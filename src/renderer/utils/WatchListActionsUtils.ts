import { MouseEvent, useEffect, useState } from 'react';
import { getAnimeById } from '../services/animeServices';
const addToWatchList = async (
  e: MouseEvent<HTMLButtonElement>,
  dispatchAction: () => void
) => {
  const id = Number(e.currentTarget.value);
  await getAnimeById(id).then((response) => {
    if (response) {
      dispatchAction();
    }
    return false;
  });
};
