import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  return <Text>
    <ColorCounter color='Red'/>
    <ColorCounter color='Blue'/>
    <ColorCounter color='Green'/>
  </Text>
};

const styles = StyleSheet.create({});

export default SquareScreen;