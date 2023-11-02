import { StyleSheet, View, Pressable } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

//Import Style Color
import { GlobalColor } from "../style/Color";
import TutorialList from "../components/Tutorial/TutorialListEng";
import TutorialListThai from "../components/Tutorial/TutorialListThai";

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
      <View style={styles.languageBtn}>
        <Pressable onPress={handleLanguageChange}>
          <Entypo name="globe" size={36} color={GlobalColor.colors.accent10} />
        </Pressable>
      </View>
      <View style={styles.itemList}>
        {language === "Eng" ? <TutorialList /> : <TutorialListThai />}
      </View>
    </View>
  );
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
  },

  itemList: { flex: 1, alignItems: "center", justifyContent: "center" },

  text: {
    color: "white",
  },

  languageBtn: { alignItems: "flex-end", paddingTop: 12, paddingRight: 12 },
});
