import gql from "graphql-tag";

export default gql`
mutation createSiteAndLink($site_name: String!, $description: String!, $handle: String!){
    createSiteAndLink(handle: $handle, site_name: $site_name, description: $description) {
        site_name
        description
        site_id  
    }
}
`;