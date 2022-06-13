import React from 'react';
import {StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';

const Login = (props) => {
    const [number, setNumber] = React.useState(null);
    const [otp, setOTP] = React.useState(null);

    return (
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Enter Phone Number"
            keyboardType="numeric"
          />
          <Button
          title="Get OTP"
          color="#87cefa" 
          onPress={()=>getOTP(number)}/>
          <TextInput
            style={styles1.input}
            onChangeText={setOTP}
            value={otp}
            placeholder="Enter One-Time-Password"
            keyboardType="numeric"
          />
          <Button 
          title="Login" 
          color="#87cefa"
          onPress={()=>{props.setUserLogginIn(true)}}/>
        </SafeAreaView>
      );
    };

    const styles = StyleSheet.create({
      input: {
        height: 40,
        marginTop: 100,
        marginLeft: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        width: 300,
      },
    });
  
    const styles1 = StyleSheet.create({
      input: {
        height: 40,
        marginTop: 40,
        marginLeft: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        width: 300,
      },
    });


export default Login;

const getOTP = (number, otp) => {
  fetch('https://dev.stedi.me/twofactorlogin/' + number, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    phoneNumber: number,
    oneTimePassword: otp
  })
})};