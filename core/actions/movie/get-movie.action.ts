import { movieApi } from '@/core/api/movie-api';
import type { MDBMovieResponse } from '@/infrastructure/interfaces/mdb-movie-response';
import type { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { fromMDBMovieToCompleteMovie } from '@/infrastructure/mappers/movie.mapper';

export const getMovieAction = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MDBMovieResponse>(`/movie/${id}`);

    const movie = fromMDBMovieToCompleteMovie(data);

    return movie;
  } catch (error) {
    throw new Error("Can't get movie by id");
  }
};
