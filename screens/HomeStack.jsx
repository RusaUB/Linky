import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddScreen from './add/AddScreen';
import MapScreen from './map/MapScreen';
import ProfileScreen from './profile/ProfileScreen';
import HomeScreen from './home/HomeScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {TypographyColors} from '../constants/theme';

import MessageScreen from './message/MessageScreen';

import LottieView from 'lottie-react-native';
import {useEffect, useRef} from 'react';

import HomeAnimation from '../assets/icons/home.json';
import MessageAnimation from '../assets/icons/chat.json';
import ProfileAnimation from '../assets/icons/profile-navbar.json';
import MapAnimation from '../assets/icons/map.json';

import {Animated} from 'react-native';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        
        tabBarIcon: ({size, focused}) => {
          let sourceFile;
          let isIcon = true;
          switch (route.name) {
            case 'HomeScreen':
              sourceFile = HomeAnimation;
              break;
            case 'Map':
              sourceFile = MapAnimation;
              break;
            case 'Message':
              sourceFile = MessageAnimation;
              break;
            case 'Profile':
              isIcon = false;
              break;
          }
          return isIcon ? (
            <LottieView source={sourceFile} loop={false} autoPlay={focused} />
          ) : (
            <Image
              source={require('../assets/images/avatar-male.jpg')}
              className="w-[30] h-[30] rounded-full"
            />
          );
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        headermode="none"
        options={{
          headerShown: false,
          tabBarActiveTintColor: TypographyColors.purple,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarActiveTintColor: TypographyColors.purple,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle" size={35} color={TypographyColors.purple} />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        listeners={{
          tabPress: () => {
            // Make lottieView of message to play
          },
        }}
        options={{
          tabBarActiveTintColor: TypographyColors.purple,
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeStack;
