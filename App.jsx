import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import HomeScreen from './screens/HomeStack';
import {PaperProvider} from 'react-native-paper';

import { DefaultTheme } from 'react-native-paper';
import SearchScreen from './screens/search/SearchScreen';

import EventAgenda from './screens/events/modal/EventAgenda';
import HomeDrawer from './screens/home/HomeDrawer';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5669FF',
    secondary: '#00F8FF',
    background : 'white',
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="EventAgenda"
            component={EventAgenda}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;