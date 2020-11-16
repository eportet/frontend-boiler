import { gql } from "@apollo/client";

export const CHARACTER_QUERY = gql`
    query Character($id: ID!) {
        character(id: $id) {
            id
            name
            image
            species
            gender
        }
    }
`