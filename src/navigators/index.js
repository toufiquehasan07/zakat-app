// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './drawer-navigator';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
                    headerShown: false
                }}
                initialRouteName="start"
        >
            <Stack.Screen name="start" component={DrawerNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default MainNavigator;