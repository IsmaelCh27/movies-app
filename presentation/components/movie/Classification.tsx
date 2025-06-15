import { theme } from '@/presentation/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import ThemedButton from '../ui/ThemedButton';
import ThemedText from '../ui/ThemedText';

interface Props {
  rating: number;
  voteCount: number;
  popularity: number;
  revenue: number;
}

const Classification = ({ rating, voteCount, popularity, revenue }: Props) => {
  const formatNumber = (number: number, decimal = 0) => {
    return number.toLocaleString('es-MX', {
      style: 'decimal',
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    });
  };

  return (
    <View className="px-5 mt-7">
      <ThemedText className="text-3xl mb-5" fontWeight="bold">
        Rating
      </ThemedText>

      <View
        className="flex-row py-5 rounded-2xl"
        style={{ backgroundColor: theme.Colors.surface }}
      >
        <View className="flex-col justify-center items-center w-1/2 py-3">
          <View className="flex-row items-end">
            <Ionicons
              className="mb-3"
              name="star"
              size={20}
              color={theme.Colors.primary}
            />
            <ThemedText className="text-3xl ms-1" fontWeight="bold">
              {formatNumber(rating, 1)}
            </ThemedText>
            <ThemedText
              className="text-2xl ms-2"
              style={{ color: theme.Colors.primaryForeground }}
            >
              /10
            </ThemedText>
          </View>

          <ThemedText
            className="text-lg mt-2"
            fontWeight="medium"
            style={{ color: theme.Colors.primaryForeground }}
          >
            {formatNumber(voteCount)} Ratings
          </ThemedText>
        </View>
        <View className="flex justify-center items-center w-1/2 px-8 border-l border-gray-600">
          <ThemedButton title="Rate" type="gradient" />
        </View>
      </View>

      <View className="flex-row gap-3 mt-3">
        <View
          className="flex-row justify-center items-center flex-1 rounded-2xl py-5"
          style={{ backgroundColor: theme.Colors.surface }}
        >
          <ThemedText className="text-xl " fontWeight="bold">
            {formatNumber(popularity, 1)}
          </ThemedText>

          <ThemedText
            className="text-lg ms-2"
            fontWeight="medium"
            style={{ color: theme.Colors.primaryForeground }}
          >
            Pop.
          </ThemedText>
        </View>

        <View
          className="flex-row justify-center items-center flex-1 rounded-2xl py-5"
          style={{ backgroundColor: theme.Colors.surface }}
        >
          <ThemedText className="text-xl" fontWeight="bold">
            {formatNumber(revenue / 1000000, 1)}M
          </ThemedText>

          <ThemedText
            className="text-lg ms-2"
            fontWeight="medium"
            style={{ color: theme.Colors.primaryForeground }}
          >
            USD
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default Classification;
