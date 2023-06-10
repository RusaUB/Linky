import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Colors, TypographyColors } from '../../constants/theme';
import EventAgenda from './EventAgenda';

const EventsScreen = () => {
  const [selected, setSelected] = useState('');

  const today = new Date().toJSON().slice(0,10).toString()
  console.log(today)

  return (
    <ScrollView className="bg-white p-3">
      <View className="shadow-sm">
        <Calendar
          className="p-5"
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
              selectedColor: TypographyColors.purple,
            },
            '2023-06-03': {
              selected: true,
              marked: true,
              selectedColor: Colors.orange,
            },
            [today]: {
              selected: true,
              marked: true,
              selectedColor: TypographyColors.purple,
            },
            '2023-06-11': {
              selected: true,
              marked: true,
              selectedColor: Colors.green,
            },
            '2023-06-28': {
              selected: true,
              marked: true,
              selectedColor: Colors.red,
            },
          }}
        />
      </View>

      <View className="mt-5">
        <EventAgenda date={selected} />
      </View>
    </ScrollView>
  );
};

export default EventsScreen;