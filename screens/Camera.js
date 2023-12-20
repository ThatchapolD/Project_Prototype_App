import { useEffect } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Importing UI
import MainButton from "../UI/MainButton";
import Card from "../UI/Card";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Import Camera lib from expo-image-picker
import { launchCameraAsync, useCameraPermissions } from "expo-image-picker";

//Import the imageuploader
import { uploadImage } from "../components/Image_Handler/Image_Uploader";

//Import Redux slicer
import { useDispatch, useSelector } from "react-redux";
import { selecting } from "../redux/slicers/imageSlice";
import { updating } from "../redux/slicers/uploadStateSlice";

function Camera_Screen() {
  //Redux stuff
  const dispatch = useDispatch();
  const uploadStatus = useSelector((state) => state.uploadState.status);
  const language = useSelector((state) => state.language.languageState);
  const imageUri = useSelector((state) => state.imageStorage.imageUri);

  //For Navigate
  const navigation = useNavigation();

  //For Camera and Picture
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    //For language changing
    if (language === "Thai") {
      navigation.setOptions({ title: "กล้อง" });
    } else {
      navigation.setOptions({ title: "Camera" });
    }

    //Change the page to Reuslt after uploading
    if (uploadStatus === 1) {
      console.log("Waiting for result");
      navigation.navigate("Result");
    }
  }, [uploadStatus, language]);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>
            {language === "Eng"
              ? "We need your permission to show the camera"
              : "ต้องได้รับอนุญาตในการใช้งานกล้อง"}
          </Text>
          <MainButton onPressed={requestPermission}>
            {language === "Eng" ? "Grant a permission" : "กดเพื่ออนุญาต"}
          </MainButton>
        </Card>
      </View>
    );
  }

  async function takeimageHandler() {
    const image = await launchCameraAsync({
      aspect: [16, 9],
      quality: 1,
      allowsEditing: true,
    });
    console.log(image.assets[0].uri);
    dispatch(selecting(image.assets[0].uri));
  }

  const handleImageUpload = () => {
    uploadImage(imageUri, dispatch);
    dispatch(updating(1));
  };

  const handleReopenCamera = () => {
    dispatch(selecting(null));
  };

  if (imageUri) {
    return (
      <View style={styles.container}>
        <Card>
          <Image
            source={{ uri: imageUri }}
            // style={{ flex: 1 }}
            style={{ width: 300, height: 300 }}
          />
        </Card>
        <View style={{ padding: 10 }}>
          {uploadStatus === 1 ? (
            <View />
          ) : (
            <Button
              onPress={handleImageUpload}
              title={
                language === "Eng"
                  ? "Upload a picture"
                  : "กดเพื่อทำการอัปโหลดรูป"
              }
            ></Button>
          )}
          <Button
            onPress={handleReopenCamera}
            title={
              language === "Eng"
                ? "Take a picture again"
                : "กดเพื่่อทำการถ่ายรูปใหม่"
            }
          ></Button>
        </View>
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
    // flex: 1,
    backgroundColor: "transparent",
    // justifyContent: "flex-end",
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
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingBottom: 10,
  },
});
