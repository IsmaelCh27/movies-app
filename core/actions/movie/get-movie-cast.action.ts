import { movieApi } from '@/core/api/movie-api';
import type { MDBCreditsResponse } from '@/infrastructure/interfaces/mdb-credits.response';
import { fromMovieDBCreditsToCast } from '@/infrastructure/mappers/cast.mapper';

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MDBCreditsResponse>(
      `/movie/${movieId}/credits`,
    );

    return data.cast.map(fromMovieDBCreditsToCast);
  } catch (error) {
    throw 'Cant load cast by id';
  }
};
