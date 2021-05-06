import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';
import {Consultations, Charts, QRCodeScreen } from '../Screens';
import DrawerContent from '../Components/DrawerContent';
const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
      <Drawer.Screen name={navigationStrings.CHARTS} component={Charts} />
      <Drawer.Screen name={navigationStrings.NOTIFICATIONS} component={QRCodeScreen} />
      <Drawer.Screen name={navigationStrings.ALL_USERS} component={Consultations} />
    </Drawer.Navigator>
  );
}