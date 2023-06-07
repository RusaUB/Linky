import { View, Text } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const LocationCard = ({marginTop, opacity, iconSize,location, fontSize, fontWeight}) => {
  return (
    <View className="flex-row" style = {{opacity:opacity, marginTop,marginTop, alignItems : 'center'}}>
      <SimpleLineIcons name="location-pin" size = {iconSize} />
      <Text className ='ml-1' style={{fontSize: fontSize, fontWeight: fontWeight}}>
        {location}
      </Text>
    </View>
  );
}

export default LocationCard