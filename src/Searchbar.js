import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar(props) {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity>
        <Feather name="search" style={styles.iconStyle} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        value={props.term}
        onChangeText={(text) => props.onTermChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 15,
    marginTop: 40,
  },
  iconStyle: {
    fontSize: 30,
    marginHorizontal: 20,
  },
});
