import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Alert} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const LoginScreen = () => {
  const [phone, onChangeText] = React.useState(null);
  const [OTP, onChangeNumber] = React.useState(null);

  return (

    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phone}
        placeholder="Phone Number"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        keyboardType="phone-pad"
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Send OTP"
        onPress={() => fetch('https://dev.stedi.me/twofactorlogin/' + phone, {method: 'POST'})}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={OTP}
        placeholder="One Time Password"
        keyboardType="numeric"
        clearButtonMode={'while-editing'}
        enablesReturnKeyAutomatically={true}
        autoComplete={'sms-otp'}
      />
      <View style={styles.container}>
        <Button style={styles.loginButton}
        title="Send OTP"
        onPress={() => Alert.alert('NOT YET IMPLEMENTED')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default LoginScreen;
