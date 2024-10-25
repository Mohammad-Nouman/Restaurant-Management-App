import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "./Searchbar";
import yelp from "../api/yelp";
import ResultList from "../Compoenents/ResultList";
import axios from "axios";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [location, setlocation] = useState("");
  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState({});

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: location,
        sort_by: "distance",
      },
    });
    setResults(response.data.businesses);
  };

  const searchWeather = async () => {
    const KEY = "";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${KEY}`
    );
    setWeather(response.data);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />

      <SearchBar
        term={location}
        onTermChange={(newTerm) => setlocation(newTerm)}
      />

      <Text>WE have found {results.length} Restaurants</Text>
      <Button
        title="Search"
        onPress={() => {
          searchWeather();
          searchApi();
        }}
      ></Button>
      <ResultList results={results} title="All Searches" />
    </View>
  );
}

const styles = StyleSheet.create({});
