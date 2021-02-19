import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './src/components/Login/'
import Products from './src/components/Products/'
import Home from './src/components/Home/'

export default function App() {

  const Tab = createBottomTabNavigator();

  return (

  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Products') {
            iconName = focused ? 'pricetag' : 'pricetag';
          }else {
            iconName = focused ? 'ios-log-in' : 'ios-log-in';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DC3545',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>

  </NavigationContainer>

  );
}
