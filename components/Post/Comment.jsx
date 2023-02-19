import React from 'react'
import { Text, View } from 'react-native'

const Comment = ({text, userId}) => {
  return (
    <View>
        <Text>{userId}</Text>
        <Text>{text}</Text>
    </View>
  )
}

export default Comment