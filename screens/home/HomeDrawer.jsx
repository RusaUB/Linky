import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';

import HomeStack from '../HomeStack';
import {Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../components/main/SearchBar';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, onPress, icon}) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row space-x-2 items-center my-3">
    {icon}
    <Text className="font-light text-base">{label}</Text>
  </TouchableOpacity>
);

const HomeDrawer = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeStack}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = ({navigation}) => {
  const navigateToTabScreen = screenName => {
    navigation.navigate('Home', {
      screen: screenName,
    });
  };

  return (
    <SafeAreaView className="m-5">
      <View className="flex-row items-center space-x-4 mt-4">
        <Image
          source={require('../../assets/images/avatar-male.jpg')}
          className="h-[60] w-[60] rounded-full"
        />
        <Text className="font-bold text-sm">Username</Text>
      </View>
      <View className = 'mt-10'>
        <SearchBar active={false} onPressIn={()=>{navigation.navigate('Search')}} />
      </View>
      <View className="mt-5">
        <CustomDrawerItem
          label="My Profile"
          onPress={() => navigateToTabScreen('Profile')}
          icon={<Feather name="user" size={17} color="#767676" />}
        />
        <CustomDrawerItem
          label="Message"
          onPress={() => {}}
          icon={
            <MaterialCommunityIcons
              name="message-outline"
              size={17}
              color="#767676"
            />
          }
        />
        <CustomDrawerItem
          label="Calendar"
          onPress={() => {
            navigation.navigate('Home', {
              screen: 'Events',
              params: {screen: 'Calendar'},
            });
          }}
          icon={<Feather name="calendar" size={17} color="#767676" />}
        />
        <CustomDrawerItem
          label="Bookmark"
          onPress={() => {}}
          icon={<Feather name="bookmark" size={17} color="#767676" />}
        />
        <CustomDrawerItem
          label="Settings"
          onPress={() => {}}
          icon={<Feather name="settings" size={17} color="#767676" />}
        />
        <CustomDrawerItem
          label="Helps & FAQs"
          onPress={() => {}}
          icon={
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={17}
              color="#767676"
            />
          }
        />
        <CustomDrawerItem
          label="Sing Out"
          onPress={() => {}}
          icon={<Feather name="log-out" size={17} color="#767676" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeDrawer;
