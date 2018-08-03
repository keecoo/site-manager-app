import gql from "graphql-tag";

export default gql`
query($animal_id: String!) {
    getAnimal(animal_id: $animal_id) {
        animal_id
        animal_name
        image_url
        breed
        vaccinations
        status
        status_date
    }
}
`;