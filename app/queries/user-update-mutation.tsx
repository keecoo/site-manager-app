import gql from "graphql-tag";

export default gql`
mutation updateUser($first_name: String!, $last_name: String!, $handle: String!, $phone: String){
    updateUser(handle: $handle, first_name: $first_name, last_name: $last_name, phone: $phone) {
        handle
    }
}
`;