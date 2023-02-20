import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import api from '../../api'
import { userFetchStart } from '../../reducers/user'


const Login = ({navigation}) => {
  const [formData, setFormData] = useState({userId: "", password: ""})
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(userFetchStart())
    dispatch(api.login(formData))
  }

  return (
    <View style={styles.container}>
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
        <Button 
          onPress={handleSubmit} 
          disabled={formData.userId === "" || formData.password === ""} 
          style={formData.userId === "" || formData.password === "" ? styles.disabledButton : styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Button>
        <Text 
          style={styles.seperator}>
            -----------------------------------    or    -----------------------------------
        </Text>
        <Button onPress={() => navigation.navigate("Signup")} style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Button>
    </View>
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
  }
})

export default Login