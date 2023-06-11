import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, View} from 'react-native';

import ExploreScreen from '../explore/ExploreScreen';
import EventsScreen from './EventsScreen';
import {TypographyColors} from '../../constants/theme';

import SearchBar from '../../components/main/SearchBar';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const EventsStack = ({navigation}) => {
  navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={{flex: 1}} className="bg-white">
      <View className="mt-2 px-3">
        <SearchBar
          onPressIn={() => {
            handleSearchPress();
          }}
          active={false}
        />
      </View>
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
