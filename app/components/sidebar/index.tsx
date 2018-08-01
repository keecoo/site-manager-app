import * as React from "react";
import Sidebar from "../../screens/sidebar";
import { AsyncStorage } from "react-native";

export interface Props {
	navigation: any;
}
export default class SidebarContainer extends React.Component<Props> {
	logout() {

	}

	routes = [
		{
			route: "Sites",
			caption: "Sites",
			func: () => { }
		},
		// {
		// 	route: "Animals",
		// 	caption: "Animals",
		// 	func: () => { }
		// },
		{
			route: "Profile",
			caption: "Profile",
			func: () => { }
		},
		{
			route: "Login",
			caption: "Logout",
			func: () => {
				AsyncStorage.removeItem("USER_EMAIL");
				AsyncStorage.removeItem("AUTHORIZATION_TOKEN");
			}
		},
	];

	render() {
		return <Sidebar navigation={this.props.navigation} routes={this.routes} />;
	}
}
