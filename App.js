import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Notifications from './Screens/Notifications';
import Perkalian from './Screens/Perkalian';
import Pembagian from './Screens/Pemabgian';
import Penjumlahan from './Screens/Penjumlahan';
import Pengurangan from './Screens/Pengurangan';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Perkalian" component={Perkalian} />
        <Drawer.Screen name="Pembagian" component={Pembagian} />
        <Drawer.Screen name="Penjumlahan" component={Penjumlahan} />
        <Drawer.Screen name="Pengurangan" component={Pengurangan} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
