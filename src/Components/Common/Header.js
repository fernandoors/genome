import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../Styles/Avatar';
import Button from '../Styles/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function () {
  return (
    <View style={defaultStyles.container}>
      <Avatar />
      <Text style={defaultStyles.userName}>Nome do usuario</Text>
      <View style={defaultStyles.profileButton}>
        <Button styles={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>You have 1 Product</Text>
        </Button>
      </View>
    </View>
  );
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },
  userName: {
    backgroundColor: Colors.gray,
    fontWeight: '700',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
  },
  profileButton: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontWeight: '700',
    color: Colors.gray,
  },
});
