import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Buscar'
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.colors.surface,
              paddingVertical: 10,
            },
            tabBarIcon: () => (
              <Icon name='search' size={15} color={theme.colors.primary} />
            ),
            tabBarLabelStyle: {
              color: theme.colors.primary,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
