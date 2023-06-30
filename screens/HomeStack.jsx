import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import AddScreen from './add/AddScreen';
import MapScreen from './map/MapScreen';
import ProfileScreen from './profile/ProfileScreen';
import HomeScreen from './home/HomeScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { TypographyColors } from '../constants/theme';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MessageScreen from './message/MessageScreen';


const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        headermode="none"
        options={{
          headerShown: false,
          tabBarIcon: ({color = TypographyColors.purple, size}) => (
            <Icon name="compass" color={color} size={size} />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="location" color={color} size={(size = 24)} />
          ),
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
        options={{
          tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                color={color}
                name="message"
                size={24}
              />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={(size = 24)} />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeStack;