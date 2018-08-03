import * as React from "react";
import AnimalScreen from "../../screens/animal";
export interface Props {
    navigation: any;
}
export default class Animal extends React.Component<Props> {
    render() {
        return (<AnimalScreen navigation={this.props.navigation} />);
    }
}
