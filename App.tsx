import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
