import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import { GlobalColor } from "../style/Color";

function MainButton({ children, onPressed }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.iosRipple]
            : styles.buttonInnerContainer
        }
        onPress={onPressed}
        android_ripple={{ color: GlobalColor.colors.accent100 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: GlobalColor.colors.accent100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },

  buttonText: {
    color: GlobalColor.colors.primary100,
    textAlign: "center",
  },

  iosRipple: {
    //For ios device ripple effect
    opacity: 0.75,
  },
});
