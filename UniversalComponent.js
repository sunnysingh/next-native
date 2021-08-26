import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a React Native component.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141c66",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
