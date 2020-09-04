import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;