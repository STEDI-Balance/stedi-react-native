import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, InputText } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Timer from './Timer.js'


function Setting() {
  const [button_clicked, setButtonClicked] = useState(false);
  if (button_clicked) {
    return(
      <View>
      <InputText>
       <Timer>
        </Timer>
      </InputText>
      </View>
          )
  }
  else {
    return(
      <View>
      <Button
      title="Log In"
      onPress={() => {setButtonClicked(true)}}
    />
      </View>
    )
  }
}
export default Setting;
