import { View, Text, StyleSheet } from "react-native";
import React from "react";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing UI
import Card from "../UI/Card";

const Banknotes_Info = ({ Series, Date, Signature, Serial_Number, Amount }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.text}>ธนบัตรรุ่นที่: {Series} </Text>
        <Text style={styles.text}>ประกาศใช้: {Date}</Text>
        <Text style={styles.text}>ลายเซ็น: {Signature}</Text>
        <Text style={styles.text}>เลขหมวด: {Serial_Number}</Text>
        <Text style={styles.text}>จำนวนที่พิมพ์: {Amount}</Text>
      </Card>
    </View>
  );
};

export default Banknotes_Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
    marginBottom: 16,
  },

  text: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
});
