import * as React from "react";
import { Query } from "react-apollo";
import { Text } from "native-base";
import { DrawerActions, NavigationActions } from 'react-navigation';
import HomeScreen from "../../screens/home";
import LoadingScreen from "../../screens/loading";
import GET_USER_INFO from "../../queries/user-info-query";
import GET_CURRENT_USER_EMAIL from "../../queries/get-current-user-email";

export interface Props {
    navigation: any;
    fetchList: Function;
    data: Object;
    rootNavigation: any;
}

export interface State { }
export default class Home extends React.Component<Props> {
    goToSite(item: any) {
        let navigateAction = NavigationActions.navigate({
            routeName: 'Site',
            params: { siteId: item.site_id },
        });
        this.props.navigation.dispatch(navigateAction);
    }

    editSite() {
        let navigateAction = NavigationActions.navigate({
            routeName: 'SiteEdit',
            params: {},
        });
        this.props.navigation.dispatch(navigateAction);
    }

    toggleDrawer() {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    render() {
        return (
            <Query
                query={GET_CURRENT_USER_EMAIL} >
                {({ loading, error, data }) => {
                    return <Query
                        query={GET_USER_INFO}
                        variables={{ handle: data.email }} >
                        {({ loading, error, data }) => {
                            if (loading) return <LoadingScreen />;
                            if (error) return <Text>Error</Text>;

                            return <HomeScreen
                                toggleDrawer={() => this.toggleDrawer()}
                                editSite={() => this.editSite()}
                                navigation={this.props.navigation}
                                data={data}
                                goToSite={(item: any) => this.goToSite(item)} />;
                        }}
                    </Query>
                }}
            </Query>
        );
    }
}
