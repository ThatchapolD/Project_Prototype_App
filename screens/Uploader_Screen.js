import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Importing Style Color
import { GlobalColor } from "../style/Color";

function Uploader_Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Uploader_Screen</Text>
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

  Text: {
    color: "white",
  },
});
