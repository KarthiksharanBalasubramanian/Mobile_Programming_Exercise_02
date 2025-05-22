import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MessageListScreen from './screens/MessageListScreen';
import MessageFormScreen from './screens/MessageFormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Messages" component={MessageListScreen} />
        <Stack.Screen name="EditMessage" component={MessageFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
