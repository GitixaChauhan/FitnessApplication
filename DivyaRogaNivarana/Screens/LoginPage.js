import react from "react";
import {View, Text, Image, SafeAreaView,TextInput, Alert, TouchableOpacity} from "react-native";
import { ExStyle } from "./Style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from '@react-native-firebase/auth';

export const LoginPage = (props) => {
  const navigation = useNavigation();
  const [isSecueEntry, setIsSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState();

  const handleButtonPress = async() => {
    try {
      const AuthUser = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = AuthUser.user
      console.log('User Login Successfully:', user);

      props.navigation.navigate('Home')
      // Authentication successful, proceed to the next screen or perform desired actions
    } catch (error) {
      // Handle authentication errors, such as invalid AuthUser

     if (email.trim() === '') {
      // Email is empty, show alert
      setShowAlert(Alert.alert("Alert", "Please Enter Your Email."));
    } else if (password.trim() === '') {
      // Password is empty show aleart
      setShowAlert(Alert.alert("Alert", "Please Enter Your Password."))
    } else  {
      setShowAlert(Alert.alert( "Incorrect Email or Password!"))
      //console.error('Error Loging in:', error);
    }
   }
  };
   return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginTop:20}}>
          
          <Image source={require("./Images/DIcon.png")}
            style={ExStyle.imageStyle} />
          
          <Text style={ExStyle.textStyle}>Email:</Text>
          <View style={ExStyle.TextInputStyle}>
          <TextInput style={{flex: 1}}
            placeholder='Enter Your Email'
            value={email}
            onChangeText={(text) =>
              setEmail(text)
            }
          />
          </View>

          <Text style={ExStyle.textStyle}>Password:</Text>
          <View style={ExStyle.TextInputStyle}>
          <TextInput style={{flex: 1}}
            placeholder='Enter Your Password'
            secureTextEntry={isSecueEntry}
            value={password}
            onChangeText={(text) =>
              setPassword(text)}
             />
             <TouchableOpacity onPress={() => {
              setIsSecureEntry(prev=>!prev)
             }}>
              <Text style={{fontSize: 13, color:"#007AFF"}}>{isSecueEntry?"Show" : "Hide"}</Text>
             </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate("ForgetPasswordScreen")
          }}
          >
              <Text style={ExStyle.text1}>Forgot Password?</Text>
             </TouchableOpacity>
          
            <View style={{justifyContent: "center", alignItems: "center"}}>
             <TouchableOpacity
             style={ExStyle.buttonStyle1}
             onPress={()=> {
             handleButtonPress();
            }}
            >
           <Text style = {{color: '#fff', fontSize: 20}}>Log In</Text>
              
             </TouchableOpacity>
             </View>
          
          <View style={{alignItems:"center", marginTop: 260,  justifyContent:"center"}}>
            <Text style={{fontSize: 20 }}>-----Don't have an account??----- </Text>
            <TouchableOpacity onPress={()=> {
             props.navigation.navigate("SignUp")
             }}
             >
             <Text style={ExStyle.text2}>SignUp</Text>
             </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    )
    };





    