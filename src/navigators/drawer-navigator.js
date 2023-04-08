import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../views';
import GeneralAsk from '../views/general-ask';
import CalculateFitra from '../views/calculate-fitra';
import {CALCULATE_FITRA_VIEW, HOME_VIEW, GENERAL_ASK} from '../constants';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_VIEW} component={Home} />
      <Drawer.Screen name={CALCULATE_FITRA_VIEW} component={CalculateFitra} />
      <Drawer.Screen name={GENERAL_ASK} component={GeneralAsk} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
