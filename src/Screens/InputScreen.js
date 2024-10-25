import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function InputScreen() {
  const [name, setName] = useState();
  const [fName, setfName] = useState();
  const [rollNo, setRollNo] = useState();

  const [students, setStudents] = useState([]);

  const addStudent = () => {
    const flag = checkStudent();
    if (!flag && name !== undefined && name !== "") {
      setStudents([...students, { name: name, fName: fName, rollNo: rollNo }]);
      // setName("");
      // setfName("");
      // setRollNo("");
    }
  };

  const checkStudent = () => {
    return students.some(
      (student) =>
        student.name === name &&
        student.fName === fName &&
        student.rollNo === rollNo
    );
  };

  return (
    <View style={styles.viewStyle}>
      <TextInput
        placeholder="Name"
        style={styles.textStyle}
        onChangeText={(text) => setName(text)}
        value={name}
      ></TextInput>

      <TextInput
        placeholder="Father Name"
        style={styles.textStyle}
        onChangeText={(text) => setfName(text)}
        value={fName}
      ></TextInput>

      <TextInput
        placeholder="Roll NO"
        style={styles.textStyle}
        onChangeText={(text) => setRollNo(text)}
        value={rollNo}
      ></TextInput>

      <Button
        title="Add Data"
        onPress={() => {
          addStudent();
        }}
      ></Button>

      <FlatList
        data={students}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle1}>
              <Text>{item.name}</Text>
              <Text>{item.fName}</Text>
              <Text>{item.rollNo}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  textStyle: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  viewStyle1: {
    flexDirection: "row",
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    justifyContent: "space-evenly",
  },
});
