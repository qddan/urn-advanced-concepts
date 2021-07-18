import React, { useState } from 'react';
import { Animated, PanResponder, View } from 'react-native';

export default function Deck(props) {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      //   debugger;
      //   console.log(gesture);
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {},
  });

  function renderCards() {
    return props.data.map((item) => props.renderCard(item));
  }
  return (
    <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
      {renderCards()}
    </Animated.View>
  );
}
