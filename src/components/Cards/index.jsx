import { useCountriesContext } from "../../context/CountriesContext"
import './style.scss'
import Loading from "../Loading"

const Cards = () => {
 const { countries } = useCountriesContext()

 
  if (countries.loading) return <Loading/>


  return (
    <div className='container'>
      {countries.itens.map((item,index)=>(
       <div key={index} className='wrapper-card'>
      <div className='title'>
        <h2>{item.name}</h2>
        <h3><small>Capital:</small> {item.capital}</h3>
      </div>
      <h1>{item.emoji}</h1>
      <div className="footer">
        {item.languages.map((lang,index)=>(
          <span>{lang.name}</span>
        ))}
        <span className='currency'>{item.currency}</span>
      </div>
    </div>
      ))}
    </div>

  )
}

export default Cards
