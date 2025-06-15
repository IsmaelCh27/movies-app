import { getMovieCastAction } from '@/core/actions/movie/get-movie-cast.action';
import { getMovieRecommendationsAction } from '@/core/actions/movie/get-movie-recommendations.action';
import { getMovieTrailersAction } from '@/core/actions/movie/get-movie-trailers.action';
import { getMovieAction } from '@/core/actions/movie/get-movie.action';
import { useQuery } from '@tanstack/react-query';

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const trailersQuery = useQuery({
    queryKey: ['movie', id, 'trailer'],
    queryFn: () => getMovieTrailersAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const recommendationsQuery = useQuery({
    queryKey: ['movie', id, 'recommendations'],
    queryFn: () => getMovieRecommendationsAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    movieQuery,
    castQuery,
    trailersQuery,
    recommendationsQuery,
  };
};
