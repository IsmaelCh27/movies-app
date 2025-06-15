import type { Movie } from '@/infrastructure/interfaces/movie.interface';
import { theme } from '@/presentation/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import ThemedText from '../ui/ThemedText';

interface Props {
  // id: number;
  // poster: string;
  // title: string;
  // year: number;
  // genres: string[];
  // smallPoster?: boolean;
  movie: Movie;
  genres?: string;
  className?: string;
}

const MoviePoster = ({ movie, genres, className }: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-4 ${className}`}
      onPress={() => router.push(`/movie/${movie.id}`)}
    >
      <View className="" style={{ width: 160 }}>
        <View>
          <Image
            source={{ uri: movie.poster }}
            className="rounded-2xl"
            style={{
              width: '100%',
              height: 220,
            }}
            resizeMode="cover"
          />
          <View className="absolute top-3 left-3 flex flex-col">
            <View className="flex flex-row items-center gap-2 bg-background/30 px-2 py-1 rounded-full ">
              <Ionicons name="star" size={12} color={theme.Colors.primary} />
              <ThemedText className="text-sm">
                {movie.rating.toFixed(1)}
              </ThemedText>
            </View>
            <ThemedText className="mt-1  ms-1" fontWeight="semiBold">
              {movie.year}
            </ThemedText>
          </View>

          <Pressable className="absolute top-3 right-3 active:opacity-50">
            <Ionicons
              name="heart-outline"
              size={30}
              color={theme.Colors.foreground}
            />
          </Pressable>
        </View>
        <View className="mt-3">
          <ThemedText
            className="text-xl"
            fontWeight="semiBold"
            numberOfLines={1}
          >
            {movie.title}
          </ThemedText>
          <ThemedText
            className="text-gray-500"
            fontWeight="normal"
            numberOfLines={1}
          >
            {genres}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({});
