import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import AppName from "./AppName";

function Bar() {
    return(
        <View style={styles.bar}>
            <AppName />
        </View>
    )
  }

export default Bar

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: 'green',
        height: '15%',
        alignItems: 'center',
        
      },
})