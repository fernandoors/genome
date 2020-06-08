/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Animated, View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import metrics from '../../styles/metrics';

const moonstone = require('../../Assets/images/moonstone.png');
const sapphire = require('../../Assets/images/sapphire.png');
const { screenWidth } = metrics;

export default function (props) {
  const fadeAnim = new Animated.Value(0);
  const { title, description, imageURL, isMoving } = props;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);
  function fadeInAnimated(fadeIn) {
    return {
      opacity: fadeIn, transform: [{
        translateY: fadeIn.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      }],
    };
  }
  return (
    <View
      style={defaultStyles.container}>
      <View style={defaultStyles.content}>
        {!!imageURL && (
          <Animated.View style={[defaultStyles.rockImageView, fadeInAnimated(fadeAnim)]}>
            <Image
              source={imageURL === 'moonstone' ? moonstone : sapphire}
              style={defaultStyles.rockImageUrl}
            />
          </Animated.View>
        )}
        {!imageURL &&
          <Button styles={defaultStyles.buttonAdd}>
            <Text style={defaultStyles.buttonAddText}>
              <MaterialIcons name={'add'} size={32} color={colors.white} />
            </Text>
          </Button>
        }
        <View style={defaultStyles.contentDescription}>
          <Animated.Text style={[defaultStyles.title, fadeInAnimated(fadeAnim)]}>
            {title}
          </Animated.Text>
          <Animated.Text style={[defaultStyles.description, fadeInAnimated(fadeAnim)]}>
            {description}
          </Animated.Text>
        </View>
        {!!imageURL &&
          <View>
            <Button styles={[defaultStyles.button, fadeInAnimated(fadeAnim)]}>
              <Text style={defaultStyles.buttonText}>View</Text>
            </Button>
          </View>
        }
      </View>
    </View >
  );
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth * 0.7,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 8,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 16,
    marginBottom: 30,
  },
  content: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  rockImageView: {
    position: 'absolute',
    top: -60,
    left: 15,
  },
  rockImageUrl: {
    width: screenWidth * 0.6,
    height: 130,
  },
  contentDescription: {
    flex: 2,
  },
  title: {
    fontSize: fonts.regular,
    fontWeight: '700',
    color: colors.black,
    opacity: 0.8,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: fonts.family,
    marginTop: 60,
  },
  description: {
    fontSize: fonts.small,
    color: colors.textPrimary,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: fonts.family,
  },
  button: {
    backgroundColor: colors.darkBlue,
    width: screenWidth * 0.4,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: fonts.regular,
    fontFamily: fonts.family,
  },
  buttonAdd: {
    width: screenWidth * 0.15,
    position: 'relative',
    bottom: -30,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.darkBlue,
  },
  buttonAddText: {
    textAlign: 'center',
    fontFamily: fonts.family,
    fontWeight: '700',
    fontSize: fonts.regular,
  },
});
