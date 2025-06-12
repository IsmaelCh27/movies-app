import { getGenreAction } from '@/core/actions/genres/get-genre.action';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { useQuery } from '@tanstack/react-query';

const useMovies = () => {
  const genreQuery = useQuery({
    queryKey: ['movies', 'genres'],
    queryFn: () => getGenreAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    genreQuery,
    nowPlayingQuery,
  };
};

export default useMovies;
