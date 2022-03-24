import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';


export default function Login(props){
  const [password, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  function setUserName() {
    fetch(
      "https://dev.stedi.me/twofactorlogin/" + number, {
      method: "POST"
    }
    )
  }
  function verifyUser() {
    fetch("https://dev.stedi.me/twofactorlogin", {
      method:"POST",
      body: JSON.stringify({
        phoneNumber: number,
        oneTimePassword: password
      }),
      headers: { "content-type": "application/json"},
    })
    .then((response)=> response.text())
    .then((authkey)=> validateToken(authkey))
  }

  const validateToken = (authkey) => {
    fetch('https://dev.stedi.me/validate/' + authkey, {method: 'GET'})
    .then((response) => {const statusCode = response.status
                        console.log(statusCode)
                         const email = response.text()
                         console.log(email)
                         return Promise.all([statusCode, email])})
    .then(([statusCode, email]) => {
      console.log(email, statusCode)
      if(statusCode != 200) {
        Alert.alert("Invalid Login")
      }
      else {
        props.setUserLoggedIn(true)
        props.setUserEmail(email)
      }
    })
  }
  return(
    <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>This is the Login Screen</Text>
      <TextInput
      style={styles.input}
      onChangeText= {onChangeNumber}
      value= {number}
      placeholder="Enter phone number"
      keyboardType='numeric'
      />
    <TextInput
    style = {styles.input}
    onChangeText = {onChangeText}
    value = {password}
    placeholder= "Enter One Time Password"
    keyboardType='numeric'
    />
     <Button title="Get One Time Password" onPress={() => setUserName()}>
      </Button>
      <Button title="Log In" onPress={()=> verifyUser()}/>
  

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


