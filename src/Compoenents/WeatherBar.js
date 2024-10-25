import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function WeatherBar(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchIconContainer}>
        <Feather name="search" style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.city}
        onChangeText={(text) => props.onTermChange(text)}
        onSubmitEditing={() => props.onTermSubmit()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 40,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 24,
    color: "#999",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
});
