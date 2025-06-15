import type { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { theme } from '@/presentation/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, Pressable, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemedButton from '../ui/ThemedButton';
import ThemedText from '../ui/ThemedText';

interface Props {
  movie: CompleteMovie;
}

const MovieHeader = ({ movie }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const safeArea = useSafeAreaInsets();

  const calculateDuration = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  const formatDate = (date: Date) => {
    const dateObj = new Date(date);
    dateObj.setHours(dateObj.getHours() + 4); // Adjust for UTC-4

    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
    // const options: Intl.DateTimeFormatOptions = {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    // };

    // return new Date(dateObj).toLocaleDateString('es-MX', options);
  };

  return (
    <View style={{ width: '100%', height: screenHeight * 0.6 }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        start={[0.5, 0]}
        style={{
          position: 'absolute',
          bottom: 0,
          height: '50%',
          width: '100%',
          zIndex: 1,
        }}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0.5, 0]}
        style={{
          position: 'absolute',
          top: 0,
          height: '20%',
          width: '100%',
          zIndex: 1,
        }}
      />

      <Image
        source={{ uri: movie.poster }}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />

      <View
        className="flex-row justify-between items-center px-6 py-2"
        style={{
          position: 'absolute',
          zIndex: 3,
          top: safeArea.top,
          width: '100%',
          elevation: 9,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={28}
            color={theme.Colors.foreground}
          />
        </Pressable>

        <View className="flex-row justify-center items-center">
          <Ionicons name="star" size={22} color={theme.Colors.primary} />
          <ThemedText className="text-xl ms-2" fontWeight="semiBold">
            {movie.rating.toFixed(1)}
          </ThemedText>
        </View>
      </View>

      <View
        className="px-6"
        style={{
          position: 'absolute',
          bottom: 20,
          zIndex: 2,
          width: '100%',
        }}
      >
        <ThemedText className="text-4xl text-center mb-8" fontWeight="semiBold">
          {movie.title}
        </ThemedText>
        <View className="flex-row justify-center gap-5 mb-5">
          <ThemedButton
            className="flex-1"
            title="Play"
            type="gradient"
            icon="play"
          />
          <ThemedButton
            className="flex-1"
            title="Watch Trailer"
            type="outlined"
            icon="logo-youtube"
          />
        </View>
        <View className="flex-row justify-center gap-5 mb-4">
          <ThemedText className="text-lg">
            {calculateDuration(movie.duration)}
          </ThemedText>
          <ThemedText className="text-lg">|</ThemedText>
          <ThemedText className="text-lg">
            {formatDate(movie.releaseDate)}
          </ThemedText>
        </View>
        <View className="flex-row justify-center gap-8">
          {movie.genres.map((genre) => (
            <ThemedText
              key={`${genre}`}
              className="text-lg"
              fontWeight="medium"
            >
              {genre}
            </ThemedText>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MovieHeader;
