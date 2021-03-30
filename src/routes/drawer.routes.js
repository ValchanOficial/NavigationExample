import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Info from '../pages/Info';
import StackScreen from './stack.routes';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator headerMode="none" initialRouteName="StackScreen">
      <Drawer.Screen name="StackScreen" component={StackScreen} />
      <Drawer.Screen name="Info" component={Info} />
    </Drawer.Navigator>
  )
}

export default Routes