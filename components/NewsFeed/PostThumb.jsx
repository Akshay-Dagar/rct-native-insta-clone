import React, {useState} from 'react'
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import api from '../../api'
import { profileImageRandomizer } from '../../utils'

const PostThumb = ({post, navigation}) => {
  const [likes, setLikes] = useState(post.likes)
  const [liked, setLiked] = useState(false)
  const dispatch = useDispatch()

  const likePost = () => {
    setLikes(likes+1)
    setLiked(true)
    dispatch(api.likePost(post._id))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Post", {post})}>
        <Image source={{uri: post.image}} style={styles.thumb}/>
      </TouchableOpacity>
      <View style={styles.details}>
        <Image source={profileImageRandomizer()} style={styles.profileImage}/>
        <Text style={styles.caption}>{post.caption}</Text>
        <View style={styles.likes}>
          <Icon name={liked ? "heart" : "heart-outline"} size={25} onPress={likePost} color="red" />
          <Text style={styles.likeCount}>{likes}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  details: {
    marginBottom: 10,
    marginHorizontal: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 90,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 20
  },
  likes: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  likeCount: {
    fontSize: 19,
    marginLeft: 5,
    color: 'red'
  },
  thumb: {
    height: 300,
    width: 350,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  profileImage: {
    height: 55,
    width: 25,
    borderRadius: 100,
    flex: 1
  },
  caption: {
    flexWrap: 'wrap',
    flex: 4, 
    marginHorizontal: 10,
    fontWeight: '600'
  }
})

export default PostThumb