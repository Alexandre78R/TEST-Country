import { gql } from "@apollo/client";

export const COUNTRY = gql`
  country(code: $code) {
    name
    id
    emoji
    continent {
      id
      name
    }
    code
  }
`;


export const COUNTRIES = gql`
  countries {
    name
    id
    emoji
    continent {
      name
      id
    }
    code
  }
`;