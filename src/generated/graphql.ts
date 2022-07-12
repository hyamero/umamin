import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};

export type MutationCreateUserArgs = {
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  login: Scalars['String'];
  user: User;
};

export type QueryLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type QueryUserArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'User'; username: string; password: string };
};

export type GetUserQueryVariables = Exact<{
  username: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user: { __typename?: 'User'; username: string; password: string };
};

export type LoginUserQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginUserQuery = { __typename?: 'Query'; login: string };

export const CreateUserDocument = gql`
  mutation createUser($username: String!) {
    createUser(username: $username) {
      username
      password
    }
  }
`;
export const GetUserDocument = gql`
  query getUser($username: String!) {
    user(username: $username) {
      username
      password
    }
  }
`;
export const LoginUserDocument = gql`
  query loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    createUser(
      variables: CreateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserMutation>(CreateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createUser',
        'mutation'
      );
    },
    getUser(
      variables: GetUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserQuery>(GetUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getUser',
        'query'
      );
    },
    loginUser(
      variables: LoginUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LoginUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginUserQuery>(LoginUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'loginUser',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
