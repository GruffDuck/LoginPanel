import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const list = [];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getUser = () => {
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          list.push(documentSnapshot.data());
          if (
            list.find(
              item => item.email === email && item.password === password,
            )
          ) {
            navigation.navigate('Home');
          }
        });
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
        placeholder="Enter your email"
        setValue={email => setEmail(email)}
        keyboarType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        setValue={password => setPassword(password)}
        secureTextEntry={true}
      />

      <CustomButton text={'Login'} setFunc={getUser} />
      <CustomButton
        text={'Register'}
        setFunc={() => navigation.navigate('Register')}
      />
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
