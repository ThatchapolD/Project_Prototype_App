import { useEffect } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Importing UI
import MainButton from "../UI/MainButton";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Import Camera lib from expo-image-picker
import { launchCameraAsync, useCameraPermissions } from "expo-image-picker";

//Import the imageuploader
import { uploadImage } from "../components/Image_Handler/Image_Uploader";

//Import Redux slicer
import { useDispatch, useSelector } from "react-redux";
import { selecting } from "../redux/slicers/imageSlice";

function Camera_Screen() {
  const language = useSelector((state) => state.language.languageState);
  const imageUri = useSelector((state) => state.imageStorage.imageUri);

  //For Navigate
  const navigation = useNavigation();

  //For Camera and Picture
  const [permission, requestPermission] = useCameraPermissions();

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
    const image = await launchCameraAsync({
      aspect: [16, 9],
      quality: 1,
    });
    console.log(image.assets[0].uri);
    dispatch(selecting(image.assets[0].uri));
  }

  const handleImageUpload = () => {
    uploadImage(imageUri, dispatch);
  };

  const handleReopenCamera = () => {
    dispatch(selecting(null));
  };

  if (language === "Thai") {
    navigation.setOptions({ title: "กล้อง" });
  } else {
    navigation.setOptions({ title: "Camera" });
  }

  if (imageUri) {
    return (
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
      <View style={styles.mainButtonContainer}>
        <MainButton
          onPressed={takeimageHandler}
          iconName={"camera"}
          iconSize={27}
          iconColor={"black"}
        >
          {language === "Eng" ? "Take a photo" : "กดเพื่อถ่ายรูป"}
        </MainButton>
      </View>
    </View>
  );
}

export default Camera_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalColor.colors.primary10,
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

  mainButtonContainer: {
    flex: 1,
    justifyContent: "center",
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
