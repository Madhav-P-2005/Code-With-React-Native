// ContactList.js

// rnfs 

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'Hitesh Chaudary',
      phone: '+91 9876543210',
      email: 'hiteshchaudary@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/11613311',
    },
    {
      id: 2,
      name: 'Madhav P',
      phone: '+91 9988776655',
      email: 'madhavp@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/163096888',
    },
    {
      id: 3,
      name: 'Rohan Kinnal',
      phone: '+91 9123456780',
      email: 'rohankinnal@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/64979784',
    },
    {
      id: 4,
      name: 'Harris Ali Khan',
      phone: '+91 9871234567',
      email: 'codewithharry@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/48705673',
    },
    {
      id: 5,
      name: 'Bridul Munnoth',
      phone: '+91 9765432109',
      email: 'bridulmunnoth@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/177401001',
    },
  ];



    /*  Note :- 
    
    If you use   contacts.map(() => () (paraenthes) :- If you are using map(looping through each element)   then for the return of the Callback you can use curly braces () or  parenthesis {}  . 
    

    So when you use parenthesis you dont need to return a value  that means you dont need to write a  keyword of return but if you use the curly braces () then you obviously 
    
    */

    return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({id, name, email, avatar}) => {
          const finalAvatar =
            avatar && avatar.startsWith('http')
              ? avatar
              : 'https://i.pravatar.cc/150?img=11'; // fallback image

          return (
            <View key={id} style={styles.userCard}>
              <Image
                source={{uri: finalAvatar}}
                style={styles.userImage}
                onError={() =>
                  console.warn(`Failed to load avatar for ${name}`)
                }
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userEmail}>{email}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  container: {
    paddingHorizontal: 14,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60/2,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
});