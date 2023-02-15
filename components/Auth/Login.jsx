import React, { useState } from 'react'
import { View, Button, TextInput, Text, StyleSheet } from 'react-native'

const Login = ({navigation}) => {
  const [formData, setFormData] = useState({username: "", password: ""})

  const handleSubmit = () => {
    
  }

  return (
    <View style={LoginStyles}>
        <TextInput placeholder='username' onChangeText={txt => setFormData({...formData, username: txt})} />
        <TextInput 
            placeholder='password' 
            onChangeText={txt => setFormData({...formData, password: txt})} 
            secureTextEntry
        />     
        <Button 
          onPress={handleSubmit} 
          title='Login' 
          disabled={formData.username === "" || formData.password === ""} 
        />
        <Text>OR</Text>
        <Button title='Sign Up' onPress={() => navigation.navigate("Signup")} />
    </View>
  )
}

const LoginStyles = StyleSheet.create({
  flex: 1,
  justifyContent: 'center',
})

export default Login