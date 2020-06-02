import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default function () {
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.content}>
        <Text style={defaultStyles.title}>Casa</Text>
        <Text style={defaultStyles.description}>1</Text>
        <Button styles={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>View</Text>
        </Button>
      </View>
    </View>
  );
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 16,
    marginBottom: 30,
    marginTop: 30,
  },
  content: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});
