import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import api from '../../api'
import { userFetchStart } from '../../reducers/user'

const Signup = ({navigation}) => {
  const [formData, setFormData] = useState({userId: "", password: ""})
  const [isValidPassword, setIsValidPassword] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(userFetchStart())
    dispatch(api.signup(formData))
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TextInput 
          placeholder='username' 
          onChangeText={txt => setFormData({...formData, userId: txt})}
          style={styles.input}
        />
        <TextInput 
            placeholder='password' 
            onChangeText={txt => setFormData({...formData, password: txt})} 
            secureTextEntry
            style={styles.input}
        />     
        <TextInput 
            placeholder='re-enter password' 
            onChangeText={txt => setIsValidPassword(txt === formData.password)} 
            secureTextEntry
            style={styles.input}
        />
        {!isValidPassword && <Text style={styles.invalidLabel}>Passwords don't match</Text>}
        <Button 
          onPress={handleSubmit} 
          disabled={!isValidPassword || formData.userId === "" || formData.password === ""}
          style={!isValidPassword || formData.userId === "" || formData.password === "" ? styles.disabledButton : styles.button}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Button>
        <Text 
          style={styles.seperator}>
            -----------------------------------    or    -----------------------------------
        </Text>
        <Button 
          onPress={() => navigation.navigate("Login")} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 50,
    width: 300,
    padding: 10,
    backgroundColor: '#fcfcfc', 
    borderRadius: 10, 
    marginVertical: 10
  },
  button: {
    height: 48,
    width: '80%',
    borderRadius: 5, 
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: '#53cdfc',
  },
  disabledButton: {
    height: 48,
    width: '80%',
    borderRadius: 5, 
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: '#d3d3d3',
  },
  seperator: {
    fontStyle: 'italic',
    marginVertical: 20,
    fontSize: 15,
    fontWeight:'100',
    color: 'rgba(0,0,0,0.2)'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    lineHeight: 25
  },
  invalidLabel: {
    fontSize: 12, 
    fontStyle: 'italic', 
    color: 'red', 
    alignSelf: 'flex-start', 
    marginHorizontal: 35,
    marginBottom: 10,
    marginTop: 0
  }
})

export default Signup