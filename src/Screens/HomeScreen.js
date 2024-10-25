import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Image");
        }}
      >
        <Text style={styles.textStyle}>Go to Image Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Counter");
        }}
      >
        <Text style={styles.textStyle}>Go to Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Text");
        }}
      >
        <Text style={styles.textStyle}>Go to Text Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Flat");
        }}
      >
        <Text style={styles.textStyle}>Go to Flat Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Color");
        }}
      >
        <Text style={styles.textStyle}>Go to Color Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Square");
        }}
      >
        <Text style={styles.textStyle}>Go to Square Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <Text style={styles.textStyle}>Go to Search Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("INPUT");
        }}
      >
        <Text style={styles.textStyle}>Go to Text Input Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Weather");
        }}
      >
        <Text style={styles.textStyle}>Go to Weather Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.textStyle}>Go to Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 12,
  },

  textStyle: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
