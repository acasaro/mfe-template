import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExampleComponent from "../components/ExampleComponent";

const FeaturScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Feature Page</Text>
    <ExampleComponent />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default FeaturScreen;
