import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Comment = ({text, userId}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/favicon.png')} style={styles.profileImage}/>
        <View style={styles.metaContainer}>
          <Text style={{fontSize: 12, fontStyle: 'italic'}}>{userId}</Text>
          <Text style={{fontSize: 18, paddingRight: 20}}>{text}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    marginRight: 80
  },
  metaContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20
  }
})

export default Comment