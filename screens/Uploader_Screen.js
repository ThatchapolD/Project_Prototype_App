import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

//Import Icon component
import { FontAwesome } from "@expo/vector-icons";

//Import other component
import MainButton from "../UI/MainButton";

//Importing Style Color
import { GlobalColor } from "../style/Color";

function Uploader_Screen() {
  const handleUpload = async (imageData) => {
    try {
      // Convert the image to base64
      const base64Image = imageData;

      // Send the base64 image data to the server
      const response = await axios.post(
        "http://localhost:1880/uploadimage",
        { image: base64Image },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Image uploaded successfully!", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Now, send the image to the server using HTTP
      convertImageToBase64(result.uri);
    }
  };

  const convertImageToBase64 = async (imageUri) => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        imageUri,
        [{ resize: { width: 200 } }],
        { base64: true },
      );
      //Send the data into handleUpload
      handleUpload(`data:image/jpeg;base64,${manipResult.base64}`);
    } catch (error) {
      console.error("Error converting image to base64:", error);
    }
  };

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
