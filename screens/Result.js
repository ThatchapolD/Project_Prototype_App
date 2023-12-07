//Import React Stuff
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

//Import Redux slicer
import { useSelector } from "react-redux";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing UI
import Card from "../UI/Card";
import Result_List from "../components/Result/Result_List";

const Result = () => {
  const uploadStatus = useSelector((state) => state.uploadState.status);
  const language = useSelector((state) => state.language.languageState);

  const navigation = useNavigation();

  useEffect(() => {
    if (language === "Thai") {
      navigation.setOptions({ title: "ผลลัพท์" });
    } else {
      navigation.setOptions({ title: "Result" });
    }
  }, [language]);

  if (uploadStatus === 2) {
    return <Result_List />;
  } else if (uploadStatus === 1) {
    return (
      <View style={styles.container}>
        <Card>
          <View>
            <Text style={styles.text}>
              {language === "Eng" ? "Waiting..." : "โปรดรอสักครู่"}
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
