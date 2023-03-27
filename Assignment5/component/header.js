import {StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Search</Text>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#0d0d0d",
        paddingTop: 50,
        paddingBottom: 10
    },
    title:{
        fontWeight: "bold",
        fontSize: 30,
        color: "#d9d9d9",
        textAlign: 'center'
    },
});