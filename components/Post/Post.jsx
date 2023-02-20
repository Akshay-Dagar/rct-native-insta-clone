import React, { useState, useEffect } from 'react'
import { Button, Text, TextInput, FlatList, ScrollView, Image, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import Comment from './Comment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Post = ({route}) => {
  const post = route.params.post

  const [comment, setComment] = useState("")
  const [likes, setLikes] = useState(post.likes)
  const comments = useSelector(state => state.comments.value)
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()


  const likePost = () => {
    setLikes(likes+1)
    dispatch(api.likePost(post._id))
  }

  useEffect(() => {
    dispatch(api.getComments(post._id))
  }, [])
  

  const addComment = () => {
    dispatch(api.createComment({text: comment, userId: user.userId, postId: post._id}))
  }

  return (
    <ScrollView>
        <View style={styles.postContainer}>
          <Image source={{uri: post.image}} style={styles.image}/>
          <View style={styles.details}>
            <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
            <Text>{post.caption}</Text>
            <View style={styles.likes}>
              <Icon name="heart-outline" size={25} onPress={likePost}/>
              <Text style={styles.likeCount}>{likes}</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentsContainer}>
          <Text style={{borderColor: 'rgba(0, 0, 0, 0.08)', borderTopWidth: 1, marginVertical: 10}}></Text>
          <Text style={{fontSize: 30, marginLeft: 10}}>Comments</Text>
          <View style={styles.addCommentContainer}>
            <TextInput placeholder='Add Comment...' onChangeText={txt => setComment(txt)} multiline style={styles.commentInputBox}/>
            <Button title='Add' onPress={addComment} disabled={comment === ""}/>
          </View>
          <FlatList 
              numColumns={1}
              horizontal={false}
              data={comments}
              renderItem={({item}) => (
                <View>
                  <Text style={{borderColor: 'rgba(0, 0, 0, 0.08)', borderTopWidth: 1, marginVertical: 10}}></Text>
                  <Comment text={item.text} userId={item.userId}/>
                </View>
              )}
          />
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    height: 400,
    width: '100%',
    resizeMode: 'cover'
  },
  details: {
    marginVertical: 30,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  likes: {
    display: 'flex',
    flexDirection: 'row',
  },
  likeCount: {
    fontSize: 19,
    marginLeft: 5
  },
  commentsContainer: {
    marginVertical: 20
  },
  addCommentContainer: {
    marginHorizontal: 10
  },
  commentInputBox: {
    height: 100, 
    backgroundColor: '#fcfcfc', 
    borderRadius: 10, 
    marginVertical: 20
  }
})

export default Post