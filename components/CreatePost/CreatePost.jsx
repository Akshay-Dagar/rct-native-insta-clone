import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useWindowDimensions } from "react-native";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const {width} = useWindowDimensions();
  const height = Math.round((width * 16) / 9);

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
    <View style={{ flex: 1 }}>
      <Camera style={{ height: height, width: "100%" }} type={type} ratio="16:9" >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 120, marginLeft: 5, color: 'white' }}>
              <Icon name='camera-flip' size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}