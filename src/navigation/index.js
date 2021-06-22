import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import ToolSelectionScreen from '../screens/ToolSelection';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false} >
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="ToolSelection" component={ToolSelectionScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}