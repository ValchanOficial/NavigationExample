import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import TabScreen from './tabs.routes';

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator headerMode="none" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tabs" component={TabScreen} />
    </Stack.Navigator>
  )
}

export default StackScreen