import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function Result() {
    const route = useRoute();
    const [result, setResult] = useState();
    const [username, setUsername] = useState();
    const navigate = useNavigation();

    useEffect(()=>{
        setResult(route.params.result);
        setUsername(route.params.username);
        var data = JSON.stringify({"username": route.params.username, "result": route.params.result});
        fetch("http://localhost:3000/update", {
          credentials: "same-origin",
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: data,
        })
        .then(res => res.text())
        .then(res => {
          console.log(res);
        });
    }, [route]);

    return(<View style={[styles.container, {backgroundColor: result == "correct" ? "#33cc33" : "red"}]}>
       <View style={styles.resultDiv}>
           <Text style={styles.result}>{result == "incorrect" ? "Incorrect!": "Correct!"}</Text>
           <Button variant="contained" onClick={()=> navigate.navigate("/game", {"username": username})}>Next</Button>
       </View>
       <View style={styles.leaderBoard}>

       </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        marginHorizontal: "10%",
    },
    resultDiv:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    result:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    leaderBoard:{
        flex: 3,
        backgroundColor: "yellow",
    },
});
