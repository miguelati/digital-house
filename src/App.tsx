import React from 'react';
import Config from 'react-native-config';
import {NavigationContainer} from '@react-navigation/native';
import {configureClient} from '~/api/client';
import {AppStack} from '~/layouts';
import {QueryClient, QueryClientProvider} from 'react-query';

configureClient({
  baseURL: Config.API_URL,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 48,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient} contextSharing>
        <AppStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
