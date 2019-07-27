import { AsyncStorage } from "react-native";
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import Config from 'react-native-config';

const httpLink = new HttpLink({
    uri: `${Config.SERVER_URL}/graphql`
});

let token = "";
const withToken = setContext(() => {
    if (token != "") return { token };

    return AsyncStorage.getItem('AUTHORIZATION_TOKEN')
        .then((userToken) => {
            //console.log(userToken);
            token = userToken;
            return {
                token
            };
        })
});

const resetToken = onError(({ networkError }) => {
    if (networkError && networkError.statusCode === 401) {
        token = "";
    }
});


const authLink = new ApolloLink((operation, forward) => {
    console.log(`${Config.SERVER_URL}/graphql`);
    let ctx = operation.getContext();
    operation.setContext({
        headers: {
            authorization: ctx.token
            //authorization: 'asdfasdfasdfsadf'
        }
    });
    return forward(operation);
});

const link = withToken
    .concat(resetToken)
    .concat(authLink)
    .concat(httpLink);

export default link;