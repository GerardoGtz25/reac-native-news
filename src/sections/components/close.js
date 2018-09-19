import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

function Close(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
    >
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#14a1b8',
    borderRadius: 12,
    width: 30,
    height: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Close
