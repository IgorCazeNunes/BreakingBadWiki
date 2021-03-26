import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { CharacterListProvider } from './hooks/characterList';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#333333" />

      <CharacterListProvider>
        <Routes />
      </CharacterListProvider>
    </NavigationContainer>
  );
};

export default App;
