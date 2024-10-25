import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ColorChanger(props) {
  return (
    <View style={styles.viewStyle}>
      <Text style={{ textAlign: "center" }}>{props.color}</Text>
      <Button title="increase" onPress={() => props.onIncrease()}></Button>
      <Button title="deccrease" onPress={() => props.onDecrease()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
