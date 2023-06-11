import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native';

import ExploreScreen from '../explore/ExploreScreen';
import EventsScreen from './EventsScreen';
import {TypographyColors} from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

const EventsStack = () => {
  return (
    <SafeAreaView style={{flex: 1}} className="bg-white">

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: TypographyColors.purple,
          },
          tabBarIndicatorContainerStyle: {},
        }}>
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Calendar" component={EventsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default EventsStack;
