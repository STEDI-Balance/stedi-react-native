import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

// import { green800 } from 'react-native-paper/lib/typescript/styles/colors';

export default function Login(props){
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  // const setUserLoggedIn = React.useRef(props.setUserLoggedIn);
  return(
    <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>This is the Login Screen</Text>
      <TextInput
      style={styles.input}
      onChangeText= {onChangeText}
      value= {number}
      placeholder="Enter phone number"
      keyboardType='numeric'
      />

     <Button title="Log In" onPress={() => authenticateLogIn(props, text)}>
      </Button>
  

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function authenticateLogIn(props, text){
  if (text === "10"){
    props.setUserLoggedIn(true)
    return true;
  }
}
