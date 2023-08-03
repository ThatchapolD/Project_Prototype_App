import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Import Style Color
import { GlobalColor } from "../style/Color";
import TutorialList from "../components/TutorialList";

function Tutorial() {
  return (
    <View style={styles.container}>
      <TutorialList />
    </View>
  );
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
  },
});
