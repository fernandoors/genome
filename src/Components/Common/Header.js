import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Avatar from './Avatar';
import Button from '../Styles/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function () {
  const animatedValue = new Animated.Value(10);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);
  return (
    <Animated.View
      style={[
        defaultStyles.container,
        { transform: [{ translateY: animatedValue }] },
      ]}>
      <Avatar />
      <Text style={defaultStyles.userName}>Lottie Curtis</Text>
      <View style={defaultStyles.profileButton}>
        <Button styles={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>You have 3 Product</Text>
        </Button>
      </View>
    </Animated.View>
  );
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },
  userName: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fonts.small,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: fonts.family,
  },
  profileButton: {
    width: '80%',
    alignItems: 'center',
    fontFamily: fonts.family,
  },
  button: {
    backgroundColor: colors.white,
    padding: 10,
  },
  buttonText: {
    fontWeight: '700',
    color: colors.gray,
    marginHorizontal: 10,
    fontFamily: fonts.family,
  },
});
