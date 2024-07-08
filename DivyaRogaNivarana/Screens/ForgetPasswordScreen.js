import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation,  } from "@react-navigation/native";
import { ExStyle } from "./Style";
import { firebase } from "@react-native-firebase/auth";

export const ForgetPasswordScreen = (props) => {

    const { navigate } = useNavigation();
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    const handleButtonTap = async() => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            // Password reset email sent successfully

            //setShowAlert(Alert.alert("Password reset email send successfully."))

          } catch (error) {
            // Handle errors, such as invalid email or network issues
            console.error('Error sending password reset email:', error);
          }
    }

    return (
        <SafeAreaView>
      
            {/* <Image source={require("./Images/Lock.png")}
            style={ExStyle.imageStyle} /> */}
        <View style={{padding: 10}}>
            <Text style={ExStyle.TextDesign}>Reset</Text>
            <Text style={ExStyle.TextDesign}>Password</Text>
        </View>

        <View style={{padding: 10}}>
        <Text style ={{fontSize: 18}}>Please enter your email address</Text>
        <Text style ={{fontSize: 18}}>to request a password reset.</Text>
        </View>


        <View style={{marginTop: 40}}>
            
            <Text style={ExStyle.textStyle}>Email</Text>
            <TextInput style={ExStyle.TextInputStyle}
                placeholder="Enter Your Email"
                value={email}
                onChangeText={(text) => {
                    setEmail(text)
                }}
            />
           <Text style={{paddingLeft: 10, fontSize: 16, fontWeight:"400", color: "#007AFF" }}>Password reset send to your email address.</Text>
            <View style ={{alignItems:"center", marginTop: 200}}>
            <TouchableOpacity
            style={ExStyle.buttonStyle1}
            onPress={()=> {
            handleButtonTap();
           }}
            >
           <Text style = {{color: '#fff', fontSize: 18}}>Reset Password</Text>
            </TouchableOpacity>

            <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 18, fontWeight:"500", paddingTop: 10, }}>You remember your password? </Text>
            <TouchableOpacity
            onPress={()=> {
                props.navigation.navigate("LoginPage")
                }}
            >
                <Text style={ExStyle.text3}>Login</Text>
            </TouchableOpacity>
            
            </View>
          </View>
        
        </View>
        </SafeAreaView>
    )
};


 