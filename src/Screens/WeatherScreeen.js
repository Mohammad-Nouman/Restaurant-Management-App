import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import WeatherBar from "../Compoenents/WeatherBar";
import axios from "axios";

export default function WeatherScreen() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const searchApi = async () => {
    const KEY = "";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
    );
    setWeather(response.data);
    console.log(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather Details</Text>
      <WeatherBar
        city={city}
        onTermChange={(text) => setCity(text)}
        onTermSubmit={() => searchApi()}
      />
      <View style={styles.weatherDetails}>
        <Text style={styles.weatherText}>
          {Object.keys(weather).length !== 0
            ? `Temperature: ${weather.main.temp}°K`
            : null}
        </Text>
        <Text style={styles.weatherText}>
          {Object.keys(weather).length !== 0
            ? `Feels like: ${weather.main.feels_like}°K`
            : null}
        </Text>
        <Text style={styles.weatherText}>
          {Object.keys(weather).length !== 0
            ? `Humidity: ${weather.main.humidity}%`
            : null}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  weatherDetails: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#444",
  },
});
