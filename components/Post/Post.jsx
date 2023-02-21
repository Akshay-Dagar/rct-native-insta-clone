import React, { useState, useEffect } from 'react'
import { Button, Text, TextInput, FlatList, ScrollView, Image, StyleSheet, View, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import Comment from './Comment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Post = ({route}) => {
  const post = route.params.post

  const [comment, setComment] = useState("")
  const [likes, setLikes] = useState(post.likes)
  const [liked, setLiked] = useState(false)
  const comments = useSelector(state => state.comments.value)
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()


  const likePost = () => {
    setLikes(likes+1)
    setLiked(true)
    dispatch(api.likePost(post._id))
  }

  useEffect(() => {
    dispatch(api.getComments(post._id))
  }, [])
  

  const addComment = () => {
    dispatch(api.createComment({text: comment, userId: user.userId, postId: post._id}))
  }

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={{flex: 1}} resizeMode="repeat">
    <ScrollView>
        <View style={styles.postContainer}>
          <Image source={{uri: post.image}} style={styles.image}/>
          <View style={styles.details}>
            <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
            <Text style={styles.caption}>{post.caption}</Text>
            <View style={styles.likes}>
              <Icon name={liked ? "heart" : "heart-outline"} size={25} onPress={likePost} color="red" />
              <Text style={styles.likeCount}>{likes}</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentsContainer}>
          <Text style={{fontSize: 20, marginLeft: 10}}>Comments</Text>
          <View style={styles.addCommentContainer}>
            <TextInput placeholder='Add Comment...' onChangeText={txt => setComment(txt)} multiline style={styles.commentInputBox}/>
            <Button title='Add' onPress={addComment} disabled={comment === ""} />
          </View>
          <FlatList 
              numColumns={1}
              horizontal={false}
              data={comments}
              style={{marginVertical: 5, marginHorizontal: 10}}
              renderItem={({item}) => (
                <View>
                  {/* <Text style={{borderColor: 'rgba(0, 0, 0, 0.08)', borderTopWidth: 1, marginVertical: 10}}></Text> */}
                  <Comment text={item.text} userId={item.userId}/>
                </View>
              )}
          />
        </View>
        
    </ScrollView>
    </ImageBackground>
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
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 90,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  likes: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
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
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    marginTop: 20,
    padding: 10
  },
  caption: {
    flexWrap: 'wrap',
    flex: 4, 
    marginHorizontal: 10,
    fontWeight: '600'
  },
  profileImage: {
    height: 25,
    width: 25,
    borderRadius: 100,
    flex: 1,
    marginLeft: 7
  }
})

export default Post