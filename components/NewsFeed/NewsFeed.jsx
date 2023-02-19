import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import { ScrollView, StyleSheet, ActivityIndicator, View } from 'react-native'
import PostThumb from './PostThumb'
import Header from '../Header'

const NewsFeed = ({navigation}) => {
  const newsfeed = useSelector(state => state.newsfeed.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api.getNewsFeed())
  }, [])

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      {newsfeed?.map((post, idx) => (
        <View>
          <PostThumb post={post} key={`post-${idx}0`} navigation={navigation}/>
          <PostThumb post={post} key={`post-${idx}1`} navigation={navigation}/>
          <PostThumb post={post} key={`post-${idx}2`} navigation={navigation}/>
          <PostThumb post={post} key={`post-${idx}3`} navigation={navigation}/>
          <PostThumb post={post} key={`post-${idx}4`} navigation={navigation}/>
        </View>
      ))}
      {!newsfeed && <ActivityIndicator size={50} color="#000" style={styles.spinner} />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  spinner: {
    marginTop: 100
  }
})

export default NewsFeed