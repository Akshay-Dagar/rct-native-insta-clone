import React, { useEffect } from 'react'
import { Text, StyleSheet, FlatList, Image, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'

const Profile = ({route}) => {
  const userPosts = useSelector(state => state.posts.value)
  const dispatch = useDispatch()

  const selectedUserId = route.params.selectedUserId

  useEffect(() => {
    dispatch(api.getPosts(userId = selectedUserId))
  }, [selectedUserId])
  
  
  return (
    <View styles={styles.container}>
      <View styles={styles.detailsContainer}>
        <Text>{selectedUserId}</Text>
        <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
      </View>
      <FlatList 
        numColumns={3}
        horizontal={false}
        data={userPosts}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <Text>{item.caption}</Text>
              {/* <Image 
                source={{uri: item.image}}
                style={styles.thumb}
              /> */}
            </TouchableOpacity>
          )
        }}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  thumb: {
    flex: 1,
    aspectRatio: 1,
    width:'10%',
    height:'10%'
  },
  profileImage: {
    borderRadius: 50,
    width: '100%',
    height: '50%'
  }
})

export default Profile