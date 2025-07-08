import type { Cast } from '@/infrastructure/interfaces/cast.interface';
import { theme } from '@/presentation/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import ThemedText from '../ui/ThemedText';

interface Props {
  casts?: Cast[];
}

const Casts = ({ casts }: Props) => {
  const [castNumber, setCastNumber] = useState(4);

  if (casts?.length === 0) {
    return null;
  }

  return (
    <View className="px-5 mt-7">
      <ThemedText className="text-3xl mb-3" fontWeight="semiBold">
        Cast & Crew
      </ThemedText>

      <View className="flex-wrap flex-row">
        {casts?.slice(0, castNumber)?.map(actor => (
          <View key={actor.id} className="flex-row items-center w-1/2 py-2">
            <View className="">
              <Image
                source={{ uri: actor.avatar }}
                resizeMode="cover"
                style={{ width: 50, height: 50, borderRadius: 32 }}
              />
            </View>
            <View className="ps-3">
              <ThemedText fontWeight="bold">{actor.name}</ThemedText>
              <ThemedText className="text-sm">{actor.character}</ThemedText>
            </View>
          </View>
        ))}
      </View>
      <View className="flex-row justify-center">
        <TouchableOpacity
          className="flex-col items-center mt-5"
          onPress={() =>
            castNumber === 4
              ? setCastNumber(casts?.length || 0)
              : setCastNumber(4)
          }
        >
          <ThemedText className="text-sm" fontWeight="medium">
            Ver {castNumber === 4 ? 'todos' : 'menos'}
            {castNumber <= 4 ? ` (+${(casts?.length ?? 0) - 4})` : ''}
          </ThemedText>

          <Ionicons
            name={castNumber === 4 ? 'chevron-down' : 'chevron-up'}
            size={20}
            color={theme.Colors.primaryForeground}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Casts;
