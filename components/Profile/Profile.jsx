import React, { useEffect } from 'react'
import { Text, StyleSheet, FlatList, Image, View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'

const Profile = ({route, navigation}) => {
  const userPosts = useSelector(state => state.posts.value)
  const dispatch = useDispatch()

  const selectedUserId = route.params.selectedUserId

  useEffect(() => {
    dispatch(api.getPosts(selectedUserId))
  }, [selectedUserId])
  
  
  return (
    <ScrollView styles={styles.container}>
      <View styles={styles.detailsContainer}>
        <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
        <Text style={{fontSize: 30, fontStyle: 'italic', alignSelf: 'center'}}>{selectedUserId}</Text>
        <Text style={{fontSize: 15, alignSelf: 'center'}}>1.2K Followers</Text>
      </View>
      {!userPosts && <ActivityIndicator size={50} color="#000" style={styles.spinner} />}
      {userPosts && <Text style={{borderColor: 'rgba(0, 0, 0, 0.08)', borderTopWidth: 1, marginTop: 40}} />}
      {userPosts && <Text style={styles.postsHeader}>Posts</Text>}
      <FlatList 
        numColumns={3}
        horizontal={false}
        data={userPosts}
        style={styles.userPostsContainer}
        renderItem={({item}) => {
          return (
            <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <TouchableOpacity
                onPress={() => {navigation.navigate("Post", {post: item})}}
              >
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {navigation.navigate("Post", {post: item})}}
              >
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {navigation.navigate("Post", {post: item})}}
              >
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {navigation.navigate("Post", {post: item})}}
              >
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {navigation.navigate("Post", {post: item})}}
              >
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
            </View>
            
          )
        }}
      >
      </FlatList>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
  thumb: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    resizeMode: 'contain'
  },
  profileImage: {
    borderRadius: 100,
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 10,
    alignSelf: 'center'
  },
  spinner: {
    marginTop: 100
  },
  detailsContainer: {},
  userPostsContainer: {
    marginVertical: 20
  },
  postsHeader: {
    marginHorizontal: 10,
    fontSize: 22,
    marginTop: 30
  }
})

export default Profile