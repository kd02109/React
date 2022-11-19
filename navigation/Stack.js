import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
const ScreenThree = ({ navigation: { goBack, setOptions } }) => {
  return (
    <TouchableOpacity onPress={() => goBack("Three")}>
      <Text>Three</Text>
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="One" component={ScreenOne} />
      <Stack.Screen name="Two" component={ScreenTwo} />
      <Stack.Screen name="Three" component={ScreenThree} />
    </Stack.Navigator>
  );
}

export default MyStack;
