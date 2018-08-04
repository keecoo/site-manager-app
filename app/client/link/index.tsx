import { AsyncStorage } from "react-native";
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

const httpLink = new HttpLink({
    uri: 'http://10.0.2.2:4001/graphql',
});

let token = "";
const withToken = setContext(() => {
    if (token != "") return { token };

    return AsyncStorage.getItem('AUTHORIZATION_TOKEN')
        .then((userToken) => {
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
    let ctx = operation.getContext();
    operation.setContext({
        headers: {
            authorization: ctx.token
        }
    });
    return forward(operation);
});

const link = withToken
    .concat(resetToken)
    .concat(authLink)
    .concat(httpLink);

export default link;