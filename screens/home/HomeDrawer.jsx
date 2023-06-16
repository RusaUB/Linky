import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';

import HomeStack from '../HomeStack';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

const HomeDrawer = () => {
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
    <SafeAreaView>
      <CustomDrawerItem
        label="Home"
        onPress={() => navigateToTabScreen('HomeScreen')}
      />
      <CustomDrawerItem
        label="Events"
        onPress={() => navigateToTabScreen('Events')}
      />
    </SafeAreaView>
  );
};


export default HomeDrawer;