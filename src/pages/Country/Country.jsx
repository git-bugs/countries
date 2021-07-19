
import './country.scss'

export const Country = ({ name, flag, capital, currencies, languages,nativeName,numericCode,subregion,topLevelDomain,callingCodes,population,setCountry }) => {


  return (
    <div
      className="country"
      onClick={() => setCountry('')}
    >
      <div className="container">
        <div
          className="country__inner"
          onClick={e => e.stopPropagation()}
        >
          <div className="country__img">
            <img src={flag} alt="" />
          </div>
          <div className="country__item"><span>Name: </span>{name}</div>
          <div className="country__item"><span>Native Name: </span>{nativeName}</div>
          <div className="country__item"><span>Capital: </span>{capital}</div>
          <div className="country__item"><span>Population: </span>{population}</div>
          <div className="country__item"><span>Currencies: </span>
            {
              currencies.map(item => (item.name)).join(',')
            }
          </div>
          <div className="country__item"><span>Languages: </span>
            {
              languages.map(item => (item.name)).join(',')
            }
          </div>
          <div className="country__item"><span>NumericCode: </span>{numericCode}</div>
          <div className="country__item"><span>Region: </span>{subregion}</div>
          <div className="country__item"><span>CallingCodes: </span>{callingCodes}</div>
          <div className="country__item"><span>Domain: </span>{topLevelDomain}</div>
        </div>
      </div>
    </div>
  )
}
