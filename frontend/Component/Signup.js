import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button } from '@react-native-material/core';
import { TextField, Alert } from '@mui/material';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgView, setErrorMsgVeiw] = useState(false);
    const navigation = useNavigation();

    const submitForm = ()=>{
      if(confirmPassword == password && username != "" && password != "" && confirmPassword != ""){
        setErrorMsgVeiw(false);
        setErrorMsg("");
        var data = JSON.stringify({"username": username, "password": password});
        fetch("http://localhost:3000/signup", {
          credentials: "same-origin",
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: data,
        })
        .then(res => res.json())
        .then(res => {
          if(res.status == "success"){
            navigation.navigate('/game', {"username": username});
          }
        });
      }else if(username == "" || password == "" || confirmPassword == ""){
        setErrorMsg("All fields must be completed");
        setErrorMsgVeiw(true);
      }else if(password != confirmPassword){
        setErrorMsg("Password and Confirm password doesn't match");
        setErrorMsgVeiw(true);
      }
    };

    return (
        <View style={styles.container}>
          {errorMsgView ? <Alert style={styles.alert} severity="error">{errorMsg.toString()}</Alert> :<Text></Text> }
            <View style={styles.form}>
                <Text style={styles.title}>
                  Sign Up
                </Text>
                <TextField 
                  onChange={text=>setUsername(text.target.value)}
                  style={styles.usernameText} 
                  label="User Name" 
                  variant="filled" 
                />
                <TextField 
                    variant="filled"
                    label='Password'
                    onChange={text => setPassword(text.target.value)}
                    type='password'
                    style={styles.passwordText}
                />
                <TextField 
                    variant="filled"
                    label='Confirm Password'
                    onChange={text => setConfirmPassword(text.target.value)}
                    type='password'
                    style={styles.passwordText}
                />
                <View style={styles.buttons}>
                    <Button 
                        variant='text'
                        title="Login" 
                        color="#3377ff"
                        onPress={()=>window.location.href = "/"}
                    />
                    <Button 
                        title="Submit" 
                        color="#3377ff"
                        tintColor='white'
                        titleStyle={styles.submitBtn}
                        onPress={submitForm}
                    />
                </View>
            </View>
        </View>
    );
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
  form: {
    width: "50%",
    minWidth: 200,
    maxWidth: 500,
  }, 
  title: {
    marginBottom: 30,
    fontSize: 35,
    textAlign: 'center'
  },
  usernameText: {
    marginBottom: 10,
  },
  passwordText: {
    marginBottom: 10,
  }, 
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  submitBtn: {
    fontWeight: "bold"
  },
  alert: {
    marginTop: -64,
    marginBottom: 15,
  },
});
