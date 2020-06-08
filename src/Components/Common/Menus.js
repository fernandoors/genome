import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

export default function ({ iconName, title }) {
  return (
    <TouchableOpacity style={defaultStyles.content}>
      <MaterialIcons name={iconName} size={32} color={colors.darkestBlue} />
      <Text style={defaultStyles.optionText}>{title}</Text>
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  content: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderColor: colors.darkestBlue,
    borderStyle: 'solid',
  },
  optionText: {
    color: colors.darkBlue,
    textAlign: 'center',
    margin: 5,
  },
});
