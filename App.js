import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {useState} from 'react';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from './src/Screens/Login/LoginScreen';
import RegisterScreen from './src/Screens/Register/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/HomeScreen/Home';
const App = () => {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState('');
  const Debug = () => {
    firebase.initializeApp();
    const usersCollection = firestore().collection('Users');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
