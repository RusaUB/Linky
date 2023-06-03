import {Image, View, useColorScheme} from 'react-native';
import React from 'react';
import FontText from '../text/FontText';
import {TypographyColors} from '../../constants/theme';
import {TouchableOpacity} from 'react-native';
import GoingList from './GoingList';
import { DarkModeColors } from '../../constants/theme';

import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const CardMain = ({type = 'main'}) => {

  let width = 280;
  let titleMarginTop = 3;
  let flexDirection = '';
  let horizontalImageWidth = undefined;

  colorScheme = useColorScheme();
  isDarkMode = colorScheme === 'dark'

  console.log(isDarkMode)

  if(type=='mini'){
    width = 220;
    titleMarginTop = 10;
  }

  if(type=='horizontal'){
    flexDirection = 'row';
    horizontalImageWidth = 110;
  }


  return (
    <TouchableOpacity>
      <View
        style={[
          type === 'horizontal' ? null : {width: width},
          isDarkMode
            ? {backgroundColor: DarkModeColors.black}
            : {backgroundColor: 'white'},
          {borderRadius: 10, flexDirection: flexDirection},
        ]}
        className="mx-2 shadow p-3 border-gray-50">
        <View style={{width: horizontalImageWidth}}>
          {type == 'mini' ? (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(253, 255, 252, 0.7)',
              }}
              className="absolute z-10 rounded-xl top-2 left-2">
              <FontText color={'#f07b91'} fontWeight={'bold'}>
                10
              </FontText>
              <FontText fontSize={12} color={'#f07b91'} fontWeight={'bold'}>
                JUNE
              </FontText>
            </View>
          ) : null}
          {type == 'mini' ? (
            <TouchableOpacity
              onPress={() => {
                console.log('bookmark');
              }}
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(253, 255, 252, 0.8)',
              }}
              className="absolute z-10 rounded-md top-2 right-2">
              <MaterialIcon name="bookmark" size={17} color="#f07b91" />
            </TouchableOpacity>
          ) : null}
          <Image
            style={[
              {width: '100%', borderRadius: 10},
              type === 'horizontal' ? {height: 100} : {height: 141},
            ]}
            source={require('../../assets/images/bg-japan.jpg')}
          />
        </View>
        <View
          style={[type === 'horizontal' ? {flex: 1, marginLeft: 10} : null]}>
          {type == 'main' || type == 'horizontal' ? (
            <FontText
              marginTop={10}
              color={TypographyColors.purple}
              fontSize={12}
              fontWeight={'medium'}>
              SAT,APR 24 • 1:30 PM
            </FontText>
          ) : null}
          {type == 'horizontal' ? (
            <TouchableOpacity
              onPress={() => {
                console.log('bookmark');
              }}
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="absolute z-10 rounded-md top-0 right-0">
              <MaterialIcon name="bookmark" size={20} color="#f07b91" />
            </TouchableOpacity>
          ) : null}
          <FontText
            fontWeight={'bold'}
            marginTop={titleMarginTop}
            color={isDarkMode ? 'white' : null}>
            Women's Leadership Conference
          </FontText>
          <View className="flex-row" style={{alignItems: 'center'}}>
            <Icon
              name="location"
              size={12}
              style={{marginRight: 5, opacity: isDarkMode ? null : 0.4}}
              color = {isDarkMode ? DarkModeColors.gray : null}
            />
            <FontText
              opacity={isDarkMode ? null : 0.6}
              fontSize={12}
              marginTop={3}
              color={isDarkMode ? DarkModeColors.gray : null}>
              53 Bush St • San Francisco, CA
            </FontText>
          </View>
          <View className="mt-2">
            <GoingList />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMain;
