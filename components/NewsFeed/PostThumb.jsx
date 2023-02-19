import React, {useState} from 'react'
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import api from '../../api'

const PostThumb = ({post, navigation}) => {
  const [likes, setLikes] = useState(post.likes)
  const dispatch = useDispatch()

  const likePost = () => {
    setLikes(likes+1)
    dispatch(api.likePost(post._id))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Post", {post})}>
        <Image source={{uri: post.image}} style={styles.thumb}/>
      </TouchableOpacity>
      <View style={styles.details}>
        <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
        <Text>{post.caption}</Text>
        <View style={styles.likes}>
          <Icon name="heart-outline" size={25} onPress={likePost}/>
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
    marginVertical: 10,
    marginHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  likes: {
    display: 'flex',
    flexDirection: 'row'
  },
  likeCount: {
    fontSize: 19,
    marginLeft: 5
  },
  thumb: {
    height: 300,
    width: 320,
    borderRadius: 20
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 100
  }
})

export default PostThumb