import {gql} from '@apollo/client'
export const GET_COUNTRIES = gql`
query{ 
  countries {
    name
    capital
    emoji
    languages {
        name
    }
    currency
  }
}

`