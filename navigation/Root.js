//Native Stack Navigation
import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyStack from "./Stack";
import MyTabs from "./tab";

const Nav = createNativeStackNavigator();

function RootNav() {
  return (
    <Nav.Navigator
      screenOptions={{ statusBarTranslucent: true, headerShown: false }}
    >
      <Nav.Screen name="Tabs" component={MyTabs} />
      <Nav.Screen name="Stack" component={MyStack} />
    </Nav.Navigator>
  );
}

export default RootNav;
