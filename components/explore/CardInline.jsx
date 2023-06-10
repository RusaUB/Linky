import React from 'react';
import {View, Image} from 'react-native';
import {List, Text} from 'react-native-paper';
import LocationCard from './LocationCard';
import {TypographyColors} from '../../constants/theme';

const CardInline = ({item}) => {
  return (
    <View>
      <List.Item
        key={item.id}
        className = 'p-2'
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
    </View>
  );
};

export default CardInline;