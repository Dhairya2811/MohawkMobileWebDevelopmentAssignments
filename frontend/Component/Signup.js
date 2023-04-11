import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function Signup() {
    const [res, setRes] = useState();

    fetch("http://localhost:3000/signup")
    .then(res => res.text())
    .then(res => setRes(res));

    return (
        <View style={styles.container}>
            <Text>{ res }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
