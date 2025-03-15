import './global.css';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { OPEN_SANS_REGULAR } from './utils/const';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './components/navigation/app.navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [loaded, error] = useFonts({
    [OPEN_SANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
