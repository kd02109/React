import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Two")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};
const ScreenTwo = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Two</Text>
    </TouchableOpacity>
  );
};
const ScreenThree = ({ navigation: { setOptions, navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text>Three</Text>
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="One" component={ScreenOne} />
      <Stack.Screen name="Two" component={ScreenTwo} />
      <Stack.Screen name="Three" component={ScreenThree} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MyStack;
