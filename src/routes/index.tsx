import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import CharactersList from '../pages/CharactersList';
import CharacterOverView from '../pages/CharacterOverView';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#c4c4c4' },
    }}
  >
    <App.Screen name="Welcome" component={Welcome} />
    <App.Screen name="CharactersList" component={CharactersList} />
    <App.Screen name="CharacterOverView" component={CharacterOverView} />
  </App.Navigator>
);

export default AppRoutes;
