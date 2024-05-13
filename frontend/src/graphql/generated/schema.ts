import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String'];
};

export type NewCountryInput = {
  code: Scalars['String'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String'];
  name: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String'];
};

export type ContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, id: number }> };


export const ContinentsDocument = gql`
    query continents {
  continents {
    name
    id
  }
}
    `;

/**
 * __useContinentsQuery__
 *
 * To run a query within a React component, call `useContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentsQuery(baseOptions?: Apollo.QueryHookOptions<ContinentsQuery, ContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentsQuery, ContinentsQueryVariables>(ContinentsDocument, options);
      }
export function useContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentsQuery, ContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentsQuery, ContinentsQueryVariables>(ContinentsDocument, options);
        }
export type ContinentsQueryHookResult = ReturnType<typeof useContinentsQuery>;
export type ContinentsLazyQueryHookResult = ReturnType<typeof useContinentsLazyQuery>;
export type ContinentsQueryResult = Apollo.QueryResult<ContinentsQuery, ContinentsQueryVariables>;