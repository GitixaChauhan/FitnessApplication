import React from "react";
import { View, Text, TextInput, Alert, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { useNavigation, } from "@react-navigation/native";
import { ExStyle } from "./Style";
import { useState } from "react";
import auth from '@react-native-firebase/auth';


export const SignUp = (props) => {

    const { navigate } = useNavigation();
    const [isSecueEntry, setIsSecureEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);

    const handleSignUp = async () => {
    
        try {
          
          const userCredential = await auth().createUserWithEmailAndPassword(email, password)
          const user = userCredential.user;
          console.log('User created:', user);
        
          props.navigation.navigate("Home")
          
        } catch (error) {

          if (email.trim() === '') {
            // Email is empty, show alert
            setShowAlert(Alert.alert("Alert", "Please Enter Your Email."));
          } else if (password.trim() === '') {
            // Password is empty show aleart
            setShowAlert(Alert.alert("Alert", "Please Enter Your Password."))
          } else  {
            Alert.alert("Error", "Failed to sign up. Please try again.");
          }
          
        }
      };

    return (
        <View style={{justifyContent:"center", marginTop: 140}}>

            <Text style = {{fontSize: 30, fontWeight: "bold"}}> Create Accont! </Text>
        
            <View style={{marginTop:30}}>
            
            <Text style={ExStyle.textStyle}>Email:</Text>
            <View style={ExStyle.TextInputStyle}>
             <TextInput style={{flex: 1}}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={text => 
            setEmail(text)
          }
            />
            </View>

            <Text style={ExStyle.textStyle}>Create Password:</Text>
            <View style={ExStyle.TextInputStyle}>
             <TextInput style={{flex: 1}}
            placeholder="Create your Password"
            value={password}
            onChangeText={text => 
            setPassword(text)
            }
            secureTextEntry={isSecueEntry}
            />
            <TouchableOpacity onPress={() => {
              setIsSecureEntry(prev=>!prev)
             }}>
              <Text style={{fontSize: 13, color:"#007AFF"}}>{isSecueEntry?"Show" : "Hide"}</Text>
             </TouchableOpacity>
             </View>

             <View style={{justifyContent: "center", alignItems: "center"}}>
             <TouchableOpacity
             style={ExStyle.buttonStyle1}
             onPress={()=> {
              handleSignUp();
            }}
            >
           <Text style = {{color: '#fff', fontSize: 20}}>Sign Up</Text>
              
             </TouchableOpacity>
             </View>

           <ActivityIndicator style={{size: 100}} size={170} color={"blue"} animating={false}/>
           </View>
           <View style={{alignItems:"center", marginTop:20 }}>
            <Text style={{fontSize:20}}>-----Already have an account??-----</Text>
            <TouchableOpacity onPress={()=> {
             props.navigation.navigate("LoginPage")
             }}
             >
             <Text style={ExStyle.text2}>Login</Text>
             </TouchableOpacity>

         
           </View>
        </View>
    );
};

