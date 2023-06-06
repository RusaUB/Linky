import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Touchable, TouchableOpacity, View} from 'react-native'

import ExploreScreen from './explore/ExploreScreen';
import EventsScreen from './events/EventsScreen';
import AddScreen from './add/AddScreen';
import MapScreen from './map/MapScreen';
import ProfileScreen from './profile/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { TypographyColors } from '../constants/theme';



const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        headermode="none"
        options={{
          headerShown: false,
          tabBarIcon: ({color = TypographyColors.purple, size}) => (
            <Icon name="compass" color={color} size={size} />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={(size = 24)} />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
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
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="location" color={color} size={(size = 24)} />
          ),
          tabBarActiveTintColor: TypographyColors.purple,
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
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeScreen;