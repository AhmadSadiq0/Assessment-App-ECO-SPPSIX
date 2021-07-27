import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import ToolSelectionScreen from '../screens/ToolSelection';

import SppsixLanding from '../screens/SPPSIX/Landing';
import SppsixQuestionnaire from '../screens/SPPSIX/Questionnaire';

import EcoLanding from '../screens/ECO/Landing';
import EcoNew1 from '../screens/ECO/NewRecord/1';
import EcoNew2 from '../screens/ECO/NewRecord/2';
import EcoNew3 from '../screens/ECO/NewRecord/3';
import EcoNew4 from '../screens/ECO/NewRecord/4';
import EcoNew5 from '../screens/ECO/NewRecord/5';
import EcoNew6 from '../screens/ECO/NewRecord/6';
import EcoNew7 from '../screens/ECO/NewRecord/7';
import EcoNew8 from '../screens/ECO/NewRecord/8';


import GenerateRatings1 from '../screens/ECO/GenerateRatings/1'
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false} >
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="ToolSelection" component={ToolSelectionScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="SppsixLanding" component={SppsixLanding} />
                <Stack.Screen name="SppsixQuestionnaire" component={SppsixQuestionnaire} />
               
                <Stack.Screen name="EcoLanding" component={EcoLanding} />
                
                <Stack.Screen name="EcoNew1" component={EcoNew1} />
                <Stack.Screen name="EcoNew2" component={EcoNew2} />
                <Stack.Screen name="EcoNew3" component={EcoNew3} />
                <Stack.Screen name="EcoNew4" component={EcoNew4} />
                <Stack.Screen name="EcoNew5" component={EcoNew5} />
                <Stack.Screen name="EcoNew6" component={EcoNew6} />
                <Stack.Screen name="EcoNew7" component={EcoNew7} />
                <Stack.Screen name="EcoNew8" component={EcoNew8} />

                <Stack.Screen name="EcoGenerateRatings1" component={GenerateRatings1} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}