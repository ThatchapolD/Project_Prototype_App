import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//Import the imageuploader
import { uploadImage } from "../components/Image_Handler/Image_Uploader";

//Import Redux slicer
import { useDispatch } from "react-redux";

function Camera_Screen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const dispatch = useDispatch();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takeimageHandler() {
    if (!camera) return;
    const photo = await camera.takePictureAsync({
      quality: 0.5,
    });
    console.log(photo);
    setImageUri(photo.uri);
  }

  const handleImageUpload = () => {
    uploadImage(imageUri, dispatch);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={CameraType.back}
        autoFocus={1}
        ref={(ref) => {
          setCamera(ref);
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takeimageHandler}>
            <Text style={styles.text}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={handleImageUpload} title="Upload"></Button>
      </Camera>
    </View>
  );
}

export default Camera_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
