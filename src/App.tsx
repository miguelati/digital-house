import React from 'react';
import Config from 'react-native-config';
import {NavigationContainer} from '@react-navigation/native';
import {configureClient} from '~/api/client';
import {AppStack} from '~/layouts';

configureClient({
  baseURL: Config.API_URL,
});

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
