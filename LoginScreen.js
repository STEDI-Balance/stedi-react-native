import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native'
class Inputs extends Component {
   state = {
      phone: '',
      OTP: '',
   }
   handlePhone = (text) => {
      this.setState({ phone: text })
   }
   handleOTP = (text) => {
      this.setState({ OTP: text })
   }

   //This function sends the code to the users phone.
   sendPhone = (phone) => {
      fetch('https://dev.stedi.me/twofactorlogin/' + phone, {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({phone})
       });
   }
   login = (OTP) => {
      
   }
   render() {
      return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style = {styles.container}>
               <TextInput style = {styles.input}
                  underlineColorAndroid = 'transparent'
                  placeholder = 'Phone Number'
                  placeholderTextColor = '#000000'
                  autoCapitalize = 'none'
                  onChangeText = {this.handlePhone}
                  keyboardType='numeric'/>
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => this.sendPhone(this.state.phone)
                  }>
                  <Text style = {styles.submitButtonText}> Send Phone Number</Text>
               </TouchableOpacity>
               <TextInput style = {styles.input}
                  underlineColorAndroid = 'transparent'
                  placeholder = 'One Time Password'
                  placeholderTextColor = '#000000'
                  autoCapitalize = 'none'
                  onChangeText = {this.handleOTP}
                  keyboardType='numeric'/>
               
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => this.login(this.state.OTP)
                  }>
                  <Text style = {styles.submitButtonText}> Send OTP</Text>
               </TouchableOpacity>
            </View>
         </TouchableWithoutFeedback>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 10,
      flex: 1,
      justifyContent:'center',
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#00A310',
      borderWidth: 1,
      paddingLeft: 10,
   },
   //style sheet for the submit button.
   submitButton: {
      backgroundColor: '#00A310',
      padding: 10,
      margin: 15,
      height: 40,
      justifyContent: 'center',
   },
   //style sheet for the text in the submit button.
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
   //luke's comment
})