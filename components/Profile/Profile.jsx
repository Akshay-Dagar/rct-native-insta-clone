import React, { useEffect } from 'react'
import { RefreshControl, Text, StyleSheet, FlatList, Image, View, TouchableOpacity, ActivityIndicator, ScrollView, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
// import { setBackground } from '../../reducers/background'
import { profileImageRandomizer, bgImagePicker } from '../../utils'
import Header from '../Header'

const Profile = ({route, navigation}) => {
  const userPosts = useSelector(state => state.posts.value)
  // const background = useSelector(state => state.background.value)
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch()

  const selectedUserId = route.params.selectedUserId

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(api.getPosts(selectedUserId))
    setRefreshing(false)
  }

  useEffect(() => {
    dispatch(api.getPosts(selectedUserId))
  }, [selectedUserId])

  // const bgpicker = idx => {
  //   const bgImg = bgImagePicker(idx)
  //   dispatch(setBackground(bgImg))
  // }
  
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={{flex: 1}} resizeMode="repeat">

    <View style={styles.container}>
      <Header />
      <ScrollView 
        styles={styles.contentContainer} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View styles={styles.detailsContainer}>
          <Image source={profileImageRandomizer()} style={styles.profileImage}/>
          <Text style={{fontSize: 30, fontStyle: 'italic', alignSelf: 'center'}}>{selectedUserId}</Text>
          <Text style={{fontSize: 15, alignSelf: 'center'}}>{(Math.random() * 4 + 1).toFixed(2)}K Followers</Text>
        </View>
        {/* <View style={styles.bgpicker}>
          {Array.from(Array(7)).map((_, i) => 
            <TouchableOpacity key={i} onPress={() => bgpicker(i)}>
              <Image source={bgImagePicker(i)} resizeMode="contain" style={styles.imgPicker} />
            </TouchableOpacity>
          )}
        </View> */}
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
              </View>
              
            )
          }}
        >
        </FlatList>
      </ScrollView>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  thumb: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    resizeMode: 'contain',
    backgroundColor: 'black'
  },
  profileImage: {
    borderRadius: 100,
    height: 200,
    width: 200,
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
    marginTop: 10
  },
  // bgpicker: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   marginVertical: 20,
  // },
  // imgPicker: {
  //   borderRadius: 100,
  //   height: 200,
  // }
})

export default Profile