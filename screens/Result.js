import { View, Text, StyleSheet } from "react-native";
import React from "react";

//Importing Components
import ImageCarousel from "../components/Image_Carousel";
import Banknotes_Info from "../components/Banknotes_Info";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing UI
import Card from "../UI/Card";

const Result = () => {
  const images = [
    require("../assets/Banknotes/1.png"),
    require("../assets/Banknotes/2.png"),
    require("../assets/Banknotes/3.png"),
    require("../assets/Banknotes/4.png"),
    require("../assets/Banknotes/5.png"),
    require("../assets/Banknotes/6.png"),
  ];

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.text}>Information of your Banknotes</Text>
      </Card>
      <ImageCarousel images={images} />
      <Banknotes_Info
        Series={"11"}
        Date={"11 Nov 2077"}
        Signature={"Johnny Silverhand"}
        Serial_Number={"6969"}
        Amount={"1M"}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
