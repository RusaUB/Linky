import {View, Text, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import {TypographyColors} from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const HomeNavbar = () => {
  navigation = useNavigation();
  return (
    <View className="space-y-1 bg-white">
      <View className="bg-white flex-row justify-between px-3">
        <View className="flex-row items-center">
          <TouchableOpacity
            className="opacity-50"
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Ionicons name="menu-outline" size={25} />
          </TouchableOpacity>
          <View className="ml-2 w-[30] h-[30]">
            <Image
              source={require('../../assets/images/avatar-male.jpg')}
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home', {
                screen: 'HomeScreen',
                params: {screen: 'CalendarComponent'},
              });
            }}>
            <View
              style={{backgroundColor: TypographyColors.purple, zIndex: 999}}
              className="w-3 h-3 absolute -top-0.5 -right-1 rounded-full items-center justify-center"></View>
            <Feather name="calendar" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default HomeNavbar;
