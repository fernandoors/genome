import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from './styles/colors';
import Wearables from './Screen/Wearables';
import Profile from './Screen/Profile';
import Help from './Screen/Help';
const Tab = createBottomTabNavigator();

export default function () {
  const animatedValue = new Animated.Value(-100);
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{ transform: [{ translateY: animatedValue }] }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = {
              Wearables: focused ? 'favorite' : 'favorite-border',
              Profile: focused ? 'person' : 'person-outline',
              Help: focused ? 'help' : 'help-outline',
            }[route.name];
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.black,
          inactiveTintColor: colors.secundary,
        }}>
        <Tab.Screen name="Wearables" component={Wearables} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Help" component={Help} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
