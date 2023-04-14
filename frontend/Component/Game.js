import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { TextField, Button } from "@mui/material";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function Game() {
    const route = useRoute();
    const [username, setUsername] = useState();
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [ans, setAns] = useState();
    const [userAns, setUserAns] = useState();
    const navigation = useNavigation();
    const dataPlay = ()=>{
        setUsername(route.params.username);
        var n1 = Math.round(Math.random()*99) +1;
        var n2 = Math.round(Math.random()*99) +1
        setNum1(n1);
        setNum2(n2);
        setAns(parseInt(n1)+parseInt(n2));
    };
    
    useEffect(()=>{
        dataPlay();
    },[route]);

    const submitAns = ()=>{
        if(userAns == ans){
            navigation.navigate("/result", {"username": username, "result": "correct"});
        }else{
            navigation.navigate("/result", {"username": username, "result": "incorrect"});
        }
        setUserAns("");
    };
    
    return (<View style={styles.container}>
        <View style={styles.sum}>
            <Text style={[styles.numb]}>{num1}</Text>
            <Text style={[styles.numb]}> + </Text>
            <Text style={[styles.numb]}>{num2}</Text>
        </View>
        <TextField
            variant="outlined" 
            label='Answer'
            value={userAns}
            onChange={text => setUserAns(text.target.value)}
            style={styles.userAns}
        />
        <Button variant="contained" onClick={submitAns}>Answer</Button>
    </View>);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: "80%",
      marginHorizontal: "10%",
    },
    sum:{
        flexDirection: 'row',
    },
    numb:{
        fontSize: 50,
    },
    userAns:{
        marginBottom: 10,
        marginTop: 10,
    },
});