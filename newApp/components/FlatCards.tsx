import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

// Shift + R  :- Hard Reload 

const FlatCards = () => {


  return (
    <View>
      <Text style={styles.headingText} >
        Flat Cards ⭐
      </Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardOne ]}>
            <Text> Red </Text>
        </View>
        <View style={[styles.card ,  styles.cardTwo]}>
            <Text> Green  </Text>
        </View>
        <View style={[styles.card ,  styles.cardThree]}>
            <Text>  Blue  </Text>
        </View>
        <View style={[styles.card ,  styles.cardThree]}>
            <Text>  Blue  </Text>
        </View>
      </View>
    </View>
  );
}

export default FlatCards

const styles = StyleSheet.create({
    whiteText:{
        color : '#FFFFFF'
    },
    darkText:{
        color : ' #000000'
    },
    headingText:{
        fontSize: 34,
        fontWeight:'bold',
        paddingHorizontal:10,

    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:7

    },
    card:{
         flex:1,
         justifyContent:'center',
         alignItems:'center', 
         width:100,
         height:100,
         borderRadius:4,
         margin:8,

    },
    cardOne:{
       backgroundColor:'red'
    },
    cardTwo:{
       backgroundColor:'green'
    },
    cardThree:{
       backgroundColor:'blue'
    }
})