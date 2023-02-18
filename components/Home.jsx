import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import CaptureImage from './CreatePost/CaptureImage';
import CreatePost from './CreatePost/CreatePost';

const Stack = createStackNavigator()

const Home = () => {
  const user = useSelector(state => state.user.value)

  if (!user) {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Navbar'>
          <Stack.Screen name='Navbar' component={Navbar} options={{headerShown: false}} />
          <Stack.Screen name='Capture' component={CaptureImage} />
          <Stack.Screen name='Create Post' component={CreatePost} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Home