import gql from "graphql-tag";

export default gql`
query($user_id: String!) {
    getUserInfo(user_id:$user_id) {
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