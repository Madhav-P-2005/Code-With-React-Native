import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}> Blog Card </Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingcontainer}>
          <Text style={styles.headerText}>THE EPIC : RAMAYANA</Text>
        </View>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/96668450/photo/regal-indian-procession.jpg?s=1024x1024&w=is&k=20&c=HIcXcLjGwbPoH4pEhL7wZSs1PR5zsvnmDwm_aTX1eKg=',
          }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
            The Ramayana (/rɑːˈmɑːjənə/;[1][2] Sanskrit: रामायणम्, romanized:
            Rāmāyaṇam[3]), also known as Valmiki Ramayana, as traditionally
            attributed to Valmiki, is a smriti text (also described as a
            Sanskrit epic) from ancient India, one of the two important epics of
            Hinduism known as the Itihasas, the other being the Mahabharata.[4]
            The epic narrates the life of Rama, the seventh avatar of the Hindu
            deity Vishnu, who is a prince of Ayodhya in the kingdom of Kosala.
            The epic follows his fourteen-year exile to the forest urged by his
            father King Dasharatha, on the request of Rama's stepmother Kaikeyi;
            his travels across the forests in the Indian subcontinent with his
            wife Sita and brother Lakshmana; the kidnapping of Sita by Ravana,
            the king of Lanka, that resulted in bloodbath; and Rama's eventual
            return to Ayodhya along with Sita to be crowned as a king amidst
            jubilation and celebration.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://brave.com')}>
            <Text style={styles.socialLinks}> Read More </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/Madhav-P-2005')}>
            <Text style={styles.socialLinks}> Follow Me </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  card: {
    width: 340,
    height: 382,
    borderRadius: 7,
    marginVertical: 12,
    marginHorizontal: 10,
  },

  elevatedCard: {
    backgroundColor: '#F9DDA4',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },

  cardImage: {
    height: 200,
  },
  headingcontainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fffbe6', // for better visibility
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  bodyContainer: {
    padding: 8,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent :'space-evenly',
    padding: 8,
    alignItems:'center'
  },

  socialLinks: {
    fontSize: 16,
    color: '#1e90ff',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
  },
});
