import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={
        {
          // headerShown: true,
          // headerShadowVisible: true,
          // headerStyle: {
          //   backgroundColor: theme.Colors.background,
          // },
          // headerTintColor: theme.Colors.text,
        }
      }
    >
      <Stack.Screen
        name="(tabs)"
        options={{ title: 'Home', headerShown: false }}
      />

      <Stack.Screen
        name="movie/[id]"
        options={{ title: 'Home', headerShown: false }}
      />

      <Stack.Screen
        name="login/index"
        options={{
          title: 'Login',
          headerShown: false,

          // headerTitle: () => (
          //   <ThemedText className="text-red-500">Loginnnn</ThemedText>
          // ),
          // headerTintColor: 'red',
        }}
      />
    </Stack>
  );
};

export default StackLayout;

const _styles = StyleSheet.create({});
