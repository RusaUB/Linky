import React from 'react';
import {Button} from 'react-native-paper';

const CategotyCard = ({style}) => {
  return (
    <Button
      style={[{width: 100}, style]} // Use spread operator to combine styles
      icon="music"
      mode="contained"
      onPress={() => console.log('Pressed')}>
      Music
    </Button>
  );
};

export default CategotyCard;
