// DeleteScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Screens/FireBase";

const DeleteUser = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearch = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("rollno", "==", rollNumber)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        userData.id = querySnapshot.docs[0].id; // Save document ID for deletion
        setStudent(userData);
        setErrorMessage("");
      } else {
        setStudent(null);
        setErrorMessage("No student found with this roll number");
      }
    } catch (error) {
      console.error("Error searching documents: ", error);
      setErrorMessage("Error fetching student data");
    }
  };

  const handleDelete = async () => {
    try {
      if (student) {
        await deleteDoc(doc(db, "users", student.id));
        setSuccessMessage("Student deleted successfully");
        setStudent(null);
        setRollNumber("");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
      setErrorMessage("Error deleting student data");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChangeText={setRollNumber}
      />
      <Button title="Search" onPress={handleSearch} />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {student ? (
        <View style={styles.studentInfo}>
          <Text>Name: {student.fname}</Text>
          <Text>Email: {student.email}</Text>
          <Text>Roll No: {student.rollno}</Text>
          <Text>Age: {student.age}</Text>
          <Text>Gender: {student.gender}</Text>
          <Button title="Delete" onPress={handleDelete} />
        </View>
      ) : null}
      {successMessage ? (
        <Text style={styles.successMessage}>{successMessage}</Text>
      ) : null}
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
  successMessage: {
    color: "green",
    marginTop: 10,
  },
  studentInfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: "100%",
  },
});

export default DeleteUser;
