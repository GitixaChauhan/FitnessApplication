import React, { useState, useEffect } from "react";
import { FlatList, Button, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { ExStyle } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { mockData } from "./DiseaseData";
import { firebase } from "@react-native-firebase/auth";

const PAGE_SIZE = 10; // Number of items per page

export const Home = (props) => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [originalData, setOriginalData] = useState([]);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const logOutTap = async() =>{
    try {
     
      await firebase.auth().signOut();
      // User signed out successfully
      props.navigation.navigate('LoginPage')
  
    } catch (error) {
      // Handle errors, such as network issues
      console.error('Error signing out:', error);
    }
    
  }
  
  
    React.useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight:()=>(
          <TouchableOpacity onPress={()=>{
            logOutTap();
          } } >
            <Text style={{color: "#007AFF"}}>LogOut</Text>
          </TouchableOpacity>
        )
      })
    })

  useEffect(() => {
    // Load initial data when the component mounts
    fetchData();
  }, []); // Run this effect only once on component mount

  const fetchData = () => {
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const newData = mockData.slice(startIndex, endIndex);
    const updatedData = [...data, ...newData];

    setData(updatedData);
    setOriginalData(updatedData);

    if (updatedData.length >= mockData.length) {
      setAllDataLoaded(true);
    }

    setPage(page + 1);
  };

  const loadMoreItems = () => {
    fetchData();
  };

  const renderItem = ({ item }) => (

    
    <TouchableOpacity onPress={() => navigate("Detail", { myData: item })}>
      <View style={ExStyle.coulmnstyle}>
        <Image source={{ uri: item.image }} style={ExStyle.image} />
        <Text style={ExStyle.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredData = originalData.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setData(originalData); // Reset to original data
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={ExStyle.scrollView}>
      <View style={ExStyle.SearchBar}>
        <TextInput
          style={{flex: 1, fontSize: 18}}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchText}
        />
        {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClearSearch}>
          {/* <Text style={ExStyle.clearButton}>Clear</Text> */}
          <Image style={{width:22, height:22}}  source={require("./Images/cross.png")}/>
        </TouchableOpacity>
        )}
      </View>
     

      <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={ExStyle.collectionContainer}
        ListFooterComponent={() => (
           !allDataLoaded && <Button title="Load More" onPress={loadMoreItems} />
         
        )}

      />
      </View>
      </ScrollView>
    </View>
  );
};







