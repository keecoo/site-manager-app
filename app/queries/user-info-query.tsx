import gql from "graphql-tag";

export default gql`
query($handle: String!) {
    getUserInfo(handle:$handle) {
        name,
        first_name,
        last_name,
        phone,
        siteInfo {
            items {
                site_name,
                image_url,
                site_id
            }
        }
    }
}
`;