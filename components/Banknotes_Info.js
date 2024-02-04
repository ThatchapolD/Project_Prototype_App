import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

//Import Redux slicer
import { useSelector } from "react-redux";

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
  Aritistic,
  Remarks,
}) => {
  const language = useSelector((state) => state.language.languageState);
  return (
    <View style={styles.container}>
      <Card>
        <ScrollView>
          {language === "Thai" ? (
            <>
              <Text style={styles.text}>ธนบัตรรุ่นที่: {Series} </Text>
              <Text style={styles.text}>ประกาศใช้: {Date}</Text>
              <Text style={styles.text}>รัฐมนตรีกระทรวงการคลัง: {MF_Sig}</Text>
              <Text style={styles.text}>ผู้ว่าการแบงค์ชาติ: {BOT_Sig}</Text>
              <Text style={styles.text}>เลขหมวด: {Serial_Number}</Text>
              <Text style={styles.text}>จำนวนที่พิมพ์: {Amount}</Text>
              <Text style={styles.text}>ราคาโดยประมาณ: {Price}</Text>
              <Text style={styles.text}>ลักษณะ: {Aritistic}</Text>
              <Text style={styles.text}>หมายเหตุ: {Remarks}</Text>
              <Text style={styles.text}>
                การประเมิณราคา: ราคาจะขึ้นอยู่กับลายเซ็น, เลขหมวดและสภาพของแบงค์
                ราคาที่กล่าวมาข้างต้นคือราคาประเมิณแบบคร่าวๆ
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.text}>BanknoteSeries: {Series} </Text>
              <Text style={styles.text}>Declare Date: {Date}</Text>
              <Text style={styles.text}>Minister of Finance: {MF_Sig}</Text>
              <Text style={styles.text}>
                Governor of the bank of Thailand: {BOT_Sig}
              </Text>
              <Text style={styles.text}>Serial Number: {Serial_Number}</Text>
              <Text style={styles.text}>Printed Amount: {Amount}</Text>
              <Text style={styles.text}>Approximate Price: {Price}</Text>
              <Text style={styles.text}>Artistic Feature: {Aritistic}</Text>
              <Text style={styles.text}>Remarks: {Remarks}</Text>
              <Text style={styles.text}>
                Price Estimation: The price of a banknotes is varied by
                Signature, Serial number and conditions of banknotes. The price
                that is show on the app is just the approximate price of the
                banknotes.
              </Text>
            </>
          )}
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
