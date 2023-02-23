import { AxiosStatic } from 'axios';
import api from 'renderer/services/api';
import { nullAnimeType } from 'renderer/types/AnimeType';
import { getAnimeById } from '../animeServices';

// Mocker est le faite de remplacer une méthode ou variable par
// un placeholder qui remplira le même rôle que l'original,
// mais sans le soliciter.

// Mock de l'api Axios et de la methode get,
// ici dans le fichier 'renderer/services/api' sera appeler dans notre service,
// ce sera le mock ci-dessous qui répondra,
// et non le service 'api' que l'on a crée depuis axios
const mockedApi = api as jest.Mocked<AxiosStatic>;
jest.mock('renderer/services/api', () => ({
  get: jest.fn(() => Promise.resolve()),
}));

// Test du service d'Anime
describe('Anime Services', () => {
  it('should return AnimeType from API successfully', async () => {
    // 1. Initialisation de notre mock d'axios et indiquer que lorsque le get()
    //    sera appeler dans ce test il répondra par une fausse réponse
    //    de type AxiosResponse<{ data: AnimeType }>
    mockedApi.get.mockResolvedValueOnce({ data: { data: nullAnimeType } });

    // 2. Une fois tout mocké, on a juste à appeler le service avec un id quelquonque en paramètre
    const response = await getAnimeById(123);

    // 3. On test que le get() à été appelé au moins une fois
    expect(mockedApi.get).toHaveBeenCalledTimes(1);

    // 4. On test que le get() a été appellé avec la bonne url
    expect(mockedApi.get).toHaveBeenCalledWith('/anime/123');

    // 5. Et on test que le retour de cette fonction correspond à ce qu'on a mocké en 1.
    expect(response).toStrictEqual(nullAnimeType);
  });
});
