import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

//Importing Image Uploader and Selector
import { selectImage } from "../components/Image_Handler/Image_Selector";
import { uploadImage } from "../components/Image_Handler/Image_Uploader";

//Import Redux slicer
import { useSelector, useDispatch } from "react-redux";
import { selecting } from "../redux/slicers/imageSlice";
import { updating } from "../redux/slicers/uploadStateSlice";

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
  const uploadStatus = useSelector((state) => state.uploadState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imageUri != null) {
      // console.log("Selected image:", imageUri);
      handleImageUpload();
    } else console.log("Error there is no selected image");
  }, [imageUri]);

  const handleImageSelect = () => {
    selectImage(dispatch);
  };

  const handleImageUpload = () => {
    uploadImage(imageUri, dispatch);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <MainButton onPressed={handleImageSelect}>
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
