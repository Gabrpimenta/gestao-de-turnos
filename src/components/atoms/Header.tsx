import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import Text from './Text';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const theme = useTheme();
  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.inversePrimary,
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ color: theme.colors.surface }} variant='bold'>
        {title}
      </Text>
    </Appbar.Header>
  );
};

export default Header;
