import {StyleSheet} from "react-native";

export const ExStyle = StyleSheet.create ({
    styleView: {
        backgroundColor: 'lightgrey',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 300
      },
      TextInputStyle: {
        fontSize: 16,
        color: 'black',
        borderWidth: 2,
        borderColor: 'grey',
        margin: 10,
        height: 50,
        borderRadius: 10,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
       
      },
      textStyle: {
        fontSize: 20,
        marginLeft:10
    
      },
      imageStyle: {
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 300,
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignItems: 'center',
        marginLeft: 135,
        marginRight: 135,
        marginTop: 20
        
    
      },
      TextDesign: {
        fontSize: 30,
        textAlignVertical:"center",
        fontWeight: "600"

  
      },
      coulmnstyle:{
        flex:1,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        margin:5,
        height: 250,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        width: 170
     },
     collectionContainer:{
         padding: 15
     },
     image:{
      
      width:150,
      height:160,
      borderRadius:10
     },
     text:{
      fontSize:20,
      //fontWeight: "500"
     },
     SearchBar:{
      borderColor:"grey",
       borderWidth:2, 
       fontSize:18, 
       height:50, 
       padding:8,
       margin:10,
       borderRadius:25, 
       flexDirection:"row",
       justifyContent: "center",
       alignItems: "center",
       //backgroundColor: "lightgrey"
       
     },
     images:{
      width:370,
      height:220,
      padding:2,
      
     },
     textFont:{
      fontSize:20,
      fontWeight:'bold',
      alignSelf: "center"

     },
     backButton:{
       marginLeft:10
     },
     contain:{
      justifyContent: "center",
      alignItems: "center",
      margin: 10
     },
    text1: {
      
        textDecorationLine: 'underline', // Add underline styling
        marginLeft: 248,
        color: "#007AFF",
        fontSize: 16
    
    },
    buttonStyle1: {
      width: "90%",
      height: 50,
      borderRadius: 20,
      backgroundColor: "#007AFF",
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    text2: {
      textDecorationLine: 'underline', // Add underline styling
      fontSize: 17,
      color: "#007AFF",
     
    },
    text3: {
      textDecorationLine: 'underline', // Add underline styling
      fontSize: 17,
      color: "#007AFF",
      paddingTop: 10
     
    },
    headingStyle:{
      fontSize: 25, 
      fontWeight: 'bold', 
      marginTop: 20
    },
    container1: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 10,
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 10,
    },
    textStyles2: {
      fontSize: 20,
      marginTop: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      //backgroundColor: '#f0f0f0',
      paddingVertical: 10,
    },
    Bottombutton: {
      //  backgroundColor: 'black',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonTextEnglish: {
      color: '#007AFF',
      fontSize: 16,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    underline: {
      textDecorationLine: 'underline',
      fontSize: 16, 
    },
    videoContainer:{
      marginTop: 20
    }

});