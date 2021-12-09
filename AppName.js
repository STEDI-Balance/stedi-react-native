import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

function AppName() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.titleText}>STEDI Balance</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
   container: {
      paddingTop: 40,
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
   },
   titleText: {
     fontSize: 20
   }
})

export default AppName