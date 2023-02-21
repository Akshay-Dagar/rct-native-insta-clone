import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Image source={require('../assets/instagram.png')} style={styles.logo} />
        <Image source={require('../assets/instatext.svg')} style={styles.headerImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    flexDirection: 'row'
  },
  logo: {
    height: 40,
    width: 40,
    marginLeft: 10
  },
  headerImage: {
    height: 40,
    width: 110,
    marginLeft: 10
  }
})
export default Header