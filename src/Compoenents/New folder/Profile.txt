import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../Screens/FireBase";
import { EmailAuthCredential } from "firebase/auth/cordova";

const Profile = ({ route, Navigation }) => {
  const { email } = route.params;
  const [fname, setFullName] = useState("");
  const [rollno, setRollNo] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await addDoc(collection(db, "users"), {
        fname: fname,
        rollno: rollno,
        email: email,
        age: age,
      });
      setErrorMessage("");
      setFullName("");
      setAge("");
      setRollNo("");
      console.log("User data saved successfully!");
      setErrorMessage("Sign Up Successful!");
      Navigation.navigate("Login", { email: email });
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorMessage("Error saving user data");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to profile page!</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fname}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Roll NO"
        value={rollno}
        onChangeText={setRollNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Sign Up" onPress={handleLogin} />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
});

export default Profile;
