import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

//Import store and Provider from redux
import store from "./redux/store";
import { Provider } from "react-redux";

//Importing Screens
import Tutorial from "./screens/Tutorial";
import Uploader_Screen from "./screens/Uploader_Screen";
import Template_Result from "./screens/Template_Result";
import Result from "./screens/Result";

//Importing Style Color
import { GlobalColor } from "./style/Color";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalColor.colors.accent100 },
            tabBarStyle: { backgroundColor: GlobalColor.colors.primary100 },
            tabBarActiveTintColor: GlobalColor.colors.accent10,
          }}
        >
          <Tab.Screen
            name="Tutorial"
            component={Tutorial}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Entypo name="info-with-circle" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Upload"
            component={Uploader_Screen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Entypo name="upload" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Result"
            component={Result}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Entypo name="layers" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
    alignItems: "center",
    justifyContent: "center",
  },
});
