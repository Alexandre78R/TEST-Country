import { gql } from "@apollo/client";

export const ADDCOUNTRY = gql`
  mutation addCountry ($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      id
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;