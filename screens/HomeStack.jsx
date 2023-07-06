import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddScreen from './add/AddScreen';
import MapScreen from './map/MapScreen';
import ProfileScreen from './profile/ProfileScreen';
import HomeScreen from './home/HomeScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {TypographyColors} from '../constants/theme';
import Fontisto from 'react-native-vector-icons/Fontisto'

import MessageScreen from './message/MessageScreen';

import LottieView from 'lottie-react-native';
import HomeAnimation from '../assets/icons/home.json';
import MessageAnimation from '../assets/icons/chat.json';
import MapAnimation from '../assets/icons/map.json';

import {View} from 'react-native';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({size, color, focused}) => {
          let sourceFile;
          let isLottie;
          let iconName;
          let customIcon;

          switch (route.name) {
            case 'HomeScreen':
              sourceFile = HomeAnimation;
              iconName = 'home';
              break;
            case 'Map':
              sourceFile = MapAnimation;
              iconName = 'map-marker-alt';
              break;
            case 'Message':
              isLottie = true;
              sourceFile = MessageAnimation;
              break;
            case 'Profile':
              customIcon = (
                <View className="w-[30] h-[30]">
                  <Image
                    source={require('../assets/images/avatar-male.jpg')}
                    className="w-full h-full rounded-full"
                  />
                </View>
              );
              break;
          }
          return (
            <>
              {isLottie ? (
                <LottieView source={sourceFile} autoPlay={focused} />
              ) : null}
              {customIcon ? customIcon : null}
              {iconName ? (
                <Fontisto name={iconName} color={color} size={20} />
              ) : null}
            </>
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
