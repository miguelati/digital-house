import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './home';
import {Details} from './details';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export {DashboardStack};
