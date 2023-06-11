import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import { Text } from 'react-native';

const SearchBar = ({onPressIn,autoFocus,active}) => {

  const renderedSearch = () => {
    return (
      <TouchableOpacity
        onPress={onPressIn}
        activeOpacity={1} 
        className = 'flex-1'>
        <Text className="text-gray-400">Search</Text>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView>
      <View className="bg-gray-100 flex-row items-center space-x-2 p-1 py-2 rounded-md">
        <View className="ml-1 opacity-50">
          <Ionicons name="search" size = {15} />
        </View>
        {active ? (
          <TextInput
            placeholder="Search"
            className="flex-1"
            onPressIn={onPressIn}
            returnKeyType="search"
            autoFocus={autoFocus ? true : false}
          />
        ) : (
          renderedSearch()
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchBar;
