import React from "react";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import Tv from "../screen/Tv";
import Search from "../screen/Search";
import color from "../color";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const isDark = useColorScheme() === "dark";
  console.log(isDark);
  return (
    <Tab.Navigator
      initialRouteName="Tv"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? color.black : color.white,
        },
        headerStyle: { backgroundColor: isDark ? color.black : color.white },
        headerTintColor: isDark ? color.white : color.black,
        tabBarActiveTintColor: isDark ? color.yellow : color.purple,
        tabBarLabelStyle: {
          marginTop: -4,
          fontSize: 12,
          marginBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="movie" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tv"
        tvSe
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="search-sharp" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
