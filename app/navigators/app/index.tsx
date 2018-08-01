import { createStackNavigator } from "react-navigation";
import Drawer from "../drawer";

const AppStack = createStackNavigator(
    {
        Drawer: { screen: Drawer },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default AppStack;