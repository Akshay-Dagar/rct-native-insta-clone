import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import { ScrollView, View } from 'react-native'
import PostThumb from './PostThumb'

const NewsFeed = ({navigation}) => {
  const newsfeed = useSelector(state => state.newsfeed.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api.getNewsFeed())
  }, [])

  return (
    <ScrollView>
      {newsfeed?.map((post, idx) => (
        <PostThumb post={post} key={`post-${idx}`} navigation={navigation}/>
      ))}
    </ScrollView>
  )
}

export default NewsFeed