//Import React Stuff
import { View, Text, StyleSheet } from "react-native";
import React from "react";

//Import Redux slicer
import { useSelector } from "react-redux";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing UI
import Card from "../UI/Card";
import Template_Result from "./Template_Result";

const Result = () => {
  const uploadStatus = useSelector((state) => state.uploadState.status);

  if (uploadStatus === 1) {
    return <Template_Result />;
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.text}>ท่านยังไม่ได้ทำการอัปโหลดรูป</Text>
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
