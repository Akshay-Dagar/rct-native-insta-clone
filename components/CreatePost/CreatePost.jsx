import React, { useState } from 'react'
import { View, Image, TextInput, Button, StyleSheet, Text } from 'react-native'

const CreatePost = (props) => {
  const [formData, setFormData] = useState({caption: "", tags: [], image: props.route.params.imgUrl})
  const handleSubmit = async () => {
    const res = await fetch(props.route.params.imgUrl)
    const blob = await res.blob()
    console.log(blob);
  }

  return (
    <View style={styles.container}>
        <Image source={{uri: props.route.params.imgUrl}} style={styles.image} />
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
        <Button title="Create Post" onPress={handleSubmit} disabled={!formData || formData.caption==="" || !formData.image}/>
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