import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';

import Icons  from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const bottomTabs = () =>{
    return(
      <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarActiveTintColor:"#000" }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=><Icons name="ios-home" size={32} color="#000" /> }} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={bottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
