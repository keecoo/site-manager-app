import gql from "graphql-tag";

export default gql`
mutation updateUser($first_name: String!, $last_name: String!, $user_id: String!, $phone: String){
    updateUser(user_id: $user_id, first_name: $first_name, last_name: $last_name, phone: $phone) {
        user_id
    }
}
`;