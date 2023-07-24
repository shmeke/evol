import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './src/components/Login';
import Register from './src/components/Register';
import Profile_Settings from './src/screens/Profile_Settings'
import Profile from './src/screens/Profile';
import Chats from './src/components/Chats';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Profile'
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{title: 'Profile',
        tabBarIcon:({size, color})=>(
          <MaterialCommunityIcons name="profile"
            size={size} color={color} />
        )}}
      />

      <Tab.Screen
        name='Chats'
        component={Chats}
        options={{title: 'Chats',
        tabBarIcon:({size, color})=>(
          <MaterialCommunityIcons name="Chats"
            size={size} color={color} />
        )}}
      />
    </Tab.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profile Settings" component={Profile_Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
