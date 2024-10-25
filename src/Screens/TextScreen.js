import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

export default function TextScreen() {
  const [name, setName] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text>Enter Name: {name} </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
    width: "80%",
  },
});
