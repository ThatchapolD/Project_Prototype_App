import { StyleSheet, View, Text } from "react-native";
import React from "react";

//Import UI
import Card from "../../UI/Card";

const TutorialListThai = () => {
  return (
    <View style={styles.listItem}>
      <Card>
        <Text style={styles.text}>1. ให้ทำการกดรูปกล้องเพื่อทำการถ่ายรูป</Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          2. ท่านสามารถกดเพื่อทำการถ่ายรูปใหม่หรืออัพโหลดรูปได้เลย
        </Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          3.
          หลังจากที่ท่านทำการอัพโหลดรูปตัวแอพจะพาท่านไปหน้าผลลัพท์ให้อัตโนมัติ
        </Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          4. ผลลัพท์จะถูกแสดงขึ้นมาบนอุปกรณ์ของท่าน
        </Text>
      </Card>
    </View>
  );
};

export default TutorialListThai;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  text: {
    color: "white",
  },
});
