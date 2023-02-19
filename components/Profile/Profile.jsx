import React, { useEffect } from 'react'
import { Text, StyleSheet, FlatList, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'

const Profile = ({route}) => {
  const userPosts = useSelector(state => state.posts.value)
  const dispatch = useDispatch()

  const selectedUserId = route.params.selectedUserId

  useEffect(() => {
    dispatch(api.getPosts(selectedUserId))
  }, [selectedUserId])
  
  
  return (
    <View styles={styles.container}>
      <View styles={styles.detailsContainer}>
        <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
        <Text style={{fontSize: 30, fontStyle: 'italic'}}>{selectedUserId}</Text>
        <Text style={{fontSize: 25}}>1.2K</Text>
      </View>
      {!userPosts && <ActivityIndicator size={50} color="#000" style={styles.spinner} />}
      <FlatList 
        numColumns={3}
        horizontal={false}
        data={userPosts}
        renderItem={({item}) => {
          return (
            <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <TouchableOpacity>
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image 
                  source={{uri: item.image}}
                  style={styles.thumb}
                />
              </TouchableOpacity>
              <TouchableOpacity>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 40,
    backgroundColor: 'black'
  },
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
    marginVertical: 40,
    marginHorizontal: 10
  },
  spinner: {
    marginTop: 100
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 10,
    alignItems: 'center'
  }
})

export default Profile