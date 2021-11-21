import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Schools } from '../screens/Schools';
import { LoadingPage } from '../screens/LoadingPage';
import { FeedPage } from '../screens/FeedPage';

export type RootStackParamList = {
  SignIn: undefined;
  Schools: undefined;
  LoadingPage: {
    imageUrl: string,
    contexto: string,
    token: string,
    nameSchool: string,
  };
  FeedPage: {
    imageUrl: string,
    nameSchool: string,
  };
};

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Schools"
        component={Schools}
      />
      <Screen
        name="LoadingPage"
        component={LoadingPage}
      />
      <Screen
        name="FeedPage"
        component={FeedPage}
      />
    </Navigator>
  )
}