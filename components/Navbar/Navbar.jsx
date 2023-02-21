import React from 'react'
import NewsFeed from "../NewsFeed/NewsFeed";
import Profile from "../Profile/Profile";
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useSelector } from 'react-redux';

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
  return null
}

const Navbar = () => {
  const user = useSelector(state => state.user.value)
  return (
    <Tab.Navigator initialRouteName="NewsFeed" labeled={false} shifting={false} inactiveColor="#fff" activeColor='#f2eecb' barStyle={{ backgroundColor: '#5675e3' }} >
        <Tab.Screen 
          name="WrapCreatePost" 
          component={EmptyScreen}
          listeners={({ navigation }) => ({
              tabPress: event => {
                  event.preventDefault();
                  navigation.navigate("Capture")
              }
          })}
          options={{tabBarIcon: props => (<Icon name="plus" size={30} color={props.color}/>)}}
        />
        <Tab.Screen name="NewsFeed" component={NewsFeed} options={{tabBarIcon: props => (<Icon name="home" size={30} color={props.color} />)}} />
        <Tab.Screen name="Profile" component={Profile} initialParams={{selectedUserId: user.userId}} options={{tabBarIcon: props => (<Icon name="user" size={30} color={props.color}/>)}} />
    </Tab.Navigator>
  )
}

export default Navbar