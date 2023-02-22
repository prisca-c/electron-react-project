import { WatchListState } from '../slices/watchListSlice';
import { RootState } from '../store';

const selectWatchList = (state: RootState) => state.watchList;

export { selectWatchList };
