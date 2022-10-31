import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder,secureTextEntry,keyboarType="default"}) => {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboarType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#5e60ce',
    borderRadius: 15,
margin: 10,
alignSelf: 'center',


  },
  inputText: {
    fontSize: 13,
    padding: 10,
  },
});
export default CustomInput;
