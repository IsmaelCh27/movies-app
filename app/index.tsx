import ThemedButton from '@/presentation/components/ui/ThemedButton';
import ThemedText from '@/presentation/components/ui/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const MoviesApp = () => {
  return (
    <View className="px-5">
      <ThemedText fontWeight="bold" className="text-5xl text-red-500">
        MobiesApp
      </ThemedText>

      <ThemedButton title="Button`" type="gradient" />
    </View>
  );
};

export default MoviesApp;

const styles = StyleSheet.create({});
