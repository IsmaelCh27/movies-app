import { Text, type TextProps } from 'react-native';

interface Props extends TextProps {
  fontWeight?:
    | 'light'
    | 'normal'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | '';
  className?: string;
}

const ThemedText = ({ fontWeight, className, ...rest }: Props) => {
  return (
    <Text
      className={[
        'text-foreground font-open-sans',
        fontWeight === 'light' ? 'font-open-sans-light' : '',
        fontWeight === 'normal' ? 'font-open-sans' : '',
        fontWeight === 'medium' ? 'font-open-sans-medium' : '',
        fontWeight === 'semiBold' ? 'font-open-sans-semibold' : '',
        fontWeight === 'bold' ? 'font-open-sans-bold' : '',
        fontWeight === 'extraBold' ? 'font-open-sans-extrabold' : '',
        className,
      ].join(' ')}
      {...rest}
    />
  );
};

export default ThemedText;
