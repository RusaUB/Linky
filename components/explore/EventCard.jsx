import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { TypographyColors } from '../../constants/theme'
import LocationCard from './LocationCard'

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
        {newEvent ? (
          <View
            className="absolute right-2 top-2 p-2 rounded-md"
            style={{
              backgroundColor: TypographyColors.purple,
            }}>
            <Text className="text-white">New</Text>
          </View>
        ) : null}
      </View>
      <Card.Content className="mt-2 space-y-1">
        <Text style={{fontWeight: 200}}>Mon, Apr 18 • 21:00 pm</Text>
        <Text style={{fontWeight: 'bold', fontSize : 17}}>House of Culture of Japan</Text>
        <LocationCard marginTop={5} opacity={0.5} location={'101 bis Quai Jacques Chirac, 75015'} />
      </Card.Content>
    </Card>
  );
}

export default EventCard