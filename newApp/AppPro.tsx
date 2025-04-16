import React, {JSX} from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Note :- The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module.


  return (
    <View style={styles.constainer}>
      <Text style={isDarkMode ? styles.darkText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
    // In react Native world the alignItems shifts the elements from left to right . 

    // JustifyContent works from top to bottom .
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: ' #000000',
  },
});

export default AppPro;
