// template; update with current schema
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks{ 
        bookId
        authors
        description
        title
        image
        link
      } 
    }
  }
`;

