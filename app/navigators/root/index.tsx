import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import AuthLoading from "../../components/auth-loading";
import LoginStack from "../login";
import AppStack from "../app";

const RootStack = createSwitchNavigator(
    {
        App: {
            screen: AppStack
        },
        Login: {
            screen: LoginStack
        },
        AuthLoading: {
            screen: AuthLoading
        }
    },
    {
        initialRouteName: "AuthLoading"
    }
);

export default RootStack;