import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <div>hello</div>
    </NavigationContainer>
  );
}
