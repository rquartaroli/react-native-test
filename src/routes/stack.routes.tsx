import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';

export type RootStackParamList = {
  SignIn: undefined;
};

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}