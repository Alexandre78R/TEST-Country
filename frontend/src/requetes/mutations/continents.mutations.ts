import { gql } from "@apollo/client";

export const CONTINENTS = gql`
  query continents {
    continents {
      name
      id
    }
  }
`;