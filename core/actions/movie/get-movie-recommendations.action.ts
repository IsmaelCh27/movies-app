import { movieApi } from '@/core/api/movie-api';
import type { MDBMoviesResponse } from '@/infrastructure/interfaces/mdb-movies-response';
import { fromMDBMovieToMovie } from '@/infrastructure/mappers/movie.mapper';

export const getMovieRecommendationsAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MDBMoviesResponse>(
      `/movie/${movieId}/recommendations`,
    );
    return data.results.map(fromMDBMovieToMovie);
  } catch (error) {
    throw 'Cant load recommendations by id';
  }
};
