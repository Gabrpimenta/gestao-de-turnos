import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/atoms/Header';
import Text from '../components/atoms/Text';
import CalendarComponent from '../components/molecules/Calendar';
import { useTheme } from 'react-native-paper';

const SearchScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Header title='Click Nurse' />
      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            {
              color: theme.colors.primary,
            },
          ]}
          variant='regular'
        >
          Escolha seu turno
        </Text>
        <CalendarComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SearchScreen;
