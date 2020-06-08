import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export default function (props) {
  const { children, styles } = props;
  const buttonStyles = StyleSheet.compose([defaultStyles.button, styles]);
  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      {children}
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 50,
    fontSize: fonts.regular,
    alignItems: 'center',
  },
});
