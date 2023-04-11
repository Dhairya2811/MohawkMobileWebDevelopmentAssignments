import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { TextInput, Button } from '@react-native-material/core';

export default function Login() {
    const [res, setRes] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    fetch("http://localhost:3000/signup")
    .then(res => res.text())
    .then(res => setRes(res));

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    label='User Name'
                    onChange={setUsername}
                    style={styles.usernameText}
                />
                <TextInput
                    label='Password'
                    onChange={setPassword}
                    secureTextEntry={true}
                    style={styles.passwordText}
                />
                <TextInput
                    label='Confirm Password'
                    onChange={setConfirmPassword}
                    secureTextEntry={true}
                    style={styles.passwordText}
                />
                <View style={styles.buttons}>
                    <Button 
                        variant='text'
                        title="Login" 
                        color="#3377ff"
                    />
                    <Button 
                        title="Submit" 
                        color="#3377ff"
                        tintColor='white'
                        titleStyle={styles.submitBtn}
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
  usernameText: {

  },
  passwordText: {
    marginVertical: 10
  }, 
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  submitBtn: {
    fontWeight: "bold"
  } 
});
