import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: 'regular' | 'bold';
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  variant = 'regular',
  ...props
}) => {
  const fontFamily =
    variant === 'bold' ? 'Poppins_700Bold' : 'Poppins_400Regular';

  return (
    <RNText
      style={[style, { fontSize: 24, paddingVertical: 6, fontFamily }]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
