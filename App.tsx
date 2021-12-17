import React from 'react';
import { useFonts } from 'expo-font';
import { Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';


import theme from './src/styles/theme';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular, 
    Lato_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  );
}