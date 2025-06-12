import { movieApi } from '@/core/api/movie-api';
import type { MDBMoviesResponse } from '@/infrastructure/interfaces/mdb-movies-response';
import { fromMDBMovieToMovie } from '@/infrastructure/mappers/movie.mapper';

export const nowPlayingAction = async () => {
  try {
    const { data } =
      await movieApi.get<MDBMoviesResponse>('/movie/now_playing');

    const movies = data.results.map(fromMDBMovieToMovie);

    return movies;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw new Error('Failed to fetch now playing movies');
  }
};
