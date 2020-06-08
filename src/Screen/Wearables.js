import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Animated,
  View,
} from 'react-native';
import Cards from '../Components/Styles/Cards';
import Header from '../Components/Common/Header';
import Background from '../Components/Common/Background';
import colors from '../styles/colors';
import metrics from '../styles/metrics';
const { screenWidth, screenHeight } = metrics;
const dataMock = [
  {
    id: 'Keychain',
    title: 'Moonstone Keychain',
    imageUrl: 'moonstone',
    description: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
  },
  {
    id: '2',
    title: 'Sapphire Keychain',
    imageUrl: 'sapphire',
    description: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
  },
  {
    id: '3',
    title: 'Add a Wearable',
    imageUrl: '',
    description:
      "Don't See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry",
  },
];
export default function () {
  const animatedValue = new Animated.Value(0);
  const horizontalValue = new Animated.Value(screenWidth / 2);
  const position = Animated.divide(animatedValue, screenWidth);

  useEffect(() => {
    Animated.timing(horizontalValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [horizontalValue]);
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
        <Background style={styles.background}>
          <Header />
          <Animated.FlatList
            horizontal={true}
            pagingEnabled
            scrollEnabled
            centerContent
            data={dataMock}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'center'}
            declarationRate={'fast'}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x: animatedValue },
                  },
                },
              ],
              { useNativeDriver: true },
            )}
            renderItem={({ item: rockContent, separators }) => (
              <Animated.View
                style={[
                  styles.cardsView,
                  { transform: [{ translateX: horizontalValue }] },
                ]}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <Cards
                  title={rockContent.title}
                  description={rockContent.description}
                  imageURL={rockContent.imageUrl}
                />
              </Animated.View>
            )}
            getItemLayout={(_, index) => ({
              length: styles.cardsView.height,
              offset: styles.cardsView.height * index,
              index,
            })}
            scrollToIndex={{ viewPosition: 0.9 }}
            keyExtractor={(rockContent) => rockContent.id}
          />
          <View style={styles.dotView}>
            {dataMock.map((_, key) => {
              if (dataMock.length === key + 1) {
                return null;
              }
              let opacity = position.interpolate({
                inputRange: [key - 1, key, key + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              const stylesDot = {
                height: 7,
                width: 7,
                backgroundColor: colors.black,
                margin: 8,
                borderRadius: 5,
              };
              return (
                <Animated.View key={key} style={{ ...stylesDot, opacity }} />
              );
            })}
          </View>
        </Background>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
  },
  cardsView: {
    marginTop: 50,
    height: screenHeight * 0.5,
    width: screenWidth,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
