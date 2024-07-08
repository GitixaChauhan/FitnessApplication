import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, ScrollView,  TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute, } from "@react-navigation/native";
import { ExStyle } from "./Style";
import YoutubeIframe from "react-native-youtube-iframe";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "./redux/LanguageSlice";



export const Detail = (props) => {
    const [playing, setPlaying] = useState(false);
    const { params } = useRoute();
    console.log("params", params.myData);
    const data = params?.myData
   const { navigate } = useNavigation();
   const navigation = useNavigation();
   const LANGUAGE=useSelector(state=>state.Language)
   const dispatch=useDispatch()
   const [button1TextColor, setButton1TextColor] = useState('black');
   const [button2TextColor, setButton2TextColor] = useState('black');
   
   const handleButton1Press = () => {
    // Change the text color of Button 1
    setButton1TextColor('#007AFF');
    setButton2TextColor('black')
    dispatch(changeLanguage('ENGLISH'))


  };

  const handleButton2Press = () => {
    // Reset Button 1 text color
    setButton1TextColor('black');
    setButton2TextColor('#007AFF')
    dispatch(changeLanguage('HINDI'))
  };


    return (
      <View style={ExStyle.container1}>
      <ScrollView style={ExStyle.scrollView}>
        <View style={ExStyle.content}>
          {/* Your content goes here */}
          <Text style={ExStyle.heading}>
            {LANGUAGE.data === 'HINDI' ? 'अवलोकन:' : 'Overview:'}
          </Text>
          <Text style={ExStyle.textStyles2}>
            {LANGUAGE.data === 'HINDI' ? data.OverviewHindi : data.Overview}
          </Text>

          <View>
            <View style={{justifyContent: "center"}}>
        <Text style={ExStyle.textFont}>{LANGUAGE.data == "HINDI"? data.titleHindi: data.title}</Text>
            </View>
            <Image
            source={{ uri: data.image }} style={ExStyle.images}
            />
            <Text style = {ExStyle.headingStyle}>{LANGUAGE.data === 'HINDI' ? 'लक्षण:' : 'Symptoms:'}</Text>
            <Text style = {{fontSize: 20}}>{LANGUAGE.data == "HINDI"? data.symptomsHindi: data.symptoms}</Text>
            <Text style = {{fontSize: 25, marginTop: 10 }}>{LANGUAGE.data === 'HINDI' ? 'सामान्य लक्षण:' : 'General Symptoms:'}</Text>
            <Text style = {{fontSize: 20, marginTop: 10}}> 1.  {LANGUAGE.data == "HINDI"? data.sym1Hindi: data.sym1}  
         </Text>
            <Text style = {{fontSize: 20}}> 2.  {LANGUAGE.data == "HINDI"? data.sym2Hindi: data.sym2}</Text>
            <Text style = {{fontSize: 20}}> 3.  {LANGUAGE.data == "HINDI"? data.sym3Hindi: data.sym3}</Text>

            <Text style = {ExStyle.headingStyle}>{LANGUAGE.data === 'HINDI' ? 'रोकथाम: ': 'Prevention:'}</Text>

            <Text style = {{fontSize: 20}}>{LANGUAGE.data == "HINDI"? data.preventionHindi: data.prevention}</Text>
            <Text style = {{fontSize: 20, marginTop: 10}}> 1.  {LANGUAGE.data == "HINDI"? data.pre1Hindi: data.pre1}</Text>
            <Text style = {{fontSize: 20}}> 2.  {LANGUAGE.data == "HINDI"? data.pre2Hindi: data.pre2}</Text>
            <Text style = {{fontSize: 20}}> 3.  {LANGUAGE.data == "HINDI"? data.pre3Hindi: data.pre3}</Text>

            <View>
                <Text style={ExStyle.headingStyle}>{LANGUAGE.data === 'HINDI' ? 'व्यायाम:': 'Exercises:'}</Text>
                <Text style = {{fontSize: 20,}}>{LANGUAGE.data == "HINDI"? 'शब्द "बीमारी से राहत के लिए व्यायाम" का तात्पर्य लक्षणों को कम करने, प्रबंधन करने या कुछ स्वास्थ्य स्थितियों या बीमारियों को रोकने में मदद करने के लिए निर्धारित शारीरिक गतिविधि या विशिष्ट व्यायाम से है। इस प्रकार का व्यायाम अक्सर समग्र स्वास्थ्य और कल्याण में सुधार के लिए स्वास्थ्य पेशेवरों द्वारा अनुशंसित व्यापक उपचार योजना का हिस्सा होता है।': 'The term exercise for relief of disease: refers to physical activity or specific exercises prescribed to help alleviate symptoms, manage, or prevent certain health conditions or diseases. This type of exercise is often part of a comprehensive treatment plan recommended by healthcare professionals to improve overall health and well-being.'} </Text>
                <Text style = {{fontSize: 20, marginTop: 10}}> 1.  {LANGUAGE.data == "HINDI"? data.Ex1Hin: data.Ex1}</Text>
                <Text style = {{fontSize: 20}}> 2.  {LANGUAGE.data == "HINDI"? data.Ex2Hin: data.Ex2}</Text>
                <Text style = {{fontSize: 20}}> 3.  {LANGUAGE.data == "HINDI"? data.Ex3Hin: data.Ex3}</Text>
                <Text style = {{fontSize: 20}}> 4.  {LANGUAGE.data == "HINDI"? data.Ex4Hin: data.Ex4}</Text>


            </View>

          {/* Add more content as needed */}

          {/* Embed YouTube video */}
          <View style={ExStyle.videoContainer}>
            <YoutubeIframe
              height={300}
              play={false}
              videoId={data.VideoId}
            />
          </View>
        </View>
        </View>
      </ScrollView>

      {/* Bottom buttons */}
      <View style={ExStyle.buttonContainer}>
        <TouchableOpacity onPress={handleButton1Press}
       style={ExStyle.Bottombutton}
        >
          <Text style={{ ...ExStyle.buttonText, color: button1TextColor }}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButton2Press}
        style={ExStyle.Bottombutton}>
          <Text style={{ ...ExStyle.buttonText, color: button2TextColor}}>हिंदी</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    );
};




