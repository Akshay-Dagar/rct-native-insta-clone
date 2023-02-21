import React, { useState } from 'react'
import { View, Image, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
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
    navigation.popToTop()
  }

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={{flex: 1}} resizeMode="repeat">
      <ScrollView style={styles.container}>
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
          <Button 
            title="Create Post" 
            onPress={handleSubmit} 
            disabled={!formData || formData.caption==="" }
            style={styles.button}
          />
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  input: {
    marginTop: 15,
    backgroundColor: 'white',
    height: 80,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  button: {
    marginBottom: 20
  }
})

export default CreatePost