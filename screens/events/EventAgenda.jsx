import {View, Text} from 'react-native';
import React from 'react';
import CardInline from '../../components/explore/CardInline';
import {TypographyColors} from '../../constants/theme';
import {eventsData} from '../../constants/datas';
import {Image} from 'react-native';

const EventAgenda = ({date}) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  const formatDayAndMonth = dateString => {
    const [_, month, day] = dateString.split('-');
    const formattedMonth = convertToMonth(month);
    const formattedDay = day.startsWith('0') ? day.replace('0', '') : day;

    return {
      formattedMonth,
      formattedDay,
    };
  };

  const convertToMonth = monthString => {
    const monthNumber = parseInt(monthString, 10);
    const date = new Date(null, monthNumber);
    return date.toLocaleString('en-US', {month: 'long'});
  };

  const {formattedMonth, formattedDay} = date
    ? formatDayAndMonth(date)
    : formatDayAndMonth(currentDate);

  // Filter eventsData based on the date
  const filteredEventsData = eventsData.filter(item => {
    const eventDate = item.date?.slice(0, 10);
    return eventDate === date || (!date && eventDate === currentDate);
  });


  return (
    <View className="flex-row">
      <View
        className="items-center h-[50] justify-center w-[50] rounded-lg mt-5"
        style={{
          backgroundColor: '#EEF0FF',
        }}>
        <Text style={{color: TypographyColors.purple}} className="font-light">
          {formattedMonth.slice(0, -1)}
        </Text>
        <Text style={{color: TypographyColors.purple}} className="font-bold">
          {formattedDay}
        </Text>
      </View>

      <View className="flex-1 ml-2">
        {filteredEventsData.length > 0 ? (
          filteredEventsData.map((item, index) => (
            <CardInline item={item} key={item.id || `item-${index}`} />
          ))
        ) : (
          <Image
            style={{width: '100%', height: 300}}
            source={require('../../assets/images/no-event.png')}
          />
        )}
      </View>
    </View>
  );
};

export default EventAgenda;
