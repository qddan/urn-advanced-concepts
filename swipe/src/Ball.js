import React from 'react';
import { Animated, View } from 'react-native';

export default function Ball() {
  let position = new Animated.ValueXY(0, 0);
  Animated.spring(position, {
    toValue: {
      x: 200,
      y: 500,
    },
    useNativeDriver: false,
  }).start();

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
}

const styles = {
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
  },
};
