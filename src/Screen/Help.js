import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking,
  Alert,
  Image,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import metrics from '../styles/metrics';
const { screenHeight } = metrics;

export default function () {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function getImage() {
      return await fetch(
        'https://api.github.com/users/fernandoors',
      ).then((resp) => resp.json());
    }
    getImage().then((data) => setUserData(data));
  }, []);

  if (!userData) {
    return null;
  }
  const handleOpenUrl = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
            <View style={styles.container}>
              {!!userData && (
                <Image
                  source={{ uri: userData.avatar_url }}
                  style={styles.avatar}
                />
              )}
              <View style={styles.contact}>
                <Text style={styles.contactText}>
                  Development by: {userData.name}
                </Text>
                <Text
                  style={styles.contactText}
                  onPress={() => handleOpenUrl(userData.blog)}>
                  Contact. {userData.blog}
                </Text>
                <Text
                  style={styles.contactText}
                  onPress={() => handleOpenUrl(userData.html_url)}>
                  Git. {userData.html_url}
                </Text>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    height: screenHeight,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 125,
    marginTop: 20,
  },
  contact: {
    flex: 1,
    padding: 15,
  },
  contactText: {
    color: colors.black,
    marginTop: 20,
    marginBottom: 20,
    fontSize: fonts.medium,
    fontFamily: fonts.family,
  },
});
