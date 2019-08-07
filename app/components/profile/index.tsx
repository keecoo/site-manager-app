import * as React from "react";
import { Query, Mutation } from "react-apollo";
import { Text } from "native-base";
import { DrawerActions, NavigationActions } from 'react-navigation';
import ProfileScreen from "../../screens/profile";
import GET_CURRENT_USER_ID from "../../queries/get-current-user-id";
import GET_USER_INFO from "../../queries/user-info-query";

export interface Props {
	navigation: any;
}
export default class Profile extends React.Component<Props> {
	toggleDrawer() {
		this.props.navigation.dispatch(DrawerActions.toggleDrawer());
	}
	submit() {

	}
	render() {
		return (
			<Query
                query={GET_CURRENT_USER_ID} >
                {({ loading, error, data }) => {
                    return <Query
						query={GET_USER_INFO}
						variables={{ user_id: data.user_id }} >
						{({ loading, error, data }) => {
							if (loading) return <Text>Loading...Home</Text>;
							if (error) return <Text>Error</Text>;
							return (<ProfileScreen navigation={this.props.navigation} data={data} toggleDrawer={() => this.toggleDrawer()} />)
						}}
					</Query>
                }}
            </Query>);
	}
}
