import React from 'react';
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper';

interface ButtonProps extends PaperButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onPress, ...props }) => (
  <PaperButton mode='contained' onPress={onPress} {...props}>
    {children}
  </PaperButton>
);

export default Button;
