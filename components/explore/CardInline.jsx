import React from 'react';
import {View, Image} from 'react-native';
import {List, Text} from 'react-native-paper';
import LocationCard from './LocationCard';
import { TypographyColors } from '../../constants/theme';

const CardInline = () => {
  const data = [
    {
      id: 1,
      image:
        'https://logowik.com/content/uploads/images/ufc-ultimate-fighting-championship3349.jpg',
      content: 'Item 1',
      location: 'Razzmatazz',
      newEvent: false,
    },
    {
      id: 2,
      image:
        'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png',
      content: 'Item 2',
      location: 'Razzmatazz',
      newEvent: true,
    },
    {
      id: 3,
      image:
        'https://sun9-31.userapi.com/impg/CcsJYDadZ1-MzAWcgTImu1JBD5FltC6QB42nog/RfyCbQihbJM.jpg?size=1552x858&quality=96&sign=eee070a46495dcfdffcdd6fe54f51d48&type=album',
      content: 'Item 3',
      location: 'Razzmatazz',
      newEvent: false,
    },
    {
      id: 4,
      image:
        'https://www.insidesport.in/wp-content/uploads/2023/05/2CADD07C-E4EE-4372-96F9-FEF032A74E87.jpeg?w=496',
      content: 'Item 3',
      location: 'Razzmatazz',
      newEvent: false,
    },
  ];

  return (
    <View>
      {data.map(item => (
        <List.Item
          key={item.id}
          description={
            <View className="align-center">
              <Text style={{fontWeight: 200}}>Mon, Apr 18 • 21:00 Pm </Text>
              <Text className="text-lg font-bold">{item.content}</Text>
              <LocationCard
                location={item.location}
                opacity={0.5}
                fontWeight={300}
              />
            </View>
          }
          left={() => (
            <View>
              <Image
                source={{uri: item.image}}
                className="w-20 h-20 rounded-lg"
              />
              {item.newEvent ? (
                <View
                  style={{backgroundColor: TypographyColors.purple}}
                  className="absolute -top-2 -right-2 p-1 rounded-md">
                  <Text className="text-white">New</Text>
                </View>
              ) : null}
            </View>
          )}
        />
      ))}
    </View>
  );
};

export default CardInline;