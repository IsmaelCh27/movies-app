import type { Cast } from '@/infrastructure/interfaces/cast.interface';
import type { Movie } from '@/infrastructure/interfaces/movie.interface';
import type { Trailer } from '@/infrastructure/interfaces/trailer.interface';
import ActionButtons from '@/presentation/components/movie/ActionButtons';
import Casts from '@/presentation/components/movie/Casts';
import Classification from '@/presentation/components/movie/Classification';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import Trailers from '@/presentation/components/movie/Trailers';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import ThemedText from '@/presentation/components/ui/ThemedText';
import { useMovie } from '@/presentation/hooks/useMovie';

import useMovies from '@/presentation/hooks/useMovies';
import { theme } from '@/presentation/theme';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery, trailersQuery, recommendationsQuery } =
    useMovie(+id);

  const { genreQuery } = useMovies();

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View>
        <ThemedText>Loading...</ThemedText>
      </View>
    );
  }

  return (
    <ScrollView className="bg-background" style={{ flex: 1 }}>
      <MovieHeader movie={movieQuery.data} />

      <ActionButtons />

      {movieQuery.data?.description && (
        <View className="px-5 mt-7">
          <ThemedText className="text-3xl mb-3" fontWeight="bold">
            Description
          </ThemedText>
          <ThemedText
            className="text-lg leading-6"
            fontWeight="medium"
            style={{ color: theme.Colors.primaryForeground }}
          >
            {movieQuery.data?.description}
          </ThemedText>
        </View>
      )}

      <Casts casts={castQuery.data as Cast[] | undefined} />

      <Trailers trailers={trailersQuery.data as Trailer[] | undefined} />

      <Classification
        rating={movieQuery.data?.rating}
        voteCount={movieQuery.data?.voteCount}
        popularity={movieQuery.data?.popularity}
        revenue={movieQuery.data?.revenue}
      />

      <MovieHorizontalList
        title="Recommended"
        className="mt-7"
        movies={(recommendationsQuery.data as Movie[]) ?? []}
        genres={genreQuery.data ?? []}
      />

      <View className="py-10" />
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
