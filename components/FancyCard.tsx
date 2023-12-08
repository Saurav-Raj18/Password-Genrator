import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FancyCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.cardElevated, styles.cardContent]}>
        <Image
         source={require('/home/saurav/Documents/react_native/AwesomeProject01/taj_mahl.jpg')}
          style={styles.cardImage}
        />
        <Text style={styles.text}>
          Google Photos is the home for all your photos and videos, automatically organized and easy to share. (Your text here)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginLeft: 10,
    marginTop: 20,
  },
  card: {
    //flex: 1,
    //backgroundColor:'green',
  },
  cardElevated: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#EF5354',
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#CAD5E2',
    borderRadius: 5,
    margin: 8,
    padding: 8,
  },
  cardContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    textAlign: 'justify',
  },
});

export default FancyCard;
