import React from 'react';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';


import theme from './src/styles/theme';

import { Routes } from './src/routes';

export default function App() {


  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  );
}