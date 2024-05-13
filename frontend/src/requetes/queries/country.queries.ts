import { gql } from "@apollo/client";

// export const COUNTRY = gql`
//   query Country(code: $code) {
//     country(code: $code) {
//       name
//       id
//       emoji
//       continent {
//         id
//         name
//       }
//       code
//     }
//   }
// `;


export const COUNTRIES = gql`
  query countries {
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
  }
`;