import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, Touchable, View } from "react-native";
import ImageDetails from "../Compoenents/ImageDetails";

export default function ImageScreen() {
  return (
    <View style={styles.viewStyle}>
      <ImageDetails
        imageSource={require("../../assets/beach.jpeg")}
        title={"Beach"}
      ></ImageDetails>

      <ImageDetails
        imageSource={require("../../assets/forest.jpeg")}
        title={"Forest"}
      ></ImageDetails>

      <ImageDetails
        imageSource={require("../../assets/hill.jpeg")}
        title={"Hill"}
      ></ImageDetails>

      {/* <Image
        style={styles.ImageStyle}
        source={require("../../assets/beach.jpeg")}
      ></Image>
      <Image
        style={[styles.ImageStyle, styles.Image2]}
        source={require("../../assets/forest.jpeg")}
      ></Image>
      <Image
        style={[styles.ImageStyle, styles.Image3]}
        source={require("../../assets/hill.jpeg")}
      ></Image> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "space-around",
  },
  ImageStyle: {
    width: 50,
    height: 50,
    margin: 50,
  },
  Image2: {
    marginLeft: 150,
  },

  Image3: {
    marginLeft: 250,
  },
});
