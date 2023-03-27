import {ImageBackground, StyleSheet, View,TextInput, TouchableOpacity, Text, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import background from "./imgs/background.jpg"
import Header from "./component/header"
import { useState } from 'react';
import MovieDisplay from './component/movieDisplay';

export default function App() {
  const [data, setData] = useState();
  const [movie, setMovie] = useState("");

  const searchBtnClick = ()=>{
    Keyboard.dismiss();
    const name = movie;
    if(name.toString().length !=0 || name.toString() != ""){
      const url = `https://movie-database-alternative.p.rapidapi.com/?s=${name}&r=json&page=1`;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f083fdb5c5mshafc8611523790adp11dc8cjsnd73c9d74f1ef',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };

      fetch(url, options)
      .then(res => res.json())
      .then(json => {
        if(json.Response == "True"){
          setData(json.Search);
        }
      })
    }else{console.log("No input")}
  };
  const clearBtnClick = ()=>{
    setData();
    setMovie("");
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss}} style={styles.container}>
      <ImageBackground source={background} style={styles.backgroundImg} blurRadius={1.5}>
        {/* header */}
        <Header />
        <View style={styles.mainContainer}>
          <TextInput 
            style={styles.textInput}
            placeholder="Enter the movie name ..."
            placeholderTextColor="#d9d9d9"
            onChangeText={(val)=>setMovie(val)}
            value={movie}
          />
          <View style={styles.buttons}>
              <TouchableOpacity onPress={searchBtnClick} style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={clearBtnClick} style={styles.button}>
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.movieList}>
            <FlatList 
              data={data}
              renderItem={({ item })=><MovieDisplay movie={item}/>}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg:{
    flex: 1,
    width: "100%",
  },
  mainContainer:{
    flex:1,
    padding:20,
  },
  textInput:{
    backgroundColor: "#262626",
    borderRadius: 10,
    height: 60,
    padding:10,
    paddingTop: 20,
    fontSize: 30,
    color: "#d9d9d9"
  },
  buttons:{
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 5,
    width:'95%',
  },
  button:{
    backgroundColor: "#808080",
    flex: 1,
    marginLeft: 10,
    height: 50,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 30,
    paddingVertical: 5,
  },
  movieList:{
    flex: 1,
    marginTop: 20,
  },
});
