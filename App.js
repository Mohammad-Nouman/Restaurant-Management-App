import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/Screens/HomeScreen";
import TextScreen from "./src/Screens/TextScreen";
import CounterScreen from "./src/Screens/Counterscreen";
import FlatScreen from "./src/Screens/FlatScreen";
import ColorScreen from "./src/Screens/ColorScreen";
import ImageScreen from "./src/Screens/ImageScreen";
import SquareScreen from "./src/Screens/SquareScreen";
import InputScreen from "./src/Screens/InputScreen";
import SearchScreen from "./src/Screens/SerachScreen";
import WeatherScreen from "./src/Screens/WeatherScreeen";
import LoginScreen from "./src/Screens/LoginScreen";
// import Profile from "./src/Compoenents/Profile";
import Dashboard from "./src/Compoenents/DashBoard";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Flat" component={FlatScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="INPUT" component={InputScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
