import React from "react";
import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "tomato",
    borderRadius: 8,
  },
});

export default function CustomButton() {
  return <Button style={styles.layout} title={"Click Me on iOS!"} />;
}
