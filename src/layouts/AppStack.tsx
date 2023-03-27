import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardStack} from '~/features/dashboard';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="DashboardStack"
        component={DashboardStack}
      />
    </Stack.Navigator>
  );
};

export {AppStack};
