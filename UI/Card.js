import { StyleSheet, View } from "react-native";

import { GlobalColor } from "../style/Color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 20,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: GlobalColor.colors.primary50,
    borderColor: GlobalColor.colors.accent50,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 10,
  },
});
