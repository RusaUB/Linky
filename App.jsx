import React from 'react'
import { SafeAreaView } from 'react-native'

import CardMain from './components/cards/CardMain'


const App = () => {
  return (
    <SafeAreaView>
      <CardMain/>
      <CardMain/>
      <CardMain/>
    </SafeAreaView>
  );
}

export default App;