import {
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import HomeNavbar from './HomeNavbar';

import {Animated} from 'react-native';
import CalendarWidget from './CalendarWidget';
import Post from './Post';
import {postDatas} from '../../constants/datas';

import EventsScreen from '../events/EventsScreen';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HEADER_HEIGHT = 20;
const OPACITY_THRESHOLD = 0.5;

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}} className = 'bg-white'>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{display:'none'}
      }}>
        <Tab.Screen name="HomeComponent" component={HomeScreenComponent} />
        <Tab.Screen name="CalendarComponent" component={EventsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const HomeScreenComponent = () => {
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const headerOpacity = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const handleScrollEnd = () => {
    const opacity = Number(JSON.stringify(headerOpacity));

    if (typeof opacity === 'number' && !isNaN(opacity)) {
      if (opacity >= OPACITY_THRESHOLD) {
        // Show the header
        if (opacity !== 1) {
          scrollY.setValue(0);
        }
      } else {
        // Hide the header
        if (opacity !== 0) {
          scrollY.setValue(HEADER_HEIGHT);
        }
      }
    } else {
      // Handle the case where headerOpacity is not a valid number
      console.log('Invalid headerOpacity value');
    }
  };

  return (
    <View className="bg-white flex-1">
      {/* HEADER */}
      <Animated.View
        style={{
          elevation: 10,
          opacity: headerOpacity,
          height: HEADER_HEIGHT,
          transform: [
            {
              translateY: headerY,
            },
          ],
        }}
        className="absolute mt-0 z-10 w-full">
        <HomeNavbar />
      </Animated.View>

      {/* BODY */}
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScrollEndDrag={handleScrollEnd}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {y: scrollY}},
          },
        ])}
        showsVerticalScrollIndicator={false}>
        <View className="p-3 mt-6">
          {/* TO DO : GET DAY FROM SERVER-SIDE IN REAL TIME */}

          <CalendarWidget />
          <View className="mt-5">
            {postDatas.map((item, index) => (
              <View key={index}>
                <Post item={item} />
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;