import { StyleSheet, Text, View } from 'react-native';
import Login from "./Component/Login"
import Signup from './Component/Signup';

export default function App() {
  var path = window.location.pathname;
  return (
    <View style={styles.container}>
      {path == "/signup" ? <Signup /> : 
        path == "/" ? <Login /> : <View></View> }
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
