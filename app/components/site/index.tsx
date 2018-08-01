import * as React from "react";
import { Query } from "react-apollo";
import { Text } from "native-base";
import SiteScreen from "../../screens/site";
import { NavigationActions } from 'react-navigation';
import GET_SITE_INFO from "../../queries/site-info-query";

export interface Props {
    navigation: any;
}

export default class Site extends React.Component<Props>
{
    goToAnimal(item: any) {
        let navigateAction = NavigationActions.navigate({
            routeName: 'Animal',
            params: { animalId: item.animal_id },
        });
        this.props.navigation.dispatch(navigateAction);
    }


    goBack() {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {
        let siteId = this.props.navigation.state.params.siteId;
        return (<Query
            query={GET_SITE_INFO}
            variables={{ site_id: siteId }} >
            {({ loading, error, data }) => {
                if (loading) return <Text>Loading...Site</Text>;
                if (error) return <Text>Error</Text>;

                return <SiteScreen data={data} goBack={() => this.goBack()} goToAnimal={(item: any) => this.goToAnimal(item)} />;
            }}
        </Query>
        );
    }
}
