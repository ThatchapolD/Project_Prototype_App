//import library for http protocol
import axios from "axios";

//import Config
import Config from "../../assets/Config";

//import function from uploadStateSlice
import { updating } from "../../redux/slicers/uploadStateSlice";

export const uploadImage = async (imageUri, dispatch) => {
  if (imageUri) {
    const formData = new FormData();
    formData.append("image", {
      uri: imageUri,
      name: "image.jpg",
      type: "image/jpg",
    });

    try {
      const response = await axios.post(
        // `http://${Config.Mac_IP}:${Config.Port}${Config.Upload}`, //For JS
        `http://${Config.Mac_IP}:500${Config.Upload}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      dispatch(updating(2));
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  } else {
    console.warn("No image selected.");
  }
};
