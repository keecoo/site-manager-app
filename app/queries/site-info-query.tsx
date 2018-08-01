import gql from "graphql-tag";

export default gql`
query($site_id: String!) {
    getSiteInfo(site_id: $site_id) {
        site_name,
        description,
        image_url,
        animals (limit : 10 ) {
            items {
                animal_id,
                animal_name
            }
        }
    }
}
`;