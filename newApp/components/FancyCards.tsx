import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}> Trending Movies</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://getwallpapers.com/wallpaper/full/3/6/c/543897.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> The Dark Knight </Text>
          <Text style={styles.cardLabel}> North America ,  USA </Text>
          <Text style={styles.cardDescription}>
            When a menace known as the Joker wreaks havoc and chaos on the
            people of Gotham, Batman, James Gordon and Harvey Dent must work
            together to put an end to the madness.
          </Text>
          <Text style={styles.cardFooter}>
            Watch Now
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FancyCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '900',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 23,
    marginVertical: 12,
    marginHorizontal: 6,
  },
  cardElevated: {
    backgroundColor: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,

    flexShrink: 1,
  },
  cardFooter: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});