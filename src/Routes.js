import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import App from './App';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={App}
          name="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'death-star-variant';
              if (route.name === 'Home') {
                iconName = focused ? 'ios-star' : 'ios-star-outline';
              } else if (route.name === 'Help') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen name="Profile" component={App} />
        <Tab.Screen name="Help" component={App} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
