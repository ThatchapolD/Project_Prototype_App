import { StyleSheet, View, Text } from "react-native";

//Import UI
import Card from "../UI/Card";

function TutorialList() {
  return (
    <View style={styles.listItem}>
      <Card>
        <Text style={styles.text}>
          1. Take a picture of Phra by your phone camera
        </Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          2. Then press upload button at bottom of your screen
        </Text>
      </Card>
      <Card>
        <Text style={styles.text}>
          3. Wait for the result please the close the app
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
