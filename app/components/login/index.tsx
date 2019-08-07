import * as React from "react";
import { AsyncStorage, ActivityIndicator, View } from "react-native";
import { Container } from "native-base";
import { withApollo } from 'react-apollo';
import LoginScreen from "../../screens/login";
import LoadingScreen from "../../screens/loading";
import Auth0 from 'react-native-auth0';
import Config from 'react-native-config';
import decode from 'jwt-decode';

const auth0Domain = Config.AUTH0_DOMAIN;
const auth0Client = Config.AUTH0_CLIENT;
const auth0Audience = Config.AUTH0_AUDIENCE;
const auth0 = new Auth0({ domain: auth0Domain, clientId: auth0Client });
//const auth0 = new Auth0({ domain: 'feralfinder.auth0.com', clientId: 'TtHisKYGdhMehrAuHhCcNOJ4gpE9xGjL' });

export interface Props {
	navigation: any;
	valid: boolean;
	client: any;
}

export interface State {
	isLoading: boolean;
}
class Login extends React.Component<Props, State>  {
	constructor(props: any) {
		super(props);
		this.state = { isLoading: false };
	}

	setItem(item: string, value: string) {
		AsyncStorage.setItem(item, value)
			.catch(error => console.error(error));
	}

	login() {
		console.log(auth0Domain)
		console.log(auth0Client)
		this.setState({ isLoading: true });

		auth0
			.webAuth
			//.authorize({ scope: 'openid email', audience: `https://${auth0Domain}/userinfo` })
			//.authorize({ scope: 'openid email', audience: 'https://feralfinder.auth0.com/userinfo' })
			.authorize({ scope: 'read:animal read:animalsite read:site read:userinfo', audience: auth0Audience })
			.then(credentials => {
				console.log(credentials);
				//this.setItem("AUTHORIZATION_TOKEN", credentials.idToken);
				this.setItem("ACCESS_TOKEN", credentials.accessToken);
				const decoded = decode(credentials.accessToken);
				console.log(decoded);
				this.setItem("USER_ID", decoded.sub);

				//this.setItem("ID_TOKEN", credentials.idToken);
				// auth0
				// 	.auth
				// 	.userInfo({ token: credentials.accessToken })
				// 	.then(data => {
				// 		//need to validate and parse said token
				// 		//	var decode = jwt.decode(data);	
				// 		const decoded = decode(data);
				// 		console.log(decoded);
				// 		this.setItem("USER_ID", decode.sub);
				// 		console.log(data);
				// 		this.props.client.writeData({ data: { email: data.email } });
				// 		this.setItem("USER_EMAIL", data.email);
				// 		//this.setItem("USER_NAME", data.name);
				// 		this.props.navigation.navigate("App");
				// 		this.setState({ isLoading: false });
				// 	})
				// 	.catch(console.error);
			})
			.catch(error => {
				//TODO: more appropriate error reporting
				console.error('error authenticating', error);
			});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<LoadingScreen />
			)
		}

		return (
			<LoginScreen onLogin={() => this.login()} />
		);
	}
}

export default withApollo(Login);