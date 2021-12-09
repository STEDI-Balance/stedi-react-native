import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function OTP(props) {
  return (
    <View>
      <Button
        title='Send Code'
        onPress={() => {
          let number = props.number;
          console.log(number);
          fetch('https://dev.stedi.me/twofactorlogin/' + number, {
            //method: 'POST',
          })
        }}
      />
    </View>
  );
}

export default OTP;
