import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import { View } from 'react-native'
import PostThumb from './PostThumb'

const NewsFeed = () => {
  const newsfeed = useSelector(state => state.newsfeed.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api.getNewsFeed())
  }, [])

  return (
    <View>
      {newsfeed?.map(post => (
        <PostThumb post={post}/>
      ))}
    </View>
  )
}

export default NewsFeed