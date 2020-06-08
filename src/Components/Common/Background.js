import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
const { screenWidth, screenHeight } = metrics;
export default function ({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={[styles.format, styles.lightBlue]} />
        <View style={[styles.format, styles.darkBlue]} />
        <View style={[styles.format, styles.green]} />
        <View style={[styles.format, styles.pink]} />
        <View style={styles.pinkBottom} />
      </View>
      <View style={styles.children}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.background,
  },
  children: {
    flex: 1,
  },
  format: {
    ...StyleSheet.absoluteFillObject,
    top: -54,
    left: 0,
    width: screenWidth / 2,
    borderWidth: screenWidth / 2,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
  },
  lightBlue: {
    borderBottomColor: colors.lightBlue,
    zIndex: 10,
    elevation: 10,
    position: 'absolute',
    transform: [{ rotate: '90deg' }],
  },
  darkBlue: {
    left: -80,
    borderWidth: screenWidth / 2 + 80,
    borderBottomColor: colors.darkBlue,
    zIndex: 30,
    elevation: 30,
    position: 'absolute',
    transform: [{ rotate: '180deg' }],
  },
  green: {
    borderBottomColor: colors.green,
    zIndex: 20,
    elevation: 20,
    position: 'absolute',
    transform: [{ rotate: '-90deg' }],
  },
  pink: {
    top: -54,
    borderBottomColor: colors.pink,
    zIndex: 50,
    elevation: 50,
    position: 'absolute',
  },
  pinkBottom: {
    ...StyleSheet.absoluteFillObject,
    borderColor: 'transparent',
    width: screenWidth,
    borderBottomWidth: screenWidth / 6,
    borderTopWidth: screenWidth / 6,
    borderRightWidth: screenWidth / 2,
    borderLeftWidth: screenWidth / 2,
    borderBottomColor: colors.pink,
    borderRightColor: colors.pink,
    top: screenHeight / 2 - 87,
    zIndex: 50,
    elevation: 50,
    position: 'absolute',
    transform: [{ rotate: '180deg' }],
  },
});
