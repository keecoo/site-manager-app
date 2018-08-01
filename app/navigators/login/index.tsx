import { createStackNavigator } from "react-navigation";
import Login from "../../components/login";

const LoginStack = createStackNavigator(
    {
        Login: { screen: Login },
    },
    {
        initialRouteName: "Login",
        headerMode: "none",
    }
);

export default LoginStack;