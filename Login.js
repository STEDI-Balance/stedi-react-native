import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Login() {
  return (
    <View>
      <Button
        title="Password"
        onPress={() => console.log("Login Button pressed")}
      />
    </View>
  );
}

export default Login;
