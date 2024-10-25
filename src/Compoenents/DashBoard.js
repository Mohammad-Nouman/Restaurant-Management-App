import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Dashboard({ route }) {
  const { userID } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {userID},</Text>
      <Text style={styles.message}>Welcome to Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
  },
});
