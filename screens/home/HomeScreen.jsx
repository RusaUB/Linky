import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import HomeNavbar from './HomeNavbar';
import {VibrancyView} from '@react-native-community/blur';
import EventCard from '../../components/explore/EventCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}} className="bg-white">
      <ScrollView showsVerticalScrollIndicator = {false}>
        <HomeNavbar />
        <View className = 'p-3'>
          <EventCard />
          <EventCard />
          <EventCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;