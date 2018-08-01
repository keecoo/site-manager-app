import { createStackNavigator } from "react-navigation";
import Home from "../../components/home";
import Site from "../../components/site";
import SiteEdit from "../../components/site-edit";

const SiteStack = createStackNavigator(
    {
        Home: { screen: Home },
        Site: { screen: Site },
        SiteEdit: { screen: SiteEdit },
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    }
);

export default SiteStack;