import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
const avatar = require('../../Assets/images/avatar.jpg');
export default function (props) {
  // const { source, styles } = props;
  return (
    <TouchableOpacity {...props}>
      <View style={defaultStyles.content}>
        <Image style={defaultStyles.avatar} source={avatar} />
      </View>
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  content: {
    borderRadius: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
