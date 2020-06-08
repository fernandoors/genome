import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const avatar = require('../../Assets/images/profile.png');
export default function () {
  const { navigate } = useNavigation();
  function goToProfile() {
    navigate('Profile');
  }
  return (
    <TouchableOpacity onPress={goToProfile}>
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
