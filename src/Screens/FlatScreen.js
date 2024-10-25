import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function FlatScreen() {
  const friends = [
    { name: "Muhammad", age: 25 },
    { name: "Nouman", age: 27 },
    { name: "Abdullah", age: 29 },
    { name: "Usman", age: 19 },
  ];
  return (
    <FlatList
      style={styles.viewStyle}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} and {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    backgroundColor: "white",
    color: "rgb(100,10,10)",
  },
  viewStyle: {
    // backgroundColor: "red",
  },
});
