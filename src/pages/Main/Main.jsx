import { Loader } from '../../components/Loader/Loader'
import './main.scss'


export const Main = ({ countries, setCountry, load }) => {
  const items = countries.map(item => (
    <li
      key={item.alpha3Code}
      onClick={() => setCountry(item.name)}
    >
      <span>{item.name}</span>
      <img className="main__list-flag" src={item.flag} alt="" />
    </li>
  ))

  return (
    <div className="container">
      <ul className="main__list">
        {
          load ?
            <Loader />
            :
            items
        }
      </ul>
    </div>
  )
}
