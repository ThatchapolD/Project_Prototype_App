import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing UI
import Card from "../UI/Card";

const Banknotes_Info = ({
  Series,
  Date,
  MF_Sig,
  BOT_Sig,
  Serial_Number,
  Amount,
  Price,
}) => {
  return (
    <View style={styles.container}>
      <Card>
        <ScrollView>
          <Text style={styles.text}>ธนบัตรรุ่นที่: {Series} </Text>
          <Text style={styles.text}>ประกาศใช้: {Date}</Text>
          <Text style={styles.text}>รัฐมนตรีกระทรวงการคลัง: {MF_Sig}</Text>
          <Text style={styles.text}>ผู้ว่าการแบงค์ชาติ: {BOT_Sig}</Text>
          <Text style={styles.text}>เลขหมวด: {Serial_Number}</Text>
          <Text style={styles.text}>จำนวนที่พิมพ์: {Amount}</Text>
          <Text style={styles.text}>ราคาโดยประมาณ: {Price}</Text>
        </ScrollView>
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
    fontSize: 17,
    padding: 8,
  },
});
