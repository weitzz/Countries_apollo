import {gql,useQuery} from '@apollo/client'

const GET_COUNTRIES = gql`
query{ 
  countries{
    name
     capital
    emoji
    languages{
      name
    }
    currency
  }
  }

`

const Cards = () => {
  const {loading,data} = useQuery(GET_COUNTRIES)

  if(loading) return <div>Carregando...</div>

  return (
    <div>
      {data.countries.map((item, index) => (
        <div key={index}>
          
        </div>
      ))}
    </div>
  )
}

export default Cards
