import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import { ScrollView, StyleSheet, ActivityIndicator, View, ImageBackground, RefreshControl } from 'react-native'
import PostThumb from './PostThumb'
import Header from '../Header'

const NewsFeed = ({navigation}) => {
  const newsfeed = useSelector(state => state.newsfeed.value)
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch()


  const onRefresh = () => {
    setRefreshing(true)
    dispatch(api.getNewsFeed())
    setRefreshing(false)
  }

  useEffect(() => {
    dispatch(api.getNewsFeed())
  }, [])

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={{flex: 1}} resizeMode="repeat">
      <View style={styles.container}>
        <Header />
        <ScrollView 
          style={{flex: 1}} 
          contentContainerStyle={styles.contentContainer} 
          refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          {newsfeed?.map((post, idx) => (
            <View>
              <PostThumb post={post} key={`post-${idx}`} navigation={navigation}/>
            </View>
          ))}
          {!newsfeed && <ActivityIndicator size={50} color="#000" style={styles.spinner} />}
        </ScrollView>
      </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'center',
  },
  // container: {
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  spinner: {
    marginTop: 100
  }
})

export default NewsFeed