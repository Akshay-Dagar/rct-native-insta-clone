import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, ImagePickerIOS, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useWindowDimensions } from "react-native";
import { showToast } from '../../utils';

export default function CaptureImage({navigation}) {
  const [hasCamPermission, setHasCamPermission] = useState(null);

  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cam, setCam] = useState(null)
  const [loading, setLoading] = useState(false)

  const {width} = useWindowDimensions();

  const capture = async () => {
    if (cam) {
      try {
        const image = await cam.takePictureAsync(null)
        const imgUrl = image.uri
        navigation.navigate("Create Post", {imgUrl})
      }
      catch {
        showToast("Failed to capture image, something went wrong")
      }
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const imgUrl = result.assets[0].uri
      navigation.navigate("Create Post", {imgUrl})
    }
  };

  useEffect(() => {
    (async () => {
      const camPermission = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(camPermission.status === 'granted');
    })();
  }, []);

  if (loading) {
    return <ActivityIndicator size={50} color="#000" style={{alignSelf: 'center', marginTop: 150}} />
  }

  if (hasCamPermission === null) {
    return <View />;
  }
  if (!hasCamPermission) {
    return <Text>The App doesn't have access to your camera or image gallery</Text>;
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
          <TouchableOpacity
            style={{position: 'absolute', left: 10, bottom: 20}}
            onPress={pickImage}>
            <Text style={styles.captureIcon}>
              <Icon name='image-plus' size={30}/>
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