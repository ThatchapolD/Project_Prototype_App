import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Importing Style Color
import { GlobalColor } from "../style/Color";

function Tutorial() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Tutorial</Text>
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

  Text: {
    color: "white",
  },
});
