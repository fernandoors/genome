import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function (props) {
  const { children, styles } = props;
  const buttonStyles = StyleSheet.compose([defaultStyles.button, styles]);
  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      <View style={defaultStyles.content}>{children}</View>
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 50,
  },
  content: {
    borderColor: '#00f',
    fontSize: 30,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});
