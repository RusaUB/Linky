import {View, Text} from 'react-native';
import React from 'react';
import {Colors, TypographyColors} from '../../constants/theme';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategotyCard from '../../components/explore/CategoryCard';

import LinearGradient from 'react-native-linear-gradient';


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
        className="h-[160]"
        autoplayTimeout={10}
        paginationStyle={{
          position: 'absolute',
          bottom: 5,
        }}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: TypographyColors.purple,
              width: 6,
              height: 6,
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
              <View className="justify-between px-3" key={index}>
                {/* TOP CONTENT */}
                <View
                  style={{
                    backgroundColor: '#EEF0FF',
                  }}
                  className="w-full rounded-lg">
                  <View className="absolute right-5 h-full items-center justify-center opacity-30">
                    <FontAwesome name="angle-right" size={20} />
                  </View>

                  <View className="m-2 space-y-1">
                    <Text className="font-light">Lorem Ipsum ⚽️</Text>
                    <Text className="font-light text-xs opacity-60">
                      3:00 pm - 4:00 pm
                    </Text>
                  </View>
                </View>

                <View className="flex-row h-20 pt-3">
                  {/* LEFT CONTENT */}
                  <View className="items-center h-full justify-center w-20 rounded-lg mr-4">
                    <Text className="font-extralight uppercase">
                      {`${weekday}`}
                    </Text>
                    <Text className="font-bold text-3xl">
                      {date.getDate() + index}
                    </Text>
                  </View>

                  <View className="border-r mr-5 opacity-5"></View>

                  {/* RIGHT CONTNETNT */}
                  <View className="flex-1 flex-row items-center space-x-2">
                    <CategotyCard
                      bgColor={Colors.orange}
                      icon={<MaterialIcons name="pets" color="white" />}
                    />
                    <Text className="felx-1 font-light">Lorem Ipsum</Text>
                  </View>
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
