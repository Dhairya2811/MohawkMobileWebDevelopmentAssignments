import Login from "./Component/Login"
import Signup from './Component/Signup';
import Game from './Component/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from "./Component/Result";

export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "/" component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name = "/signup" component={Signup} options={{title: 'Sign Up'}}/>
        <Stack.Screen name = "/game" component={Game} options={{title: 'Game'}}/>
        <Stack.Screen name = "/result" component={Result} options={{title: 'Result'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}