import {View, Text} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import FontText from '../text/FontText';
import { TypographyColors } from '../../constants/theme';

const GoingList = () => {
  const avatars = [
    require('../../assets/images/avatar-male.jpg'),
    require('../../assets/images/avatar-female.jpg'),
    require('../../assets/images/avatar-female.jpg'),
  ];


  const renderAvatars = avatars.map((avatar, index) => (
    <>
      <Avatar
        key={index}
        position={'absolute'}
        marginLeft={index > 0 ? index * 15 : index}
        zIndex={avatars.length - index}
        
        img={avatar}
      />

    </>
  ));
  return (
    <View className="flex-row" style = {{alignItems:'center'}}>
      <View style={{width: 60, height: 23}}>{renderAvatars}</View>
      <FontText color={TypographyColors.purple} fontWeight={'medium'} fontSize={12}>+20 going</FontText>
    </View>
  );
};

export default GoingList;
