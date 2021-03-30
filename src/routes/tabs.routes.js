import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabA from '../pages/TabA';
import TabB from '../pages/TabB';
import TabC from '../pages/TabC';

const Tab = createBottomTabNavigator();

const TabScreen = () => (
    <Tab.Navigator headerMode="none" initialRouteName="TabA">
        <Tab.Screen name="TabA" component={TabA} options={{
            tabBarLabel: "TabA"
        }}/>
        <Tab.Screen name="TabB" component={TabB} options={{
            tabBarLabel: "TabB"
        }}/>
        <Tab.Screen name="TabC" component={TabC} options={{
            tabBarLabel: "TabC"
        }}/>
    </Tab.Navigator>
)

export default TabScreen