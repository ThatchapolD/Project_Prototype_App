import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

//Import Style Color
import { GlobalColor } from "../style/Color";
import TutorialList from "../components/Tutorial/TutorialListEng";
import TutorialListThai from "../components/Tutorial/TutorialListThai";

//Import Redux slicer
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../redux/slicers/languageSlice";

import Card from "../UI/Card";

function Tutorial() {
  //For Navigate
  const navigation = useNavigation();

  //Redux stuff
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.languageState);

  const handleLanguageChange = () => {
    // console.log(language);
    dispatch(selectLanguage("Eng"));
    navigation.setOptions({ title: "Tutorial" });

    if (language === "Eng") {
      dispatch(selectLanguage("Thai"));
      navigation.setOptions({ title: "วิธีการใช้งาน" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageBtn}>
        <Pressable onPress={handleLanguageChange}>
          <Entypo name="globe" size={36} color={GlobalColor.colors.accent10} />
        </Pressable>
      </View>
      <Card>
        <Image
          source={require("../assets/Example.jpg")}
          style={{
            height: 200,
            width: 300,
            resizeMode: "cover",
            alignSelf: "center",
          }}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.text}>
            {language === "Eng"
              ? "Please take a photo of the banknote similar to the image above."
              : "กรุณาถ่ายรูปธนบัตรให้เหมือนกับรูปข้างบน"}
          </Text>
        </View>
      </Card>
      <ScrollView>
        <View style={styles.itemList}>
          {language === "Eng" ? <TutorialList /> : <TutorialListThai />}
        </View>
      </ScrollView>
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

  languageBtn: { alignItems: "flex-end", paddingTop: 10, paddingRight: 12 },
});
