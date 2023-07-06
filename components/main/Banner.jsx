import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { BlurView } from '@react-native-community/blur';

const Banner = ({item}) => {
    const screenWidth = Dimensions.get('screen').width
  return (
    <View
      className="mr-3 p-2 bg-white shadow-sm rounded-xl"
      style={{
        width: screenWidth / 1.75,
      }}>
      <View>
        <Image
          className="h-[130] w-full rounded-xl"
          resizeMode="cover"
          source={item.src}
        />
        <BlurView
          blurType="materialLight"
          blurAmount={20}
          style={{position: 'absolute', padding: 3, margin: 4}}>
          <Text style={{color: item.color}} className="font-bold text-center">
            10
          </Text>
          <Text style = {{color: item.color}} className="text-xs font-light">JUNE</Text>
        </BlurView>
        <BlurView
          blurType="materialLight"
          blurAmount={20}
          style={{position: 'absolute', padding: 5, margin: 4, right: 0}}>
          <MaterialIcons name="bookmark" size={20} color={item.color} />
        </BlurView>
      </View>
      <Text className="text-sm font-medium mt-2">Lorem Ipsum</Text>
    </View>
  );
}

export default Banner