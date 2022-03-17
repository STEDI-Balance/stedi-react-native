import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

// import { green800 } from 'react-native-paper/lib/typescript/styles/colors';

export default function Login(props){
  const [password, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  // const setUserLoggedIn = React.useRef(props.setUserLoggedIn);
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
    // .then((response)=> {
    //   if (response.status == 200) {
    //     props.setUserLoggedIn(true)
    //   }
    // })
    .then((response)=> {response.text()})
    .then((authkey)=> {validateToken(authkey)})
  }
  const validateToken = (authkey) => {
    fetch('https://dev.stedi.me/validate/' + authkey, {method: 'GET'})
    .then((response) => {const statusCode = response.status
                         const email = response.text()
                         return Promise.all([statusCode, email])})
    .then(([statusCode, email]) => {
      if(statusCode != 200) {
        Alert.alert("Invalid Login")
      }
      else {
        props.setUserLoggedIn(true)
        props.email(email)
      }
    })
    .then((response)=> {
      if (response.status == 200) {
        props.setUserLoggedIn(true)
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

// function authenticatePhone(props, phoneText){
//   const getUserNumberFromApiAsync = async () => {
//     try {
//       const response = await fetch(
//         "https://dev.stedi.me/twofactorlogin", {
//           method: "POST"
          
//         }
//       );
//       const text = await response.text();
//       return text.phoneNumber;
//     } catch (error) {
//       console.error(error);
//       }
//     };

//     if (getUserNumberFromApiAsync === phoneText){
//       props.setUserLoggedIn(true);
//     }
//     else props.setUserLoggedIn(false);
  // if (phoneText === "10") {
  //   props.setUserLoggedIn(true);
  // }
// }

function verifyUser() {
  fetch("https://dev.stedi.me/twofactorlogin", {
    method:"POST",
    body: JSON.stringify({
      phoneNumber: number,
      oneTimePassword: password
    }),
    headers: { "content-type": "application/json"},
  })
  .then((response)=> {
    if (response.status == 200) {
      props.setUserLoggedIn(true)
    }
  })
}
