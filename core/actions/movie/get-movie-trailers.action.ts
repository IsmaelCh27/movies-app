import { movieApi } from '@/core/api/movie-api';
import type { MDBTrailerResponse } from '@/infrastructure/interfaces/mdb-trailer-response';
import { fromMDBTrailerToTrailer } from '@/infrastructure/mappers/trailer.mapper';

export const getMovieTrailersAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MDBTrailerResponse>(
      `/movie/${movieId}/videos`,
    );

    return data.results.map(fromMDBTrailerToTrailer);
  } catch (error) {
    throw 'Cant load trailer by id';
  }
};
