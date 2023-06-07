import React from 'react';
import {Text, View} from 'react-native';
import {Button, Card} from 'react-native-paper';
import LocationCard from './LocationCard';
import { TypographyColors } from '../../constants/theme';

const EventCard = () => {
  const newEvent = true;
  return (
    <Card className="bg-gray-100 shadow-sm">
      <View>
        <Card.Cover
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/005/433/002/original/japanese-culture-art-design-free-vector.jpg',
          }}
        />
        {newEvent ? 
        <View style = {{backgroundColor:TypographyColors.purple}} className = 'absolute right-2 top-2 p-2 rounded-md'>
          <Text className = 'text-white'>New</Text>
        </View> : null}
      </View>
      <Card.Content className="mt-2 space-y-1">
        <Text style={{fontWeight: 200}}>Mon, Apr 18 • 21:00 Pm </Text>
        <Text style={{fontWeight: 'bold', fontSize: 17}}>
          Japan Culture House
        </Text>
        <LocationCard
          marginTop={5}
          opacity={0.5}
          location={'Palau Sant Jordi, Barcelona'}
        />
      </Card.Content>
    </Card>
  );
};

export default EventCard;
