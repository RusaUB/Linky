import React from 'react'
import { SafeAreaView, View } from 'react-native'

import CardMain from './components/cards/CardMain'


const App = () => {  
  return (
    <SafeAreaView>
    <CardMain type='main'></CardMain>
    <CardMain type='horizontal'></CardMain>
    <CardMain type='mini'></CardMain>
    </SafeAreaView>
  );
}

export default App;