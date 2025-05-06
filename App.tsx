import { ThemeProvider } from "@rneui/themed";
import GetStart from "./src/Screens/GetStart";
import { StyleThemes } from "./src/Styles/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
import Collector from "./src/Screens/Collector";

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="getStart" screenOptions={{ headerShown: false, statusBarBackgroundColor: "#2960b9" }}>
      <Stack.Screen name="getStart" component={GetStart} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="collector" component={Collector} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={StyleThemes}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}