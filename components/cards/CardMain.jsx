import {Image, View} from 'react-native';
import React from 'react';
import FontText from '../text/FontText';
import {TypographyColors} from '../../constants/theme';
import {TouchableOpacity} from 'react-native';
import GoingList from './GoingList';
import Icon from 'react-native-vector-icons/Octicons';

const CardMain = () => {
  return (
    <TouchableOpacity
      style={{width: 280, borderRadius: 10}}
      className="ml-2 shadow p-3 border-gray-50 bg-white">
      <Image
        style={{height: 131, width: '100%', borderRadius: 10}}
        source={require('../../assets/images/bg-japan.jpg')}
      />
      <FontText
        marginTop={10}
        color={TypographyColors.purple}
        fontSize={12}
        fontWeight={'medium'}>
        SAT,APR 24 • 1:30 PM
      </FontText>
      <FontText fontWeight={'bold'} marginTop={3}>
        Women's Leadership Conference
      </FontText>
      <View className="flex-row" style={{alignItems: 'center'}}>
        <Icon
          name="location"
          size={12}
          style={{marginRight: 5, opacity: 0.4}}
        />
        <FontText opacity={0.6} fontSize={12} marginTop={3}>
          53 Bush St • San Francisco, CA
        </FontText>
      </View>
      <View className="mt-2">
        <GoingList />
      </View>
    </TouchableOpacity>
  );
};

export default CardMain;
