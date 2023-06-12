import { View, Text } from 'react-native'
import React from 'react'


function CustomTabBar({state, descriptors, navigation, position}) {
  const inputRange = state.routes.map((_, i) => i);

  const screenWidth = Dimensions.get('window').width;
  const tabWidth = screenWidth / state.routes.length;

  const translateX = Animated.multiply(state.index, tabWidth);

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
        });

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center'}}
            className="h-10 items-center justify-center">
            <Animated.Text style={{opacity}}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
      <Animated.View
        style={{
          position: 'absolute',
          height: 2,
          width: tabWidth / 2,
          backgroundColor: TypographyColors.purple,
          bottom: 0,
          transform: [{translateX: Animated.add(translateX, tabWidth / 4)}],
        }}
      />
    </View>
  );
}

export default CustomTabBar;