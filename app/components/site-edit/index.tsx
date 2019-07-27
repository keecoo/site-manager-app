import * as React from "react";
import SiteEditScreen from "../../screens/site-edit";
import { NavigationActions } from 'react-navigation';

export interface Props {
    navigation: any;
}

export default class SiteEdit extends React.Component<Props>
{
    goBack() {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {
        let data = {};
        return (
            <SiteEditScreen data={data} goBack={() => this.goBack()} />
        );
    }
}
