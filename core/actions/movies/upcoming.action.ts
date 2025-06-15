import { movieApi } from '@/core/api/movie-api';
import type { MDBMoviesResponse } from '@/infrastructure/interfaces/mdb-movies-response';
import { fromMDBMovieToMovie } from '@/infrastructure/mappers/movie.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const upcomingAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MDBMoviesResponse>('/movie/upcoming', {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(fromMDBMovieToMovie);

    return movies;
  } catch (error) {
    throw new Error("Can't get upcoming movies");
  }
};
