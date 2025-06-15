import { Colors } from '@/presentation/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, useColorScheme } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
  className?: string;
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: 'small' | 'medium';
  width?: number;
  type?: 'filled' | 'outlined' | 'gradient';
}

const ThemedButton = ({
  className,
  title,
  icon,
  size,
  width,
  type = 'filled',
  ...rest
}: Props) => {
  const colorScheme = useColorScheme();
  return (
    <>
      {type === 'filled' && (
        <Pressable
          className={`rounded-full bg-primary overflow-hidden active:opacity-80 ${className}`}
          {...rest}
          style={{
            width: width || '100%',
            height: size === 'small' ? 40 : 45,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon && (
            <Ionicons
              name={icon}
              size={size === 'small' ? 18 : 24}
              color={Colors.foreground}
              className="me-2"
            />
          )}
          <ThemedText
            className={`text-foreground ${
              size === 'small' ? 'text-xl' : 'text-2xl'
            } text-center`}
            fontWeight={size === 'small' ? '' : 'medium'}
          >
            {title}
          </ThemedText>
        </Pressable>
      )}

      {type === 'outlined' && (
        <Pressable
          className={`rounded-full overflow-hidden active:opacity-80 ${className}`}
          {...rest}
          style={{
            width: width || '100%',
            height: size === 'small' ? 40 : 45,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.foreground,
            borderWidth: 1,
          }}
        >
          {icon && (
            <Ionicons
              name={icon}
              size={size === 'small' ? 18 : 24}
              color={Colors.foreground}
              className="me-2"
            />
          )}
          <ThemedText
            className={`text-foreground ${
              size === 'small' ? 'text-xl' : 'text-xl'
            } text-center`}
            fontWeight={size === 'small' ? '' : 'medium'}
          >
            {title}
          </ThemedText>
        </Pressable>
      )}

      {type === 'gradient' && (
        <Pressable
          className={`rounded-full overflow-hidden active:opacity-80 ${className}`}
          {...rest}
          style={{
            width: width || '100%',
            height: size === 'small' ? 40 : 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            start={[0, 0]}
            style={{
              width: width || '100%',
              height: size === 'small' ? 40 : 45,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon && (
              <Ionicons
                name={icon}
                size={size === 'small' ? 18 : 24}
                color={Colors.foreground}
                className="me-2"
              />
            )}
            <ThemedText
              className={`text-foreground ${
                size === 'small' ? 'text-xl' : 'text-xl'
              } text-center`}
              fontWeight={size === 'small' ? '' : 'medium'}
            >
              {title}
            </ThemedText>
          </LinearGradient>
        </Pressable>
      )}
    </>
  );
};

export default ThemedButton;
