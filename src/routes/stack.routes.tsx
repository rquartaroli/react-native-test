import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Schools } from '../screens/Schools';

export type RootStackParamList = {
  SignIn: undefined;
  Schools: undefined;
};

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Schools"
        component={Schools}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}