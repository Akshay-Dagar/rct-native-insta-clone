import React, { useState, useEffect } from 'react'
import { Button, Text, TextInput, FlatList, ScrollView, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import Comment from './Comment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Post = ({route}) => {
  const [comment, setComment] = useState("")
  const comments = useSelector(state => state.comments.value)
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()

  const post = route.params.post


  useEffect(() => {
    dispatch(api.getComments(post._id))
  }, [])
  

  const addComment = () => {
    dispatch(api.createComment({text: comment, userId: user.userId, postId: post._id}))
  }

  return (
    <ScrollView>
        {/* <Image source={{uri: post.image}}/> */}
        <Text>{post.caption}</Text>
        <Text><Icon name="heart-outline" size={40} color={'red'}/></Text>
        <TextInput placeholder='Add Comment...' onChangeText={txt => setComment(txt)}/>
        <Button title='Add' onPress={addComment} disabled={comment === ""}/>
        <FlatList 
            numColumns={1}
            horizontal={false}
            data={comments}
            renderItem={({item}) => (
                <Comment text={item.text} userId={item.userId}/>
            )}
        />
    </ScrollView>
  )
}

export default Post