import React from 'react';
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Sidebar from "../../components/sidebar";
import AnimalComponent from "../../components/animal";
import SiteStack from "../site";
import ProfileStack from "../profile";

const deviceWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator(
    {
        Sites: { screen: SiteStack },
        Animals: { screen: AnimalComponent },
        Profile: { screen: ProfileStack },
    },
    {
        drawerWidth: deviceWidth - 50,
        drawerPosition: "left",
        contentComponent: (props: any) => <Sidebar {...props} />,
    }
);

export default Drawer;