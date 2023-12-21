import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EditNovel from './Database/EditNovel';
import DeleteNovel from './Database/DeleteNovel'
import InsertNovel from './Database/InsertDataNovel'
import ShowAllNovel from './Database/ShowAllNovel'
import ViewNovel from './Database/ViewNovel'

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
        <Drawer.Screen name="EditNovel" component={EditNovel} />
        <Drawer.Screen name="DeleteNovel" component={DeleteNovel} />
        <Drawer.Screen name="InsertNovel" component={InsertNovel} />
        <Drawer.Screen name="All Novel" component={ShowAllNovel} />
        <Drawer.Screen name="View Novel" component={ViewNovel} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}