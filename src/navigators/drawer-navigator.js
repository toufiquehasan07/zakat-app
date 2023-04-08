import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../views';
import About from '../views/about';
import CalculateFitra from '../views/calculate-fitra';
import {CALCULATE_FITRA_VIEW, HOME_VIEW, ABOUT_VIEW} from '../constants';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_VIEW} component={Home} />
      <Drawer.Screen name={CALCULATE_FITRA_VIEW} component={CalculateFitra} />
      <Drawer.Screen name={ABOUT_VIEW} component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
