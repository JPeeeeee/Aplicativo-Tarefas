import 'react-native-gesture-handler'
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./src/assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./src/assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('./src/assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Thin': require('./src/assets/fonts/Poppins/Poppins-Thin.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Routes/>
    </NavigationContainer>
  );
}

