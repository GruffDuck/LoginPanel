import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import firestore from '@react-native-firebase/firestore';
import {initializeApp} from 'firebase/app';
import {useNavigation} from '@react-navigation/native';
const firebaseConfig = {
  apiKey: 'AIzaSyAR-evVj6Tdg2yVST84104jEU9ffMDJPM8',
  authDomain: 'login-e7223.firebaseapp.com',
  databaseURL: 'https://login-e7223-default-rtdb.firebaseio.com',
  projectId: 'login-e7223',
  storageBucket: 'login-e7223.appspot.com',
  messagingSenderId: '691482010420',
  appId: '1:691482010420:web:4036ccbcb67f84975bfb61',
};

const app = initializeApp(firebaseConfig);
const LoginScreen = () => {
  const navigation = useNavigation();
  const Debug = () => {
    const usersCollection = firestore().collection('Users');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');
  const AddUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        navigation.navigate('Login');
      });
  };
  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require('./logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <CustomInput
        placeholder="Enter your name"
        setValue={name => setName(name)}
        keyboarType="email-address"
      />
      <CustomInput
        placeholder="Enter your email"
        setValue={email => setEmail(email)}
        keyboarType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        setValue={password => setPassword(password)}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Enter your repassword"
        setValue={repass => setRepass(repass)}
        secureTextEntry={true}
      />

      <CustomButton text={'Register'} setFunc={AddUser} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
export default LoginScreen;
