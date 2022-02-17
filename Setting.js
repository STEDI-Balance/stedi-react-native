import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './login.js';

const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

function Setting() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Login"
          component= {Counter}
          />
      {/* <Button
      title="Log In"
      onPress={() => Alert.alert('Simple Button pressed')}
      onPress={() => 
        this.navigate(".login.js")}
    /> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default Setting;