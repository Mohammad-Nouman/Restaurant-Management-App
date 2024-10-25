import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);

  const [position, setPosition] = useState("");

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  const randomHeight = () => {
    return Math.floor(Math.random() * 200 + 50);
  };

  const randomWidth = () => {
    return Math.floor(Math.random() * 100 + 50);
  };

  const randomPosition = () => {
    const tempCount = Math.floor(Math.random() * 3);

    // if (tempCount === 0) {
    //   return "center";
    // } else if (tempCount === 1) {
    //   return "flex-start";
    // } else {
    //   return "flex-end";
    // }

    switch (tempCount) {
      case 0:
        setPosition("center");
        break;
      case 1:
        setPosition("flex-end");
        break;
      case 2:
        setPosition("flex-start");
        break;
    }
  };

  const [height, setHeight] = useState(randomHeight());
  const [width, setWidth] = useState(randomWidth());

  return (
    <View style={styles.viewStyle}>
      <Text style={{ textAlign: "center" }}> Generate random Color</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      ></Button>

      <Button
        title="Change Height"
        onPress={() => {
          setHeight(randomHeight());
        }}
      ></Button>

      <Button
        title="Change Width"
        onPress={() => {
          setWidth(randomWidth());
        }}
      ></Button>

      <Button
        title="Change Position"
        onPress={() => {
          randomPosition();
        }}
      ></Button>

      <FlatList
        contentContainerStyle={{ alignItems: position }}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: height,
                width: width,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
