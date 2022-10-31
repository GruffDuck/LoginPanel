import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({text,setFunc}) => {
  return (
    <View style={styles.button}>
      <Pressable onPress={setFunc}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#5e60ce',
    borderRadius: 15,
    margin: 10,
    alignSelf: 'center',

  },
    text: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    padding: 10,
    fontWeight: 'bold',
    }
});
export default CustomButton;
