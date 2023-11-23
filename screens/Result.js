//Import React Stuff
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//Import Redux slicer
import { useSelector } from "react-redux";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing UI
import Card from "../UI/Card";
import Template_Result from "./Template_Result";

const Result = () => {
  const uploadStatus = useSelector((state) => state.uploadState.status);
  const language = useSelector((state) => state.language.languageState);
  const BanknoteID = useSelector((state) => state.banknoteInfo.resultID);
  const Serial_Number = useSelector((state) => state.banknoteInfo.resultNum);
  const MF_Sig = useSelector((state) => state.banknoteInfo.resultMFSig);
  const BOT_Sig = useSelector((state) => state.banknoteInfo.resultBOTSig);

  const navigation = useNavigation();

  if (uploadStatus === 1) {
    return (
      <View style={styles.container}>
        <Card>
          <Text>Your Banknote ID is {BanknoteID}</Text>
        </Card>
      </View>
    );
  }

  if (language === "Thai") {
    navigation.setOptions({ title: "ผลลัพท์" });
  } else {
    navigation.setOptions({ title: "Result" });
  }

  return (
    <View style={styles.container}>
      <Card>
        {language === "Eng" ? (
          <Text style={styles.text}>Please upload a picture</Text>
        ) : (
          <Text style={styles.text}>ท่านยังไม่ได้ทำการอัปโหลดรูป</Text>
        )}
      </Card>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
