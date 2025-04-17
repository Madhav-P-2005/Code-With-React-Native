// Short Cut :-   rnfes

import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  

  return (
    <View>
      <Text style={styles.headingText }>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>  Tap </Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>  Me </Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>  Scroll </Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text>  More... </Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text> 🥳 </Text>
        </View>
      </ScrollView>
      
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({

  whiteText:{
    color : '#FFFFFF'
  },
  darkText:{
    color :'#000000'
  },
   headingText:{
        fontSize: 34,
        fontWeight:'bold',
        paddingHorizontal:10,

    },
    container:{
        padding : 8
    },
    card:{
        width:100,
        height:100,
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        borderRadius:4,
        margin:8,

    },
    cardElevated:{
       backgroundColor:'#CAD5E2',
      //  elevation:4   // Useful for 4K screenings
      shadowOffset:{
          width:100,
          height:100,
      },
      shadowColor:'purple',
      shadowOpacity:0.4,   // Number ranges from 0 to  1
      shadowRadius:23
    }

})