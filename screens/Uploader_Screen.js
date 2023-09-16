import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

//Import Redux slicer
import { useSelector, useDispatch } from "react-redux";
import { selecting } from "../redux/slicers/imageSlice";

//Import Icon component
import { FontAwesome } from "@expo/vector-icons";

//Import other component
import MainButton from "../UI/MainButton";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//import Config
import Config from "../assets/Config";

function Uploader_Screen() {
  const imageUri = useSelector((state) => state.imageSelector.imageUri);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imageUri != null) {
      console.log("Selected image:", imageUri);
      uploadImage();
    }
  }, [imageUri]);

  const uploadImage = async () => {
    if (imageUri) {
      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        name: "image.jpg",
        type: "image/jpg",
      });

      try {
        const response = await axios.post(
          `http://${Config.Mac_IP}:${Config.Port}${Config.Upload}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.warn("No image selected.");
    }
  };

  const selectImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("Permission status:", status);

      if (status !== "granted") {
        console.warn("Permission to access image library is not granted.");
        return;
      }

      const { assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (assets.length === 0) {
        console.warn("No image selected.");
        return;
      }

      const selectedImageUri = assets[0].uri;
      if (selectedImageUri) {
        dispatch(selecting(selectedImageUri));
      } else {
        console.warn("No valid image URI found.");
      }
    } catch (error) {
      console.error("Error while picking image:", error);
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
