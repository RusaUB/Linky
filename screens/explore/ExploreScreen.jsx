import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import EventCard from '../../components/explore/EventCard';
import LocationCard from '../../components/explore/LocationCard';


const ExploreScreen = () => {
  return (
    <ScrollView className="p-3 bg-white">
      <SafeAreaView></SafeAreaView>
      <View className = 'my-5'>
        <Text className = 'font-extralight'>Find events in</Text>
        <LocationCard fontSize={20} fontWeight={'bold'} iconSize={20} location={'Barcelona'} />
      </View>
      <View>
        <EventCard />
      </View>
    </ScrollView>
  );
}

export default ExploreScreen