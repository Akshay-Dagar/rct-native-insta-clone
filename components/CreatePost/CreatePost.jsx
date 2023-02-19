import React, { useState } from 'react'
import { View, Image, TextInput, Button, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import { imgToBase64 } from '../../utils'

const CreatePost = ({route, navigation}) => {
  const [formData, setFormData] = useState({caption: "", tags: []})
  const userId = useSelector(state => state.user?.value?.userId)
  const dispatch = useDispatch()


  const handleSubmit = async () => {
    const base64Img = await imgToBase64(route.params.imgUrl)
    dispatch(api.createPost({...formData, image: base64Img, userId: userId}))
    navigation.navigate('Profile', {selectedUserId: userId})
  }

  return (
    <View style={styles.container}>
        <Image source={{uri: route.params.imgUrl}} style={styles.image} />
        <TextInput 
          placeholder='Write a caption for your image' 
          onChangeText={txt => {setFormData({...formData, caption: txt})}} 
          style={styles.input}
        />
        {/* <TextInput 
          placeholder='Add a tag for your post'
          style={styles.input}
          onEndEditing={e => {

          }}
          onChangeText={txt => {setFormData({...formData, tags: [...formData.tags, txt]})}} 
        />
        {formData.tags && formData.tags.map(tag => (
            <Text>#{tag}</Text>
        ))} */}
        <Button title="Create Post" onPress={handleSubmit} disabled={!formData || formData.caption==="" }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '50%'
  },
  input: {
  }
})

export default CreatePost