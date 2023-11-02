import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//Importing UI
import Card from "../UI/Card";

//Import the imageuploader
import { uploadImage } from "../components/Image_Handler/Image_Uploader";

//Import Redux slicer
import { useDispatch, useSelector } from "react-redux";

function Camera_Screen() {
  //For Navigate
  const navigation = useNavigation();

  //For Camera and Picture
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  //Redux stuff
  const dispatch = useDispatch();
  const uploadStatus = useSelector((state) => state.uploadState.status);

  useEffect(() => {
    if (uploadStatus === 1) {
      console.log("Success upload");
      navigation.navigate("Result");
    }
  }, [uploadStatus]);

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
      quality: 1,
    });
    console.log(photo);
    setImageUri(photo.uri);
  }

  const handleImageUpload = () => {
    uploadImage(imageUri, dispatch);
  };

  const handleReopenCamera = () => {
    setImageUri(null);
  };

  if (imageUri) {
    return (
      //   <View>
      //     <Text>Picture is taken!!!</Text>
      //   </View>
      <View style={{ flex: 1 }}>
        <Image source={{ uri: imageUri }} style={{ flex: 1 }} />
        <Button onPress={handleImageUpload} title="Upload a picture"></Button>
        <Button
          onPress={handleReopenCamera}
          title="Take a picture again"
        ></Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={CameraType.back}
        autoFocus={1}
        ref={(ref) => {
          setCamera(ref);
        }}
        focusDepth={0.4}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={takeimageHandler}
          ></TouchableOpacity>
        </View>
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
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30, // Makes it a circle
    backgroundColor: "white",
    marginBottom: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
