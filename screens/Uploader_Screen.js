import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

//Import Icon component
import { FontAwesome } from "@expo/vector-icons";

//Import other component
import MainButton from "../UI/MainButton";

//Importing Style Color
import { GlobalColor } from "../style/Color";

const selectImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0,
  });

  if (!result.canceled) {
    // Now, send the image to the server using HTTP
    handleUpload(result);
  }
};

const handleUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", {
    uri: imageData.uri,
    type: imageData.type,
    name: imageData.fileName,
  });
  try {
    const response = await axios.post(
      "http://localhost:1880/uploadimage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    console.log("Image uploaded successfully!", response.data);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

function Uploader_Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <MainButton onPressed={selectImage}>
          Please upload 1 picture
          <View style={styles.pictureContainer}>
            <FontAwesome name="file-picture-o" size={24} color="black" />
          </View>
        </MainButton>
      </View>
    </View>
  );
}

export default Uploader_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  pictureContainer: {
    paddingHorizontal: 5,
  },

  text: {
    color: "white",
  },
});
