import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.Colors.background }}
    >
      <ThemeProvider value={DarkTheme}>
        <Slot />
        <StatusBar
          translucent
          // backgroundColor="transparent"
          // barStyle={'light-content'}
          // showHideTransition={'fade'}
          hidden={false}
        />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
