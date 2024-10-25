import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "./Searchbar";
import yelp from "../api/yelp";
import ResultList from "../Compoenents/ResultList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("Virginia");

  const searchApi = async () => {
    console.log(location);
    const response = await yelp.get("/search", {
      params: {
        limit: 20,
        term,
        location,
        sort_by: "distance",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.container}>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />

      <Text style={styles.locationText}>
        The location is {location} by default. Only enter food name.
      </Text>

      <Button
        title="Search"
        onPress={() => {
          searchApi();
        }}
        style={styles.searchButton}
      ></Button>
      <ResultList results={results} title="Results" style={styles.resultList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  locationText: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  searchButton: {
    marginTop: 20,
    width: 200,
  },
  resultList: {
    marginTop: 20,
  },
});
