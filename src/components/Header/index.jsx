import './style.scss'
import { BiSearchAlt } from 'react-icons/bi'

 const Header = () => {
  return (
    <nav>
       <div className='nav__left'>
        <h2>Países</h2>
      </div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' placeholder="Pesquise aqui um país" />
            <BiSearchAlt size={19} />
        </div>
      </div>
    </nav>
  )
}
export default Header