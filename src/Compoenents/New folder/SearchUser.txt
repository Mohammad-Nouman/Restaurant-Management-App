// SearchScreen.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Screens/FireBase";

const SearchUSer = () => {
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("fname", "==", searchName)
      );
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setResults(users);
      setErrorMessage("");
    } catch (error) {
      console.error("Error searching documents: ", error);
      setErrorMessage("Error fetching user data");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={searchName}
        onChangeText={setSearchName}
      />
      <Button title="Search" onPress={handleSearch} />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>Name: {item.fname}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Roll No: {item.rollno}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginTop: 10,
  },
});

export default SearchUSer;
