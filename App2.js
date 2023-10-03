import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/HomePage';

const Stack = createNativeStackNavigator();

function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}
            initialRouterName="HomePage">
                
            <Stack.Screen name="HomePage" component={HomePage} />    
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App2;