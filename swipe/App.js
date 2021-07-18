import React from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://i.imgur.com/Ae1wefj.jpeg' },
  { id: 2, text: 'Card #2', uri: 'https://i.imgur.com/wv4egS8.jpeg' },
  { id: 3, text: 'Card #3', uri: 'https://i.imgur.com/9eyPJjA.jpeg' },
  { id: 4, text: 'Card #4', uri: 'https://i.imgur.com/crnvoMa.jpeg' },
  { id: 5, text: 'Card #5', uri: 'https://i.imgur.com/Atm0pbe.jpeg' },
  { id: 6, text: 'Card #6', uri: 'https://i.imgur.com/mhIiptr.jpeg' },
  { id: 7, text: 'Card #7', uri: 'https://i.imgur.com/RSPEuye.jpeg' },
  { id: 8, text: 'Card #8', uri: 'https://i.imgur.com/DYUMpmw.jpeg' },
];

export default function App() {
  function renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Image source={{ uri: item.uri }} />
        <Card.Title>{item.text}</Card.Title>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button title="View Now!" />
      </Card>
    );
  }

  return (
    <View style={styles.container}>
      <Deck data={DATA} renderCard={renderCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
