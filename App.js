import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Provider, useSelector } from 'react-redux';
import store from './store'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';

export default function App() {
  return (
    <Provider store = {store}>
      <Home />
    </Provider>
  )
}