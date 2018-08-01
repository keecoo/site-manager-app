import { createStackNavigator } from "react-navigation";
import ProfileComponent from "../../components/profile";

const ProfileStack = createStackNavigator(
    {
        Profile: { screen: ProfileComponent },
    },
    {
        initialRouteName: "Profile",
        headerMode: "none",
    }
);

export default ProfileStack