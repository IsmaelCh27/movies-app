import type { Trailer } from '@/infrastructure/interfaces/trailer.interface';
import { theme } from '@/presentation/theme';
import { FlatList, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import ThemedText from '../ui/ThemedText';

interface Props {
  trailers?: Trailer[];
}

const Trailers = ({ trailers }: Props) => {
  return (
    <View className="mt-7">
      <View className="px-5 mb-5">
        <ThemedText className="text-3xl" fontWeight="semiBold">
          Trailers and teasers
        </ThemedText>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trailers ?? []}
        keyExtractor={(trailer, index) => `${trailer.key}-${index}`}
        renderItem={({ item }) => (
          <View className="ps-5 border border-resd-500">
            <View
              className="border border-gresen-500 rounded-2xl overflow-hidden"
              style={{
                width: 250,
                height: 170,
                backgroundColor: theme.Colors.surface,
              }}
            >
              <YoutubePlayer
                height={170}
                width={300}
                play={false}
                videoId={item.key}
              />
              <ThemedText className="text-base mb-3" fontWeight="bold">
                {item.name}
              </ThemedText>
            </View>
          </View>
        )}

        // ListFooterComponent={() => (
        //   <View
        //     style={{
        //       width: 160,
        //       height: 220,
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //     }}
        //   >
        //     {loading && <ActivityIndicator size={25} color={'white'} />}
        //   </View>
        // )}
      />
    </View>
  );
};

export default Trailers;
