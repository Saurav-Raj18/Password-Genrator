import React from 'react';
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';

const ActionCard = () => {
  const openWebsite = (url:string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's New in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={require('/home/saurav/Documents/react_native/AwesomeProject01/taj_mahl.jpg')}
          style={styles.cardImage}
        />
      </View>
      <TouchableOpacity onPress={() => openWebsite('https://leetcode.com/SwetaSahu01/')} style={styles.button}>
        <Text style={styles.buttonText}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  elevatedCard: {
    // Additional styles for the card if needed
  },
  headingContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
