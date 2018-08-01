import * as React from "react";
import { Query } from "react-apollo";
import { Text } from "native-base";
import SiteEditScreen from "../../screens/site-edit";
import { NavigationActions } from 'react-navigation';

export interface Props {
    navigation: any;
}

export default class SiteEdit extends React.Component<Props>
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
        let data = {};
        let siteId = this.props.navigation.state.params.siteId;
        return (
            <SiteEditScreen data={data} goBack={() => this.goBack()} goToAnimal={(item: any) => this.goToAnimal(item)} />
        );
    }
}
