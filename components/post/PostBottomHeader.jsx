import { View, Text } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const PostBottomHeader = () => {
  return (
    <View className="flex-row justify-between p-2">
      <View className="flex-row items-center opacity-70 space-x-1">
        <SimpleLineIcons name="like" />
        <Text>256k</Text>
      </View>
      <View className="flex-row items-center opacity-70 space-x-1">
        <MaterialCommunityIcons name="comment-outline" />
        <Text>256k</Text>
      </View>
      <View className="flex-row items-center opacity-70 space-x-1">
        <SimpleLineIcons name="people" />
        <Text>256k</Text>
      </View>
    </View>
  );
}

export default PostBottomHeader