import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import colors from '../styles/colors';
import Header from '../Components/Common/Header';
import Background from '../Components/Common/Background';
import metrics from '../styles/metrics';
import Menus from '../Components/Common/Menus';
const { screenHeight, screenWidth } = metrics;

export default function () {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
            <Background style={styles.background}>
              <Header />
              <View style={styles.content}>
                <Menus iconName="ac-unit" title="Change Password" />
                <Menus iconName="account-balance-wallet" title="Wallet" />
                <Menus iconName="assignment-ind" title="Contact" />
              </View>
            </Background>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
    height: screenHeight,
  },
  content: {
    width: screenWidth,
    height: screenHeight,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
