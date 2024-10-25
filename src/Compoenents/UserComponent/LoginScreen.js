import React, { useState } from "react";
import { Alert, StyleSheet, View, Button, TextInput } from "react-native";
import { my_auth } from "./FireBase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function EmailForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        my_auth,
        email,
        password
      );
      const userID = response.user.uid;
      console.log(response);
      navigation.navigate("Dashboard", { userID: userID });
    } catch (error) {
      console.log(error);
      alert("Sign in Failed" + error);
    } finally {
      setLoading(false);
    }
  }

  async function signUpWithEmail() {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        my_auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Registration Failed" + error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {db} from './Firebase.js';
import {collection, setDoc, doc, getDoc,getDocs,updateDoc} from "firebase/firestore";
import React, {useState} from 'react';

export default function LoginScreen() {
 
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 function create()
 {
	 setDoc(doc(collection(db,"users")),
	 {
		 name: name,
		 email: email,
	 }
	 ).then(()=>{
		 console.log("data saved");
	 }
	 ).catch(error=>{console.log("not saved")})
 }
 function getDatawithID()
	{
		getDoc(doc(db,"users","ciZareNo1QPySwJcbGaK")).then(docData=>{
			if(docData.exists())
			{
				setName(docData.data().name);
				setEmail(docData.data().email);
			}
			else
			{
				console.log("no such data exists");
			}
		}).catch(error=>{console.log(error)})
	}
	function getAlldata()
	{
		getDocs(collection(db,"users")).then(
		(docSnap=>{
			let users =[];
			docSnap.forEach((doc)=>
			{
				users.push({...doc.data(),id:doc.id})
			});
			console.log("Docyment data:", users);
		})
		)
	}
	function update()
	{
		updateDoc(doc(db,"users",'1jOT7NKb8WJhk4vzqTka'),
		{
			name:name,
		email:email,
		}).then(()=>{
			console.log('data updated');
		}).catch((err)=>
		{
			console.log(err);
		}
		)
	}
 	return(
	<View>
	<TextInput 
	placeholder="Username" 	
	value={name}
	onChangeText = {text=>setName(text)}
	/>
	<TextInput 
	placeholder="Email Address"
	value={email}
	onChangeText = {text=>setEmail(text)}	
	/>
	<TouchableOpacity onPress={update}>
	<Text>Submit</Text>
	</TouchableOpacity>
	</View>
	);
}

const styles = StyleSheet.create({
	
	
  
});
*/
