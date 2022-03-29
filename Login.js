import React from 'react';
import {StyleSheet, SafeAreaView, TextInput} from 'react-native';

const textInputPlaceholder = () => {
    const [number, onChangeNumber] = React.useState(null);
    const [otp, onChangeOTP] = React.useState(null);

    return (
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeNumber={onChangeNumber}
            value={number}
            placeholder="Enter Phone Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles1.input}
            onChangeOTP={onChangeOTP}
            value={otp}
            placeholder="Enter One-Time-Password"
            keyboardType="numeric"
          />
          <Button title="Get OTP" onPress={()=>getOTP(phoneNumber)}></Button>
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


export default textInputPlaceholder;
