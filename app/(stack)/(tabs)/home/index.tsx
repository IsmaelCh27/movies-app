import ThemedText from '@/presentation/components/ui/ThemedText';
import useMovies from '@/presentation/hooks/useMovies';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const safeArea = useSafeAreaInsets();

  const { genreQuery, nowPlayingQuery } = useMovies();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: safeArea.top }}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <ThemedText className="text-sm">
          {JSON.stringify(nowPlayingQuery.data ?? [], null, 2)}
        </ThemedText>

        <ThemedText className="text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          perspiciatis ipsam fuga debitis eaque at quae dolor sunt dolore est
          qui asperiores, iure possimus, molestias natus quis maxime. Vero, ab!
        </ThemedText>

        <ThemedText className="text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          perspiciatis ipsam fuga debitis eaque at quae dolor sunt dolore est
          qui asperiores, iure possimus, molestias natus quis maxime. Vero, ab!
        </ThemedText>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
