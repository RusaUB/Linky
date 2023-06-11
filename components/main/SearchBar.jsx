import {View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';

const DismissKeyboardHOC = Comp => {
  return ({children, ...props}) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View);

const SearchBar = ({onPressIn,autoFocus}) => {
  return (
    <DismissKeyboardView>
      <KeyboardAvoidingView>
        <View className="bg-gray-100 flex-row items-center space-x-2 p-1 py-2 rounded-md">
          <View className="ml-1 opacity-50">
            <Ionicons name="search" />
          </View>
          <TextInput
            placeholder="Search"
            className="flex-1"
            onPressIn={onPressIn}
            returnKeyType="search"
            autoFocus={autoFocus ? true : false}
          />
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboardView>
  );
};

export default SearchBar;
