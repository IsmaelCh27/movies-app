import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import useMovies from '@/presentation/hooks/useMovies';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const safeArea = useSafeAreaInsets();

  const {
    genreQuery,
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  } = useMovies();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: safeArea.top }}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View style={{ height: 70, backgroundColor: 'red' }} />

        <MovieHorizontalList
          title="Now Playing"
          className="mb-10"
          movies={nowPlayingQuery.data ?? []}
          genres={genreQuery.data ?? []}
        />

        <MovieHorizontalList
          title="Los mas vistos"
          className="mb-10"
          movies={popularQuery.data?.pages.flat() ?? []}
          genres={genreQuery.data ?? []}
          // loadNextPage={popularQuery.fetchNextPage}
          // loading={popularQuery.isFetchingNextPage}
        />

        <MovieHorizontalList
          title="Mejor Calificados"
          className="mb-10"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          genres={genreQuery.data ?? []}
        />

        <MovieHorizontalList
          title="Proximamente"
          className="mb-10"
          movies={upcomingQuery.data?.pages.flat() ?? []}
          genres={genreQuery.data ?? []}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
