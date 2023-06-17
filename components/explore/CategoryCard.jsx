import React from 'react';
import {Touchable, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';

const CategotyCard = ({style, title, icon, bgColor}) => {
  return (
    <TouchableOpacity
      style={[{backgroundColor: bgColor, style}]}
      className="rounded-full items-center flex-row p-2">
      {icon}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategotyCard;
