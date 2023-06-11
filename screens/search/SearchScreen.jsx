import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchBar from '../../components/main/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchScreen = ({navigation: {goBack}}) => {
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-full w-full mt-2">
        <View className="flex-row items-center px-2 space-x-3">
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}>
            <FontAwesome name="angle-left" size={25} />
          </TouchableOpacity>
          <View className="flex-1">
            <SearchBar active={true} autoFocus={true}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
