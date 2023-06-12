import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LocationCard from '../../components/explore/LocationCard'
import EventCard from '../../components/explore/EventCard'
import CategoryCard from '../../components/explore/CategoryCard'
import Octicon from 'react-native-vector-icons/Octicons'
import CardInline from '../../components/explore/CardInline'
import { Image } from 'react-native'

import { eventsData } from '../../constants/datas'
import { VibrancyView } from '@react-native-community/blur'

const ExploreScreen = ({navigation}) => {
  return (
    <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <View className="mt-1 mb-1 p-3">
          <Text className="font-extralight text-xs mb-1">Find events in</Text>
          <LocationCard
            location={'Paris'}
            fontSize={20}
            fontWeight={'bold'}
            iconSize={20}
          />
        </View>

        <View className="p-3">
          <EventCard />
        </View>

        <ScrollView
          horizontal={true}
          className="my-5 pl-3"
          showsHorizontalScrollIndicator={false}>
          <CategoryCard style={{marginRight: 10}} />
          <CategoryCard style={{marginRight: 10}} />
          <CategoryCard style={{marginRight: 10}} />
          <CategoryCard />
        </ScrollView>

        <View className="p-3">
          <View className="flex-row justify-between items-center">
            <Text>Upcoming Events</Text>
            <TouchableOpacity className="flex-row items-center space-x-1 opacity-30">
              <Text>See All</Text>
              <Octicon name="triangle-right" size={15} />
            </TouchableOpacity>
          </View>
          {eventsData.map(item => (
            <CardInline item={item} key={item.id} />
          ))}
        </View>
    </ScrollView>
  );
}

export default ExploreScreen