import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { CartProvider } from './src/hooks/cart';
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
      <CartProvider>
        <StatusBar 
          barStyle='dark-content' 
          backgroundColor='transparent'
          translucent 
        />

        <Routes />
      </CartProvider>
    </ThemeProvider>
  );
}