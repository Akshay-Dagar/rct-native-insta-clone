import React, { useState } from 'react'
import { View, Button, TextInput, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import api from '../../api'

const Signup = ({navigation}) => {
  const [formData, setFormData] = useState({userId: "", password: ""})
  const [isValidPassword, setIsValidPassword] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(api.signup(formData))
  }

  return (
    <View style={SignupStyles}>
        <TextInput placeholder='username' onChangeText={txt => setFormData({...formData, userId: txt})} />
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
          disabled={(!isValidPassword || formData.userId === "" || formData.password === "")}
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