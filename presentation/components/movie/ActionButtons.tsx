import { theme } from '@/presentation/theme';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ThemedText from '../ui/ThemedText';

const ActionButtons = () => {
  return (
    <View className="flex-row justify-center gap-8 py-5">
      <TouchableOpacity
        className="flex-col items-center"
        style={{ width: 60 }}
        onPress={() => {}}
      >
        <AntDesign name="like2" size={28} color={theme.Colors.foreground} />
        <ThemedText className="mt-2 text-sm">Rate</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-col items-center"
        style={{ width: 60 }}
        onPress={() => {}}
      >
        <Ionicons
          name="download-outline"
          size={28}
          color={theme.Colors.foreground}
        />
        <ThemedText className="mt-2 text-sm">Download</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-col items-center"
        style={{ width: 60 }}
        onPress={() => {}}
      >
        <Ionicons name="heart" size={28} color={theme.Colors.foreground} />
        <ThemedText className="mt-2 text-sm">Favorite</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-col items-center"
        style={{ width: 60 }}
        onPress={() => {}}
      >
        <Ionicons
          name="share-outline"
          size={28}
          color={theme.Colors.foreground}
        />
        <ThemedText className="mt-2 text-sm">Share</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({});
