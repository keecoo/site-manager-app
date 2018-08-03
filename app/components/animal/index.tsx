import * as React from "react";
import { Query } from "react-apollo";
import AnimalScreen from "../../screens/animal";
import LoadingScreen from "../../screens/loading";
import { NavigationActions } from 'react-navigation';
import GET_ANIMAL_INFO from "../../queries/animal-info-query";
export interface Props {
    navigation: any;
}
export default class Animal extends React.Component<Props> {
    goBack() {
        this.props.navigation.dispatch(NavigationActions.back());
    }
    render() {
        let animalId = this.props.navigation.state.params.animalId;
        return (
            <Query
                query={GET_ANIMAL_INFO}
                variables={{ animal_id: animalId }} >
                {({ loading, error, data }) => {
                    if (loading) return <LoadingScreen />;
                    if (error) return <Text>Error</Text>;

                    return (
                        <AnimalScreen data={data} navigation={this.props.navigation} goBack={() => this.goBack()} />
                    );
                }}
            </Query>
        );
    }
}
