import React, { useState } from 'react'
import { View, Button, TextInput, Text, StyleSheet } from 'react-native'

const Signup = ({navigation}) => {
  const [formData, setFormData] = useState({username: "", password: ""})
  const [isValidPassword, setIsValidPassword] = useState(false)

  const handleSubmit = () => {
    
  }

  return (
    <View style={SignupStyles}>
        <TextInput placeholder='username' onChangeText={txt => setFormData({...formData, username: txt})} />
        <TextInput 
            placeholder='password' 
            onChangeText={txt => setFormData({...formData, password: txt})} 
            secureTextEntry
        />     
        <TextInput 
            placeholder='re-enter password' 
            onChangeText={txt => setIsValidPassword(txt === formData.password)} 
            secureTextEntry
        />
        {!isValidPassword && <Text>Passwords don't match</Text>}
        <Button 
          onPress={handleSubmit} 
          title='Sign Up' 
          disabled={(!isValidPassword || formData.username === "" || formData.password === "")}
        />
        <View>
            <Text>OR</Text>
            <Button title='Login' onPress={() => navigation.navigate("Login")} />
        </View>
    </View>
  )
}

const SignupStyles = StyleSheet.create({
  flex: 1,
  justifyContent: 'center',
})

export default Signup