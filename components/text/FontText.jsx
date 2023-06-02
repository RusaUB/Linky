import { View, Text } from 'react-native'
import React from 'react'
import { TypographyColors } from '../../constants/theme';

const FontText = ({children, fontSize, fontWeight, color, marginTop, marginLeft, marginRight, marginBottom, margin, padding, opacity}) => {
  let fontFamily = 'AirbnbCereal_W_Lt';

  if(!color){
    color = TypographyColors.black;
  }

  if(fontWeight == 'medium'){
    fontFamily = 'AirbnbCereal_W_Md';
  } else if (fontWeight == 'bold') {
    fontFamily = 'AirbnbCereal_W_Bd';
  }

  return (
    <View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: color,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginBottom: marginBottom,
          padding: padding,
          margin: margin,
          opacity : opacity,
        }}>
        {children}
      </Text>
    </View>
  );
}

export default FontText