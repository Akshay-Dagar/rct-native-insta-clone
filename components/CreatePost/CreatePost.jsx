import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useWindowDimensions } from "react-native";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cam, setCam] = useState(null)

  const {width} = useWindowDimensions();

  const capture = async () => {
    if (cam) {
      const data = await cam.takePictureAsync(null)
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>The App doesn't have access to your camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={{ height: Math.round((width * 16) / 9), width: "100%" }} type={type} ratio="16:9" ref={c => setCam(c)}>
        <View
          style={styles.buttonContainer}>
          <TouchableOpacity
            style={{left: 150, bottom: 10}}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.flipIcon}>
              <Icon name='camera-flip' size={30} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{position: 'absolute'}}
            onPress={capture}>
            <Text style={styles.captureIcon}>
              <Icon name='circle' size={70}/>
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  captureIcon: { 
    fontSize: 18,
    marginBottom: 110,
    color: 'white' 
  },
  flipIcon: {
    fontSize: 18,
    marginBottom: 120,
    color: 'white' 
  }
})