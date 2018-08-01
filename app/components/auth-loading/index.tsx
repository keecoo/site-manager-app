import React from 'react';
import { withApollo } from 'react-apollo';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

export interface Props {
    navigation: any;
    client: any;
}
class AuthLoading extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('AUTHORIZATION_TOKEN');
        const email = await AsyncStorage.getItem('USER_EMAIL');
        this.props.client.writeData({ data: { email: email } });
        this.props.navigation.navigate(userToken ? 'App' : 'Login');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default withApollo(AuthLoading);