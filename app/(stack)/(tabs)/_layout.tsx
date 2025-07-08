import { theme } from '@/presentation/theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.Colors.foreground,
        tabBarInactiveTintColor: theme.Colors.primaryForeground,
        tabBarStyle: {
          backgroundColor: theme.Colors.background,
          borderTopWidth: 0,
        },
        headerStyle: { backgroundColor: theme.Colors.background },
        headerTintColor: theme.Colors.foreground,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="catalog/index"
        options={{
          title: 'Catalog',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? 'search' : 'search-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite/index"
        options={{
          title: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
