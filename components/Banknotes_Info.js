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
        <Text style={styles.text}>Series: {Series} </Text>
        <Text style={styles.text}>Issue Date: {Date}</Text>
        <Text style={styles.text}>Signature: {Signature}</Text>
        <Text style={styles.text}>Serial_Number: {Serial_Number}</Text>
        <Text style={styles.text}>Amount: {Amount}</Text>
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
