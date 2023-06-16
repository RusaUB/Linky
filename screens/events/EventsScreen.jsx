import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {TypographyColors, Colors} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const EventsScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const today = new Date().toJSON().slice(0, 10).toString();

  const handleDayPress = day => {
    setSelected(day.dateString);
    navigation.navigate('EventAgenda', {date: day.dateString});
  };

  return (
    <View>
      <MemoizedCalendarList
        onDayPress={handleDayPress}
        selected={selected}
        today={today}
      />
    </View>
  );
};

const CalendarListMemo = ({onDayPress, selected, today}) => (
  <CalendarList
    onDayPress={onDayPress}
    markedDates={{
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedDotColor: 'orange',
        selectedColor: TypographyColors.purple,
      },
      '2023-06-03': {
        selected: true,
        marked: false,
        selectedColor: Colors.orange,
      },
      [today]: {
        selected: true,
        marked: true,
        selectedColor: TypographyColors.purple,
      },
      '2023-06-20': {
        selected: true,
        marked: false,
        selectedColor: Colors.green,
      },
      '2023-06-28': {
        selected: true,
        marked: false,
        selectedColor: Colors.red,
      },
    }}
  />
);

const MemoizedCalendarList = React.memo(CalendarListMemo);

export default EventsScreen;
