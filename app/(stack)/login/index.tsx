import ThemedButton from '@/presentation/components/ui/ThemedButton';
import ThemedText from '@/presentation/components/ui/ThemedText';
import { theme } from '@/presentation/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  BackHandler,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Login = () => {
  const safeArea = useSafeAreaInsets();

  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const onBackPress = () => {
      router.replace('/home');

      return true;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
    >
      <View className="flex flex-col" style={{ marginTop: safeArea.top }}>
        <View className="flex-row justify-between items-center px-6 py-2 w-full">
          <Pressable onPress={() => router.dismiss()}>
            <Ionicons
              name="arrow-back"
              size={28}
              color={theme.Colors.foreground}
            />
          </Pressable>
        </View>
        <ScrollView style={{}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="w-full mt-10 px-10 mb-80">
              <ThemedText className="text-4xl text-center" fontWeight="bold">
                Hello,
              </ThemedText>

              <ThemedText
                className="text-4xl text-center mt-2"
                fontWeight="bold"
              >
                Glad to see you!
              </ThemedText>

              <ThemedText className="text-xl text-center mt-5 mb-5">
                Please add your credentials to login.
              </ThemedText>

              <View className="mt-16">
                <TextInput
                  className="text-foreground text-xl rounded-full h-[47] px-5"
                  placeholder="Email"
                  placeholderTextColor={theme.Colors.primaryForeground}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onFocus={() => setIsFocused({ email: true, password: false })}
                  onBlur={() => setIsFocused({ email: false, password: false })}
                  style={{
                    borderColor: isFocused.email
                      ? theme.Colors.secondary
                      : theme.Colors.primaryForeground,
                    borderWidth: 1,
                  }}
                />
              </View>
              <View className=" mt-10">
                <TextInput
                  className="rounded-full h-[47] px-5 text-foreground text-xl"
                  placeholder="Password"
                  placeholderTextColor={theme.Colors.primaryForeground}
                  secureTextEntry
                  autoCapitalize="none"
                  textContentType="password"
                  autoComplete="password"
                  autoCorrect={false}
                  returnKeyType="done"
                  onSubmitEditing={() => router.replace('/home')}
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically
                  onFocus={() => setIsFocused({ email: false, password: true })}
                  onBlur={() => setIsFocused({ email: false, password: false })}
                  style={{
                    borderColor: isFocused.password
                      ? theme.Colors.secondary
                      : theme.Colors.primaryForeground,
                    borderWidth: 1,
                  }}
                />
              </View>

              <View className="mt-10">
                <ThemedButton
                  title="Login"
                  type="gradient"
                  onPress={() => {
                    router.replace('/home');
                  }}
                ></ThemedButton>
              </View>

              <ThemedText className="text-xl text-center mt-12 text-primaryForeground">
                Or login with
              </ThemedText>

              <View className="flex-row gap-8 mt-10 justify-center">
                <TouchableOpacity
                  className="border border-secondaryForeground w-[70] h-[70] rounded-full"
                  onPress={() => {}}
                >
                  <View className="flex-1 justify-center items-center h-full">
                    <Image
                      source={require('@/assets/images/logo-google.png')}
                      style={{ width: 40, height: 40 }}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  className="border border-secondaryForeground w-[70] h-[70] rounded-full"
                  onPress={() => {}}
                >
                  <View className="flex-1 justify-center items-center h-full">
                    <Image
                      source={require('@/assets/images/logo-facebook.png')}
                      style={{ width: 40, height: 40 }}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  className="border border-secondaryForeground w-[70] h-[70] rounded-full"
                  onPress={() => {}}
                >
                  <View className="flex-1 justify-center items-center h-full">
                    <Image
                      source={require('@/assets/images/logo-apple.png')}
                      style={{ width: 40, height: 40 }}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
