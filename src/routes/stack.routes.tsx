import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Schools } from '../screens/Schools';
import { LoadingPage } from '../screens/LoadingPage';

export type RootStackParamList = {
  SignIn: undefined;
  Schools: undefined;
  LoadingPage: {
    imageUrl: string,
    contexto: string,
    token: string,
  }
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
        name="LoadingPage"
        component={LoadingPage}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}