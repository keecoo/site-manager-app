import gql from "graphql-tag";

export default gql`
mutation createSiteAndLink($site_name: String!, $description: String!, $user_id: String!){
    createSiteAndLink(user_id: $user_id, site_name: $site_name, description: $description) {
        site_name
        description
        site_id  
    }
}
`;