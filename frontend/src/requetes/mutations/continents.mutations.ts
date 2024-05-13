import { gql } from "@apollo/client";

export const ADDCONTINENT = gql`
  mutation addContinent ($data: NewContinentInput!) {
    addContinent(data: $data) {
      name
      id
    }
  }
`;