import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//Import Style Color
import { GlobalColor } from "../style/Color";
import TutorialList from "../components/TutorialList";

//Import Redux slicer
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../redux/slicers/languageSlice";

function Tutorial() {
  //Redux stuff
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.languageState);

  const handleLanguageChange = () => {
    console.log(language);
    dispatch(selectLanguage("Eng"));

    if (language === "Eng") {
      dispatch(selectLanguage("Thai"));
    }
  };

  return (
    <View style={styles.container}>
      <TutorialList />
      <Button title="Lang" onPress={handleLanguageChange} />
      <Text style={styles.text}>{language}</Text>
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
