import { StyleSheet, ImageBackground } from 'react-native'
import CarouselCards from './src/components/Carousel/CarouselCards'

import Onboarding from './src/pages/Onboarding';
import Home from './src/pages/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={ Onboarding } />
        <Stack.Screen name="Home" component={ Home } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}