import * as React from "react";
import { AsyncStorage, ActivityIndicator, View } from "react-native";
import { Container } from "native-base";
import { withApollo } from 'react-apollo';
import LoginScreen from "../../screens/login";
import LoadingScreen from "../../screens/loading";
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'feralfinder.auth0.com', clientId: 'TtHisKYGdhMehrAuHhCcNOJ4gpE9xGjL' });

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
		this.setState({ isLoading: true });
		auth0
			.webAuth
			.authorize({ scope: 'openid email', audience: 'https://feralfinder.auth0.com/userinfo' })
			.then(credentials => {
				this.setItem("AUTHORIZATION_TOKEN", credentials.accessToken);
				auth0
					.auth
					.userInfo({ token: credentials.accessToken })
					.then(data => {
						this.props.client.writeData({ data: { email: data.email } });
						this.setItem("USER_EMAIL", data.email);
						this.props.navigation.navigate("App");
						this.setState({ isLoading: false });
					})
					.catch(console.error);
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