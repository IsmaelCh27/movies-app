import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import './global.css';

import { theme } from '@/presentation/theme';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...theme.Fonts,
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded && !error) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
