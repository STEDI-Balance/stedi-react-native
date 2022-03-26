import React from 'react';
import {StyleSheet, View, SafeAreaView, TextInput, Alert, Text} from 'react-native';
import {Button} from 'react-native-elements'
import { ThemeConsumer } from 'react-native-elements';


const Login= (props) => 
{
  const[phone, onChangePhone]= React.useState(null);
  const[OTP, onChangeOTP]= React.useState(null);

  const getOTP = ()=> {
    fetch('https://dev.stedi.me/twofactorlogin/' + phone, {method:'POST'})
  }

  const login = () => {
    fetch('https://dev.stedi.me/twofactorlogin',
    {method:'POST',
    body: JSON.stringify({"phoneNumber": phone, "oneTimePassword": OTP})})
    .then((response) => response.text())
    .then((AuthKey) => {
      // console.log(AuthKey) 
      // console.log(phone)
      validateToken(AuthKey)})
  }

  const validateToken =(AuthKey) => {
    fetch('https://dev.stedi.me/validate/' +AuthKey, {method: 'Get'})
  .then((response)=> {const statusCode= response.status
              const email= response.text()
              return Promise.all ([statusCode, email])})
  .then(([statusCode, email]) => {
                // console.log(statusCode)
                // console.log(email)
                if(statusCode !=200){
                  Alert.alert("Invalid Login")
                }
                else {
                  props.setUserLoggedIn(true)
                  props.setUserEmail(email)
                }
              })
  }
    

  return(

    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="Phone Number"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        keyboardType="numeric"
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Send OTP"
        onPress={getOTP}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={OTP}
        placeholder="One Time Password"
        keyboardType="numeric"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        autoComplete={'sms-otp'}
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Login"
        onPress={() => login()}
        />
      </View>
    </SafeAreaView>

  );
}

const styles= StyleSheet.create ({
page: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 10,
},
title: {
  justifyContent: 'center',
  paddingHorizontal: 10,
  alignItems: 'center',
  fontSize: 25
},
input: {
height: 40,
margin: 15,
borderWidth: 1,
padding: 10,
width: '75%',
alignSelf: 'center'
},
loginButton: {
height:40,
width: 120,
textAlign: 'center'
},
container: {
  justifyContent: 'center',
  paddingHorizontal: 10,
  alignItems: 'center'
},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login
