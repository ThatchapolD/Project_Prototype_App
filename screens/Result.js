//Import React Stuff
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
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
  const imageUri = useSelector((state) => state.imageStorage.imageUri);
  const BanknoteID = useSelector(
    (state) => state.banknoteResultStorage.banknoteID,
  );
  const Serial_Number = useSelector(
    (state) => state.banknoteResultStorage.Serial_Number,
  );
  const MF_Sig = useSelector((state) => state.banknoteResultStorage.MF_Sig);
  const BOT_Sig = useSelector((state) => state.banknoteResultStorage.BOT_Sig);

  const navigation = useNavigation();

  if (uploadStatus === 2) {
    return (
      <View style={styles.container}>
        <Card>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 300, height: 300 }}
          />
        </Card>
        <Card>
          <Text style={styles.text}>Your Banknote ID is: {BanknoteID}</Text>
          <Text style={styles.text}>
            Your Serial_Number is: {Serial_Number}
          </Text>
          <Text style={styles.text}>Your MF_Sig is: {MF_Sig}</Text>
          <Text style={styles.text}>Your BOT_Sig is: {BOT_Sig}</Text>
        </Card>
      </View>
    );
  } else if (uploadStatus === 1) {
    return (
      <View style={styles.container}>
        <Card>
          <View>
            <Text style={styles.text}>
              Waiting...
              <ActivityIndicator
                size="large"
                color={GlobalColor.colors.accent100}
              />
            </Text>
          </View>
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
