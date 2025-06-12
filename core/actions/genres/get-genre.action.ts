import { movieApi } from '@/core/api/movie-api';
import type { MDBGenresResponse } from '@/infrastructure/interfaces/mdb-genres-response';
import { fromTheGenreDBToGenre } from '@/infrastructure/mappers/genre.mapper';

export const getGenreAction = async () => {
  try {
    const { data } = await movieApi.get<MDBGenresResponse>('/genre/movie/list');

    const genres = data.genres.map(fromTheGenreDBToGenre);

    return genres;
  } catch (error) {
    console.error('Error fetching genre:', error);
    throw new Error('Failed to fetch genres');
  }
};
