import {View, Text} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
import {TypographyColors} from '../../constants/theme';
import {eventsData} from '../../constants/datas';
import CardInline from '../../components/explore/CardInline';
import Swiper from 'react-native-swiper';

import { ImageBackground } from 'react-native';

const CalendarWidget = () => {
  var date = new Date();
  var options = {weekday: 'long'};
  var weekdays = [];

  for (let i = 0; i < 3; i++) {
    var nextDay = new Date(date);
    nextDay.setDate(date.getDate() + i);
    var weekday = new Intl.DateTimeFormat('en-GB', options).format(nextDay);
    weekdays.push(weekday);
  }


  return (
    <View className=" flex-1 bg-white rounded-2xl shadow-sm">
      <Swiper
        className="h-[240]"
        autoplayTimeout={5}
        paginationStyle={{
          position: 'absolute',
          bottom: 3,
        }}
        activeDot={
          <View
            style={{
              backgroundColor: TypographyColors.purple,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        autoplay={true}>
        {weekdays.map((weekday, index) => {
          return (
            <View className="flex-1">
              <View className="flex-row justify-between px-3" key={index}>
                <View
                  className="items-center h-[50] justify-center w-[50] rounded-lg mt-7 mr-4"
                  style={{
                    backgroundColor: '#EEF0FF',
                  }}>
                  <Text
                    style={{color: TypographyColors.purple}}
                    className="font-light">
                    {index === 0 ? 'Today' : `${weekday.slice(0,3)}`}
                  </Text>
                  <Text
                    style={{color: TypographyColors.purple}}
                    className="font-bold text-base">
                    {date.getDate() + index}
                  </Text>
                </View>
                <View className="flex-1">
                  {eventsData.slice(0, 2).map((item, index) => (
                    <CardInline item={item} key={item.id || `item-${index}`} />
                  ))}
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default CalendarWidget;
