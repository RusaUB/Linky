import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View className="bg-gray-100 flex-row items-center space-x-2 p-1 py-2 rounded-md">
      <View className = 'ml-1 opacity-50'>
        <Ionicons name="search" />
      </View>
      <TextInput placeholder="Search" className="flex-1" />
    </View>
  );
}

export default SearchBar