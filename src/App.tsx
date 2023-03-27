import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from '~/layouts';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
