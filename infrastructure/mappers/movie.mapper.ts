import type { MDBMovieResponse } from '../interfaces/mdb-movie-response';
import type { Result } from '../interfaces/mdb-movies-response';
import type { CompleteMovie } from '../interfaces/movie.interface';

export const fromMDBMovieToMovie = (movie: Result) => {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: new Date(movie.release_date),
    rating: movie.vote_average,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    genres: movie.genre_ids,
    voteCount: movie.vote_count,
    year: new Date(movie.release_date).getFullYear(),
  };
};

export const fromMDBMovieToCompleteMovie = (
  movie: MDBMovieResponse,
): CompleteMovie => {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: new Date(movie.release_date),
    rating: movie.vote_average,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    genres: movie.genres.map((genre) => genre.name),
    voteCount: movie.vote_count,
    year: new Date(movie.release_date).getFullYear(),
    duration: movie.runtime,
    budget: movie.budget,
    originalTitle: movie.original_title,
    productionCompanies: movie.production_companies.map(
      (company) => company.name,
    ),
    popularity: movie.popularity,
    revenue: movie.revenue,
  };
};
