//Import library for selecting image
import * as ImagePicker from "expo-image-picker";

//Import function from imageSlice and uploadStateSlice
import { selecting } from "../../redux/slicers/imageSlice";
import { updating } from "../../redux/slicers/uploadStateSlice";

export const selectImage = async (dispatch) => {
  try {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
      dispatch(updating(1));
    } else {
      console.warn("No valid image URI found.");
    }
  } catch (error) {
    console.error("Error while picking image:", error);
  }
};
