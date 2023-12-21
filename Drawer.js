import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EditCustomer from './Screens/EditCustomer';
import DeleteCustomer from './Screens/DeleteCustomer';
import InsertData from './Screens/InsertData';
import ShowAllCustomers from './Screens/ShowAllCustomers';
import ViewCustomers from './Screens/ViewCustomer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Edit" component={EditCustomer} />
        <Drawer.Screen name="Delete" component={DeleteCustomer} />
        <Drawer.Screen name="Insert" component={InsertData} />
        <Drawer.Screen name="Customer" component={ShowAllCustomers} />
        <Drawer.Screen name="View" component={ViewCustomers} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}