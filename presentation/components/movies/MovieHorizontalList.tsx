import type { Genre } from '@/infrastructure/interfaces/genre.interface';
import type { Movie } from '@/infrastructure/interfaces/movie.interface';
import { theme } from '@/presentation/theme';
import { ActivityIndicator, FlatList, View } from 'react-native';
import ThemedText from '../ui/ThemedText';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies?: Movie[];
  genres: Genre[];
  className?: string;

  loadNextPage?: () => void;
  loading?: boolean;
}

const MovieHorizontalList = ({
  movies,
  genres,
  title,
  className,
  loadNextPage,
  loading,
}: Props) => {
  const getGenres = (movieGenres: number[] | string[]) => {
    const genresStr = movieGenres.map(genreId => {
      return genres.find(genre => genre.id === genreId)?.name;
    });

    return genresStr?.join(', ');
  };

  return (
    <View className={className}>
      {title && (
        <ThemedText className="text-2xl px-5 mb-3" fontWeight="semiBold">
          {title}
        </ThemedText>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(movie, index) => `${movie.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePoster movie={item} genres={getGenres(item.genres)} />
        )}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => (
          <View
            style={{
              width: 160,
              height: 220,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {loading && (
              <ActivityIndicator size={25} color={theme.Colors.foreground} />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
