// In App.js in a new project

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views';
import About from '../views/about';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
    
  );
}

export default DrawerNavigator;