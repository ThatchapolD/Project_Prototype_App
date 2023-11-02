import { StyleSheet, View, Text } from "react-native";

//Import UI
import Card from "../../UI/Card";

function TutorialList() {
  return (
    <View style={styles.listItem}>
      <Card>
        <Text style={styles.text}>1. Press Camera page to take a picture</Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          2. You can then choose to take a picture again or upload the picture
        </Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          3. After you upload the picture the page will take you to result page
          automatically
        </Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          4. The result will be shown on your device
        </Text>
      </Card>
    </View>
  );
}

export default TutorialList;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  text: {
    color: "white",
  },
});
