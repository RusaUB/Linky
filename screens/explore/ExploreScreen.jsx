import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import EventCard from '../../components/explore/EventCard';
import LocationCard from '../../components/explore/LocationCard';
import CardInline from '../../components/explore/CardInline';
import Octicons from 'react-native-vector-icons/Octicons';
import {IconButton, MD3Colors} from 'react-native-paper';
import CategotyCard from '../../components/explore/CategotyCard';

const ExploreScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="p-3 bg-white">
        <View className="mt-2 mb-7">
          <Text className="font-extralight text-xs mb-1">Find events in</Text>
          <LocationCard
            fontSize={20}
            fontWeight={'bold'}
            iconSize={20}
            location={'Barcelona'}
          />
        </View>

        <View>
          <EventCard />
        </View>

        <ScrollView horizontal = {true} className = 'my-5' showsHorizontalScrollIndicator = {false}>
          <CategotyCard style={{marginRight : 10}} />
          <CategotyCard style={{marginRight : 10}} />
          <CategotyCard style={{marginRight : 10}} />
          <CategotyCard style={{marginRight : 10}} />
        </ScrollView>

        <View>
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-medium">Upcoming Events</Text>
            <TouchableOpacity className="flex-row items-center space-x-1 opacity-30">
              <Text className="text-xs">See All</Text>
              <Octicons name="triangle-right" size={15} />
            </TouchableOpacity>
          </View>
          <CardInline />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExploreScreen