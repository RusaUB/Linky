import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity,Animated } from 'react-native';
import { useRef } from 'react';
import { Divider } from 'react-native-paper';
import { TypographyColors } from '../../constants/theme';

const HomeNavbar = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.View
      className="space-y-1"
      style={{
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [0, -100],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <View className="bg-white flex-row justify-between px-3">
        <View className="flex-row items-center">
          <TouchableOpacity className="opacity-50">
            <Ionicons name="menu-outline" size={25} />
          </TouchableOpacity>
          <View className="w-10 h-10">
            <Image
              source={require('../../assets/images/avatar.jpg')}
              className="h-full w-full rounded-full"
            />
          </View>
        </View>
        <View className="flex-row space-x-2 items-center">
          <TouchableOpacity>
            <View
              style={{backgroundColor: TypographyColors.purple, zIndex: 999}}
              className="w-3 h-3 absolute -top-0.5 right-0 rounded-full"></View>
            <Ionicons name="ios-notifications-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{backgroundColor: TypographyColors.purple, zIndex: 999}}
              className="w-3 h-3 absolute -top-0.5 -right-1 rounded-full items-center justify-center"></View>
            <Ionicons name="paper-plane-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
    </Animated.View>
  );
}

export default HomeNavbar