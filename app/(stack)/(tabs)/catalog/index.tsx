import ThemedText from '@/presentation/components/ui/ThemedText';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Catalog = () => {
  const safeArea = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: safeArea.top }}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <ThemedText className="text-5xl">Catalog</ThemedText>
      </ScrollView>
    </View>
  );
};

export default Catalog;

const styles = StyleSheet.create({});
