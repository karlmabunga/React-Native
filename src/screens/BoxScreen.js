import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    borderWidth: 3,
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  viewTwoStyle: {
    borderWidth: 3,
    backgroundColor: 'green',
    height: 100,
    width: 80,
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    borderWidth: 3,
    backgroundColor: 'purple',
    height: 100,
    width: 100,
  },
});

export default BoxScreen;