import React from 'react'
import { View, Button, TextInput } from 'react-native'

const Auth = ({isSignup}) => {
  const [formData, setFormData] = useState({username: "", password: ""})
  const [isValidPassword, setIsValidPassword] = useState(false)

  const handleSubmit = () => {
    
  }

  return (
    <View>
        <TextInput placeholder='username' onChangeText={txt => setFormData({...formData, username: txt})} />
        <TextInput 
            placeholder='password' 
            onChangeText={txt => setFormData({...formData, password: txt})} 
            secureTextEntry
        />     
        {isSignup && 
          <TextInput 
            placeholder='re-enter password' 
            onChangeText={txt => setIsValidPassword(txt === formData.password)} 
            secureTextEntry
          />
        }
        {!isValidPassword && <Text>Passwords don't match</Text>}
        <Button onPress={handleSubmit} title='Login' disabled={!isValidPassword} />
    </View>
  )
}

export default Auth