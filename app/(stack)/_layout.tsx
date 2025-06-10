import { theme } from '@/presentation/theme';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.Colors.background,
        },
        headerTintColor: theme.Colors.text,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{ title: 'Home', headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;

const styles = StyleSheet.create({});
