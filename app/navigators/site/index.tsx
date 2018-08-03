import { createStackNavigator } from "react-navigation";
import Animal from "../../components/animal";
import Home from "../../components/home";
import Site from "../../components/site";
import SiteEdit from "../../components/site-edit";

const SiteStack = createStackNavigator(
    {
        Home: { screen: Home },
        Site: { screen: Site },
        SiteEdit: { screen: SiteEdit },
        Animal: { screen: Animal },
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    }
);

export default SiteStack;