// Short - cut :-  rnfe :- React-native functional Component 


import { View, Text, SafeAreaView, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const Project2App = () => {
  return (
      

    <SafeAreaView>
        <ScrollView>


          <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Project2App