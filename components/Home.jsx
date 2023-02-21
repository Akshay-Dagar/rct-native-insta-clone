import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import CaptureImage from './CreatePost/CaptureImage';
import CreatePost from './CreatePost/CreatePost';
import Profile from './Profile/Profile'
import Post from './Post/Post'
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator()

const Home = () => {
  const user = useSelector(state => state.user.value)
  const isFetchingUser = useSelector(state => state.user.loading)

  if (isFetchingUser) {
    return (
      <ActivityIndicator size={50} color="#000" style={{alignSelf: 'center', marginTop: 100}} />
    )
  }

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
          <Stack.Screen name='Capture' component={CaptureImage} options={{title: 'Capture'}} />
          <Stack.Screen name='Create Post' component={CreatePost} options={{title: 'New Post'}} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Post' component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Home