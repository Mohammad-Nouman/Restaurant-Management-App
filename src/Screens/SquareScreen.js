import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import ColorChanger from "./ColorChanger";

export default function SquareScreen() {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  const Color_Increment = 15;

  const [colors, setColors] = useState([0, 0, 0]);

  const setColor = (color, change) => {
    const value = colors[color] + change;
    if (value < 255 && value >= 0) {
      setColors((prevItems) => {
        const newArray = [...prevItems];
        newArray[color] = value;
        return newArray;
      });
    }
  };

  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //   }
  // };

  return (
    <View style={styles.viewStyle}>
      <Text style={{ textAlign: "center", borderWidth: 2 }}>
        Welcomer to Square Screen
      </Text>
      <ColorChanger
        color="Red"
        onIncrease={() => {
          setColor(0, Color_Increment);
        }}
        onDecrease={() => {
          setColor(0, -1 * Color_Increment);
        }}
      />
      <ColorChanger
        color="Green"
        onIncrease={() => {
          setColor(1, Color_Increment);
        }}
        onDecrease={() => {
          setColor(1, -1 * Color_Increment);
        }}
      />
      <ColorChanger
        color="Blue"
        onIncrease={() => {
          setColor(2, Color_Increment);
        }}
        onDecrease={() => {
          setColor(2, -1 * Color_Increment);
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`,
        }}
      ></View>
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
