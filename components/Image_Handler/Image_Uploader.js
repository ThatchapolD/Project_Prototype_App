//import library for http protocol
import axios from "axios";

//import Config
import Config from "../../assets/Config";

//import function from uploadStateSlice
import { updating } from "../../redux/slicers/uploadStateSlice";

import {
  resultID,
  resultNum,
  resultMFSig,
  resultBOTSig,
} from "../../redux/slicers/banknoteResult";

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
        // `http://${Config.Mac_IP}:${Config.Port}${Config.Upload}`, //Node Js
        // `http://${Config.Mac_IP}:${Config.Port_Flask}${Config.Upload}`, //Python Flask
        // `http://172.20.10.2:500${Config.Upload}`, //Hotspot
        `http://${Config.Ubuntu_Server}:${Config.Port_Flask}${Config.Upload}`, //Ubuntu server
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          // timeout: 10000,
        },
      );

      console.log("Image uploaded successfully:", response.data);
      dispatch(resultID(response.data[0].BanknoteID));
      dispatch(resultNum(response.data[1].Serial_Number));
      dispatch(resultMFSig(response.data[2].MF_Sig));
      dispatch(resultBOTSig(response.data[3].BOT_Sig));
      dispatch(updating(2));
    } catch (error) {
      // dispatch(resultID("Can't Detect banknotes"));
      // dispatch(resultNum("Can't Detect banknotes"));
      // dispatch(resultMFSig("Can't Detect banknotes"));
      // dispatch(resultBOTSig("Can't Detect banknotes"));
      // dispatch(updating(2));
      console.error("Error uploading image:", error);
    }
  } else {
    console.warn("No image selected.");
  }
};
