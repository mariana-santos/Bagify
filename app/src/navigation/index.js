import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Onboarding from '../pages/Onboarding';

import Login from '../pages/Login';

import Step1 from '../pages/Register/Step1';
import Step2 from '../pages/Register/Step2';
import Step3 from '../pages/Register/Step3';
import Step4 from '../pages/Register/Step4';

import Travels from '../pages/Travels';
import TravelDetails from '../pages/TravelDetails';
import DispatchBaggage from '../pages/DispatchBaggage';
import NewBaggageStep1 from '../pages/NewBaggage/NewBaggageStep1';
import NewBaggageStep2 from '../pages/NewBaggage/NewBaggageStep2';
import NewBaggageStep3 from '../pages/NewBaggage/NewBaggageStep3';
import NewBaggageStep4 from '../pages/NewBaggage/NewBaggageStep4';

import Baggages from '../pages/Baggages';

import Settings from '../pages/Settings';
import SecurityAndPrivacy from '../pages/SecurityAndPrivacy';
import EditSomeData from '../pages/EditSomeData';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { IS_FIRST_ACCESS } from '../utils/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TravelsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Travels" component={Travels} />
    </Stack.Navigator>
  );
}

function BaggagesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Baggages" component={Baggages} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function Home() {
  const tabNavigatorOptions = {
    tabBarOptions: {
      activeTintColor: '#7FB3E2;',
      labelStyle: {
        display: 'none',
      },
      style: { backgroundColor: '#7FB3E2;' },
    },
    screenOptions: ({ route }) => ({
      tabBarIcon: ({ size }) => {
        let iconName;

        if (route.name === 'TravelsStack') iconName = 'plane';
        else if (route.name === 'BaggagesStack') iconName = 'suitcase';
        else iconName = 'ellipsis-v';

        return <FontAwesome name={iconName} size={size} color="#fff" />;
      },
      tabBarStyle: { backgroundColor: '#0B0E14', borderTopColor: '#28303E' },
      headerShown: false,
    }),
  };

  return (
    <Tab.Navigator {...tabNavigatorOptions}>
      <Tab.Screen name="TravelsStack" component={TravelsStack} />
      <Tab.Screen name="BaggagesStack" component={BaggagesStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={`${IS_FIRST_ACCESS ? 'Onboarding' : 'Login'}`}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
        <Stack.Screen name="Step4" component={Step4} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TravelDetails" component={TravelDetails} />
        <Stack.Screen name="DispatchBaggage" component={DispatchBaggage} />
        <Stack.Screen name="NewBaggageStep1" component={NewBaggageStep1} />
        <Stack.Screen name="NewBaggageStep2" component={NewBaggageStep2} />
        <Stack.Screen name="NewBaggageStep3" component={NewBaggageStep3} />
        <Stack.Screen name="NewBaggageStep4" component={NewBaggageStep4} />
        <Stack.Screen name="SecurityAndPrivacy" component={SecurityAndPrivacy} />
        <Stack.Screen name="EditSomeData" component={EditSomeData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
