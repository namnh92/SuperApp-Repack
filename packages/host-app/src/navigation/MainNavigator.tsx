import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingAppScreen from "../screens/ShoppingAppScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import { StyleSheet } from "react-native";
import TravelAppScreen from "../screens/TravelAppScreen";

export type MainStackParamList = {
  Home: undefined;
  Detail: undefined;
  ShoppingApp: undefined;
  TravelApp: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitle: "HostApp",
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: "rgba(255,255,255,1)",
      }}
    >
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Detail" component={DetailScreen} />
      <Main.Screen name="ShoppingApp" component={ShoppingAppScreen} />
      <Main.Screen name="TravelApp" component={TravelAppScreen} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(56, 30, 114, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
