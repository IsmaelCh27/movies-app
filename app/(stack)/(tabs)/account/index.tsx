import ThemedButton from '@/presentation/components/ui/ThemedButton';
import ThemedText from '@/presentation/components/ui/ThemedText';
import { Redirect, router } from 'expo-router';
import { View } from 'react-native';

const Account = () => {
  // return <Redirect href={'/login'} />;
  const user = false;

  if (!user) {
    // router.push('/login');
    return <Redirect href={'/login'} />;
  }

  return (
    <View className="pt-20">
      <ThemedText className="text-4xl mb-10">Account</ThemedText>

      <ThemedButton
        title="Go to Login"
        onPress={() => router.push('/login')}
      ></ThemedButton>
    </View>
  );
};

export default Account;
