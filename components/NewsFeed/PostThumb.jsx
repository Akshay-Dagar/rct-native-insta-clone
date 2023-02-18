import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'

const PostThumb = ({post}) => {
  return (
    <TouchableOpacity onPress={null}>
        <Image source={{uri: post.image}} style={{height: '30%', width: '90%'}}/>
        <Text>{post.caption}</Text>
    </TouchableOpacity>
  )
}

export default PostThumb