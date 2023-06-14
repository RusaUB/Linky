import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import HomeNavbar from './HomeNavbar';
import EventCard from '../../components/explore/EventCard';

import {useRef} from 'react';

import {Animated} from 'react-native';

const HEADER_HEIGHT = 20;
const OPACITY_THRESHOLD = 0.1;

const HomeScreen = () => {
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
      if (opacity >= 0.5) {
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
    <SafeAreaView className="bg-white flex-1">
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
        className="absolute mt-10 z-10 w-full">
        <HomeNavbar />
      </Animated.View>

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
        <View className="p-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
