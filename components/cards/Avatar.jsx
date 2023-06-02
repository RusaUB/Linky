import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Avatar = ({width,height,position,marginLeft,zIndex,img}) => {
    if (!width){
        width=25
    }

    if(!height){
        height=25
    }

  return (
      <Image
        className="rounded-full"
        style={{
          borderColor: 'white',
          borderWidth: 2,
          width: width,
          height: height,
          position: position,
          marginLeft: marginLeft,
          zIndex: zIndex,
          elevation: zIndex,
        }}
        source={img}
      />
  );
}

export default Avatar