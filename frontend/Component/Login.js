import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from '@react-native-material/core';
import { Alert, TextField } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsgView, setErrorMsgVeiw] = useState(false);

    const submitForm = ()=>{
      if(username != "" && password != ""){
        setErrorMsgVeiw(false);
        setErrorMsg("");
        var data = JSON.stringify({"username": username, "password": password});
        fetch("http://localhost:3000/login", {
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
          if(res.status == "failure"){
            setErrorMsgVeiw(true);
            setErrorMsg("Username and/or password incorrect.");
          }else{
            console.log("worked");
          }
        });
      }else{
        setErrorMsg("All fields must be completed");
        setErrorMsgVeiw(true);
      }
    };

    return (
        <View style={styles.container}>
          {errorMsgView ? <Alert style={styles.alert} severity="error">{errorMsg.toString()}</Alert> :<Text></Text> }
            <View style={styles.form}>
                <Text style={styles.title}>
                  Login
                </Text>
                <TextField
                    variant="filled" 
                    label='User Name'
                    onChange={text => setUsername(text.target.value)}
                    style={styles.usernameText}
                />
                <TextField
                    variant="filled" 
                    label='Password'
                    onChange={text => setPassword(text.target.value)}
                    type='password'
                    style={styles.passwordText}
                />
                <View style={styles.buttons}>
                    <Button 
                        variant='text'
                        title="Sign Up" 
                        color="#3377ff"
                        onPress={()=>window.location.href = "/signup"}
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
    maxWidth: 500,
    minWidth: 200,
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
    marginBottom: 10
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
