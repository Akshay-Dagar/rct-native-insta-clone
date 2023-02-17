import React from 'react'
import NewsFeed from "../NewsFeed/NewsFeed";
import Profile from "../Profile/Profile";
import CreatePost from "../CreatePost/CreatePost";
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
  return null
}

const Navbar = () => {
  return (
    <Tab.Navigator initialRouteName="NewsFeed" labeled={false} shifting={false} inactiveColor="#fff" barStyle={{ backgroundColor: '#000' }} >
        <Tab.Screen 
          name="WrapCreatePost" 
          component={EmptyScreen}
          listeners={({ navigation }) => ({
              tabPress: event => {
                  event.preventDefault();
                  navigation.navigate("CreatePost")
              }
          })}
          options={{tabBarIcon: props => (<Icon name="plus" size={30} color={props.color}/>)}}
        />
        <Tab.Screen name="NewsFeed" component={NewsFeed} options={{tabBarIcon: props => (<Icon name="home" size={30} color={props.color}/>)}} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: props => (<Icon name="user" size={30} color={props.color}/>)}} />
    </Tab.Navigator>
  )
}

export default Navbar